'use server'

import { getAdminDb } from '@/lib/firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

interface CreateUsernameParams {
  userId: string
  username: string
}

interface UpdateUserProfileParams {
  userId: string
  avatar?: string
  bio?: string
}

/**
 * Create or update username for a user
 * Enforces uniqueness using usernames collection
 */
export async function createUsername(params: CreateUsernameParams) {
  try {
    const db = getAdminDb()
    
    // Validate username
    const usernameLower = params.username.toLowerCase().trim()
    
    if (!usernameLower || usernameLower.length < 3) {
      throw new Error('Username must be at least 3 characters')
    }
    
    if (usernameLower.length > 20) {
      throw new Error('Username must be less than 20 characters')
    }
    
    if (!/^[a-z0-9_]+$/.test(usernameLower)) {
      throw new Error('Username can only contain letters, numbers, and underscores')
    }
    
    // Check if username is already taken
    const usernameDoc = await db.collection('usernames').doc(usernameLower).get()
    
    if (usernameDoc.exists) {
      const existingUid = usernameDoc.data()!.uid
      if (existingUid !== params.userId) {
        throw new Error('Username is already taken')
      }
      // Same user, allow update
    }
    
    // Get existing user data
    const userDoc = await db.collection('users').doc(params.userId).get()
    const existingUsername = userDoc.exists ? userDoc.data()?.usernameLower : null
    
    // Update usernames collection
    await db.collection('usernames').doc(usernameLower).set({
      uid: params.userId,
    })
    
    // If user had a different username, remove old entry
    if (existingUsername && existingUsername !== usernameLower) {
      await db.collection('usernames').doc(existingUsername).delete()
    }
    
    // Update user document
    const userData: any = {
      username: params.username,
      usernameLower,
      updatedAt: Timestamp.now(),
    }
    
    if (!userDoc.exists) {
      // Create new user document
      userData.uid = params.userId
      userData.role = 'user'
      userData.status = 'active'
      userData.avatarUrl = ''
      userData.bio = ''
      userData.createdAt = Timestamp.now()
    }
    
    await db.collection('users').doc(params.userId).set(userData, { merge: true })
    
    return { success: true, username: params.username }
  } catch (error: any) {
    console.error('[Server] Error creating username:', error)
    throw error
  }
}

export async function updateUserProfile(params: UpdateUserProfileParams) {
  try {
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

    await db.collection('users').doc(params.userId).set(updates, { merge: true })

    const userDoc = await db.collection('users').doc(params.userId).get()
    const data = userDoc.data() || {}

    const safeUser = {
      uid: params.userId,
      username: data.username ?? '',
      usernameLower: data.usernameLower ?? '',
      bio: data.bio ?? '',
      avatar: data.avatar ?? '',
      avatarUrl: data.avatarUrl ?? '',
      role: data.role ?? 'user',
      status: data.status ?? 'active',
    }

    return {
      success: true,
      user: safeUser,
    }
  } catch (error: any) {
    console.error('[Server] Error updating user profile:', error)
    throw error
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

