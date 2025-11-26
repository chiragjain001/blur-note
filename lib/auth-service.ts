import {
  signInAnonymously as firebaseSignInAnonymously,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { getAuthInstance, isFirebaseReady } from './firebase'
import { createUser } from './firestore-utils'

/**
 * Sign in anonymously (no email/password required)
 */
export async function signInAnonymously() {
  try {
    console.log('[Auth] Starting Anonymous Sign In...')
    
    // Ensure Firebase is initialized
    if (!isFirebaseReady()) {
      throw new Error('Failed to initialize Firebase. Please check your configuration.')
    }

    const auth = getAuthInstance()
    if (!auth) {
      throw new Error('Authentication service is not available. Please try again later.')
    }

    console.log('[Auth] Starting anonymous sign in...')
    const result = await firebaseSignInAnonymously(auth)
      .catch((error: any) => {
        console.error('[Auth] Anonymous sign in error:', {
          code: error.code,
          message: error.message,
          name: error.name,
        })
        throw error
      })
      
    const user = result.user

    if (!user) {
      throw new Error('Failed to authenticate anonymously. No user returned.')
    }

    console.log('[Auth] User authenticated anonymously:', { uid: user.uid })
    
    // Create user document if it doesn't exist
    try {
      await createUser(user.uid, {
        username: '', // Will be set via username setup
        bio: '',
        avatar: '👻', // Default anonymous avatar
        coverGradient: 'from-primary to-accent',
      })
    } catch (userError) {
      // User might already exist, that's okay
      console.log('[Auth] User document creation skipped (may already exist)')
    }
    
    return user
  } catch (error: any) {
    console.error('[Auth] Error in signInAnonymously:', {
      name: error.name,
      code: error.code,
      message: error.message,
    })
    
    let errorMessage = 'Failed to sign in anonymously'
    
    if (error.code === 'auth/operation-not-allowed' || error.code === 'auth/admin-restricted-operation') {
      errorMessage = 'Anonymous authentication is not enabled in Firebase. Please enable it in Firebase Console: Authentication > Sign-in method > Anonymous > Enable'
    } else if (error.code === 'auth/network-request-failed') {
      errorMessage = 'Network error. Please check your connection and try again.'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    throw new Error(errorMessage)
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
  } catch (error) {
    console.error('[v0] Error signing out:', error)
    throw error
  }
}

export function onAuthChange(callback: (user: User | null) => void) {
  if (!isFirebaseReady()) {
    console.warn('[v0] Firebase not ready for auth changes')
    callback(null)
    return () => {}
  }

  try {
    const auth = getAuthInstance()
    if (!auth) {
      callback(null)
      return () => {}
    }
    return onAuthStateChanged(auth, callback)
  } catch (error) {
    console.error('[v0] Error setting up auth listener:', error)
    callback(null)
    return () => {}
  }
}
 