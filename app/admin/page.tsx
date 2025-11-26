'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { getReportedPosts, deletePost as deletePostAction, clearReportStatus } from '@/app/actions/admin'
import { toast } from 'sonner'

// Hardcoded admin UIDs
const ADMIN_UIDS = [
  // Add your admin UIDs here
  'admin-uid-1',
  'admin-uid-2',
]

export default function AdminPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.push('/app')
      return
    }

    if (!ADMIN_UIDS.includes(user.uid)) {
      toast.error('Unauthorized: Admin access required')
      router.push('/app')
      return
    }

    loadReports()
  }, [user, router])

  const loadReports = async () => {
    try {
      setLoading(true)
      const reportedPosts = await getReportedPosts()
      setPosts(reportedPosts)
    } catch (error: any) {
      toast.error(error.message || 'Failed to load reports')
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return
    }

    try {
      await deletePostAction(postId)
      toast.success('Post deleted')
      loadReports()
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete post')
    }
  }

  const handleClearReport = async (postId: string) => {
    if (!confirm('Clear report status for this post?')) {
      return
    }

    try {
      await clearReportStatus(postId)
      toast.success('Report status cleared')
      loadReports()
    } catch (error: any) {
      toast.error(error.message || 'Failed to clear report status')
    }
  }

  if (!user || !ADMIN_UIDS.includes(user.uid)) {
    return null
  }

  return (
    <div className="min-h-screen bg-dark-bg p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
          <p className="text-gray-400">Manage reported posts</p>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-dark-card rounded-lg animate-pulse"></div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-gray-400">No reported posts</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-dark-card border border-dark-border rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Post ID: {post.id}</p>
                    <p className="text-lg font-semibold mb-2">
                      {post.text || post.content || 'Voice post'}
                    </p>
                    <p className="text-sm text-gray-400">
                      By: {post.authorUsername || 'Unknown'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleClearReport(post.id)}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                    >
                      Clear Report
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="px-4 py-2 bg-error text-white rounded-lg hover:bg-error/90 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="border-t border-dark-border pt-4 mt-4">
                  <p className="text-sm font-semibold mb-2">Reports ({post.reports?.length || 0}):</p>
                  <div className="space-y-2">
                    {post.reports?.map((report: any, idx: number) => (
                      <div key={idx} className="text-sm bg-dark-secondary p-2 rounded">
                        <span className="font-semibold">{report.type}</span>
                        <span className="text-gray-400 ml-2">
                          • {report.createdAt?.toDate?.()?.toLocaleString() || 'Unknown date'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

