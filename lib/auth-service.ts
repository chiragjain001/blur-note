import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { getAuthInstance, isFirebaseReady } from './firebase'
import { createUser } from './firestore-utils'
import { logger } from './logger'

/**
 * Sign in with Google
 */
export async function signInWithGoogle() {
  try {
    const auth = getAuthInstance()
    if (!auth) throw new Error('Authentication service is not available.')
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    logger.info('[Auth] Google sign-in successful', { uid: user.uid })

    // Establish server-side session by exchanging ID token for an HTTP-only cookie
    try {
      const idToken = await user.getIdToken()
      const response = await fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
        credentials: 'include',
      })

      if (!response.ok) {
        logger.error('[Auth] Failed to establish server session')
        throw new Error('Failed to establish secure session')
      }
    } catch (sessionError) {
      logger.error('[Auth] Error creating server session', { error: sessionError })
      throw new Error('Failed to complete secure sign-in. Please try again.')
    }

    // Create user document if it doesn't exist
    try {
      await createUser(user.uid, {
        username: '', // Will be set via username setup
        bio: '',
        avatar: '', // Default avatar
        coverGradient: 'from-primary to-accent',
      })
    } catch (userError) {
      // User might already exist, that's okay
      logger.debug('[Auth] User document creation skipped (may already exist)', {
        uid: user.uid,
      })
    }

    return user
  } catch (error) {
    logger.error('[Auth] Google sign-in error', { error })

    // Surface specific Firebase error messages instead of a generic fallback
    const code = (error as { code?: string })?.code
    if (code === 'auth/unauthorized-domain') {
      throw new Error(
        'This domain is not authorised for Google sign-in. ' +
        'Please add it to the Firebase Console under Authentication → Settings → Authorized domains.',
      )
    }
    if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
      throw new Error('Sign-in was cancelled. Please try again.')
    }
    if (code === 'auth/popup-blocked') {
      throw new Error('The sign-in popup was blocked by your browser. Please allow popups for this site.')
    }
    if (code === 'auth/network-request-failed') {
      throw new Error('Network error. Please check your connection and try again.')
    }

    // Re-throw the original Firebase message if available, otherwise use a generic fallback
    const message = error instanceof Error ? error.message : undefined
    throw new Error(message ?? 'Failed to sign in with Google. Please try again later.')
  }
}

export async function signOutUser() {
  if (!isFirebaseReady()) {
    throw new Error('Firebase is not properly configured')
  }

  try {
    const auth = getAuthInstance()
    if (!auth) {
      throw new Error('Authentication service not available')
    }
    await signOut(auth)

    // Clear server-side session cookie
    try {
      await fetch('/api/session', {
        method: 'DELETE',
        credentials: 'include',
      })
    } catch (error) {
      logger.warn('[Auth] Error clearing server session cookie', { error })
    }
  } catch (error) {
    logger.error('[Auth] Error signing out', { error })
    throw error
  }
}

export function onAuthChange(callback: (user: User | null) => void) {
  if (!isFirebaseReady()) {
    console.warn('[v0] Firebase not ready for auth changes')
    callback(null)
    return () => { }
  }

  try {
    const auth = getAuthInstance()
    if (!auth) {
      callback(null)
      return () => { }
    }
    return onAuthStateChanged(auth, callback)
  } catch (error) {
    console.error('[v0] Error setting up auth listener:', error)
    callback(null)
    return () => { }
  }
}