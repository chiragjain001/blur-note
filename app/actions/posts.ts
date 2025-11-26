'use server'

import { getAuthInstance } from '@/lib/firebase'
import { getAdminDb, getAdminAuth, isAdmin } from '@/lib/firebase-admin'
import { getStorageInstance } from '@/lib/firebase'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { generateWaveformFromBlob } from '@/lib/waveform-generator'
import { Timestamp } from 'firebase-admin/firestore'

interface CreatePostParams {
  type: 'text' | 'voice'
  content?: string | null
  mediaBlob?: Blob | null
  mediaMimeType?: string | null
}

interface EditPostParams {
  postId: string
  content?: string
  text?: string
  genre?: string
  modulationType?: 'original' | 'deep' | 'robot' | 'whisper'
  mediaBlob?: Blob // For re-processing voice with new modulation
}

/**
 * Rate limiting: Check if user posted within last 2 minutes
 */
async function checkRateLimit(userId: string): Promise<void> {
  const db = getAdminDb()
  const postsRef = db.collection('posts')
  
  const twoMinutesAgo = Timestamp.fromMillis(Date.now() - 2 * 60 * 1000)
  const recentPosts = await postsRef
    .where('userId', '==', userId)
    .where('createdAt', '>', twoMinutesAgo)
    .limit(1)
    .get()

  if (!recentPosts.empty) {
    throw new Error('Rate limit: Please wait 2 minutes between posts')
  }
}

/**
 * Get user data with denormalized fields
 * Creates a default user document if it doesn't exist
 */
async function getUserData(userId: string) {
  const db = getAdminDb()
  const userDoc = await db.collection('users').doc(userId).get()
  
  if (!userDoc.exists) {
    // Create a default user document if it doesn't exist
    // This can happen if user authenticated but document creation failed
    const defaultUserData = {
      uid: userId,
      username: 'Anonymous',
      role: 'user',
      status: 'active',
      avatarUrl: '',
      bio: '',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    }
    
    await db.collection('users').doc(userId).set(defaultUserData)
    
    return {
      username: 'Anonymous',
      avatarUrl: '',
    }
  }

  const userData = userDoc.data()!
  // Handle both old format (avatar) and new format (avatarUrl)
  const avatarUrl = userData.avatarUrl || userData.avatar || ''
  
  return {
    username: userData.username || 'Anonymous',
    avatarUrl: avatarUrl,
  }
}

/**
 * Check if user is shadowbanned
 */
async function isShadowbanned(userId: string): Promise<boolean> {
  const db = getAdminDb()
  const userDoc = await db.collection('users').doc(userId).get()
  
  if (!userDoc.exists) {
    return false
  }

  const userData = userDoc.data()!
  return userData.status === 'shadowbanned'
}

/**
 * Create a new post (text or voice)
 */
export async function createPost(params: CreatePostParams) {
  try {
    // Get auth token from request
    // Note: In Next.js Server Actions, we need to pass the auth token
    // For now, we'll use a workaround with client-side auth
    // In production, use cookies or headers to pass the token
    
    const db = getAdminDb()
    
    // Validate input
    if (params.type === 'text' && !params.content?.trim()) {
      throw new Error('Text content is required')
    }
    
    if (params.type === 'voice') {
      if (!params.mediaBlob) {
        throw new Error('Voice recording is required')
      }
      
      // Validate duration (60 seconds max)
      // We'll check this on the client side, but validate file size here
      if (params.mediaBlob.size > 5 * 1024 * 1024) {
        throw new Error('Voice file must be less than 5MB')
      }
    }

    // Note: In a real implementation, you'd get userId from the auth token
    // For now, we'll need to pass it from the client
    // This is a limitation - we'll need to refactor auth context
    
    throw new Error('createPost: Auth token required - needs refactoring')
  } catch (error: any) {
    console.error('[Server] Error creating post:', error)
    throw error
  }
}

interface CreatePostWithAuthParams extends CreatePostParams {
  mediaDuration?: number // Duration in seconds (required for voice posts)
  genre?: string // Genre (required for all posts)
  modulationType?: 'original' | 'deep' | 'robot' | 'whisper' // Voice modulation type
}

/**
 * Create post with userId (called from client with auth)
 * This is a temporary solution until we implement proper token passing
 */
export async function createPostWithAuth(
  userId: string,
  params: CreatePostWithAuthParams
) {
  try {
    const db = getAdminDb()
    
    // Check rate limit
    await checkRateLimit(userId)
    
    // Check if user is shadowbanned
    const shadowbanned = await isShadowbanned(userId)
    if (shadowbanned) {
      // Shadowbanned users can post, but posts won't appear to others
      // We'll handle this in the feed query
    }
    
    // Get user data for denormalization
    const userData = await getUserData(userId)
    
    // Validate input
    if (!params.genre) {
      throw new Error('Genre is required for all posts')
    }
    
    if (params.type === 'text' && !params.content?.trim()) {
      throw new Error('Text content is required')
    }
    
    if (params.type === 'voice') {
      if (!params.mediaBlob) {
        throw new Error('Voice recording is required')
      }
      
      if (params.mediaBlob.size > 5 * 1024 * 1024) {
        throw new Error('Voice file must be less than 5MB')
      }
      
      if (!params.mediaDuration || params.mediaDuration > 60) {
        throw new Error('Voice recording must be 60 seconds or less')
      }
      
      if (!params.modulationType) {
        throw new Error('Modulation type is required for voice posts')
      }
    }

    const now = Timestamp.now()
    
    // Get genre color
    const genreColors: Record<string, string> = {
      'Confession': '#FF6B6B',
      'Motivation': '#6BCB77',
      'Love / Heartbreak': '#A66CFF',
      'Dark Thoughts': '#FF4C4C',
      'Friendship': '#4D96FF',
      'Life Advice': '#FFD93D',
      'Humor': '#FF9F1C',
      'Storytime': '#845EC2',
    }
    
    const postData: any = {
      id: '', // Will be set when creating document
      userId,
      genre: params.genre,
      genreColor: genreColors[params.genre] || '#8b5cf6',
      modulationType: params.type === 'voice' ? (params.modulationType || 'original') : null,
      audioUrl: null,
      text: params.type === 'text' ? params.content : null,
      duration: params.type === 'voice' ? (params.mediaDuration || 0) : 0,
      reported: false,
      reports: [],
      authorUsername: userData.username,
      authorAvatarUrl: userData.avatarUrl,
      type: params.type,
      content: params.type === 'text' ? params.content : null, // Keep for backward compatibility
      mediaUrl: null,
      mediaDuration: params.type === 'voice' ? params.mediaDuration : null,
      mediaMimeType: null,
      waveform: null,
      status: 'active',
      likesCount: 0,
      commentsCount: 0,
      createdAt: now,
      updatedAt: now,
      isEdited: false,
    }

    // Handle voice post
    if (params.type === 'voice' && params.mediaBlob) {
      // Upload audio file
      const storage = getStorageInstance()
      if (!storage) {
        throw new Error('Storage not initialized')
      }

      const postId = db.collection('posts').doc().id
      const storagePath = `voice-posts/${userId}/${postId}.webm`
      const storageRef = ref(storage, storagePath)
      
      await uploadBytes(storageRef, params.mediaBlob)
      const mediaUrl = await getDownloadURL(storageRef)
      
      // Generate waveform
      const waveform = await generateWaveformFromBlob(params.mediaBlob, 100)
      
      postData.mediaUrl = mediaUrl
      postData.audioUrl = mediaUrl // Also set audioUrl for new data model
      postData.mediaDuration = params.mediaDuration
      postData.duration = params.mediaDuration // Also set duration for new data model
      postData.mediaMimeType = params.mediaMimeType || 'audio/webm'
      postData.waveform = waveform
      postData.id = postId
      
      // Create post document
      await db.collection('posts').doc(postId).set(postData)
      return { success: true, postId }
    } else {
      // Text post
      const postRef = db.collection('posts').doc()
      postData.id = postRef.id
      await postRef.set(postData)
      return { success: true, postId: postRef.id }
    }
  } catch (error: any) {
    console.error('[Server] Error creating post:', error)
    throw error
  }
}

/**
 * Edit post (text, genre, and voice modulation can be updated)
 */
export async function editPost(userId: string, params: EditPostParams) {
  try {
    const db = getAdminDb()
    const postRef = db.collection('posts').doc(params.postId)
    const postDoc = await postRef.get()
    
    if (!postDoc.exists) {
      throw new Error('Post not found')
    }
    
    const postData = postDoc.data()!
    
    // Verify ownership
    if (postData.userId !== userId) {
      throw new Error('Unauthorized: You can only edit your own posts')
    }
    
    const updateData: any = {
      updatedAt: Timestamp.now(),
      isEdited: true,
    }
    
    // Update text content (for text posts or voice captions)
    if (params.text !== undefined || params.content !== undefined) {
      const textContent = params.text || params.content
      if (!textContent?.trim()) {
        throw new Error('Content cannot be empty')
      }
      updateData.text = textContent
      updateData.content = textContent // Keep for backward compatibility
    }
    
    // Update genre
    if (params.genre) {
      const genreColors: Record<string, string> = {
        'Confession': '#FF6B6B',
        'Motivation': '#6BCB77',
        'Love / Heartbreak': '#A66CFF',
        'Dark Thoughts': '#FF4C4C',
        'Friendship': '#4D96FF',
        'Life Advice': '#FFD93D',
        'Humor': '#FF9F1C',
        'Storytime': '#845EC2',
      }
      updateData.genre = params.genre
      updateData.genreColor = genreColors[params.genre] || '#8b5cf6'
    }
    
    // Update modulation for voice posts (requires re-processing)
    if (params.modulationType && postData.type === 'voice') {
      if (params.mediaBlob) {
        // Re-process audio with new modulation
        const storage = getStorageInstance()
        if (!storage) {
          throw new Error('Storage not initialized')
        }
        
        const storagePath = `voice-posts/${userId}/${params.postId}.webm`
        const storageRef = ref(storage, storagePath)
        
        await uploadBytes(storageRef, params.mediaBlob)
        const audioUrl = await getDownloadURL(storageRef)
        
        // Generate new waveform
        const waveform = await generateWaveformFromBlob(params.mediaBlob, 100)
        
        updateData.audioUrl = audioUrl
        updateData.mediaUrl = audioUrl // Keep for backward compatibility
        updateData.waveform = waveform
      }
      updateData.modulationType = params.modulationType
    }
    
    // Update post
    await postRef.update(updateData)
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error editing post:', error)
    throw error
  }
}

/**
 * Edit text post (backward compatibility)
 */
export async function editTextPost(userId: string, params: EditPostParams) {
  return editPost(userId, { ...params, text: params.content })
}

/**
 * Delete post
 */
export async function deletePost(userId: string, postId: string) {
  try {
    const db = getAdminDb()
    const postRef = db.collection('posts').doc(postId)
    const postDoc = await postRef.get()
    
    if (!postDoc.exists) {
      throw new Error('Post not found')
    }
    
    const postData = postDoc.data()!
    
    // Verify ownership or admin
    const userIsAdmin = await isAdmin(userId)
    if (postData.userId !== userId && !userIsAdmin) {
      throw new Error('Unauthorized')
    }
    
    // Delete audio file from storage if voice post
    if (postData.type === 'voice' && postData.audioUrl) {
      try {
        const storage = getStorageInstance()
        if (storage) {
          // Extract path from URL or use standard path
          const storagePath = `voice-posts/${postData.userId}/${params.postId}.webm`
          const storageRef = ref(storage, storagePath)
          // Note: Firebase Admin SDK needed for delete, but we can mark for deletion
          // For now, we'll rely on Storage rules and manual cleanup
        }
      } catch (storageError) {
        console.error('[Server] Error deleting audio file:', storageError)
        // Continue with post deletion even if storage deletion fails
      }
    }
    
    // Delete post document
    await postRef.delete()
    
    return { success: true }
  } catch (error: any) {
    console.error('[Server] Error deleting post:', error)
    throw error
  }
}

