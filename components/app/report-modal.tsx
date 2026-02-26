'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { reportPost } from '@/app/actions/reports'
import { toast } from 'sonner'
import { showErrorToast } from '@/lib/client-error'

interface ReportModalProps {
  postId: string
  onClose: () => void
}

const REPORT_REASONS = [
  'Abuse',
  'Hate Speech',
  'Self-Harm',
  'Spam',
]

export function ReportModal({ postId, onClose }: ReportModalProps) {
  const { user } = useAuth()
  const [selectedReason, setSelectedReason] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!user) {
      toast.error('You must be logged in to report')
      return
    }

    if (!selectedReason) {
      toast.error('Please select a reason')
      return
    }

    try {
      setLoading(true)
      await reportPost(postId, selectedReason)
      toast.success('Report submitted')
      onClose()
    } catch (error: any) {
      showErrorToast(error, 'Failed to submit report')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card border border-dark-border rounded-2xl w-full max-w-md">
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Report Post</h2>
          <p className="text-sm text-gray-400">
            Why are you reporting this post?
          </p>

          <div className="space-y-2">
            {REPORT_REASONS.map((reason) => (
              <button
                key={reason}
                onClick={() => setSelectedReason(reason)}
                className={`w-full px-4 py-3 rounded-lg text-left transition ${
                  selectedReason === reason
                    ? 'bg-primary text-white'
                    : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'
                }`}
              >
                {reason}
              </button>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              disabled={loading}
              className="flex-1 py-3 bg-dark-secondary border border-dark-border rounded-lg font-semibold hover:border-error hover:text-error transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedReason || loading}
              className="flex-1 py-3 bg-error text-white rounded-lg font-semibold hover:bg-error/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

