'use client'

import Link from 'next/link'
import { useMemo, useState, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Sparkles,
} from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { toggleLike } from '@/app/actions/likes'
import { toggleSavePost, checkPostSaved } from '@/app/actions/saved'
import { CommentsModal } from './comments-modal'
import { ReportModal } from './report-modal'
import { AudioPlayer } from './audio-player'
import { BottomSheet } from '@/components/ui/bottom-sheet'
import { useEffect } from 'react'
import { Post } from '@/types/domain'

interface PostCardProps {
  post: Post
  isLiked: boolean
  onLike: () => void
}

const GRADIENTS = [
  'from-pink-500 via-red-400 to-orange-400',
  'from-purple-600 via-indigo-500 to-blue-500',
  'from-emerald-400 via-teal-500 to-cyan-500',
  'from-blue-500 via-indigo-500 to-purple-500',
  'from-rose-500 via-pink-500 to-purple-500',
  'from-amber-400 via-orange-500 to-pink-500',
]

interface PostHeaderProps {
  post: Post
  avatarContent: React.ReactNode
  createdAtLabel: string
  onMoreClick: (event: MouseEvent<HTMLButtonElement>) => void
}

function PostHeader({ post, avatarContent, createdAtLabel, onMoreClick }: PostHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-800 text-2xl">
          {typeof avatarContent === 'string' && avatarContent.startsWith('http') ? (
            <img
              src={avatarContent}
              alt={post.authorUsername || 'Avatar'}
              className="h-full w-full rounded-2xl object-cover"
            />
          ) : (
            avatarContent
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-white/90">{post.authorUsername || 'Anonymous'}</p>
          <p className="text-xs text-white/50">{createdAtLabel}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onMoreClick}
        className="rounded-full bg-white/5 p-2 text-white/70 transition hover:bg-white/10"
      >
        <MoreHorizontal size={18} />
      </button>
    </div>
  )
}

interface PostContentProps {
  post: Post
  gradientClass: string
  postText: string
  isTextPost: boolean
  isLongText: boolean
  displayText: string
}

function PostContent({
  post,
  gradientClass,
  postText,
  isTextPost,
  isLongText,
  displayText,
}: PostContentProps) {
  return (
    <div className={`relative mt-4 overflow-hidden rounded-3xl p-6 ${gradientClass}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="relative z-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
        <Sparkles size={14} />
        <span>{post.genre || 'Thoughts'}</span>
      </div>

      {isTextPost && (
        <p className="relative z-10 mt-4 text-lg font-medium text-white leading-relaxed">
          “{displayText}”
          {isLongText && (
            <span className="ml-2 text-sm font-bold text-white/70 underline">Read more</span>
          )}
        </p>
      )}

      {post.type === 'voice' && post.mediaUrl && (
        <div className="relative z-10 mt-4">
          <p className="mb-4 text-white/90 text-base font-medium">“{postText || 'Voice note'}”</p>
          <AudioPlayer src={post.mediaUrl} duration={post.mediaDuration} />
        </div>
      )}
    </div>
  )
}

interface PostActionsProps {
  post: Post
  user: ReturnType<typeof useAuth>['user']
  liked: boolean
  likeCount: number
  isLiking: boolean
  isSaved: boolean
  isSaving: boolean
  isOwnPost: boolean
  onLikeClick: () => void
  onOpenComments: (event: MouseEvent<HTMLButtonElement>) => void
  onSaveClick: (event: MouseEvent<HTMLButtonElement>) => void
  onReportClick: (event: MouseEvent<HTMLButtonElement>) => void
}

function PostActions({
  post,
  user,
  liked,
  likeCount,
  isLiking,
  isSaved,
  isSaving,
  isOwnPost,
  onLikeClick,
  onOpenComments,
  onSaveClick,
  onReportClick,
}: PostActionsProps) {
  return (
    <div className="mt-5 flex items-center gap-4 text-white/60">
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onLikeClick()
        }}
        disabled={!user || post.id.startsWith('demo-') || isLiking}
        className="flex items-center gap-2 text-sm font-medium transition hover:text-pink-400 disabled:opacity-50"
      >
        <Heart
          size={20}
          className={liked ? 'fill-pink-500 text-pink-500' : 'text-white/50'}
        />
        {likeCount}
      </button>

      <button
        type="button"
        onClick={onOpenComments}
        className="flex items-center gap-2 text-sm font-medium transition hover:text-blue-400"
      >
        <MessageCircle size={20} />
        {post.commentsCount ?? (post as any).commentCount ?? 0}
      </button>

      <div className="ml-auto flex items-center gap-3">
        {user && (
          <button
            type="button"
            onClick={onSaveClick}
            disabled={isSaving || post.id.startsWith('demo-')}
            className="flex items-center gap-2 text-sm font-medium transition disabled:opacity-50"
            title={isSaved ? 'Unsave post' : 'Save post'}
          >
            <Bookmark
              size={20}
              className={isSaved ? 'fill-white text-white' : 'text-white/60 hover:text-white'}
            />
          </button>
        )}

        {!user && (
          <button
            type="button"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
            title="Sign in to save posts"
          >
            <Bookmark size={20} />
          </button>
        )}

        {!isOwnPost && (
          <button
            type="button"
            onClick={onReportClick}
            className="text-sm font-medium text-red-300 transition hover:text-red-200"
          >
            Report
          </button>
        )}
      </div>
    </div>
  )
}

export function PostCard({ post, isLiked, onLike }: PostCardProps) {
  const { user } = useAuth()
  const [showComments, setShowComments] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const [liked, setLiked] = useState(isLiked)
  const [likeCount, setLikeCount] = useState(post.likesCount ?? post.likeCount ?? 0)
  const [isLiking, setIsLiking] = useState(false)
  const [showPostSheet, setShowPostSheet] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const isOwnPost = user?.uid === post.userId

  // Check if post is saved on mount
  useEffect(() => {
    if (user && !post.id.startsWith('demo-')) {
      checkPostSaved(user.uid, post.id).then(setIsSaved).catch(() => setIsSaved(false))
    }
  }, [user, post.id])

  const postText: string = post.content || post.text || ''
  const isTextPost = post.type === 'text' && Boolean(postText)
  const isLongText = isTextPost && postText.length > 150
  const displayText = isLongText ? `${postText.slice(0, 150)}...` : postText

  const gradientClass = useMemo(() => {
    if (post.gradient) return post.gradient
    const seed = (post.id || 'default')
      .split('')
      .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)
    return `bg-gradient-to-br ${GRADIENTS[seed % GRADIENTS.length]}`
  }, [post.gradient, post.id])

  const avatarContent = post.authorAvatarUrl || post.avatar || '👻'
  const createdAtLabel = useMemo(() => {
    try {
      const now = new Date()
      const createdAt = post.createdAt
        ? new Date(post.createdAt?.toDate?.() || post.createdAt)
        : now
      const diff = now.getTime() - createdAt.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      if (hours < 1) return 'Just now'
      if (hours < 24) return `${hours}h ago`
      return `${Math.floor(hours / 24)}d ago`
    } catch {
      return 'Recently'
    }
  }, [post.createdAt])

  const handleLike = async () => {
    if (!user || post.id.startsWith('demo-') || isLiking) return

      const wasLiked = liked

    const revert = () => {
      setLiked(wasLiked)
      setLikeCount((prev) => (wasLiked ? Math.max(prev - 1, 0) : prev + 1))
    }

    try {
      setIsLiking(true)
      const optimisticLike = !wasLiked
      setLiked(optimisticLike)
      setLikeCount((prev) => (optimisticLike ? prev + 1 : Math.max(prev - 1, 0)))

      const result = await toggleLike(post.id)
      if (!result.success) {
        revert()
        return
      }

      onLike?.()
    } catch (error) {
      console.error('[PostCard] Failed to toggle like', error)
      revert()
    } finally {
      setIsLiking(false)
    }
  }

  const handleOpenComments = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setShowComments(true)
  }

  const handleSave = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    if (!user || post.id.startsWith('demo-') || isSaving) return

    try {
      setIsSaving(true)
      const optimisticSaved = !isSaved
      setIsSaved(optimisticSaved)

      const result = await toggleSavePost(user.uid, post.id)
      if (!result.success) {
        setIsSaved(!optimisticSaved)
      }
    } catch (error) {
      console.error('[PostCard] Failed to toggle save', error)
      setIsSaved(!isSaved)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        onClick={() => setShowPostSheet(true)}
        className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#1c1c1f] p-5 text-white shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
      >
        <PostHeader
          post={post}
          avatarContent={avatarContent}
          createdAtLabel={createdAtLabel}
          onMoreClick={(event) => event.stopPropagation()}
        />

        <PostContent
          post={post}
          gradientClass={gradientClass}
          postText={postText}
          isTextPost={isTextPost}
          isLongText={isLongText}
          displayText={displayText}
        />

        <PostActions
          post={post}
          user={user}
          liked={liked}
          likeCount={likeCount}
          isLiking={isLiking}
          isSaved={isSaved}
          isSaving={isSaving}
          isOwnPost={isOwnPost}
          onLikeClick={handleLike}
          onOpenComments={handleOpenComments}
          onSaveClick={handleSave}
          onReportClick={(event) => {
            event.stopPropagation()
            setShowReportModal(true)
          }}
        />
      </motion.article>

      <BottomSheet
        isOpen={showPostSheet}
        onClose={() => setShowPostSheet(false)}
        title="Post Details"
      >
        <div className={`rounded-2xl p-6 text-white shadow-lg ${gradientClass}`}>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">
              {typeof avatarContent === 'string' && avatarContent.startsWith('http') ? (
                <img
                  src={avatarContent}
                  alt={post.authorUsername || 'Avatar'}
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                avatarContent
              )}
            </div>
            <div>
              <p className="font-semibold">{post.authorUsername || 'Anonymous'}</p>
              <p className="text-sm text-white/70">{createdAtLabel}</p>
            </div>
          </div>

          {post.type === 'voice' && post.mediaUrl ? (
            <div className="space-y-4">
              <p className="text-white/90 text-base leading-relaxed">{postText}</p>
              <AudioPlayer src={post.mediaUrl} duration={post.mediaDuration} />
            </div>
          ) : (
            <p className="max-h-[40vh] overflow-y-auto text-base leading-relaxed text-white/90">
              {postText}
            </p>
          )}

          <div className="mt-6 flex items-center gap-3 text-sm">
            <Link
              href={post.userId ? `/profile/${post.userId}` : '#'}
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white transition hover:bg-white/30"
            >
              Visit profile <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </BottomSheet>

      {showComments && (
        <CommentsModal postId={post.id} onClose={() => setShowComments(false)} />
      )}

      {showReportModal && (
        <ReportModal postId={post.id} onClose={() => setShowReportModal(false)} />
      )}
    </>
  )
}

