export type PostType = 'text' | 'voice'

export interface Post {
  id: string
  userId: string
  type: PostType
  genre: string
  genreColor?: string
  text?: string | null
  content?: string | null
  mediaUrl?: string | null
  mediaDuration?: number | null
  mediaMimeType?: string | null
  duration?: number
  modulationType?: 'original' | 'deep' | 'robot' | 'whisper' | null
  waveform?: number[] | null
  authorUsername?: string
  authorAvatarUrl?: string
  likesCount?: number
  commentsCount?: number
  status?: 'active' | 'hidden' | 'deleted'
  reported?: boolean
  reports?: Report[]
  createdAt?: string | Date | { toDate?: () => Date; _seconds?: number }
  updatedAt?: string | Date | { toDate?: () => Date; _seconds?: number }
}

export interface UserProfile {
  uid: string
  username?: string
  usernameLower?: string
  bio?: string
  avatar?: string
  avatarUrl?: string
  coverGradient?: string
  role?: 'user' | 'admin'
  status?: 'active' | 'banned' | 'shadowbanned'
}

export interface Comment {
  id: string
  postId: string
  userId: string
  authorUsername?: string
  authorAvatarUrl?: string
  content: string
  status?: 'active' | 'hidden' | 'deleted'
  createdAt?: string | Date | { toDate?: () => Date; _seconds?: number }
}

export interface Report {
  type: string
  userId: string
  createdAt?: string | Date | { toDate?: () => Date; _seconds?: number }
}

