'use server'

import { getAdminDb, isShadowbanned } from '@/lib/firebase-admin'
import { requireAuth } from '@/lib/server-auth'
import { Timestamp } from 'firebase-admin/firestore'
import { limitByUser, RateLimitError } from '@/lib/rate-limit'
import { CommentInputSchema, sanitizeHtml } from '@/lib/validation'
import { AppError, isAppError } from '@/lib/app-error'

interface AddCommentParams {
  postId: string
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
    const { uid } = await requireAuth()
    const db = getAdminDb()
    // 10 comments per minute per user
    await limitByUser(uid, 'comment_post', 10, 60 * 1000)
    
    const { content } = CommentInputSchema.parse({ content: params.content })
    const sanitizedContent = sanitizeHtml(content)
    
    // Check if user is shadowbanned
    const shadowbanned = await isShadowbanned(uid)
    if (shadowbanned) {
      // Shadowbanned users can comment, but comments won't appear to others
      // We'll handle this in the comments query
    }
    
    // Get user data for denormalization
    const userDoc = await db.collection('users').doc(uid).get()
    if (!userDoc.exists) {
      throw new AppError('NOT_FOUND', 'User not found')
    }
    
    const userData = userDoc.data()!
    
    // Check if post exists
    const postRef = db.collection('posts').doc(params.postId)
    const postDoc = await postRef.get()
    
    if (!postDoc.exists) {
      throw new AppError('NOT_FOUND', 'Post not found')
    }
    
    const postData = postDoc.data()!
    if (postData.status !== 'active') {
      throw new AppError('FORBIDDEN', 'You cannot comment on this post')
    }
    
    const commentRef = postRef.collection('comments').doc()

    await db.runTransaction(async (tx) => {
      const snapshot = await tx.get(postRef)
      if (!snapshot.exists) {
        throw new AppError('NOT_FOUND', 'Post not found')
      }

      const data = snapshot.data() || {}
      const currentComments = data.commentsCount || 0

      tx.set(commentRef, {
        userId: uid,
        authorUsername: userData.username || 'Anonymous',
        authorAvatarUrl: userData.avatarUrl || '',
        content: sanitizedContent,
        createdAt: Timestamp.now(),
        status: 'active',
      })

      tx.update(postRef, {
        commentsCount: currentComments + 1,
      })
    })
    
    return { success: true, commentId: commentRef.id }
  } catch (error: any) {
    if (error instanceof RateLimitError) {
      console.warn('[Server] Comment rate limit hit for user', error.message)
      throw new AppError('RATE_LIMIT', 'You are commenting too quickly. Please wait and try again.')
    }

    if (isAppError(error)) {
      throw error
    }

    console.error('[Server] Error adding comment:', error)
    throw new AppError('UNKNOWN', 'Something went wrong while adding your comment.')
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

