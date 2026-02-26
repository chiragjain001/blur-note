'use client'

import { useState } from 'react'
import { Mic, Type, X } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { createPostWithAuth } from '@/app/actions/posts'
import { VoiceRecorder } from './voice-recorder'
import { GENRES, type Genre } from '@/lib/genre-styles'
import { toast } from 'sonner'
import { showErrorToast } from '@/lib/client-error'

interface CreatePostModalProps {
  onClose: () => void
  onPostCreated?: () => void
}

export function CreatePostModal({ onClose, onPostCreated }: CreatePostModalProps) {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'voice' | 'text'>('text')
  const [textContent, setTextContent] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<Genre>('Confession')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handlePostText = async () => {
    if (!textContent.trim()) {
      setError('Please enter some text')
      return
    }
    if (!selectedGenre) {
      setError('Please select a genre')
      return
    }
    if (!user) {
      setError('You must be logged in to post')
      return
    }

    try {
      setLoading(true)
      setError('')

      const result = await createPostWithAuth({
        type: 'text',
        content: textContent.trim(),
        genre: selectedGenre,
      })

      if (!result.success) {
        throw new Error('Failed to create post')
      }

      toast.success('Posted!')
      setTextContent('')
      setSelectedGenre('Confession')
      onPostCreated?.()
      onClose()
    } catch (err: any) {
      setError(err?.message || 'Failed to create post')
      showErrorToast(err, 'Failed to create post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#1E1E1E] p-6 text-white shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Create Post</h2>
            <p className="text-xs uppercase tracking-widest text-white/40">Share your truth</p>
          </div>
          <button onClick={onClose} className="text-white/60 transition hover:text-white">
            <X size={24} />
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-2xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <div className="mb-6 flex rounded-2xl bg-black/30 p-1">
          <button
            onClick={() => setActiveTab('voice')}
            className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition ${activeTab === 'voice'
                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                : 'text-white/60'
              } flex items-center justify-center gap-2`}
          >
            <Mic size={16} />
            Voice
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition ${activeTab === 'text'
                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                : 'text-white/60'
              } flex items-center justify-center gap-2`}
          >
            <Type size={16} />
            Text
          </button>
        </div>

        {activeTab === 'voice' ? (
          <VoiceRecorder onClose={onClose} onPostCreated={onPostCreated} />
        ) : (
          <div className="space-y-4">
            <div>
              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-white/50">
                Genre (Required)
              </label>
              <div className="flex flex-wrap gap-2">
                {GENRES.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    disabled={loading}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${selectedGenre === genre
                        ? 'border-pink-500 bg-pink-500/20 text-pink-200'
                        : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30'
                      } disabled:opacity-50`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
              <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="Share your thoughts, feelings, or story..."
                maxLength={500}
                className="h-48 w-full resize-none bg-transparent text-base text-white placeholder-white/40 outline-none"
              />
              <div className="text-right text-xs text-white/40">{textContent.length}/500</div>
            </div>

            <button
              onClick={handlePostText}
              disabled={!textContent.trim() || !selectedGenre || loading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 py-4 text-base font-bold text-white shadow-lg transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? 'Posting...' : 'Post Text'}
              <Type size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

