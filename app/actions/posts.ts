'use server'

import { getAdminDb, getAdminStorage, isAdmin } from '@/lib/firebase-admin'
import { requireAuth } from '@/lib/server-auth'
import { generateWaveformFromBlob } from '@/lib/waveform-generator'
import { Timestamp } from 'firebase-admin/firestore'
import { limitByUser, RateLimitError } from '@/lib/rate-limit'
import { PostInputSchema, sanitizeHtml } from '@/lib/validation'
import { AppError, isAppError } from '@/lib/app-error'

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
  // 1 post per 2 minutes
  await limitByUser(userId, 'create_post', 1, 2 * 60 * 1000)
}

/**
 * Get user data with denormalized fields
 * Creates a default user document if it doesn't exist
 */
async function getUserData(userId: string) {
  const db = getAdminDb()
  const userDoc = await db.collection('users').doc(userId).get()

  if (!userDoc.exists) {
    // Don't create a default user document - user should set up their profile first
    // Return null to indicate user needs to set up profile
    console.warn(`[Server] User document not found for ${userId}`)
    return {
      username: 'Anonymous',
      avatarUrl: '',
    }
  }

  const userData = userDoc.data()!
  // Handle both old format (avatar) and new format (avatarUrl)
  const avatarUrl = userData.avatarUrl || userData.avatar || ''
  // Use username from user document, fallback to 'Anonymous' only if truly missing
  const username = userData.username && userData.username !== 'Anonymous'
    ? userData.username
    : (userData.usernameLower ? userData.usernameLower : 'Anonymous')

  return {
    username: username,
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
 * Legacy placeholder for unauthenticated createPost.
 * New code should use createPostWithAuth, which relies on a verified server-side session.
 */
export async function createPost(_params: CreatePostParams) {
  throw new Error('createPost is deprecated. Use createPostWithAuth with a valid session.')
}

interface CreatePostWithAuthParams extends CreatePostParams {
  mediaDuration?: number // Duration in seconds (required for voice posts)
  genre?: string // Genre (required for all posts)
  modulationType?: 'original' | 'deep' | 'robot' | 'whisper' // Voice modulation type
}

/**
 * Create post for the currently authenticated user.
 */
export async function createPostWithAuth(params: CreatePostWithAuthParams) {
  try {
    const { uid: userId } = await requireAuth()
    const db = getAdminDb()

    // Check rate limit
    await checkRateLimit(userId)

    // Check if user is shadowbanned
    const shadowbanned = await isShadowbanned(userId)
    if (shadowbanned) {
      // Shadowbanned users can post, but posts won't appear to others
      // We'll handle this in the feed query
    }

    // Validate and sanitize text input
    const validated = PostInputSchema.parse({
      type: params.type,
      genre: params.genre ?? '',
      content: params.type === 'text' ? params.content ?? '' : '',
    })
    const sanitizedContent =
      params.type === 'text' ? sanitizeHtml(validated.content ?? '') : null

    if (params.type === 'text' && !sanitizedContent) {
      throw new Error('Text content is required')
    }

    // Get user data for denormalization
    const userData = await getUserData(userId)

    // Validate input
    if (!validated.genre) {
      throw new Error('Genre is required for all posts')
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
      genreColor: genreColors[params.genre || ''] || '#8b5cf6',
      modulationType: params.type === 'voice' ? (params.modulationType || 'original') : null,
      audioUrl: null,
      text: params.type === 'text' ? sanitizedContent : null,
      duration: params.type === 'voice' ? (params.mediaDuration || 0) : 0,
      reported: false,
      reports: [],
      authorUsername: userData.username,
      authorAvatarUrl: userData.avatarUrl,
      type: params.type,
      content: params.type === 'text' ? sanitizedContent : null, // Keep for backward compatibility
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
      // Upload audio file using Admin SDK
      const adminStorage = getAdminStorage()
      const postId = db.collection('posts').doc().id
      const storagePath = `voice-posts/${userId}/${postId}.webm`
      const bucket = adminStorage.bucket()
      const file = bucket.file(storagePath)

      // Convert Blob to Buffer for Admin SDK
      const arrayBuffer = await params.mediaBlob.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)

      await file.save(buffer, {
        metadata: {
          contentType: params.mediaMimeType || 'audio/webm',
        },
      })

      // Make file publicly accessible
      await file.makePublic()
      const mediaUrl = `https://storage.googleapis.com/${bucket.name}/${storagePath}`

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
    if (error instanceof RateLimitError) {
      console.warn('[Server] Post rate limit hit for user', error.message)
      throw new AppError('RATE_LIMIT', 'You are posting too quickly. Please wait and try again.')
    }

    if (isAppError(error)) {
      throw error
    }

    console.error('[Server] Error creating post:', error)

    if (error && error.name === 'ZodError') {
      const messages = (error as any).errors.map((e: any) => e.message).join(', ')
      throw new AppError('VALIDATION', `Invalid post data: ${messages}`)
    }

    throw new AppError('UNKNOWN', 'Something went wrong while creating your post. Please try again.')
  }
}

/**
 * Edit post (text, genre, and voice modulation can be updated)
 * Uses the currently authenticated user for authorization.
 */
export async function editPost(params: EditPostParams) {
  try {
    const { uid } = await requireAuth()
    const db = getAdminDb()
    const postRef = db.collection('posts').doc(params.postId)
    const postDoc = await postRef.get()

    if (!postDoc.exists) {
      throw new AppError('NOT_FOUND', 'Post not found')
    }

    const postData = postDoc.data()!

    // Verify ownership
    if (postData.userId !== uid) {
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
        throw new AppError('VALIDATION', 'Content cannot be empty')
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
        // Re-process audio with new modulation using Admin SDK
        const adminStorage = getAdminStorage()
        const storagePath = `voice-posts/${uid}/${params.postId}.webm`
        const bucket = adminStorage.bucket()
        const file = bucket.file(storagePath)

        // Convert Blob to Buffer for Admin SDK
        const arrayBuffer = await params.mediaBlob.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        await file.save(buffer, {
          metadata: {
            contentType: 'audio/webm',
          },
        })

        await file.makePublic()
        const audioUrl = `https://storage.googleapis.com/${bucket.name}/${storagePath}`

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
    if (isAppError(error)) {
      throw error
    }
    console.error('[Server] Error editing post:', error)
    throw new AppError('UNKNOWN', 'Something went wrong while updating your post.')
  }
}

/**
 * Edit text post (backward compatibility)
 */
export async function editTextPost(userId: string, params: EditPostParams) {
  return editPost({ ...params, text: params.content })
}

/**
 * Delete post
 */
export async function deletePost(postId: string) {
  try {
    const { uid } = await requireAuth()
    const db = getAdminDb()
    const postRef = db.collection('posts').doc(postId)
    const postDoc = await postRef.get()

    if (!postDoc.exists) {
      throw new AppError('NOT_FOUND', 'Post not found')
    }

    const postData = postDoc.data()!

    // Verify ownership or admin
    const userIsAdmin = await isAdmin(uid)
    if (postData.userId !== uid && !userIsAdmin) {
      throw new Error('Unauthorized')
    }

    // Delete audio file from storage if voice post
    if (postData.type === 'voice' && (postData.audioUrl || postData.mediaUrl)) {
      try {
        const adminStorage = getAdminStorage()
        const audioUrl = postData.audioUrl || postData.mediaUrl
        // Extract path from URL or use standard path
        let storagePath = `voice-posts/${postData.userId}/${postId}.webm`

        // Try to extract path from URL if it's a full URL
        if (audioUrl && typeof audioUrl === 'string' && audioUrl.includes('storage.googleapis.com')) {
          const urlParts = audioUrl.split('/')
          const bucketIndex = urlParts.findIndex(part => part.includes('.appspot.com'))
          if (bucketIndex >= 0) {
            storagePath = urlParts.slice(bucketIndex + 1).join('/')
          }
        }

        const bucket = adminStorage.bucket()
        const file = bucket.file(storagePath)

        // Check if file exists before deleting
        const [exists] = await file.exists()
        if (exists) {
          await file.delete()
          console.log('[Server] Deleted audio file:', storagePath)
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

