'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { ArrowLeft, MoreHorizontal, FileText, Mic } from 'lucide-react'
import { Header } from '@/components/app/header'
import { getUser } from '@/lib/firestore-utils'
import { getUserPosts } from '@/app/actions/feed'
import { getUserSavedPosts } from '@/app/actions/saved'
import { useAuth } from '@/lib/auth-context'
import { deletePost, editPost } from '@/app/actions/posts'
import { toast } from 'sonner'
import { EditProfileModal } from '@/components/app/edit-profile-modal'
import { EditPostModal } from '@/components/app/edit-post-modal'

const FALLBACK_GRADIENT = 'from-blue-500 via-indigo-500 to-purple-500'
const POST_GRADIENTS = [
  'from-pink-500 via-red-400 to-orange-400',
  'from-purple-600 via-indigo-500 to-blue-500',
  'from-emerald-400 via-teal-500 to-cyan-500',
  'from-blue-500 via-indigo-500 to-purple-500',
  'from-rose-500 via-pink-500 to-purple-500',
  'from-amber-400 via-orange-500 to-pink-500',
]

export default function ProfilePage({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = use(params)
  const { user } = useAuth()
  const [profileUser, setProfileUser] = useState<any>(null)
  const [userPosts, setUserPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditMenu, setShowEditMenu] = useState<string | null>(null)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showEditPost, setShowEditPost] = useState<any | null>(null)
  const [profileTab, setProfileTab] = useState<'posts' | 'saved'>('posts')
  const [savedPosts, setSavedPosts] = useState<any[]>([])
  const [savedLoading, setSavedLoading] = useState(false)

  useEffect(() => {
    if (!uid) {
      setLoading(false)
      return
    }

    const loadProfile = async () => {
      try {
        setLoading(true)
        const userData = await getUser(uid)

        if (!userData) {
          throw new Error('User not found')
        }

        setProfileUser(userData)

        try {
          const posts = await getUserPosts(uid)
          setUserPosts(posts)
        } catch (postError) {
          console.error('[v0] Error loading user posts:', postError)
          setUserPosts([])
        }

      } catch (err) {
        console.error('[v0] Error loading profile:', err)
        setProfileUser(null)
        setUserPosts([])
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [uid])

  const isOwnProfile = user?.uid === uid

  useEffect(() => {
    const loadSaved = async () => {
      if (!isOwnProfile || !uid) {
        setSavedPosts([])
        return
      }
      setSavedLoading(true)
      try {
        const saved = await getUserSavedPosts(uid)
        setSavedPosts(saved)
      } catch (err) {
        console.error('[Profile] Error loading saved posts', err)
        setSavedPosts([])
      } finally {
        setSavedLoading(false)
      }
    }

    loadSaved()
  }, [uid, isOwnProfile])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white">
        <Header />
        <div className="flex justify-center px-4 pb-16 pt-24">
          <div className="w-full max-w-md space-y-8">
            {/* Banner Skeleton */}
            <div className="relative">
              <div className="h-48 rounded-3xl bg-white/5 animate-pulse" />
              <div className="absolute -bottom-16 left-6">
                <div className="rounded-full bg-[#121212] p-1">
                  <div className="rounded-full bg-[#1E1E1E] p-1">
                    <div className="h-24 w-24 rounded-full bg-gray-800 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile Info Skeleton */}
            <div className="pt-14 space-y-3">
              <div className="h-8 w-48 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
            </div>
            
            {/* Stats Skeleton */}
            <div className="flex rounded-3xl border border-white/10">
              <div className="flex-1 border-r border-white/10 py-4 text-center">
                <div className="h-6 w-12 bg-white/5 rounded mx-auto mb-2 animate-pulse" />
                <div className="h-3 w-20 bg-white/5 rounded mx-auto animate-pulse" />
              </div>
              <div className="flex-1 py-4 text-center">
                <div className="h-6 w-12 bg-white/5 rounded mx-auto mb-2 animate-pulse" />
                <div className="h-3 w-16 bg-white/5 rounded mx-auto animate-pulse" />
              </div>
            </div>
            
            {/* Posts Skeleton */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 rounded-3xl bg-white/5 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!profileUser) {
    return (
      <div className="min-h-screen bg-[#121212] text-white">
        <Header />
        <div className="px-4 pt-24 text-center">
          <div className="text-5xl">👻</div>
          <p className="mt-4 text-white/60">User not found</p>
          <Link href="/app" className="mt-6 inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white">
            Back to Feed
          </Link>
        </div>
      </div>
    )
  }

  const coverGradient = profileUser.coverGradient || FALLBACK_GRADIENT
  const avatar = profileUser.avatar || '👻'
  const postCount = userPosts.length
  const savedCount = isOwnProfile ? savedPosts.length : 0

  const timeAgo = (date: any) => {
    try {
      const now = new Date()
      const postDate = date?.toDate?.() || new Date(date)
      const diff = now.getTime() - postDate.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      if (hours < 1) return 'just now'
      if (hours < 24) return `${hours}h ago`
      return `${Math.floor(hours / 24)}d ago`
    } catch {
      return 'recently'
    }
  }

  const currentPosts =
    profileTab === 'posts' ? userPosts : isOwnProfile ? savedPosts : []

  const currentLoading = profileTab === 'posts' ? loading : savedLoading

  const renderPostRow = (post: any) => {
    const gradient =
      post.gradient ||
      `bg-gradient-to-br ${POST_GRADIENTS[
        ((post.id || '').length + (post.genre || '').length) % POST_GRADIENTS.length
      ]}`
    const Icon = post.type === 'voice' ? Mic : FileText
    const content = post.content || post.text || 'Untitled post'

    return (
      <div
        key={post.id}
        className="relative flex items-center gap-4 rounded-3xl border border-white/5 bg-[#1C1C1F] p-4 text-white"
      >
        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${gradient}`}>
          <Icon size={18} className="text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white/90">{content}</p>
          <p className="mt-1 text-xs text-white/50">
            {timeAgo(post.createdAt)} • {post.genre || 'Thoughts'}
          </p>
        </div>
        {isOwnProfile && profileTab === 'posts' && (
          <div className="relative">
            <button
              onClick={() => setShowEditMenu(showEditMenu === post.id ? null : post.id)}
              className="rounded-full bg-white/5 p-2 text-white/70 transition hover:bg-white/10"
            >
              <MoreHorizontal size={18} />
            </button>
            {showEditMenu === post.id && (
              <div className="absolute right-0 top-full mt-2 min-w-[140px] rounded-2xl border border-white/10 bg-[#1E1E1E] text-sm shadow-lg z-10">
                {/* Only show Edit for text posts */}
                {post.type === 'text' && (
                  <button
                    onClick={() => {
                      setShowEditMenu(null)
                      setShowEditPost(post)
                    }}
                    className="block w-full px-4 py-2 text-left text-white/80 hover:bg-white/5"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={async () => {
                    if (!confirm('Delete this post?')) {
                      setShowEditMenu(null)
                      return
                    }
                    try {
                      await deletePost(post.id)
                      toast.success('Post deleted')
                      if (profileTab === 'posts') {
                        const posts = await getUserPosts(uid)
                        setUserPosts(posts)
                      } else {
                        const saved = await getUserSavedPosts(uid)
                        setSavedPosts(saved)
                      }
                    } catch (err: any) {
                      toast.error(err.message || 'Failed to delete')
                    }
                    setShowEditMenu(null)
                  }}
                  className="block w-full px-4 py-2 text-left text-red-300 hover:bg-white/5"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <div className="flex justify-center px-4 pb-16 pt-24">
        <div className="w-full max-w-md space-y-8">
          <div className="relative">
            <div className={`h-48 rounded-3xl bg-gradient-to-br ${coverGradient}`} />
            <Link
              href="/app"
              className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/30 p-2 text-white"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="absolute -bottom-16 left-6 flex items-end">
              <div className="rounded-full bg-[#121212] p-1">
                <div className="rounded-full bg-[#1E1E1E] p-1">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800 text-5xl shadow-2xl">
                    {avatar}
                  </div>
                </div>
              </div>
            </div>

            {isOwnProfile && (
              <div className="absolute -bottom-10 right-0 flex gap-2">
                <button
                  onClick={() => setShowEditProfile(true)}
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Edit Profile
                </button>
                <button className="rounded-xl border border-white/20 p-2 text-white/60">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            )}
          </div>

          <div className="pt-14">
            <h2 className="text-2xl font-bold">{profileUser.username || 'Anonymous'}</h2>
            <p className="text-sm text-white/50">@{profileUser.username?.toLowerCase() || 'anonymous'}</p>
            <p className="mt-4 whitespace-pre-line text-sm text-white/70">
              {profileUser.bio || 'Anonymous soul sharing stories'}
            </p>
          </div>

          <div className="flex rounded-3xl border border-white/10">
            <div className="flex-1 border-r border-white/10 py-4 text-center last:border-r-0">
              <p className="text-xl font-bold text-white">{postCount}</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Total Posts</p>
            </div>
            <div className="flex-1 py-4 text-center">
              <p className="text-xl font-bold text-white">{savedCount}</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Saved</p>
            </div>
          </div>

          {/* Only show tabs if own profile */}
          {isOwnProfile && (
            <div className="flex rounded-2xl border border-white/10 bg-white/5">
              <button
                onClick={() => setProfileTab('posts')}
                className={`flex-1 rounded-2xl py-3 text-sm font-semibold transition ${
                  profileTab === 'posts'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    : 'text-white/60'
                }`}
              >
                Your Posts
              </button>
              <button
                onClick={() => setProfileTab('saved')}
                className={`flex-1 rounded-2xl py-3 text-sm font-semibold transition ${
                  profileTab === 'saved'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    : 'text-white/60'
                }`}
              >
                Saved
              </button>
            </div>
          )}

          {currentLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((index) => (
                <div key={index} className="h-16 rounded-3xl bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : currentPosts.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/60">
              Nothing here yet.
            </div>
          ) : (
            <div className="space-y-4">{currentPosts.map((post) => renderPostRow(post))}</div>
          )}

          <div className="pt-4 text-center">
            <Link href="/app" className="text-sm text-white/60 underline">
              Back to Feed
            </Link>
          </div>
        </div>
      </div>

      {isOwnProfile && showEditProfile && (
        <EditProfileModal
          userId={user!.uid}
          initialProfile={{
            username: profileUser.username,
            bio: profileUser.bio,
            avatar: profileUser.avatar,
            coverGradient: profileUser.coverGradient,
          }}
          onClose={() => setShowEditProfile(false)}
          onUpdated={(updated) => setProfileUser(updated)}
        />
      )}

      {showEditPost && (
        <EditPostModal
          post={showEditPost}
          onClose={() => setShowEditPost(null)}
          onUpdated={async () => {
            if (profileTab === 'posts') {
              const posts = await getUserPosts(uid)
              setUserPosts(posts)
            }
            setShowEditPost(null)
          }}
        />
      )}
    </div>
  )
}

