'use server'

import { getAdminDb } from '@/lib/firebase-admin'
import { requireAuth } from '@/lib/server-auth'
import { UsernameInputSchema, sanitizeHtml } from '@/lib/validation'
import { AppError, isAppError } from '@/lib/app-error'
import { Timestamp } from 'firebase-admin/firestore'

interface CreateUsernameParams {
  username: string
}

interface UpdateUserProfileParams {
  avatar?: string
  bio?: string
  coverGradient?: string
}

/**
 * Create or update username for a user
 * Enforces uniqueness using usernames collection
 */
export async function createUsername(params: CreateUsernameParams) {
  try {
    const { uid } = await requireAuth()
    const db = getAdminDb()
    
    const { username } = UsernameInputSchema.parse({ username: params.username })
    const usernameLower = username.toLowerCase().trim()
    
    // Check if username is already taken
    const usernameDoc = await db.collection('usernames').doc(usernameLower).get()
    
    if (usernameDoc.exists) {
      const existingUid = usernameDoc.data()!.uid
      if (existingUid !== uid) {
        throw new AppError('CONFLICT', 'Username is already taken')
      }
      // Same user, allow update
    }
    
    // Get existing user data
    const userDoc = await db.collection('users').doc(uid).get()
    const existingUsername = userDoc.exists ? userDoc.data()?.usernameLower : null
    
    // Update usernames collection
    await db.collection('usernames').doc(usernameLower).set({
      uid,
    })
    
    // If user had a different username, remove old entry
    if (existingUsername && existingUsername !== usernameLower) {
      await db.collection('usernames').doc(existingUsername).delete()
    }
    
    // Update user document
    const userData: any = {
      username,
      usernameLower,
      updatedAt: Timestamp.now(),
    }
    
    if (!userDoc.exists) {
      // Create new user document
      userData.uid = uid
      userData.role = 'user'
      userData.status = 'active'
      userData.avatarUrl = ''
      userData.bio = ''
      userData.createdAt = Timestamp.now()
    }
    
    await db.collection('users').doc(uid).set(userData, { merge: true })
    
    return { success: true, username }
  } catch (error: any) {
    if (isAppError(error)) {
      throw error
    }
    console.error('[Server] Error creating username:', error)
    throw new AppError('UNKNOWN', 'Something went wrong while creating your username.')
  }
}

export async function updateUserProfile(params: UpdateUserProfileParams) {
  try {
    const { uid } = await requireAuth()
    const db = getAdminDb()

    const updates: any = {
      updatedAt: Timestamp.now(),
    }

    if (typeof params.avatar !== 'undefined') {
      updates.avatar = params.avatar
    }

    if (typeof params.bio !== 'undefined') {
      updates.bio = params.bio
    }

    if (typeof params.coverGradient !== 'undefined') {
      updates.coverGradient = params.coverGradient
    }

    await db.collection('users').doc(uid).set(updates, { merge: true })

    const userDoc = await db.collection('users').doc(uid).get()
    const data = userDoc.data() || {}

    const safeUser = {
      uid,
      username: data.username ?? '',
      usernameLower: data.usernameLower ?? '',
      bio: data.bio ?? '',
      avatar: data.avatar ?? '',
      avatarUrl: data.avatarUrl ?? '',
      coverGradient: data.coverGradient ?? 'from-blue-500 via-indigo-500 to-purple-500',
      role: data.role ?? 'user',
      status: data.status ?? 'active',
    }

    return {
      success: true,
      user: safeUser,
    }
  } catch (error: any) {
    if (isAppError(error)) {
      throw error
    }
    console.error('[Server] Error updating user profile:', error)
    throw new AppError('UNKNOWN', 'Something went wrong while updating your profile.')
  }
}

/**
 * Get user by username
 */
export async function getUserByUsername(username: string) {
  try {
    const db = getAdminDb()
    const usernameLower = username.toLowerCase()
    
    const usernameDoc = await db.collection('usernames').doc(usernameLower).get()
    
    if (!usernameDoc.exists) {
      return null
    }
    
    const uid = usernameDoc.data()!.uid
    const userDoc = await db.collection('users').doc(uid).get()
    
    if (!userDoc.exists) {
      return null
    }
    
    return {
      uid,
      ...userDoc.data(),
    }
  } catch (error: any) {
    console.error('[Server] Error getting user by username:', error)
    return null
  }
}

