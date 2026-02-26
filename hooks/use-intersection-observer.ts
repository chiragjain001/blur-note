'use client'

import { useEffect } from 'react'

interface Options extends IntersectionObserverInit {
  enabled?: boolean
}

export function useIntersectionObserver(
  ref: React.RefObject<Element | null>,
  onIntersect: () => void,
  { root = null, rootMargin = '0px', threshold = 0.1, enabled = true }: Options = {},
) {
  useEffect(() => {
    const target = ref.current
    if (!enabled || !target) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect()
        }
      })
    }, { root, rootMargin, threshold })

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [ref, onIntersect, root, rootMargin, threshold, enabled])
}

