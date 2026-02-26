'use server'

import { getAdminDb } from '@/lib/firebase-admin'
import { requireAuth } from '@/lib/server-auth'
import { limitByUser, RateLimitError } from '@/lib/rate-limit'
import { ReportInputSchema, sanitizeHtml } from '@/lib/validation'
import { Timestamp } from 'firebase-admin/firestore'
import { AppError, isAppError } from '@/lib/app-error'

/**
 * Report a post as the currently authenticated user.
 * Appends to reports[] array and sets reported = true
 */
export async function reportPost(postId: string, reason: string) {
  try {
    const { uid } = await requireAuth()
    const db = getAdminDb()

    // 5 reports per hour per user
    await limitByUser(uid, 'report_post', 5, 60 * 60 * 1000)
    
    const { reason: validatedReason } = ReportInputSchema.parse({ reason })
    const sanitizedReason = sanitizeHtml(validatedReason)
    
    // Check if post exists
    const postDoc = await db.collection('posts').doc(postId).get()
    if (!postDoc.exists) {
      throw new AppError('NOT_FOUND', 'Post not found')
    }
    
    const postData = postDoc.data()!
    
    // Check if user already reported this post
    const existingReport = postData.reports?.find(
      (r: any) => r.userId === uid
    )
    
    if (existingReport) {
      throw new AppError('CONFLICT', 'You have already reported this post')
    }
    
    // Append to reports array and set reported = true
    const reports = postData.reports || []
    reports.push({
      type: sanitizedReason,
      userId: uid,
      createdAt: Timestamp.now(),
    })
    
    await db.collection('posts').doc(postId).update({
      reported: true,
      reports,
    })
    
    return { success: true }
  } catch (error: any) {
    if (error instanceof RateLimitError) {
      console.warn('[Server] Report rate limit hit for user', error.message)
      throw new AppError('RATE_LIMIT', 'You are reporting too frequently. Please wait before trying again.')
    }

    if (isAppError(error)) {
      throw error
    }

    console.error('[Server] Error reporting post:', error)
    throw new AppError('UNKNOWN', 'Something went wrong while reporting this post.')
  }
}

