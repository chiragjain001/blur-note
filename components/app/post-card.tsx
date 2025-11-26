'use client'

import Link from 'next/link'
import { useState, useRef, useEffect, useCallback } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { motion } from 'framer-motion'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useAuth } from '@/lib/auth-context'
import { toggleLike } from '@/app/actions/likes'
import { CommentsModal } from './comments-modal'
import { getGenreStyles } from '@/lib/genre-styles'
import { ReportModal } from './report-modal'

interface PostCardProps {
  post: any
  isLiked: boolean
  onLike: () => void
}

interface VoicePlayerProps {
  src: string
  waveform?: number[] | null
  duration?: number | null
  initialSpeed?: number
}

interface TextModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  text: string
}

// Global audio player state to ensure only one plays at a time
let currentPlayer: WaveSurfer | null = null

function VoicePlayer({ src, waveform, duration, initialSpeed = 1 }: VoicePlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const wavesurferRef = useRef<WaveSurfer | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(initialSpeed || 1)
  const [initError, setInitError] = useState<string | null>(null)

  const createWaveSurfer = useCallback(async () => {
    if (wavesurferRef.current || !containerRef.current || !src) return

    try {
      const ws = WaveSurfer.create({
        container: containerRef.current,
        waveColor: '#4b5563',
        progressColor: '#a855f7',
        cursorColor: 'transparent',
        barWidth: 2,
        barRadius: 2,
        responsive: true,
        height: 56,
        // Use precomputed waveform if available
        ...(waveform && { peaks: waveform }),
      })

      wavesurferRef.current = ws
      
      // If waveform is provided, use it directly (instant render)
      // Otherwise, load from audio file
      if (waveform && waveform.length > 0) {
        // Create a dummy audio buffer for waveform display
        // WaveSurfer will use the peaks we provided
        ws.load(src)
      } else {
        ws.load(src)
      }
      
      ws.setPlaybackRate(speed)

      const handleFinish = () => {
        setIsPlaying(false)
        if (currentPlayer === ws) {
          currentPlayer = null
        }
      }
      ws.on('finish', handleFinish)
      
      const handlePause = () => {
        setIsPlaying(false)
        if (currentPlayer === ws) {
          currentPlayer = null
        }
      }
      ws.on('pause', handlePause)

      return () => {
        ws.un('finish', handleFinish)
      }
    } catch (e) {
      console.error('Error initializing WaveSurfer', e)
      setInitError('Could not initialize audio player')
    }
  }, [src, speed, waveform])

  useEffect(() => {
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy()
        wavesurferRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.setPlaybackRate(speed)
    }
  }, [speed])

  const togglePlay = async () => {
    if (!wavesurferRef.current) {
      await createWaveSurfer()
    }
    if (!wavesurferRef.current) return

    // Pause any currently playing audio
    if (currentPlayer && currentPlayer !== wavesurferRef.current) {
      currentPlayer.pause()
    }

    wavesurferRef.current.playPause()
    setIsPlaying((prev) => {
      const newState = !prev
      if (newState) {
        currentPlayer = wavesurferRef.current
      } else {
        currentPlayer = null
      }
      return newState
    })
  }

  const handleSpeedChange = (value: number) => {
    setSpeed(value)
  }

  const speeds = [1, 1.25, 1.5]

  const formatDuration = (seconds: number | null | undefined) => {
    if (!seconds) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 rounded-xl p-4">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl shadow-lg hover:shadow-primary/50 transition"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </motion.button>
        <div className="flex-1 w-full">
          <div ref={containerRef} className="w-full h-12 sm:h-14" />
        </div>
        {duration && (
          <span className="text-xs text-gray-300 font-mono">
            {formatDuration(duration)}
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-200">
        <span className="opacity-80">Playback speed</span>
        <div className="flex gap-2">
          {speeds.map((s) => (
            <button
              key={s}
              onClick={() => handleSpeedChange(s)}
              className={`px-2 py-1 rounded-full border text-xs sm:text-sm transition ${
                speed === s
                  ? 'bg-primary text-white border-primary'
                  : 'border-dark-border text-gray-300 hover:border-primary'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function TextModal({ open, onOpenChange, text }: TextModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-dark-border w-[90%] sm:w-[70%] lg:w-1/2 max-h-[90vh] overflow-y-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-100">{text}</p>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

export function PostCard({ post, isLiked, onLike }: PostCardProps) {
  const { user } = useAuth()
  const [showComments, setShowComments] = useState(false)
  const [showTextModal, setShowTextModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [liked, setLiked] = useState(isLiked)
  const [likeCount, setLikeCount] = useState(post.likesCount || 0)
  const [isLiking, setIsLiking] = useState(false)
  const isOwnPost = user?.uid === post.userId

  const isTextPost = post.type === 'text' && typeof post.content === 'string'
  const isLongText = isTextPost && post.content.length > 150
  const truncatedText = isLongText ? `${post.content.slice(0, 150)}...` : post.content

  const timeAgo = (date: Date | any) => {
    try {
      const now = new Date()
      const postDate = date?.toDate?.() || new Date(date)
      const diff = now.getTime() - postDate.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      if (hours < 1) return 'just now'
      if (hours < 24) return `${hours}h ago`
      return `${Math.floor(hours / 24)}d ago`
    } catch {
      return 'recently'
    }
  }

  const handleLike = async () => {
    if (!user || post.id.startsWith('demo-') || isLiking) return

    try {
      setIsLiking(true)
      // Optimistic update
      const newLiked = !liked
      setLiked(newLiked)
      setLikeCount(prev => newLiked ? prev + 1 : prev - 1)

      // Call server action
      const result = await toggleLike(user.uid, post.id)
      
      // Update state based on result
      if (result.success) {
        setLiked(result.liked)
        // Update count from server response if needed
      } else {
        // Revert on error
        setLiked(!newLiked)
        setLikeCount(prev => newLiked ? prev - 1 : prev + 1)
      }
    } catch (error: any) {
      console.error('[Server] Error toggling like:', error)
      // Revert on error
      setLiked(!liked)
      setLikeCount(prev => liked ? prev - 1 : prev + 1)
    } finally {
      setIsLiking(false)
    }
  }

  const profileLink = post.userId ? `/profile/${post.userId}` : '#'

  // Get genre styles for dynamic styling
  const genreStyles = post.genre ? getGenreStyles(post.genre) : 'bg-dark-card border border-dark-border'
  const isDarkThoughts = post.genre === 'Dark Thoughts'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-full ${genreStyles} ${!isDarkThoughts ? 'border border-dark-border' : ''} rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b border-dark-border/60">
        <Link
          href={profileLink}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl hover:scale-110 transition"
        >
          👻
        </Link>
        <div>
          <Link
            href={profileLink}
            className="font-semibold sm:font-bold hover:text-primary transition"
          >
            {post.authorUsername || 'Anonymous'}
          </Link>
          <div className="flex items-center gap-2">
            <p className="text-xs sm:text-sm text-gray-400">{timeAgo(post.createdAt)}</p>
            {post.isEdited && (
              <span className="text-xs text-gray-500 bg-dark-secondary px-2 py-0.5 rounded">Edited</span>
            )}
          </div>
        </div>
      </div>

      {/* Content + Audio + Actions */}
      <div className="px-4 sm:px-6 py-4 sm:py-5">
        {/* Text content */}
        {post.content && (
          <div className="mb-3 sm:mb-4">
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              {isLongText ? truncatedText : post.content}
            </p>
            {isLongText && (
              <button
                onClick={() => setShowTextModal(true)}
                className="mt-1 text-xs sm:text-sm text-primary hover:text-accent transition"
              >
                ...read
              </button>
            )}
          </div>
        )}

        {/* Audio Player for voice posts */}
        {post.type === 'voice' && post.mediaUrl && (
          <div className="mt-3 sm:mt-4">
            <VoicePlayer 
              src={post.mediaUrl} 
              waveform={post.waveform}
              duration={post.mediaDuration}
              initialSpeed={1} 
            />
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 pt-4 border-t border-dark-border flex items-center gap-6 text-gray-400 text-xs sm:text-sm">
          <button
            onClick={handleLike}
            disabled={!user || post.id.startsWith('demo-') || isLiking}
            className="flex items-center gap-2 hover:text-primary transition group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg sm:text-xl group-hover:scale-125 transition">{liked ? '❤️' : '🤍'}</span>
            <span>{likeCount}</span>
          </button>
          <button
            onClick={() => setShowComments(true)}
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <span>💬</span>
            <span>{post.commentCount || 0}</span>
          </button>
          {!isOwnPost && (
            <button
              onClick={() => setShowReportModal(true)}
              className="flex items-center gap-2 hover:text-error transition"
              title="Report post"
            >
              <span>🚩</span>
            </button>
          )}
          {isOwnPost && (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 hover:text-primary transition"
                title="More options"
              >
                <span>•••</span>
              </button>
              {showMenu && (
                <div className="absolute right-0 top-full mt-2 bg-dark-card border border-dark-border rounded-lg shadow-lg z-10 min-w-[120px]">
                  <button
                    onClick={() => {
                      setShowMenu(false)
                      // TODO: Open edit modal
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-dark-secondary transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      setShowMenu(false)
                      // TODO: Delete post
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-dark-secondary text-error transition"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showComments && (
        <CommentsModal postId={post.id} onClose={() => setShowComments(false)} />
      )}

      {isLongText && (
        <TextModal
          open={showTextModal}
          onOpenChange={setShowTextModal}
          text={post.content}
        />
      )}

      {showReportModal && (
        <ReportModal
          postId={post.id}
          onClose={() => setShowReportModal(false)}
        />
      )}
    </motion.div>
  )
}
