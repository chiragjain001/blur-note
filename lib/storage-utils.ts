import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getStorageInstance } from './firebase'

export async function uploadVoiceFile(userId: string, file: Blob): Promise<string> {
  try {
    const storage = getStorageInstance()
    if (!storage) {
      throw new Error('Firebase Storage not initialized')
    }
    
    const timestamp = Date.now()
    const fileName = `${userId}-${timestamp}.webm`
    const storageRef = ref(storage, `voice-posts/${fileName}`)
    
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    
    return downloadURL
  } catch (error) {
    console.error('Error uploading voice file:', error)
    throw error
  }
}

export type VoiceVariant = 'original' | 'modulated'
export type VoiceFileExtension = 'mp3' | 'wav'

export async function uploadVoiceFileForPost(
  postId: string,
  variant: VoiceVariant,
  modulationType: string | null,
  file: Blob,
  extension: VoiceFileExtension = 'mp3',
): Promise<string> {
  try {
    const storage = getStorageInstance()
    if (!storage) {
      throw new Error('Firebase Storage not initialized')
    }

    const extension = 'wav'
    const basePath =
      variant === 'original'
        ? `voice-posts/${postId}/original.${extension}`
        : `voice-posts/${postId}/modulated/${modulationType || 'default'}.${extension}`

    const storageRef = ref(storage, basePath)

    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)

    return downloadURL
  } catch (error) {
    console.error('Error uploading voice file for post:', error)
    throw error
  }
}

export async function uploadProfileImage(userId: string, file: Blob): Promise<string> {
  try {
    const storage = getStorageInstance()
    if (!storage) {
      throw new Error('Firebase Storage not initialized')
    }
    
    const storageRef = ref(storage, `profile-images/${userId}`)
    
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    
    return downloadURL
  } catch (error) {
    console.error('Error uploading profile image:', error)
    throw error
  }
}
