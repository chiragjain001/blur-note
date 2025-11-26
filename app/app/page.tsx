'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/app/header'
import { Feed } from '@/components/app/feed'
import { CreatePostModal } from '@/components/app/create-post-modal'
import { LoginModal } from '@/components/app/login-modal'
import { UsernameSetupModal } from '@/components/app/username-setup-modal'
import { FloatingCreateButton } from '@/components/app/floating-create-button'
import { useAuth } from '@/lib/auth-context'
import { getUser } from '@/lib/firestore-utils'
import { createUsername } from '@/app/actions/auth'
import { generateUsername } from '@/lib/username-generator'

export default function AppPage() {
  const { user, isLoggedIn } = useAuth()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showUsernameSetup, setShowUsernameSetup] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  // Check if user needs to set up username
  useEffect(() => {
    const ensureUsername = async () => {
      if (!user) return

      try {
        const userData = await getUser(user.uid)

        if (userData && userData.username) {
          setShowUsernameSetup(false)
          return
        }

        // No username yet - try to auto-generate a unique one
        for (let attempt = 0; attempt < 5; attempt++) {
          const candidate = generateUsername()

          try {
            await createUsername({
              userId: user.uid,
              username: candidate,
            })
            setShowUsernameSetup(false)
            return
          } catch (error: any) {
            if (error?.message?.includes('Username is already taken') && attempt < 4) {
              continue
            }
            console.error('[App] Error auto-creating username:', error)
            setShowUsernameSetup(true)
            return
          }
        }
      } catch (error) {
        console.error('[App] Error ensuring username:', error)
      }
    }

    ensureUsername()
  }, [user])

  const handleCreateClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true)
    } else {
      setShowCreateModal(true)
    }
  }

  const handleLogin = () => {
    setShowLoginModal(false)
    // Username check will happen in useEffect
  }

  const handleUsernameComplete = () => {
    setShowUsernameSetup(false)
  }

  const handlePostCreated = () => {
    setRefreshKey(prev => prev + 1)
  }

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Feed key={refreshKey} />
      </div>
      
      <FloatingCreateButton onClick={handleCreateClick} />
      
      {showCreateModal && isLoggedIn && (
        <CreatePostModal
          onClose={() => setShowCreateModal(false)}
          onPostCreated={handlePostCreated}
        />
      )}
      
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      )}
      
      {showUsernameSetup && user && (
        <UsernameSetupModal
          userId={user.uid}
          onComplete={handleUsernameComplete}
        />
      )}
    </div>
  )
}
