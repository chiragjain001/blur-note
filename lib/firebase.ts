import { initializeApp, FirebaseApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyACBv7agfDq3yMs9qdnFQbsnkjmZjNzPWE",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "whisplyy.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "whisplyy",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "whisplyy.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "983464337272",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:983464337272:web:23bf268b6901c686b0328d",
}

let app: FirebaseApp | null = null
let auth: Auth | null = null
let db: Firestore | null = null
let storage: FirebaseStorage | null = null
let isInitialized = false

// Initialize Firebase only on client side
const initializeFirebase = () => {
  if (typeof window === 'undefined') return false
  if (isInitialized) return true

  try {
    if (!app) {
      app = initializeApp(firebaseConfig)
    }
    if (!auth) {
      auth = getAuth(app)
    }
    if (!db) {
      db = getFirestore(app)
    }
    if (!storage) {
      storage = getStorage(app)
    }
    isInitialized = true
    console.log('[v0] Firebase initialized successfully')
    return true
  } catch (error: any) {
    console.error('[v0] Firebase initialization error:', error.message)
    isInitialized = false
    return false
  }
}

// Lazy getters that ensure initialization
export const getAppInstance = (): FirebaseApp | null => {
  if (!app || !isInitialized) {
    const initialized = initializeFirebase()
    if (!initialized) return null
  }
  return app
}

export const getAuthInstance = (): Auth | null => {
  if (!auth) {
    initializeFirebase()
  }
  return auth
}

export const getDbInstance = (): Firestore | null => {
  if (!db) {
    initializeFirebase()
  }
  return db
}

export const getStorageInstance = (): FirebaseStorage | null => {
  if (!storage) {
    initializeFirebase()
  }
  return storage
}

export { storage as firebaseStorage }

// Lazy provider initialization
let googleProviderInstance: GoogleAuthProvider | null = null

export const getGoogleProvider = (): GoogleAuthProvider => {
  if (!googleProviderInstance) {
    try {
      googleProviderInstance = new GoogleAuthProvider()
      // Add any additional scopes you need
      googleProviderInstance.addScope('profile')
      googleProviderInstance.addScope('email')
      // Set the authentication method to 'popup' for better mobile support
      googleProviderInstance.setCustomParameters({
        prompt: 'select_account',
      })
    } catch (error) {
      console.error('[v0] Error creating Google provider:', error)
      throw new Error('Failed to initialize Google Sign-In. Please try again later.')
    }
  }
  return googleProviderInstance
}

// Status check
export const isFirebaseReady = (): boolean => {
  if (typeof window === 'undefined') return false
  if (!isInitialized) {
    return initializeFirebase()
  }
  return !!app && !!auth && !!db && !!storage
}
