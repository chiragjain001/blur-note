'use server'

import { getAdminDb } from '@/lib/firebase-admin'

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
function serializePostData(data: any): any {
  if (data === null || data === undefined) {
    return data
  }
  
  if (Array.isArray(data)) {
    return data.map(item => serializePostData(item))
  }
  
  if (typeof data === 'object') {
    const serialized: any = {}
    for (const [key, value] of Object.entries(data)) {
      // Special handling for timestamp fields
      if (key === 'createdAt' || key === 'updatedAt') {
        serialized[key] = serializeTimestamp(value)
      } else if (typeof value === 'object' && value !== null) {
        serialized[key] = serializePostData(value)
      } else {
        serialized[key] = value
      }
    }
    return serialized
  }
  
  return data
}

/**
 * Get feed posts (filtering out shadowbanned users and hidden/deleted posts)
 * Supports genre filtering
 */
export async function getFeedPosts(
  limitCount: number = 20,
  lastPostId?: string,
  genre?: string
) {
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
    
    // Build query - query all posts ordered by createdAt
    // We'll filter by genre and status in memory to avoid index requirements
    let query: any = db.collection('posts')
      .orderBy('createdAt', 'desc')
      .limit(limitCount * 3) // Get more posts since we'll filter some out
    
    // If pagination cursor provided
    if (lastPostId) {
      const lastPostDoc = await db.collection('posts').doc(lastPostId).get()
      if (lastPostDoc.exists) {
        query = query.startAfter(lastPostDoc)
      }
    }
    
    let posts: any[] = []
    try {
      const snapshot = await query.get()
      posts = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }))
    } catch (queryError: any) {
      // If query fails (e.g., missing index), try a simpler query and sort in memory
      console.warn('[Server] Query with orderBy failed, trying without orderBy:', queryError.message)
      let fallbackQuery: any = db.collection('posts').limit(limitCount * 5)
      const fallbackSnapshot = await fallbackQuery.get()
      
      posts = fallbackSnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }))
      
      // Sort in memory by createdAt (descending)
      posts.sort((a: any, b: any) => {
        const aTime = a.createdAt?.toMillis?.() || a.createdAt?._seconds || 0
        const bTime = b.createdAt?.toMillis?.() || b.createdAt?._seconds || 0
        return bTime - aTime // Descending order
      })
    }
    
    // Filter out shadowbanned users, inactive posts, and apply genre filter
    const filteredPosts = posts
      .filter((post: any) => {
        // Exclude posts from shadowbanned users
        if (shadowbannedUserIds.has(post.userId)) {
          return false
        }
        
        // Include posts with status 'active' or no status field (backward compatibility)
        // Exclude posts with other statuses like 'deleted', 'hidden', etc.
        if (post.status && post.status !== 'active') {
          return false
        }
        
        // Apply genre filter if specified
        if (genre && genre !== 'All' && post.genre !== genre) {
          return false
        }
        
        return true
      })
      .slice(0, limitCount) // Limit to requested amount after filtering
    
    // Serialize all posts to convert Timestamps to plain values
    return filteredPosts.map(post => serializePostData(post))
  } catch (error: any) {
    console.error('[Server] Error getting feed posts:', error)
    return []
  }
}

/**
 * Get user posts (for profile page)
 */
export async function getUserPosts(userId: string) {
  try {
    const db = getAdminDb()
    
    const snapshot = await db.collection('posts')
      .where('userId', '==', userId)
      .where('status', '==', 'active')
      .orderBy('createdAt', 'desc')
      .get()
    
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    
    // Serialize all posts to convert Timestamps to plain values
    return posts.map(post => serializePostData(post))
  } catch (error: any) {
    console.error('[Server] Error getting user posts:', error)
    return []
  }
}

/**
 * Check if user has liked a post
 */
export async function checkUserLiked(userId: string, postId: string): Promise<boolean> {
  try {
    const db = getAdminDb()
    const likeDoc = await db.collection('posts')
      .doc(postId)
      .collection('likes')
      .doc(userId)
      .get()
    
    return likeDoc.exists
  } catch (error: any) {
    console.error('[Server] Error checking like:', error)
    return false
  }
}

/**
 * Get user's liked posts
 */
export async function getUserLikedPosts(userId: string): Promise<Set<string>> {
  try {
    const db = getAdminDb()
    
    // Get all posts user has liked
    // Note: This is expensive, so we'll optimize by getting likes from user's subcollection
    // But for now, we'll use a different approach - check likes on each post
    
    // Actually, we should store likes in posts/{postId}/likes/{userId}
    // So we need to query all posts and check their likes subcollections
    // This is not efficient, but for MVP it's acceptable
    
    // Better approach: Store user's likes in a separate collection or use client-side caching
    // For now, return empty set and let client handle it
    return new Set()
  } catch (error: any) {
    console.error('[Server] Error getting user liked posts:', error)
    return new Set()
  }
}

