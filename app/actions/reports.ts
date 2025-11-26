'use server'

import { getAdminDb } from '@/lib/firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

/**
 * Report a post
 * Appends to reports[] array and sets reported = true
 */
export async function reportPost(postId: string, userId: string, reason: string) {
  try {
    const db = getAdminDb()
    
    // Check if post exists
    const postDoc = await db.collection('posts').doc(postId).get()
    if (!postDoc.exists) {
      throw new Error('Post not found')
    }
    
    const postData = postDoc.data()!
    
    // Check if user already reported this post
    const existingReport = postData.reports?.find(
      (r: any) => r.userId === userId
    )
    
    if (existingReport) {
      throw new Error('You have already reported this post')
    }
    
    // Append to reports array and set reported = true
    const reports = postData.reports || []
    reports.push({
      type: reason,
      userId,
      createdAt: Timestamp.now(),
    })
    
    await db.collection('posts').doc(postId).update({
      reported: true,
      reports,
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error reporting post:', error)
    throw error
  }
}

