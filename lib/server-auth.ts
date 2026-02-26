import { cookies } from 'next/headers'
import { getAdminAuth } from './firebase-admin'

export interface AuthContext {
  uid: string
  claims: Record<string, unknown>
}

/**
 * Verify the current user based on the Firebase ID token stored in an HTTP-only cookie.
 * Throws if no valid session is present and `required` is true.
 */
export async function verifyAuth(required: boolean = true): Promise<AuthContext | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('firebase_token')?.value

  if (!token) {
    if (required) {
      throw new Error('Unauthorized: missing auth token')
    }
    return null
  }

  try {
    const auth = getAdminAuth()
    const decoded = await auth.verifyIdToken(token)

    return {
      uid: decoded.uid,
      claims: decoded as Record<string, unknown>,
    }
  } catch (error) {
    // Invalid or expired token – treat as unauthorized
    if (required) {
      throw new Error('Unauthorized: invalid auth token')
    }
    return null
  }
}

/**
 * Convenience helper for actions that always require authentication.
 */
export async function requireAuth(): Promise<AuthContext> {
  const ctx = await verifyAuth(true)
  return ctx!
}

