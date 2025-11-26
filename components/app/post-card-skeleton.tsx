'use client'

import { motion } from 'framer-motion'

export function PostCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-dark-card border border-dark-border rounded-2xl overflow-hidden"
    >
      {/* Header Skeleton */}
      <div className="flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b border-dark-border/60">
        <div className="w-12 h-12 rounded-full bg-dark-secondary animate-pulse"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-dark-secondary rounded animate-pulse"></div>
          <div className="h-3 w-24 bg-dark-secondary rounded animate-pulse"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-4">
        <div className="space-y-2">
          <div className="h-4 w-full bg-dark-secondary rounded animate-pulse"></div>
          <div className="h-4 w-3/4 bg-dark-secondary rounded animate-pulse"></div>
        </div>

        {/* Audio Player Skeleton (optional) */}
        <div className="bg-dark-secondary rounded-xl p-4 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-dark-card"></div>
            <div className="flex-1 h-12 bg-dark-card rounded"></div>
            <div className="h-6 w-12 bg-dark-card rounded"></div>
          </div>
        </div>

        {/* Actions Skeleton */}
        <div className="mt-4 pt-4 border-t border-dark-border flex items-center gap-6">
          <div className="h-4 w-16 bg-dark-secondary rounded animate-pulse"></div>
          <div className="h-4 w-16 bg-dark-secondary rounded animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  )
}

