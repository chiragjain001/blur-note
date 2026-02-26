import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { Toaster as SonnerToaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Blur Note - Share Anonymously',
  description: 'Express your feelings, confessions, and stories through voice or text - completely anonymous and secure',
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                const isDark = theme === 'dark';
                document.documentElement.classList.toggle('dark', isDark);
                document.body.classList.toggle('light', !isDark);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable}`}>
        <AuthProvider>
          {children}
          <SonnerToaster position="top-center" richColors />
        </AuthProvider>
      </body>
    </html>
  )
}
