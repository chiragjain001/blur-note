import {
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  updateDoc,
  increment,
  writeBatch,
} from 'firebase/firestore'
import { getDbInstance, isFirebaseReady } from './firebase'

const checkFirebase = (operation: string = 'operation') => {
  if (!isFirebaseReady()) {
    console.warn(`[v0] Firebase not ready for ${operation}`)
    return false
  }
  const db = getDbInstance()
  if (!db) {
    console.warn(`[v0] Firestore database not initialized for ${operation}`)
    return false
  }
  return true
}

const getDb = () => {
  const db = getDbInstance()
  if (!db) {
    throw new Error('Firestore not initialized')
  }
  return db
}

// Create or update user
export async function createUser(uid: string, userData: any) {
  if (!checkFirebase('createUser')) return

  try {
    const db = getDb()
    const userRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userRef)

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid,
        username: userData.username || '',
        bio: userData.bio || '',
        avatar: userData.avatar || '👻',
        coverGradient: userData.coverGradient || 'from-primary to-accent',
        createdAt: new Date(),
      })
      console.log('[v0] User created:', uid)
    }
  } catch (error) {
    console.error('[v0] Error creating user:', error)
  }
}

// Get user data
export async function getUser(uid: string) {
  if (!checkFirebase('getUser') || !uid) {
    console.error('[v0] Invalid user ID or Firebase not ready')
    return null
  }

  try {
    const db = getDb()
    const userRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userRef)
    
    if (!userSnap.exists()) {
      console.log(`[v0] User not found: ${uid}`)
      return null
    }
    
    return userSnap.data()
  } catch (error) {
    console.error('[v0] Error getting user:', error)
    return null
  }
}

// Create post
export async function createPost(postData: any) {
  if (!checkFirebase('createPost')) throw new Error('Firebase not initialized')

  try {
    const db = getDb()
    const postsRef = collection(db, 'posts')
    const docRef = await addDoc(postsRef, {
      ...postData,
      likeCount: 0,
      commentCount: 0,
      reportCount: 0,
      createdAt: new Date(),
    })

    // Update user's post count
    if (postData.authorUid) {
      const userRef = doc(db, 'users', postData.authorUid)
      await updateDoc(userRef, {
        postCount: increment(1),
      })
    }

    console.log('[v0] Post created:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('[v0] Error creating post:', error)
    throw error
  }
}

export async function updatePostAudio(postId: string, audioData: any) {
  if (!checkFirebase('updatePostAudio')) throw new Error('Firebase not initialized')

  try {
    const db = getDb()
    const postRef = doc(db, 'posts', postId)
    await updateDoc(postRef, audioData)
  } catch (error) {
    console.error('[v0] Error updating post audio:', error)
    throw error
  }
}

export async function updatePostMetadata(postId: string, metadata: any) {
  if (!checkFirebase('updatePostMetadata')) throw new Error('Firebase not initialized')

  try {
    const db = getDb()
    const postRef = doc(db, 'posts', postId)
    await updateDoc(postRef, metadata)
  } catch (error) {
    console.error('[v0] Error updating post metadata:', error)
    throw error
  }
}

// Get posts (with pagination)
export async function getPosts(limitCount = 20) {
  if (!checkFirebase('getPosts')) return []

  try {
    const db = getDb()
    const postsRef = collection(db, 'posts')
    const q = query(
      postsRef,
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )
    const querySnapshot = await getDocs(q)
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    console.log('[v0] Loaded posts:', posts.length)
    return posts
  } catch (error) {
    console.error('[v0] Error getting posts:', error)
    return []
  }
}

// Get user posts
export async function getUserPosts(uid: string) {
  if (!checkFirebase('getUserPosts')) return []

  try {
    const db = getDb()
    const postsRef = collection(db, 'posts')
    const q = query(
      postsRef,
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs
      .filter((doc: any) => doc.data().authorUid === uid)
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
  } catch (error) {
    console.error('[v0] Error getting user posts:', error)
    return []
  }
}

// Like post
export async function likePost(postId: string, userId: string) {
  if (!checkFirebase('likePost')) throw new Error('Firebase not initialized')

  try {
    const db = getDb()
    const batch = writeBatch(db)

    // Add to user's likes subcollection
    const likesRef = doc(db, 'users', userId, 'likes', postId)
    batch.set(likesRef, { createdAt: new Date() })

    // Increment post likeCount
    const postRef = doc(db, 'posts', postId)
    batch.update(postRef, { likeCount: increment(1) })

    await batch.commit()
  } catch (error) {
    console.error('[v0] Error liking post:', error)
    throw error
  }
}

// Unlike post
export async function unlikePost(postId: string, userId: string) {
  if (!checkFirebase('unlikePost')) throw new Error('Firebase not initialized')

  try {
    const db = getDb()
    const batch = writeBatch(db)

    // Remove from user's likes subcollection
    const likesRef = doc(db, 'users', userId, 'likes', postId)
    batch.delete(likesRef)

    // Decrement post likeCount
    const postRef = doc(db, 'posts', postId)
    batch.update(postRef, { likeCount: increment(-1) })

    await batch.commit()
  } catch (error) {
    console.error('[v0] Error unliking post:', error)
    throw error
  }
}

// Get user likes
export async function getUserLikes(userId: string) {
  if (!checkFirebase('getUserLikes')) return new Set()

  try {
    const db = getDb()
    const likesRef = collection(db, 'users', userId, 'likes')
    const querySnapshot = await getDocs(likesRef)
    return new Set(querySnapshot.docs.map((doc) => doc.id))
  } catch (error) {
    console.error('[v0] Error getting user likes:', error)
    return new Set()
  }
}

// Add comment
export async function addComment(postId: string, commentData: any) {
  if (!checkFirebase('addComment')) throw new Error('Firebase not initialized')

  try {
    const db = getDb()
    const batch = writeBatch(db)

    // Add comment to comments collection
    const commentsRef = collection(db, 'comments')
    const commentDocRef = await addDoc(commentsRef, {
      postId,
      ...commentData,
      createdAt: new Date(),
    })

    // Increment post commentCount
    const postRef = doc(db, 'posts', postId)
    batch.update(postRef, { commentCount: increment(1) })

    await batch.commit()
    return commentDocRef.id
  } catch (error) {
    console.error('[v0] Error adding comment:', error)
    throw error
  }
}

// Get comments for post
export async function getPostComments(postId: string) {
  if (!checkFirebase('getPostComments')) return []

  try {
    const db = getDb()
    const commentsRef = collection(db, 'comments')
    const q = query(
      commentsRef,
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs
      .filter((doc: any) => doc.data().postId === postId)
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
  } catch (error) {
    console.error('[v0] Error getting comments:', error)
    return []
  }
}

// Report post
export async function reportPost(postId: string, userId: string, reason: string) {
  if (!checkFirebase('reportPost')) throw new Error('Firebase not initialized')

  try {
    const db = getDb()
    const batch = writeBatch(db)

    // Add report
    const reportsRef = collection(db, 'comments')
    await addDoc(reportsRef, {
      postId,
      reportingUid: userId,
      reason,
      createdAt: new Date(),
    })

    // Increment post reportCount
    const postRef = doc(db, 'posts', postId)
    batch.update(postRef, { reportCount: increment(1) })

    await batch.commit()
  } catch (error) {
    console.error('[v0] Error reporting post:', error)
    throw error
  }
}
