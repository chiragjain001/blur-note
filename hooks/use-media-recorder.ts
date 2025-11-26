import { useState, useRef, useCallback } from 'react'

const MAX_DURATION = 60 // 60 seconds
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export function useMediaRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const mediaStreamRef = useRef<MediaStream | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const durationRef = useRef<number>(0)

  const startRecording = useCallback(async () => {
    try {
      setError(null)
      audioChunksRef.current = []
      setRecordingTime(0)
      durationRef.current = 0

      // Get user media
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })

      mediaStreamRef.current = stream

      // Create MediaRecorder with webm format
      const mimeType = MediaRecorder.isTypeSupported('audio/webm')
        ? 'audio/webm'
        : MediaRecorder.isTypeSupported('audio/mp4')
        ? 'audio/mp4'
        : 'audio/webm' // fallback

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType,
        audioBitsPerSecond: 128000, // 128kbps for better quality/size balance
      })

      mediaRecorderRef.current = mediaRecorder

      // Collect audio chunks
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      // Start recording
      mediaRecorder.start(100) // Collect data every 100ms

      setIsRecording(true)

      // Start timer
      timerIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => {
          const newTime = prev + 1
          durationRef.current = newTime

          // Auto-stop at 60 seconds
          if (newTime >= MAX_DURATION) {
            stopRecording()
          }

          return newTime
        })
      }, 1000)
    } catch (err: any) {
      console.error('Error starting recording:', err)
      setError(err.message || 'Failed to start recording')
      setIsRecording(false)
    }
  }, [])

  const stopRecording = useCallback(async (): Promise<{
    blob: Blob
    duration: number
    mimeType: string
  } | null> => {
    try {
      // Stop timer
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }

      // Stop MediaRecorder
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop()
      }

      // Stop media stream
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop())
        mediaStreamRef.current = null
      }

      setIsRecording(false)

      // Wait for recording to finish
      return new Promise((resolve) => {
        if (!mediaRecorderRef.current) {
          resolve(null)
          return
        }

        mediaRecorderRef.current.onstop = () => {
          // Combine all chunks
          const blob = new Blob(audioChunksRef.current, {
            type: mediaRecorderRef.current?.mimeType || 'audio/webm',
          })

          // Check file size
          if (blob.size > MAX_FILE_SIZE) {
            setError(`Recording is too large (${(blob.size / 1024 / 1024).toFixed(2)}MB). Maximum is 5MB.`)
            resolve(null)
            return
          }

          const duration = durationRef.current
          const mimeType = mediaRecorderRef.current?.mimeType || 'audio/webm'

          resolve({
            blob,
            duration,
            mimeType,
          })
        }
      })
    } catch (err: any) {
      console.error('Error stopping recording:', err)
      setError(err.message || 'Failed to stop recording')
      return null
    }
  }, [])

  const cancelRecording = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop())
      mediaStreamRef.current = null
    }

    audioChunksRef.current = []
    setRecordingTime(0)
    durationRef.current = 0
    setIsRecording(false)
    setError(null)
  }, [])

  return {
    isRecording,
    recordingTime,
    error,
    startRecording,
    stopRecording,
    cancelRecording,
    maxDuration: MAX_DURATION,
    maxFileSize: MAX_FILE_SIZE,
  }
}

