import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://www.googletagmanager.com https://apis.google.com https://accounts.google.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://images.unsplash.com https://firebasestorage.googleapis.com https://storage.googleapis.com",
    "connect-src 'self' https://*.googleapis.com https://firebasedatabase.app https://apis.google.com https://securetoken.googleapis.com https://firebasestorage.googleapis.com https://identitytoolkit.googleapis.com",
    "media-src 'self' blob: https://firebasestorage.googleapis.com https://storage.googleapis.com",
    "frame-src 'self' https://whisplyy.firebaseapp.com https://*.firebaseapp.com https://accounts.google.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
  ].join('; ')

  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  )
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  // Allow Firebase Google Sign-In popup to use window.closed polling across origins
  response.headers.set('Cross-Origin-Opener-Policy', 'unsafe-none')

  return response
}

