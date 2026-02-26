import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getAdminAuth } from '@/lib/firebase-admin'

const COOKIE_NAME = 'firebase_token'
const ONE_WEEK_SECONDS = 60 * 60 * 24 * 7

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json() as { idToken?: string }

    if (!idToken) {
      return NextResponse.json({ success: false, error: 'Missing idToken' }, { status: 400 })
    }

    const auth = getAdminAuth()
    const decoded = await auth.verifyIdToken(idToken)

    const cookieStore = await cookies()
    cookieStore.set(COOKIE_NAME, idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: ONE_WEEK_SECONDS,
    })

    return NextResponse.json({ success: true, uid: decoded.uid })
  } catch (error: any) {
    const errorCode = error?.code ?? 'unknown'
    const errorMessage = error?.message ?? String(error)
    console.error('[Session] Failed to establish session:', errorCode, errorMessage, error)
    return NextResponse.json(
      { success: false, error: 'Failed to establish session', code: errorCode, details: errorMessage },
      { status: 401 },
    )
  }
}

export async function DELETE() {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0,
  })

  return NextResponse.json({ success: true })
}

