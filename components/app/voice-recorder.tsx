'use client'

import { useState, useRef, useEffect } from 'react'
import { useMediaRecorder } from '@/hooks/use-media-recorder'
import { createPostWithAuth } from '@/app/actions/posts'
import { useAuth } from '@/lib/auth-context'
import { processAudioWithModulation, type ModulationType } from '@/lib/voice-modulation'
import { GENRES, type Genre } from '@/lib/genre-styles'
import { toast } from 'sonner'

interface VoiceRecorderProps {
  onClose: () => void
  onPostCreated?: () => void
}

export function VoiceRecorder({ onClose, onPostCreated }: VoiceRecorderProps) {
  const { user } = useAuth()
  const {
    isRecording,
    recordingTime,
    error: recorderError,
    startRecording,
    stopRecording,
    cancelRecording,
    maxDuration,
  } = useMediaRecorder()

  const [caption, setCaption] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<Genre>('Confession')
  const [selectedModulation, setSelectedModulation] = useState<ModulationType>('original')
  const [isProcessing, setIsProcessing] = useState(false)
  const recordingDataRef = useRef<{ blob: Blob; duration: number; mimeType: string } | null>(null)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)

  // Check microphone permission on mount
  useEffect(() => {
    const checkPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        stream.getTracks().forEach(track => track.stop())
        setHasPermission(true)
      } catch (err: any) {
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          setHasPermission(false)
          toast.error('Microphone access required to confess.')
        } else {
          setHasPermission(null)
        }
      }
    }
    checkPermission()
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleStartRecording = async () => {
    if (hasPermission === false) {
      toast.error('Microphone access required to confess.')
      return
    }

    try {
      await startRecording()
    } catch (err: any) {
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setHasPermission(false)
        toast.error('Microphone access required to confess.')
      } else {
        setError(err.message || 'Failed to start recording')
      }
    }
  }

  const handleStopRecording = async () => {
    const result = await stopRecording()
    if (result) {
      recordingDataRef.current = result
    } else if (recorderError) {
      setError(recorderError)
    }
  }

  const handlePost = async () => {
    if (!recordingDataRef.current || !user) {
      setError('Please record audio and sign in first')
      return
    }

    if (!selectedGenre) {
      setError('Please select a genre')
      return
    }

    // Don't start Tone.js if mic permission was denied
    if (hasPermission === false) {
      toast.error('Microphone access required to confess.')
      return
    }

    try {
      setLoading(true)
      setIsProcessing(true)
      setError('')

      let { blob, duration, mimeType } = recordingDataRef.current

      // Apply modulation if not original (only if we have permission)
      if (selectedModulation !== 'original' && hasPermission !== false) {
        toast.info('Processing audio with modulation...')
        blob = await processAudioWithModulation(blob, selectedModulation)
        // Update mimeType to webm after processing
        mimeType = 'audio/webm'
      }

      setIsProcessing(false)

      // Create post using Server Action
      const result = await createPostWithAuth(user.uid, {
        type: 'voice',
        content: caption || null,
        genre: selectedGenre,
        modulationType: selectedModulation,
        mediaBlob: blob,
        mediaDuration: duration,
        mediaMimeType: mimeType,
      })

      if (!result.success) {
        throw new Error('Failed to create voice post')
      }

      toast.success('Posted!')
      onPostCreated?.()
      recordingDataRef.current = null
      setCaption('')
      setSelectedGenre('Confession')
      setSelectedModulation('original')
      onClose()
    } catch (err: any) {
      setError(err.message || 'Failed to post')
      console.error('[Server] Error posting voice:', err)
      toast.error(err.message || 'Failed to post')
    } finally {
      setLoading(false)
      setIsProcessing(false)
    }
  }

  const displayError = error || recorderError

  return (
    <div className="space-y-6">
      {/* Genre Selection */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          Genre (Required)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {GENRES.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setSelectedGenre(genre)}
              disabled={loading || isRecording}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
                selectedGenre === genre
                  ? 'bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-dark-card'
                  : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'
              } disabled:opacity-50`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Modulation Selection */}
      {recordingDataRef.current && (
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-300">
            Voice Modulation
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['original', 'deep', 'robot', 'whisper'] as ModulationType[]).map((mod) => (
              <button
                key={mod}
                type="button"
                onClick={() => setSelectedModulation(mod)}
                disabled={loading || isProcessing}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition ${
                  selectedModulation === mod
                    ? 'bg-accent text-white ring-2 ring-accent ring-offset-2 ring-offset-dark-card'
                    : 'bg-dark-secondary text-gray-300 hover:bg-dark-card'
                } disabled:opacity-50`}
              >
                {mod}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Recording Button */}
      <div className="text-center">
        <button
          onClick={isRecording ? handleStopRecording : handleStartRecording}
          disabled={loading || hasPermission === false}
          className={`w-32 h-32 mx-auto rounded-full text-4xl font-bold transition-all flex items-center justify-center ${
            isRecording
              ? 'bg-error scale-110 animate-pulse shadow-2xl shadow-error'
              : 'bg-gradient-to-r from-primary to-accent hover:scale-105 disabled:opacity-50'
          }`}
        >
          {isRecording ? '⏸️' : '🎤'}
        </button>
        <p className="mt-4 text-2xl font-mono text-gray-300">
          {formatTime(recordingTime)} / {formatTime(maxDuration)}
        </p>
        {isRecording && recordingTime >= maxDuration - 5 && (
          <p className="mt-2 text-sm text-error">Recording will stop automatically at {formatTime(maxDuration)}</p>
        )}
        {hasPermission === false && (
          <p className="mt-2 text-sm text-error">Microphone access required</p>
        )}
      </div>

      {/* Error Message */}
      {displayError && (
        <div className="p-3 bg-error/20 border border-error text-error rounded-lg text-sm">
          {displayError}
        </div>
      )}

      {/* Processing Indicator */}
      {isProcessing && (
        <div className="p-3 bg-primary/20 border border-primary text-primary rounded-lg text-sm text-center">
          ⚙️ Processing audio with {selectedModulation} modulation...
        </div>
      )}

      {/* Caption */}
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Add a caption to your voice post (optional)..."
        disabled={loading || isRecording || isProcessing}
        maxLength={200}
        className="w-full h-24 bg-dark-secondary border border-dark-border rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none disabled:opacity-50"
      />

      {/* Action Buttons */}
      <div className="flex gap-3">
        {recordingDataRef.current && (
          <button
            onClick={() => {
              recordingDataRef.current = null
              cancelRecording()
            }}
            disabled={loading || isProcessing}
            className="flex-1 py-3 bg-dark-secondary border border-dark-border rounded-lg font-semibold hover:border-error hover:text-error transition disabled:opacity-50"
          >
            Cancel
          </button>
        )}
        <button
          onClick={handlePost}
          disabled={!recordingDataRef.current || isRecording || loading || isProcessing || !selectedGenre}
          className="flex-1 btn-primary py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? '⚙️ Processing...' : loading ? '🚀 Uploading...' : 'Post Voice 🎤'}
        </button>
      </div>

      {/* Info */}
      <div className="text-xs text-gray-400 text-center space-y-1">
        <p>• Maximum recording time: {maxDuration} seconds</p>
        <p>• Maximum file size: 5MB</p>
        <p>• Format: audio/webm (preferred) or audio/mp4</p>
      </div>
    </div>
  )
}
