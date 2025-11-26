'use client'

import { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/app/header'
import { PostCard } from '@/components/app/post-card'
import { PostCardSkeleton } from '@/components/app/post-card-skeleton'
import { getUser } from '@/lib/firestore-utils'
import { getUserPosts } from '@/app/actions/feed'
import { useAuth } from '@/lib/auth-context'
import { deletePost, editPost } from '@/app/actions/posts'
import { toast } from 'sonner'
import { EditProfileModal } from '@/components/app/edit-profile-modal'

export default function ProfilePage({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = use(params)
  const router = useRouter()
  const { user } = useAuth()
  const [profileUser, setProfileUser] = useState<any>(null)
  const [userPosts, setUserPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [showEditMenu, setShowEditMenu] = useState<string | null>(null)
  const [showEditProfile, setShowEditProfile] = useState(false)

  useEffect(() => {
    if (!uid) {
      setError('User ID is required')
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
        
        setError(null)
      } catch (error) {
        console.error('[v0] Error loading profile:', error)
        setProfileUser(null)
        setUserPosts([])
        setError('Failed to load profile')
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [uid])

  // Add smooth scrolling behavior to html element
  useEffect(() => {
    document.documentElement.setAttribute('data-scroll-behavior', 'smooth')
    return () => {
      document.documentElement.removeAttribute('data-scroll-behavior')
    }
  }, [])

  const handleLike = (postId: string) => {
    const newLiked = new Set(likedPosts)
    if (newLiked.has(postId)) {
      newLiked.delete(postId)
    } else {
      newLiked.add(postId)
    }
    setLikedPosts(newLiked)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <div className="pt-24 pb-8 px-4">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="h-40 bg-dark-card rounded-xl animate-pulse"></div>
            <div className="h-96 bg-dark-card rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!profileUser) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <div className="pt-24 pb-8 px-4 text-center">
          <div className="text-5xl mb-4">👻</div>
          <p className="text-gray-400 mb-6">User not found</p>
          <Link href="/app" className="inline-block btn-primary">
            Back to Feed
          </Link>
        </div>
      </div>
    )
  }

  const isOwnProfile = user?.uid === uid

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <div className="pt-24 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Profile</h1>
          </div>

          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-8 relative overflow-hidden shadow-2xl shadow-black/40 border border-dark-border rounded-3xl"
          >
            {/* Gradient Cover */}
            <div className="h-40 bg-gradient-to-r from-primary to-accent rounded-3xl"></div>

            <div className="px-6 pb-6 -mt-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-end gap-4">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl border-[4px] border-dark-bg shadow-lg shadow-black/40">
                    {profileUser.avatar || '👻'}
                  </div>

                  {/* Name and Handle */}
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold">
                      {profileUser.username || profileUser.displayName || 'Anonymous'}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      @{profileUser.username?.toLowerCase() || 'anonymous'}
                    </p>
                  </div>
                </div>

                {isOwnProfile && (
                  <div className="flex items-center gap-3 sm:self-end">
                    <button
                      onClick={() => setShowEditProfile(true)}
                      className="px-4 py-2 rounded-full border border-dark-border bg-dark-bg/80 text-sm font-medium transition hover:border-primary hover:shadow-[0_0_20px_rgba(129,140,248,0.35)]"
                    >
                      Edit Profile
                    </button>
                    <button
                      className="w-9 h-9 rounded-full border border-dark-border bg-dark-bg/80 flex items-center justify-center text-lg transition hover:border-primary hover:shadow-[0_0_20px_rgba(129,140,248,0.35)]"
                    >
                      ···
                    </button>
                  </div>
                )}
              </div>

              {/* Bio */}
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {profileUser.bio || 'Anonymous soul sharing stories'}
              </p>
            </div>
          </motion.div>

          {isOwnProfile && showEditProfile && (
            <EditProfileModal
              userId={user!.uid}
              initialProfile={{
                username: profileUser.username,
                bio: profileUser.bio,
                avatar: profileUser.avatar,
              }}
              onClose={() => setShowEditProfile(false)}
              onUpdated={(updated) => setProfileUser(updated)}
            />
          )}

          {/* User Posts */}
          <div>
            <h2 className="text-xl font-bold mb-6">Posts</h2>
            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <PostCardSkeleton key={i} />
                ))}
              </div>
            ) : userPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4 opacity-50">📝</div>
                <p className="text-gray-400">No posts yet</p>
              </div>
            ) : (
              <div className="space-y-6">
                {userPosts.map((post) => (
                  <div key={post.id} className="relative">
                    {isOwnProfile && (
                      <div className="absolute top-4 right-4 z-10">
                        <button
                          onClick={() => setShowEditMenu(showEditMenu === post.id ? null : post.id)}
                          className="p-2 bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-lg hover:bg-dark-card transition"
                        >
                          •••
                        </button>
                        {showEditMenu === post.id && (
                          <div className="absolute right-0 top-full mt-2 bg-dark-card border border-dark-border rounded-lg shadow-lg z-20 min-w-[120px]">
                            <button
                              onClick={async () => {
                                setShowEditMenu(null)
                                // TODO: Open edit modal
                                toast.info('Edit functionality coming soon')
                              }}
                              className="w-full px-4 py-2 text-left text-sm hover:bg-dark-secondary transition"
                            >
                              Edit
                            </button>
                            <button
                              onClick={async () => {
                                if (!confirm('Are you sure you want to delete this post?')) {
                                  setShowEditMenu(null)
                                  return
                                }
                                try {
                                  await deletePost(user!.uid, post.id)
                                  toast.success('Deleted')
                                  // Reload posts
                                  const posts = await getUserPosts(uid)
                                  setUserPosts(posts)
                                } catch (error: any) {
                                  toast.error(error.message || 'Failed to delete')
                                }
                                setShowEditMenu(null)
                              }}
                              className="w-full px-4 py-2 text-left text-sm hover:bg-dark-secondary text-error transition"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    <PostCard
                      post={post}
                      isLiked={likedPosts.has(post.id)}
                      onLike={() => handleLike(post.id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link href="/app" className="text-primary hover:text-accent transition">
              ← Back to Feed
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
