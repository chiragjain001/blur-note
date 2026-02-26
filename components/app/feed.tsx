'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { LayoutGrid, Sparkles, Heart, Moon, Users, Zap, Smile, BookOpen } from 'lucide-react'
import { PostCard } from './post-card'
import { PostCardSkeleton } from './post-card-skeleton'
import { getFeedPosts, getUserLikedPosts } from '@/app/actions/feed'
import { useAuth } from '@/lib/auth-context'
import { GENRES } from '@/lib/genre-styles'
import type { Post } from '@/types/domain'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { toast } from 'sonner'

const CATEGORY_MEDIA: Record<string, { image: string; icon: any }> = {
  All: {
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80',
    icon: LayoutGrid,
  },
  Confession: {
    image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=400&q=80',
    icon: Sparkles,
  },
  Motivation: {
    image: 'https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?auto=format&fit=crop&w=400&q=80',
    icon: Zap,
  },
  'Love / Heartbreak': {
    image: 'https://images.unsplash.com/photo-1518568814500-bf5f8ca1b527?auto=format&fit=crop&w=400&q=80',
    icon: Heart,
  },
  'Dark Thoughts': {
    image: 'https://images.unsplash.com/photo-1504198358623-6e7eb0604961?auto=format&fit=crop&w=400&q=80',
    icon: Moon,
  },
  Friendship: {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80',
    icon: Users,
  },
  'Life Advice': {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    icon: BookOpen,
  },
  Humor: {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    icon: Smile,
  },
  Storytime: {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
    icon: Sparkles,
  },
}

export function Feed() {
  const { user } = useAuth()
  const [posts, setPosts] = useState<Post[]>([])
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasNewPosts, setHasNewPosts] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState<string>('All')
  const [hasMore, setHasMore] = useState(true)
  const lastPostIdRef = useRef<string | undefined>(undefined)
  const firstPostIdRef = useRef<string | undefined>(undefined)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const loadPosts = useCallback(
    async (genre: string, reset: boolean = false) => {
      try {
        if (reset) {
          setLoading(true)
          setPosts([])
          lastPostIdRef.current = undefined
          setHasMore(true)
        } else {
          setLoadingMore(true)
        }

        const firestorePosts = await getFeedPosts(
          10,
          lastPostIdRef.current,
          genre === 'All' ? undefined : genre
        )

        if (reset) {
          setPosts(firestorePosts)
        } else {
          setPosts((prev) => [...prev, ...firestorePosts])
        }

        // Track the first post ID for "new posts" detection
        if (firestorePosts.length > 0) {
          firstPostIdRef.current = firestorePosts[0].id
        }

        if (firestorePosts.length < 10) {
          setHasMore(false)
        } else {
          lastPostIdRef.current = firestorePosts[firestorePosts.length - 1].id
        }

        if (user) {
          // Fetch all liked post IDs for this user once, then intersect with loaded posts
          const likedIds = await getUserLikedPosts(user.uid)
          const newlyVisibleLiked = firestorePosts
            .map((post) => post.id)
            .filter((id: string) => likedIds.has(id))

          const likedSet = new Set(newlyVisibleLiked)
          if (reset) {
            setLikedPosts(likedSet)
          } else {
            setLikedPosts((prev) => new Set([...prev, ...likedSet]))
          }
        }
      } catch (error) {
        console.error('[Server] Error loading feed:', error)
        if (reset) {
          setPosts([])
        }
      } finally {
        setLoading(false)
        setLoadingMore(false)
      }
    },
    [user],
  )

  useEffect(() => {
    loadPosts(selectedGenre, true)
  }, [selectedGenre, user])

  // Lightweight polling for new posts to show a "New posts" toast
  useEffect(() => {
    if (!firstPostIdRef.current) return

    const interval = setInterval(async () => {
      try {
        const latest = await getFeedPosts(
          1,
          undefined,
          selectedGenre === 'All' ? undefined : selectedGenre
        )
        const latestId = latest[0]?.id
        if (latestId && latestId !== firstPostIdRef.current && !hasNewPosts) {
          setHasNewPosts(true)
          toast.info('New posts are available', {
            action: {
              label: 'Refresh',
              onClick: () => {
                setHasNewPosts(false)
                loadPosts(selectedGenre, true)
              },
            },
          })
        }
      } catch {
        // Ignore polling errors silently
      }
    }, 30000) // every 30s

    return () => clearInterval(interval)
  }, [selectedGenre, hasNewPosts, loadPosts])

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre)
    setHasMore(true)
  }

  const handleLoadMore = useCallback(() => {
    if (!loading && !loadingMore && hasMore) {
      loadPosts(selectedGenre, false)
    }
  }, [loading, loadingMore, hasMore, loadPosts, selectedGenre])

  useIntersectionObserver(sentinelRef, handleLoadMore, {
    threshold: 0.3,
    enabled: hasMore && !loading && !loadingMore,
  })

  const categories = ['All', ...GENRES]

  return (
    <div className="flex w-full justify-center bg-[#121212] px-4 py-10 text-white">
      <div className="w-full max-w-2xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white/90">BlurNote</h1>
            <p className="text-sm text-white/50">Share feelings & thoughts</p>
          </div>
        </div>

        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => {
            const config = CATEGORY_MEDIA[category] || CATEGORY_MEDIA.All
            const Icon = config.icon || Sparkles
            const isActive = selectedGenre === category
            return (
              <button
                key={category}
                onClick={() => handleGenreChange(category)}
                className={`relative h-32 w-24 flex-shrink-0 overflow-hidden rounded-3xl transition ${
                  isActive ? 'ring-2 ring-pink-500' : 'opacity-80'
                }`}
              >
                <img
                  src={config.image}
                  alt={category}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${
                    isActive ? 'from-pink-500/30 via-transparent to-black' : 'from-black/20 via-transparent to-black'
                  }`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-3 text-center">
                  <div
                    className={`mb-2 rounded-full p-1.5 backdrop-blur-md ${
                      isActive ? 'bg-pink-500 text-white' : 'bg-white/25 text-white'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-xs font-medium text-white">{category}</span>
                </div>
              </button>
            )
          })}
        </div>

        {loading && posts.length === 0 ? (
          <div className="space-y-5">
            {[1, 2, 3].map((i) => (
              <PostCardSkeleton key={i} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-3xl bg-white/5 p-10 text-center text-white/70">
            {selectedGenre === 'All'
              ? 'No posts yet. Be the first to share!'
              : `No ${selectedGenre} posts yet.`}
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} isLiked={likedPosts.has(post.id)} onLike={() => {}} />
              ))}
            </div>
            {hasMore && (
              <div className="flex flex-col items-center pb-8 pt-4">
                <div ref={sentinelRef} className="h-8 w-px" />
                {loadingMore && (
                  <p className="mt-2 text-xs text-white/60">Loading more...</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

