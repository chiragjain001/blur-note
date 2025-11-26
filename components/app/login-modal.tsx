'use client'

import { useState } from 'react'
import { signInAnonymously } from '@/lib/auth-service'

interface LoginModalProps {
  onClose: () => void
  onLogin: (user: any) => void
}

export function LoginModal({ onClose, onLogin }: LoginModalProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleAnonymousLogin = async () => {
    try {
      setLoading(true)
      setError('')
      console.log('[Auth] Starting anonymous login process...')
      const user = await signInAnonymously()
      console.log('[Auth] Anonymous login successful:', { uid: user?.uid })
      onLogin(user)
      onClose()
    } catch (err: any) {
      console.error('[Auth] Login error:', {
        name: err.name,
        message: err.message,
        stack: err.stack,
        code: err.code
      })
      setError(err.message || 'Failed to sign in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card border border-dark-border rounded-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <h2 className="text-2xl font-bold">Sign in to Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-error/20 border border-error text-error rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleAnonymousLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="animate-spin">⏳</span>
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span className="text-2xl">👻</span>
                <span>Continue Anonymously</span>
              </>
            )}
          </button>

          <p className="text-center text-sm text-gray-400 pt-4">
            No email, no password. Just anonymous posting. Your identity stays protected.
          </p>
        </div>
      </div>
    </div>
  )
}
