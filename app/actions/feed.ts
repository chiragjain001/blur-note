'use server'

import { getAdminDb } from '@/lib/firebase-admin'
import type { Post } from '@/types/domain'

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
    
    // Get shadowbanned users only
    const shadowbannedSnapshot = await db
      .collection('users')
      .where('status', '==', 'shadowbanned')
      .get()
    const shadowbannedUserIds = new Set(
      shadowbannedSnapshot.docs.map((doc) => doc.id),
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
    
    let posts: Post[] = []
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
      .filter((post: Post) => {
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
 * - Queries by userId only (no composite index needed)
 * - Filters out non-active posts in memory
 * - Sorts by createdAt DESC in memory
 */
export async function getUserPosts(userId: string) {
  try {
    const db = getAdminDb()

    // Simple query by owner
    const snapshot = await db
      .collection('posts')
      .where('userId', '==', userId)
      .get()

    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Post[]

    // Keep only active (or legacy posts without status)
    const activePosts = posts.filter((post: Post) => {
      return !post.status || post.status === 'active'
    })

    // Sort newest first by createdAt
    activePosts.sort((a: any, b: any) => {
      const aTime =
        (a.createdAt as any)?.toMillis?.() ??
        ((a.createdAt as any)?._seconds ?? 0) * 1000
      const bTime =
        (b.createdAt as any)?.toMillis?.() ??
        ((b.createdAt as any)?._seconds ?? 0) * 1000
      return bTime - aTime
    })

    // Serialize all posts to convert Timestamps to plain values
    return activePosts.map((post) => serializePostData(post))
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

    // Use user-centric likes subcollection: users/{userId}/likes/{postId}
    const likesSnapshot = await db
      .collection('users')
      .doc(userId)
      .collection('likes')
      .get()

    const likedPostIds = new Set<string>()
    likesSnapshot.forEach((doc) => {
      likedPostIds.add(doc.id)
    })

    return likedPostIds
  } catch (error: any) {
    console.error('[Server] Error getting user liked posts:', error)
    return new Set()
  }
}

