import createDOMPurify from 'isomorphic-dompurify'
import { JSDOM } from 'jsdom'
import { z } from 'zod'

// DOMPurify setup that works on both server and client
const window = new JSDOM('').window as unknown as Window
const DOMPurify = createDOMPurify(window as unknown as Window)

export const PostInputSchema = z.object({
  type: z.enum(['text', 'voice']),
  genre: z.string().min(1).max(64),
  content: z
    .string()
    .max(2000)
    .optional()
    .transform((val) => (val ?? '').trim()),
})

export const CommentInputSchema = z.object({
  content: z
    .string()
    .min(1, 'Comment content is required')
    .max(1000, 'Comment must be less than 1000 characters')
    .transform((val) => val.trim()),
})

export const UsernameInputSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
})

export const ReportInputSchema = z.object({
  reason: z
    .string()
    .min(1, 'Reason is required')
    .max(256)
    .transform((val) => val.trim()),
})

export function sanitizeHtml(input: string): string {
  if (!input) return ''
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
}

