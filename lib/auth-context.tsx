'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { getAuthInstance, isFirebaseReady } from './firebase'
import { onAuthStateChanged, User } from 'firebase/auth'

interface AuthContextType {
  user: User | null
  loading: boolean
  isLoggedIn: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoggedIn: false,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isFirebaseReady()) {
      console.warn('[v0] Firebase not ready in AuthProvider')
      setLoading(false)
      return
    }

    try {
      const auth = getAuthInstance()
      if (!auth) {
        console.warn('[v0] Auth instance not available')
        setLoading(false)
        return
      }

      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      })

      return () => unsubscribe()
    } catch (error) {
      console.error('[v0] Error in AuthProvider:', error)
      setLoading(false)
    }
  }, [])

  const value = {
    user,
    loading,
    isLoggedIn: !!user,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
