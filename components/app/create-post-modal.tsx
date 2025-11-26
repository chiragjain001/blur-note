'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { createPostWithAuth } from '@/app/actions/posts'
import { VoiceRecorder } from './voice-recorder'
import { GENRES, type Genre } from '@/lib/genre-styles'
import { toast } from 'sonner'

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

      const result = await createPostWithAuth(user.uid, {
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
      setError(err.message || 'Failed to create post')
      toast.error(err.message || 'Failed to create post')
      console.error('[Server] Post creation error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card border border-dark-border rounded-2xl w-full max-w-2xl max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border sticky top-0 bg-dark-card">
          <h2 className="text-2xl font-bold">Create Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {/* Error message */}
          {error && (
            <div className="p-3 bg-error/20 border border-error text-error rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setActiveTab('voice')}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                activeTab === 'voice'
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-dark-secondary text-gray-400 hover:text-white'
              }`}
            >
              🎤 Voice
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                activeTab === 'text'
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-dark-secondary text-gray-400 hover:text-white'
              }`}
            >
              ✍️ Text
            </button>
          </div>

          {/* Voice Tab */}
          {activeTab === 'voice' && (
            <VoiceRecorder onClose={onClose} onPostCreated={onPostCreated} />
          )}

          {/* Text Tab */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              {/* Genre Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Genre (Required)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {GENRES.map((genre) => (
                    <button
                      key={genre}
                      type="button"
                      onClick={() => setSelectedGenre(genre)}
                      disabled={loading}
                      className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
                        selectedGenre === genre
                          ? 'bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-dark-card'
                          : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'
                      } disabled:opacity-50`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="Share your thoughts, feelings, or story..."
                maxLength={500}
                className="w-full h-48 bg-dark-secondary border border-dark-border rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{textContent.length}/500</span>
              </div>
              <button
                onClick={handlePostText}
                disabled={!textContent.trim() || !selectedGenre || loading}
                className="w-full btn-primary py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Posting...' : 'Post Text ✍️'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
