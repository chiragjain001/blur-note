'use server'

import { getAdminDb } from '@/lib/firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

/**
 * Toggle like on a post
 */
export async function toggleLike(userId: string, postId: string) {
  try {
    const db = getAdminDb()
    
    // Check if already liked
    const likeRef = db.collection('posts').doc(postId).collection('likes').doc(userId)
    const likeDoc = await likeRef.get()
    
    const postRef = db.collection('posts').doc(postId)
    const postDoc = await postRef.get()
    
    if (!postDoc.exists) {
      throw new Error('Post not found')
    }
    
    const isLiked = likeDoc.exists
    
    if (isLiked) {
      // Unlike: remove like document and decrement count
      await likeRef.delete()
      await postRef.update({
        likesCount: (postDoc.data()!.likesCount || 0) - 1,
      })
      return { success: true, liked: false }
    } else {
      // Like: add like document and increment count
      await likeRef.set({
        createdAt: Timestamp.now(),
      })
      await postRef.update({
        likesCount: (postDoc.data()!.likesCount || 0) + 1,
      })
      return { success: true, liked: true }
    }
  } catch (error: any) {
    console.error('[Server] Error toggling like:', error)
    throw error
  }
}

