'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

let activeAudio: HTMLAudioElement | null = null

export interface AudioPlayerProps {
  src: string
  duration?: number | null
  className?: string
}

const SPEED_STEPS = [1, 1.25, 1.5]

export function AudioPlayer({ src, duration, className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speedIndex, setSpeedIndex] = useState(0)
  const [computedDuration, setComputedDuration] = useState<number | null>(duration ?? null)

  // Stable random heights for faux visualizer bars
  const barHeights = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => 30 + Math.floor(Math.random() * 70)),
    []
  )

  useEffect(() => {
    const audio = new Audio(src)
    audio.preload = 'metadata'

    const handleEnded = () => {
      setIsPlaying(false)
      if (activeAudio === audio) {
        activeAudio = null
      }
    }

    const handleLoadedMetadata = () => {
      if (!Number.isNaN(audio.duration)) {
        setComputedDuration(Math.round(audio.duration))
      }
    }

    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.currentTime = 0
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      if (activeAudio === audio) {
        activeAudio = null
      }
    }
  }, [src])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = SPEED_STEPS[speedIndex]
    }
  }, [speedIndex])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) {
      return
    }

    if (activeAudio && activeAudio !== audio) {
      activeAudio.pause()
      activeAudio.currentTime = 0
    }

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      if (activeAudio === audio) {
        activeAudio = null
      }
    } else {
      try {
        await audio.play()
        activeAudio = audio
        setIsPlaying(true)
      } catch (error) {
        console.error('[AudioPlayer] Unable to play audio', error)
      }
    }
  }

  const cycleSpeed = () => {
    setSpeedIndex((prev) => (prev + 1) % SPEED_STEPS.length)
  }

  const formatDuration = (value: number | null | undefined) => {
    if (!value && value !== 0) return '00:00'
    const mins = Math.floor(value / 60)
    const secs = value % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90 shadow-inner shadow-black/10 backdrop-blur-sm',
        className
      )}
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={togglePlayback}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-indigo-600 shadow-lg transition-transform hover:scale-105"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>

      <div className="flex-1">
        <div className="flex h-8 items-center gap-1">
          {barHeights.map((height, index) => (
            <div
              key={`bar-${index}`}
              className={cn(
                'w-1 rounded-full transition-all duration-300',
                isPlaying ? 'bg-white animate-pulse' : 'bg-white/50'
              )}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={cycleSpeed}
        className="w-14 rounded-lg bg-black/20 px-2 py-1 text-center text-xs font-bold text-white/80 transition hover:bg-black/30"
      >
        {SPEED_STEPS[speedIndex]}x
      </button>

      <span className="text-xs font-mono text-white/70">{formatDuration(computedDuration)}</span>
    </div>
  )
}


