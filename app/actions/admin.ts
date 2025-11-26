'use server'

import { getAdminDb, getAdminAuth, isAdmin } from '@/lib/firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

/**
 * Set admin role for a user (one-time setup)
 */
export async function setAdminRole(adminUserId: string, targetUserId: string) {
  try {
    // Verify caller is admin
    const callerIsAdmin = await isAdmin(adminUserId)
    if (!callerIsAdmin) {
      throw new Error('Unauthorized: Admin access required')
    }
    
    const auth = getAdminAuth()
    await auth.setCustomUserClaims(targetUserId, { role: 'admin' })
    
    const db = getAdminDb()
    await db.collection('users').doc(targetUserId).update({
      role: 'admin',
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error setting admin role:', error)
    throw error
  }
}

/**
 * Ban a user
 */
export async function banUser(adminUserId: string, targetUserId: string) {
  try {
    const callerIsAdmin = await isAdmin(adminUserId)
    if (!callerIsAdmin) {
      throw new Error('Unauthorized: Admin access required')
    }
    
    const db = getAdminDb()
    await db.collection('users').doc(targetUserId).update({
      status: 'banned',
      updatedAt: Timestamp.now(),
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error banning user:', error)
    throw error
  }
}

/**
 * Shadowban a user
 */
export async function shadowbanUser(adminUserId: string, targetUserId: string) {
  try {
    const callerIsAdmin = await isAdmin(adminUserId)
    if (!callerIsAdmin) {
      throw new Error('Unauthorized: Admin access required')
    }
    
    const db = getAdminDb()
    await db.collection('users').doc(targetUserId).update({
      status: 'shadowbanned',
      updatedAt: Timestamp.now(),
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error shadowbanning user:', error)
    throw error
  }
}

/**
 * Unban a user
 */
export async function unbanUser(adminUserId: string, targetUserId: string) {
  try {
    const callerIsAdmin = await isAdmin(adminUserId)
    if (!callerIsAdmin) {
      throw new Error('Unauthorized: Admin access required')
    }
    
    const db = getAdminDb()
    await db.collection('users').doc(targetUserId).update({
      status: 'active',
      updatedAt: Timestamp.now(),
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error unbanning user:', error)
    throw error
  }
}

/**
 * Hide a post (admin only)
 */
export async function hidePost(adminUserId: string, postId: string) {
  try {
    const callerIsAdmin = await isAdmin(adminUserId)
    if (!callerIsAdmin) {
      throw new Error('Unauthorized: Admin access required')
    }
    
    const db = getAdminDb()
    await db.collection('posts').doc(postId).update({
      status: 'hidden',
      updatedAt: Timestamp.now(),
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error hiding post:', error)
    throw error
  }
}

/**
 * Delete a post (admin only - hard delete)
 */
export async function deletePostAdmin(adminUserId: string, postId: string) {
  try {
    const callerIsAdmin = await isAdmin(adminUserId)
    if (!callerIsAdmin) {
      throw new Error('Unauthorized: Admin access required')
    }
    
    const db = getAdminDb()
    await db.collection('posts').doc(postId).update({
      status: 'deleted',
      updatedAt: Timestamp.now(),
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error deleting post (admin):', error)
    throw error
  }
}

/**
 * Get all reported posts (for admin panel)
 */
export async function getReportedPosts() {
  try {
    const db = getAdminDb()
    
    const snapshot = await db.collection('posts')
      .where('reported', '==', true)
      .orderBy('createdAt', 'desc')
      .get()
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error: any) {
    console.error('[Server] Error getting reported posts:', error)
    throw error
  }
}

/**
 * Delete post (for admin panel - no auth check, client handles it)
 */
export async function deletePost(postId: string) {
  try {
    const db = getAdminDb()
    
    // Get post to delete audio file
    const postDoc = await db.collection('posts').doc(postId).get()
    if (!postDoc.exists) {
      throw new Error('Post not found')
    }
    
    const postData = postDoc.data()!
    
    // Delete audio file from storage if voice post
    if (postData.type === 'voice' && postData.audioUrl) {
      // Note: Storage deletion requires client SDK or admin SDK
      // For now, we'll just delete the document
    }
    
    // Delete post document
    await db.collection('posts').doc(postId).delete()
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error deleting post:', error)
    throw error
  }
}

/**
 * Clear report status for a post (mark as resolved)
 */
export async function clearReportStatus(postId: string) {
  try {
    const db = getAdminDb()
    
    const postDoc = await db.collection('posts').doc(postId).get()
    if (!postDoc.exists) {
      throw new Error('Post not found')
    }
    
    // Clear reported flag and keep reports array for audit trail
    await db.collection('posts').doc(postId).update({
      reported: false,
      updatedAt: Timestamp.now(),
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error clearing report status:', error)
    throw error
  }
}

