'use client'

import { useEffect, useState } from 'react'
import { getPostComments, addComment as addCommentAction } from '@/app/actions/comments'
import { useAuth } from '@/lib/auth-context'
import { BottomSheet } from '@/components/ui/bottom-sheet'
import { getDbInstance } from '@/lib/firebase'
import { collection, query, where, orderBy, onSnapshot, Timestamp } from 'firebase/firestore'
import { showErrorToast } from '@/lib/client-error'

interface CommentsModalProps {
  postId: string
  onClose: () => void
}

export function CommentsModal({ postId, onClose }: CommentsModalProps) {
  const { user } = useAuth()
  const [comments, setComments] = useState<any[]>([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (postId.startsWith('demo-')) {
      setComments([])
      setLoading(false)
      return
    }

    const db = getDbInstance()
    if (!db) {
      setLoading(false)
      return
    }

    // Set up real-time listener
    const commentsRef = collection(db, 'posts', postId, 'comments')
    const q = query(commentsRef, where('status', '==', 'active'), orderBy('createdAt', 'desc'))
    
    setLoading(true)
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const commentsData = snapshot.docs.map((doc) => {
          const data = doc.data()
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate?.() || data.createdAt,
          }
        })
        setComments(commentsData)
        setLoading(false)
      },
      (error) => {
        console.error('[CommentsModal] Error listening to comments:', error)
        // Fallback to server action
        getPostComments(postId).then(setComments).catch(console.error)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [postId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newComment.trim() || !user) return

    if (postId.startsWith('demo-')) {
      setError('Sign in to comment on real posts!')
      return
    }

    const commentText = newComment.trim()
    
    // Optimistic UI: Add comment immediately
    const optimisticComment = {
      id: `temp-${Date.now()}`,
      userId: user.uid,
      authorUsername: user.displayName || 'Anonymous',
      authorAvatarUrl: user.photoURL || '',
      content: commentText,
      createdAt: new Date(),
      status: 'active',
    }
    
    setComments((prev) => [optimisticComment, ...prev])
    setNewComment('')
    setSubmitting(true)
    setError('')

    try {
      await addCommentAction({
        postId,
        userId: user.uid,
        content: commentText,
      })
      
      // Real-time listener will update the list automatically
      // Remove optimistic comment if it's still there (should be replaced by real one)
      setTimeout(() => {
        setComments((prev) => prev.filter((c) => !c.id.startsWith('temp-')))
      }, 1000)
    } catch (err: any) {
      // Revert optimistic update
      setComments((prev) => prev.filter((c) => c.id !== optimisticComment.id))
      setNewComment(commentText)
      setError(err?.message || 'Failed to post comment')
      showErrorToast(err, 'Failed to post comment')
    } finally {
      setSubmitting(false)
    }
  }

  const timeAgo = (date: any) => {
    try {
      const now = new Date()
      const commentDate = date?.toDate?.() || new Date(date)
      const diff = now.getTime() - commentDate.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      if (hours < 1) return 'just now'
      if (hours < 24) return `${hours}h ago`
      return `${Math.floor(hours / 24)}d ago`
    } catch {
      return 'recently'
    }
  }

  return (
    <BottomSheet isOpen onClose={onClose} title="Comments">
      <div className="space-y-4">
        {loading ? (
          <div className="py-8 text-center text-gray-400">Loading comments...</div>
        ) : comments.length === 0 ? (
          <div className="py-8 text-center text-gray-400">No comments yet. Be the first!</div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-lg">
                👤
              </div>
              <div className="flex-1">
                <div className="rounded-3xl rounded-tl-none bg-white/10 p-3 text-sm text-white/90">
                  <span className="block font-semibold">{comment.authorUsername || 'Anonymous'}</span>
                  <p className="mt-1 text-white/80">{comment.content}</p>
                </div>
                <div className="mt-1 flex gap-3 pl-3 text-xs text-white/50">
                  <span>{timeAgo(comment.createdAt)}</span>
                  <button className="font-semibold text-white/60">Like</button>
                  <button className="font-semibold text-white/60">Reply</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {user ? (
        <div className="mt-6 border-t border-white/10 pt-4">
          {error && <p className="mb-2 text-sm text-red-400">{error}</p>}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a supportive comment..."
              disabled={submitting}
              className="flex-1 rounded-2xl bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!newComment.trim() || submitting}
              className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
            >
              {submitting ? '...' : 'Post'}
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-6 text-center text-sm text-white/60">Sign in to comment</div>
      )}
    </BottomSheet>
  )
}

