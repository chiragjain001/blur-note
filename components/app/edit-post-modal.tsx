'use client'

import { useState } from 'react'
import { editPost } from '@/app/actions/posts'
import { toast } from 'sonner'
import { GENRES } from '@/lib/genre-styles'
import { X } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { showErrorToast } from '@/lib/client-error'

interface EditPostModalProps {
  post: {
    id: string
    type: 'text' | 'voice'
    text?: string
    content?: string
    genre?: string
  }
  onClose: () => void
  onUpdated: () => void
}

export function EditPostModal({ post, onClose, onUpdated }: EditPostModalProps) {
  const { user } = useAuth()
  const [text, setText] = useState(post.text || post.content || '')
  const [genre, setGenre] = useState(post.genre || 'Thoughts')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Only allow editing text posts
  if (post.type === 'voice') {
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!text.trim()) {
      setError('Content cannot be empty')
      return
    }

    try {
      setLoading(true)
      setError('')

      if (!user) {
        throw new Error('User not authenticated')
      }

      await editPost({
        postId: post.id,
        text: text.trim(),
        genre: genre,
      })

      toast.success('Post updated')
      onUpdated()
      onClose()
    } catch (err: any) {
      setError(err?.message || 'Failed to update post')
      showErrorToast(err, 'Failed to update post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1E1E1E] border border-gray-800 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Edit Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-3">
                Genre
              </label>
              <div className="flex flex-wrap gap-2">
                {GENRES.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGenre(g)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                      genre === g
                        ? 'bg-purple-500/20 border-purple-500 text-purple-400'
                        : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Content
              </label>
              <textarea
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                  setError('')
                }}
                placeholder="Share your thoughts..."
                maxLength={500}
                rows={6}
                className="w-full bg-black/20 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
              />
              <p className="text-xs text-gray-400 mt-1">{text.length}/500 characters</p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || !text.trim()}
                className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

