'use server'

import { getAdminDb } from '@/lib/firebase-admin'
import { requireAuth } from '@/lib/server-auth'
import { limitByUser, RateLimitError } from '@/lib/rate-limit'
import { Timestamp } from 'firebase-admin/firestore'
import { AppError, isAppError } from '@/lib/app-error'

/**
 * Toggle like on a post for the currently authenticated user.
 */
export async function toggleLike(postId: string) {
  try {
    const { uid } = await requireAuth()
    const db = getAdminDb()

    // 20 likes per minute per user
    await limitByUser(uid, 'like_post', 20, 60 * 1000)
    
    const postRef = db.collection('posts').doc(postId)
    const postDoc = await postRef.get()

    if (!postDoc.exists) {
      throw new Error('Post not found')
    }

    const likeRef = postRef.collection('likes').doc(uid)
    const userLikeRef = db.collection('users').doc(uid).collection('likes').doc(postId)
    const likeDoc = await likeRef.get()

    const result = await db.runTransaction(async (tx) => {
      const snapshot = await tx.get(postRef)
      if (!snapshot.exists) {
        throw new Error('Post not found')
      }

      const data = snapshot.data() || {}
      const currentCount = data.likesCount || 0

      if (likeDoc.exists) {
        // Unlike: remove like document and decrement count
        tx.delete(likeRef)
        tx.delete(userLikeRef)
        tx.update(postRef, {
          likesCount: Math.max(currentCount - 1, 0),
        })
        return { success: true, liked: false as const }
      } else {
        // Like: add like document and increment count
        const now = Timestamp.now()
        tx.set(likeRef, {
          createdAt: now,
        })
        tx.set(userLikeRef, {
          createdAt: now,
        })
        tx.update(postRef, {
          likesCount: currentCount + 1,
        })
        return { success: true, liked: true as const }
      }
    })

    return result
  } catch (error: any) {
    if (error instanceof RateLimitError) {
      console.warn('[Server] Like rate limit hit for user', error.message)
      throw new AppError('RATE_LIMIT', 'You are liking posts too quickly. Please slow down.')
    }

    if (isAppError(error)) {
      throw error
    }

    console.error('[Server] Error toggling like:', error)
    throw new AppError('UNKNOWN', 'Something went wrong while updating your like.')
  }
}

