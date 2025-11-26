'use client'

import { useEffect, useState } from 'react'
import { getPostComments, addComment as addCommentAction } from '@/app/actions/comments'
import { useAuth } from '@/lib/auth-context'

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
    const loadComments = async () => {
      try {
        if (postId.startsWith('demo-')) {
          setComments([])
          setLoading(false)
          return
        }

        const postComments = await getPostComments(postId)
        setComments(postComments)
      } catch (err) {
        console.error('[v0] Error loading comments:', err)
      } finally {
        setLoading(false)
      }
    }

    loadComments()
  }, [postId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newComment.trim() || !user) return

    if (postId.startsWith('demo-')) {
      setError('Sign in to comment on real posts!')
      return
    }

    try {
      setSubmitting(true)
      setError('')

      await addCommentAction({
        postId,
        userId: user.uid,
        content: newComment.trim(),
      })

      setNewComment('')

      // Reload comments
      const updatedComments = await getPostComments(postId)
      setComments(updatedComments)
    } catch (err: any) {
      setError(err.message || 'Failed to post comment')
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card border border-dark-border rounded-2xl w-full max-w-2xl max-h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <h2 className="text-2xl font-bold">Comments</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            ✕
          </button>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-400">Loading comments...</p>
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No comments yet. Be the first!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 pb-4 border-b border-dark-border last:border-b-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center text-sm">
                  👤
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm">{comment.authorUsername || 'Anonymous'}</p>
                    <p className="text-xs text-gray-400">{timeAgo(comment.createdAt)}</p>
                  </div>
                  <p className="text-sm text-gray-200 mt-1">{comment.content}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Comment Input */}
        {user ? (
          <div className="border-t border-dark-border p-6 bg-dark-secondary/50">
            {error && (
              <p className="text-error text-sm mb-3">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                disabled={submitting}
                className="flex-1 bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!newComment.trim() || submitting}
                className="btn-primary px-6 py-2 disabled:opacity-50"
              >
                {submitting ? '...' : 'Post'}
              </button>
            </form>
          </div>
        ) : (
          <div className="border-t border-dark-border p-6 bg-dark-secondary/50 text-center text-gray-400 text-sm">
            Sign in to comment
          </div>
        )}
      </div>
    </div>
  )
}
