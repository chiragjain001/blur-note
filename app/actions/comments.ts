'use server'

import { getAdminDb, isShadowbanned } from '@/lib/firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

interface AddCommentParams {
  postId: string
  userId: string
  content: string
}

/**
 * Convert Firestore Timestamp objects to plain JavaScript values
 * This is necessary because Timestamps can't be serialized when passing from server to client
 */
function serializeTimestamp(value: any): any {
  // Check if it's a Firestore Timestamp
  if (value && typeof value === 'object' && 'toDate' in value && typeof value.toDate === 'function') {
    return value.toDate().toISOString()
  }
  // Check if it's a Timestamp-like object with _seconds
  if (value && typeof value === 'object' && '_seconds' in value) {
    const seconds = value._seconds || 0
    const nanoseconds = value._nanoseconds || 0
    return new Date(seconds * 1000 + nanoseconds / 1000000).toISOString()
  }
  return value
}

/**
 * Recursively serialize all Timestamp objects in a data object
 */
function serializeCommentData(data: any): any {
  if (data === null || data === undefined) {
    return data
  }
  
  if (Array.isArray(data)) {
    return data.map(item => serializeCommentData(item))
  }
  
  if (typeof data === 'object') {
    const serialized: any = {}
    for (const [key, value] of Object.entries(data)) {
      // Special handling for timestamp fields
      if (key === 'createdAt' || key === 'updatedAt') {
        serialized[key] = serializeTimestamp(value)
      } else if (typeof value === 'object' && value !== null) {
        serialized[key] = serializeCommentData(value)
      } else {
        serialized[key] = value
      }
    }
    return serialized
  }
  
  return data
}

/**
 * Add comment to a post
 */
export async function addComment(params: AddCommentParams) {
  try {
    const db = getAdminDb()
    
    // Check if user is shadowbanned
    const shadowbanned = await isShadowbanned(params.userId)
    if (shadowbanned) {
      // Shadowbanned users can comment, but comments won't appear to others
      // We'll handle this in the comments query
    }
    
    // Get user data for denormalization
    const userDoc = await db.collection('users').doc(params.userId).get()
    if (!userDoc.exists) {
      throw new Error('User not found')
    }
    
    const userData = userDoc.data()!
    
    // Validate content
    if (!params.content?.trim()) {
      throw new Error('Comment content is required')
    }
    
    // Check if post exists
    const postRef = db.collection('posts').doc(params.postId)
    const postDoc = await postRef.get()
    
    if (!postDoc.exists) {
      throw new Error('Post not found')
    }
    
    const postData = postDoc.data()!
    if (postData.status !== 'active') {
      throw new Error('Cannot comment on this post')
    }
    
    // Add comment to subcollection
    const commentRef = postRef.collection('comments').doc()
    await commentRef.set({
      userId: params.userId,
      authorUsername: userData.username || 'Anonymous',
      authorAvatarUrl: userData.avatarUrl || '',
      content: params.content.trim(),
      createdAt: Timestamp.now(),
      status: 'active',
    })
    
    // Increment comment count
    await postRef.update({
      commentsCount: (postData.commentsCount || 0) + 1,
    })
    
    return { success: true, commentId: commentRef.id }
  } catch (error: any) {
    console.error('[Server] Error adding comment:', error)
    throw error
  }
}

/**
 * Get comments for a post (filtering out shadowbanned users)
 */
export async function getPostComments(postId: string) {
  try {
    const db = getAdminDb()
    
    // Get all users and identify shadowbanned ones
    // Users without a status field or with status 'active' are considered active
    const allUsersSnapshot = await db.collection('users').get()
    const shadowbannedUserIds = new Set(
      allUsersSnapshot.docs
        .filter(doc => {
          const userData = doc.data()
          return userData.status === 'shadowbanned'
        })
        .map(doc => doc.id)
    )
    
    // Get comments
    const commentsSnapshot = await db.collection('posts')
      .doc(postId)
      .collection('comments')
      .where('status', '==', 'active')
      .orderBy('createdAt', 'desc')
      .get()
    
    // Filter out shadowbanned users
    const comments = commentsSnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((comment: any) => {
        // Only show comments from active (non-shadowbanned) users
        return !shadowbannedUserIds.has(comment.userId)
      })
    
    // Serialize all comments to convert Timestamps to plain values
    return comments.map(comment => serializeCommentData(comment))
  } catch (error: any) {
    console.error('[Server] Error getting comments:', error)
    return []
  }
}

