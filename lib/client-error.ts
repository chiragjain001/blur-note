'use client'

import { toast } from 'sonner'

type MaybeError = { message?: string; code?: string }

export function getErrorMessage(error: unknown, fallback: string): string {
  if (!error) return fallback

  if (typeof error === 'string') {
    return error
  }

  const err = error as MaybeError
  if (err.message && typeof err.message === 'string') {
    return err.message
  }

  return fallback
}

export function showErrorToast(error: unknown, fallback: string) {
  const message = getErrorMessage(error, fallback)
  toast.error(message)
  if (error) {
    // Still log for debugging; avoid crashing on structured errors.
    // eslint-disable-next-line no-console
    console.error('[UI] Error:', error)
  }
}

