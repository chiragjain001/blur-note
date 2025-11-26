'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/animated-background'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border backdrop-blur-xl bg-dark-bg/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-2xl font-black gradient-text">
            <span>👻</span>
            <span>BlurNote</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-height-screen flex items-center justify-center px-4 pt-24 pb-16 text-center">
        {/* Rotating Background */}
        <AnimatedBackground />

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-10 animate-slide-up">
          {/* Tagline */}
          <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-full px-6 py-2 text-xs font-semibold tracking-wide text-gray-200 animate-pulse">
            ✨ Your Safe Space to Share
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              Share Your Voice,
              <br className="hidden sm:block" />
              Stay Anonymous
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Express feelings, confessions, and stories through voice or text – completely private and secure.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link
              href="/app"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-base sm:text-lg font-bold shadow-[0_20px_40px_rgba(139,92,246,0.35)] hover:-translate-y-1 transition-all duration-300"
            >
              🚀 Start Sharing
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm sm:text-base font-semibold text-gray-200 border border-dark-border bg-dark-card/60 hover:bg-dark-secondary transition-colors"
            >
              Learn more
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-6 text-gray-500"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12"
          >
            Discover what you can share
          </motion.h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                className="card cursor-pointer hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_40px_rgba(139,92,246,0.25)]"
              >
                <div className="text-3xl mb-4 animate-bounce">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative z-10 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4 text-gray-400 text-sm">
          <p>
            Browse stories without logging in. Sign in with Google only when you are ready to post, just like in the
            prototype.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-dark-border py-6 px-4 text-center text-gray-500 text-sm">
        <p>© 2025 Benaam Baatein. Built for authenticity. Privacy first.</p>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: '🎤',
    title: 'Voice Posts with AI',
    description: 'Record voice notes and transform your voice with AI filters for complete anonymity.',
  },
  {
    icon: '✍️',
    title: 'Text Stories',
    description: 'Share your thoughts, confessions, and experiences through beautifully designed text posts.',
  },
  {
    icon: '🔒',
    title: '100% Private',
    description: 'Your identity stays protected. Browse without logging in, post anonymously when ready.',
  },
  {
    icon: '💬',
    title: 'Connect & React',
    description: 'Like and comment on posts that resonate with you. Build connections without revealing identity.',
  },
  {
    icon: '🌓',
    title: 'Beautiful Design',
    description: 'Modern, responsive interface with dark/light modes for the perfect viewing experience.',
  },
  {
    icon: '⚡',
    title: 'Instant Sharing',
    description: 'Quick Google sign-in only when posting. Start browsing immediately without any barriers.',
  },
]
