import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const MEMORY_WINDOW_PADDING_MS = 250

export class RateLimitError extends Error {
  code = 'RATE_LIMIT_EXCEEDED' as const

  constructor(message: string) {
    super(message)
    this.name = 'RateLimitError'
  }
}

type MemoryEntry = {
  remaining: number
  resetAt: number
}

const memoryStore = new Map<string, MemoryEntry>()

function getRedisClient() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) return null

  return new Redis({
    url,
    token,
  })
}

/**
 * Apply a sliding-window rate limit for a given user + action.
 * Uses Upstash Redis when configured, otherwise falls back to
 * an in-memory store (for local development only).
 */
export async function limitByUser(
  uid: string,
  actionKey: string,
  max: number,
  windowMs: number,
) {
  const key = `rl:${actionKey}:${uid}`
  const redis = getRedisClient()

  if (redis) {
    const windowSeconds = Math.max(1, Math.round(windowMs / 1000))
    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(max, `${windowSeconds} s` as `${number} s`),
    })

    const result = await ratelimit.limit(key)
    if (!result.success) {
      throw new RateLimitError('Too many requests. Please slow down and try again.')
    }
    return
  }

  // Fallback: in-memory per-process limiter (development only)
  const now = Date.now()
  const existing = memoryStore.get(key)

  if (!existing || existing.resetAt <= now) {
    memoryStore.set(key, {
      remaining: max - 1,
      resetAt: now + windowMs + MEMORY_WINDOW_PADDING_MS,
    })
    return
  }

  if (existing.remaining <= 0) {
    throw new RateLimitError('Too many requests. Please slow down and try again.')
  }

  existing.remaining -= 1
}

