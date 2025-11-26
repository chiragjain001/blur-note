'use client'

import { useState, useEffect, useRef } from 'react'
import { PostCard } from './post-card'
import { PostCardSkeleton } from './post-card-skeleton'
import { getFeedPosts, checkUserLiked } from '@/app/actions/feed'
import { useAuth } from '@/lib/auth-context'
import { GENRES, type Genre } from '@/lib/genre-styles'
import { motion } from 'framer-motion'

export function Feed() {
  const { user } = useAuth()
  const [posts, setPosts] = useState<any[]>([])
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [selectedGenre, setSelectedGenre] = useState<string>('All')
  const [hasMore, setHasMore] = useState(true)
  const lastPostIdRef = useRef<string | undefined>(undefined)

  const loadPosts = async (genre: string, reset: boolean = false) => {
    try {
      if (reset) {
        setLoading(true)
        setPosts([])
        lastPostIdRef.current = undefined
      }

      const firestorePosts = await getFeedPosts(10, lastPostIdRef.current, genre === 'All' ? undefined : genre)
      
      if (reset) {
        setPosts(firestorePosts)
      } else {
        setPosts(prev => [...prev, ...firestorePosts])
      }

      if (firestorePosts.length < 10) {
        setHasMore(false)
      } else {
        lastPostIdRef.current = firestorePosts[firestorePosts.length - 1].id
      }

      // Load user's likes if logged in
      if (user) {
        const likeChecks = await Promise.all(
          firestorePosts.map(async (post) => {
            const liked = await checkUserLiked(user.uid, post.id)
            return liked ? post.id : null
          })
        )
        const likedSet = new Set(likeChecks.filter(Boolean) as string[])
        if (reset) {
          setLikedPosts(likedSet)
        } else {
          setLikedPosts(prev => new Set([...prev, ...likedSet]))
        }
      }
    } catch (error) {
      console.error('[Server] Error loading feed:', error)
      if (reset) {
        setPosts([])
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPosts(selectedGenre, true)
  }, [selectedGenre, user])

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre)
    setHasMore(true)
  }

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadPosts(selectedGenre, false)
    }
  }

  const handleLike = () => {
    // Like handling is now done in PostCard component
  }

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-12">
      <div className="max-w-2xl w-full mx-auto">
        {/* Genre Filter Pills */}
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {['All', ...GENRES].map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreChange(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  selectedGenre === genre
                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        {loading && posts.length === 0 ? (
          <div className="space-y-4 sm:space-y-6">
            {[1, 2, 3].map((i) => (
              <PostCardSkeleton key={i} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 sm:py-20">
            <div className="text-4xl sm:text-5xl mb-4">👻</div>
            <p className="text-gray-400 text-base sm:text-lg">
              {selectedGenre === 'All' 
                ? 'No posts yet. Be the first to share!'
                : `No ${selectedGenre} posts yet.`}
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4 sm:space-y-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  isLiked={likedPosts.has(post.id)}
                  onLike={() => {}}
                />
              ))}
            </div>
            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="px-6 py-3 bg-dark-secondary border border-dark-border rounded-lg font-semibold hover:border-primary transition disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
