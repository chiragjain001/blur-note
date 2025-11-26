import { initializeApp, getApps, cert, App } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

let adminApp: App | null = null
let adminAuth: ReturnType<typeof getAuth> | null = null
let adminDb: ReturnType<typeof getFirestore> | null = null
let adminStorage: ReturnType<typeof getStorage> | null = null

export function getAdminApp(): App {
  if (adminApp) {
    return adminApp
  }

  // Check if already initialized
  const existingApps = getApps()
  if (existingApps.length > 0) {
    adminApp = existingApps[0]
    return adminApp
  }

  // Initialize with service account or default credentials
  try {
    let serviceAccount: any = undefined

    // Option 1: Check for environment variable (for Vercel/production)
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      try {
        serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
      } catch (e) {
        console.warn('[Admin] Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY from env')
      }
    }

    // Option 2: Check for local service account file (for local development)
    if (!serviceAccount && typeof window === 'undefined') {
      try {
        const fs = require('fs')
        const path = require('path')
        
        // Try to find service account file in project root
        const possiblePaths = [
          path.join(process.cwd(), 'whisplyy-firebase-adminsdk-fbsvc-51b5120366.json'),
          path.join(process.cwd(), 'serviceAccountKey.json'),
          path.join(process.cwd(), 'firebase-adminsdk.json'),
        ]

        for (const filePath of possiblePaths) {
          if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8')
            serviceAccount = JSON.parse(fileContent)
            console.log('[Admin] Loaded service account from:', filePath)
            break
          }
        }
      } catch (e) {
        // File not found or error reading - will use default credentials
        console.warn('[Admin] Could not load service account file, using default credentials')
      }
    }

    if (serviceAccount) {
      adminApp = initializeApp({
        credential: cert(serviceAccount),
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || serviceAccount.project_id,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      })
      console.log('[Admin] Firebase Admin initialized with service account')
    } else {
      // Use default credentials (for local development with gcloud CLI)
      adminApp = initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      })
      console.log('[Admin] Firebase Admin initialized with default credentials')
    }

    return adminApp
  } catch (error) {
    console.error('[Admin] Error initializing Firebase Admin:', error)
    throw new Error('Failed to initialize Firebase Admin')
  }
}

export function getAdminAuth() {
  if (!adminAuth) {
    const app = getAdminApp()
    adminAuth = getAuth(app)
  }
  return adminAuth
}

export function getAdminDb() {
  if (!adminDb) {
    const app = getAdminApp()
    adminDb = getFirestore(app)
  }
  return adminDb
}

export function getAdminStorage() {
  if (!adminStorage) {
    const app = getAdminApp()
    adminStorage = getStorage(app)
  }
  return adminStorage
}

// Helper to get user's custom claims (role, etc.)
export async function getUserClaims(uid: string) {
  try {
    const auth = getAdminAuth()
    const user = await auth.getUser(uid)
    return user.customClaims || {}
  } catch (error) {
    console.error('[Admin] Error getting user claims:', error)
    return {}
  }
}

// Helper to check if user is admin
export async function isAdmin(uid: string): Promise<boolean> {
  try {
    const claims = await getUserClaims(uid)
    return claims.admin === true
  } catch (error) {
    console.error('[Admin] Error checking admin status:', error)
    return false
  }
}

/**
 * Check if a user is shadowbanned
 * @param userId The user ID to check
 * @returns Promise<boolean> True if user is shadowbanned, false otherwise
 */
export async function isShadowbanned(userId: string): Promise<boolean> {
  try {
    const db = getAdminDb()
    const userDoc = await db.collection('users').doc(userId).get()
    
    if (!userDoc.exists) {
      return false
    }

    const userData = userDoc.data()
    return userData?.status === 'shadowbanned'
  } catch (error) {
    console.error('[Admin] Error checking shadowban status:', error)
    return false
  }
}
