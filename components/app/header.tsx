'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { useAuth } from '@/lib/auth-context'
import { signOutUser } from '@/lib/auth-service'
import { useState } from 'react'

export function Header() {
  const { user, loading } = useAuth()
  const [showMenu, setShowMenu] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOutUser()
      setShowMenu(false)
    } catch (error) {
      console.error('[v0] Sign out error:', error)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-dark-bg/50 border-b border-dark-border">
      <Link href="/" className="flex items-center gap-2 text-2xl font-black gradient-text hover:opacity-80 transition">
        <span>👻</span>
        <span>BlurNote</span>
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {!loading && user && (
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg hover:scale-110 transition"
            >
              👤
            </button>
            {showMenu && (
              <div className="absolute top-12 right-0 bg-dark-card border border-dark-border rounded-lg shadow-xl overflow-hidden">
                <p className="px-4 py-2 text-sm text-gray-400 border-b border-dark-border truncate max-w-xs">
                  {user.displayName || 'Anonymous'}
                </p>
                <Link
                  href={`/profile/${user.uid}`}
                  className="block px-4 py-2 hover:bg-dark-secondary transition text-sm"
                  onClick={() => setShowMenu(false)}
                >
                  My Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-2 text-left hover:bg-dark-secondary transition text-sm"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
