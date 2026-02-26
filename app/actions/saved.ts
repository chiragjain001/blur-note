'use server'

import { getAdminDb } from '@/lib/firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

/**
 * Save a post for a user
 */
export async function savePost(userId: string, postId: string) {
  try {
    const db = getAdminDb()
    
    // Check if post exists
    const postRef = db.collection('posts').doc(postId)
    const postDoc = await postRef.get()
    
    if (!postDoc.exists) {
      throw new Error('Post not found')
    }
    
    // Check if already saved
    const savedRef = db.collection('users').doc(userId).collection('savedPosts').doc(postId)
    const savedDoc = await savedRef.get()
    
    if (savedDoc.exists) {
      // Already saved, return success
      return { success: true, saved: true }
    }
    
    // Save the post
    await savedRef.set({
      postId,
      createdAt: Timestamp.now(),
    })
    
    return { success: true, saved: true }
  } catch (error: any) {
    console.error('[Server] Error saving post:', error)
    throw error
  }
}

/**
 * Unsave a post for a user
 */
export async function unsavePost(userId: string, postId: string) {
  try {
    const db = getAdminDb()
    
    const savedRef = db.collection('users').doc(userId).collection('savedPosts').doc(postId)
    const savedDoc = await savedRef.get()
    
    if (!savedDoc.exists) {
      // Not saved, return success anyway
      return { success: true, saved: false }
    }
    
    // Remove the saved post
    await savedRef.delete()
    
    return { success: true, saved: false }
  } catch (error: any) {
    console.error('[Server] Error unsaving post:', error)
    throw error
  }
}

/**
 * Toggle save state for a post
 */
export async function toggleSavePost(userId: string, postId: string) {
  try {
    const db = getAdminDb()
    
    // Check if already saved
    const savedRef = db.collection('users').doc(userId).collection('savedPosts').doc(postId)
    const savedDoc = await savedRef.get()
    
    if (savedDoc.exists) {
      // Unsave
      await savedRef.delete()
      return { success: true, saved: false }
    } else {
      // Check if post exists
      const postRef = db.collection('posts').doc(postId)
      const postDoc = await postRef.get()
      
      if (!postDoc.exists) {
        throw new Error('Post not found')
      }
      
      // Save
      await savedRef.set({
        postId,
        createdAt: Timestamp.now(),
      })
      return { success: true, saved: true }
    }
  } catch (error: any) {
    console.error('[Server] Error toggling save:', error)
    throw error
  }
}

/**
 * Check if a post is saved by a user
 */
export async function checkPostSaved(userId: string, postId: string): Promise<boolean> {
  try {
    const db = getAdminDb()
    const savedRef = db.collection('users').doc(userId).collection('savedPosts').doc(postId)
    const savedDoc = await savedRef.get()
    return savedDoc.exists
  } catch (error: any) {
    console.error('[Server] Error checking saved post:', error)
    return false
  }
}

/**
 * Get all saved post IDs for a user
 */
export async function getUserSavedPostIds(userId: string): Promise<Set<string>> {
  try {
    const db = getAdminDb()
    const savedRef = db.collection('users').doc(userId).collection('savedPosts')
    const snapshot = await savedRef.get()
    
    const postIds = new Set<string>()
    snapshot.docs.forEach(doc => {
      const data = doc.data()
      if (data.postId) {
        postIds.add(data.postId)
      }
    })
    
    return postIds
  } catch (error: any) {
    console.error('[Server] Error getting saved posts:', error)
    return new Set()
  }
}

/**
 * Get saved posts with full post data
 */
export async function getUserSavedPosts(userId: string) {
  try {
    const db = getAdminDb()
    
    // Get saved post IDs
    const savedRef = db.collection('users').doc(userId).collection('savedPosts')
    const savedSnapshot = await savedRef.orderBy('createdAt', 'desc').get()
    
    if (savedSnapshot.empty) {
      return []
    }
    
    // Get full post data for each saved post
    const postIds = savedSnapshot.docs.map(doc => doc.data().postId).filter(Boolean)
    
    const posts = await Promise.all(
      postIds.map(async (postId) => {
        try {
          const postRef = db.collection('posts').doc(postId)
          const postDoc = await postRef.get()
          if (postDoc.exists) {
            return {
              id: postDoc.id,
              ...postDoc.data(),
            }
          }
          return null
        } catch (err) {
          console.error('[Server] Error fetching saved post:', err)
          return null
        }
      })
    )
    
    // Filter out nulls and serialize timestamps
    const validPosts = posts.filter(Boolean)
    
    // Serialize timestamps
    return validPosts.map((post: any) => {
      const serialized: any = { ...post }
      if (post.createdAt) {
        if (post.createdAt.toDate) {
          serialized.createdAt = post.createdAt.toDate().toISOString()
        } else if (post.createdAt._seconds) {
          serialized.createdAt = new Date(post.createdAt._seconds * 1000).toISOString()
        }
      }
      if (post.updatedAt) {
        if (post.updatedAt.toDate) {
          serialized.updatedAt = post.updatedAt.toDate().toISOString()
        } else if (post.updatedAt._seconds) {
          serialized.updatedAt = new Date(post.updatedAt._seconds * 1000).toISOString()
        }
      }
      return serialized
    })
  } catch (error: any) {
    console.error('[Server] Error getting saved posts:', error)
    return []
  }
}

