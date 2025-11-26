'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') || 'dark'
    const isDarkMode = savedTheme === 'dark'
    setIsDark(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    document.body.classList.toggle('light', newTheme === 'light')
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-dark-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
