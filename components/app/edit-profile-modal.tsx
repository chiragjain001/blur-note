'use client'

import { useState } from 'react'
import { createUsername, updateUserProfile } from '@/app/actions/auth'
import { generateUsername } from '@/lib/username-generator'
import { toast } from 'sonner'

interface EditProfileModalProps {
  userId: string
  initialProfile: {
    username?: string
    bio?: string
    avatar?: string
  }
  onClose: () => void
  onUpdated: (user: any) => void
}

export function EditProfileModal({ userId, initialProfile, onClose, onUpdated }: EditProfileModalProps) {
  const [username, setUsername] = useState(initialProfile.username || '')
  const [avatar, setAvatar] = useState(initialProfile.avatar || '👻')
  const [bio, setBio] = useState(initialProfile.bio || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const avatarOptions = ['👻', '🌙', '⭐', '🦊', '🐱', '🐺', '💫', '🖤']

  const handleRandomUsername = () => {
    const generated = generateUsername()
    setUsername(generated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedUsername = username.trim()

    if (!trimmedUsername) {
      setError('Username is required')
      return
    }

    if (trimmedUsername.length < 3 || trimmedUsername.length > 20) {
      setError('Username must be between 3 and 20 characters')
      return
    }

    if (!/^[a-z0-9_]+$/.test(trimmedUsername)) {
      setError('Username can only contain letters, numbers, and underscores')
      return
    }

    try {
      setLoading(true)
      setError('')

      const usernameChanged = trimmedUsername !== (initialProfile.username || '')

      if (usernameChanged) {
        await createUsername({
          userId,
          username: trimmedUsername,
        })
      }

      const result = await updateUserProfile({
        userId,
        avatar,
        bio: bio.trim(),
      })

      if (result?.success) {
        toast.success('Profile updated')
        onUpdated(result.user)
        onClose()
      }
    } catch (err: any) {
      console.error('[Profile] Error updating profile:', err)
      setError(err.message || 'Failed to update profile')
      toast.error(err.message || 'Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card/95 border border-dark-border rounded-2xl w-full max-w-md shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            
            
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {error && (
            <div className="p-3 bg-error/20 border border-error text-error rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3 max-w-sm mx-auto">
              <label className="block text-sm font-medium">Avatar</label>
              <div className="grid grid-cols-4 gap-2 justify-items-center sm:grid-cols-8">
                {avatarOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAvatar(option)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl border transition ${
                      avatar === option
                        ? 'bg-primary/20 border-primary shadow-lg shadow-black/40'
                        : 'bg-dark-secondary border-dark-border hover:border-primary'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() => setAvatar('👻')}
                  className="px-3 py-1.5 text-xs bg-dark-secondary border border-dark-border rounded-full hover:border-primary transition"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="space-y-2 max-w-sm mx-auto">
              <label className="block text-sm font-medium">Username</label>
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 bg-dark-secondary border border-dark-border rounded-full px-4 py-2 focus-within:border-primary transition">
                  <span className="text-gray-400">@</span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))
                      setError('')
                    }}
                    placeholder="username"
                    disabled={loading}
                    maxLength={20}
                    minLength={3}
                    pattern="[a-z0-9_]+"
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 disabled:opacity-50"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleRandomUsername}
                  disabled={loading}
                  className="w-11 h-11 rounded-full bg-dark-secondary border border-dark-border flex items-center justify-center hover:border-primary transition disabled:opacity-50"
                  title="Generate random username"
                >
                  🎲
                </button>
              </div>
              <p className="text-xs text-gray-400">
                {username.length}/20 characters • Letters, numbers, and underscores only
              </p>
            </div>

            <div className="space-y-2 max-w-sm mx-auto">
              <label className="block text-sm font-medium">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Anonymous soul sharing stories"
                maxLength={200}
                rows={3}
                className="w-full bg-dark-secondary border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none"
              />
              <p className="text-xs text-gray-400">{bio.length}/200 characters</p>
            </div>

            <div className="max-w-sm mx-auto">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-black/40"
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
