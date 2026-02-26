'use client'

import { useEffect } from 'react'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('[GlobalError]', error)
  }, [error])

  return (
    <html>
      <body className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4">
        <div className="max-w-md rounded-3xl border border-white/10 bg-black/70 p-8 shadow-2xl space-y-4">
          <h2 className="text-2xl font-bold">Something went wrong</h2>
          <p className="text-sm text-white/70">
            An unexpected error occurred. You can try again, or go back and continue browsing.
          </p>
          <div className="flex gap-3 pt-2">
            <button
              onClick={reset}
              className="flex-1 rounded-2xl bg-white text-black py-2.5 text-sm font-semibold hover:bg-white/90"
            >
              Try again
            </button>
            <button
              onClick={() => (window.location.href = '/app')}
              className="flex-1 rounded-2xl border border-white/30 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Go to feed
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

