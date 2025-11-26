import { useState, useRef, useCallback } from 'react'
import { audioProcessor } from '@/lib/audio-processor'

export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [waveformData, setWaveformData] = useState<number[]>([])
  const audioChunks = useRef<Float32Array[]>([])
  const timerInterval = useRef<NodeJS.Timeout | null>(null)
  const mediaStream = useRef<MediaStream | null>(null)

  const startRecording = useCallback(async () => {
    try {
      audioChunks.current = []
      setRecordingTime(0)
      setWaveformData([])

      mediaStream.current = await audioProcessor.startRecording((chunk) => {
        audioChunks.current.push(chunk)
        const waveform = audioProcessor.getWaveformData(chunk, 50)
        setWaveformData((prev) => [...prev.slice(-49), ...waveform])
      })

      setIsRecording(true)

      timerInterval.current = setInterval(() => {
        setRecordingTime((t) => t + 1)
      }, 1000)
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }, [])

  const stopRecording = useCallback(async () => {
    try {
      if (timerInterval.current) {
        clearInterval(timerInterval.current)
      }

      audioProcessor.stopRecording()
      setIsRecording(false)

      if (audioChunks.current.length === 0) {
        return null
      }

      // Concatenate all chunks
      const totalLength = audioChunks.current.reduce((acc, chunk) => acc + chunk.length, 0)
      const audioBuffer = new Float32Array(totalLength)
      let offset = 0

      for (const chunk of audioChunks.current) {
        audioBuffer.set(chunk, offset)
        offset += chunk.length
      }

      return audioBuffer
    } catch (error) {
      console.error('Error stopping recording:', error)
      return null
    }
  }, [])

  const applyFilter = useCallback((audioBuffer: Float32Array, filterType: string): Float32Array => {
    switch (filterType) {
      case 'deep':
        return audioProcessor.applyPitchShift(audioBuffer, 0.7)
      case 'robot':
        return audioProcessor.applyRobotEffect(audioBuffer)
      case 'echo':
        return audioProcessor.applyEchoEffect(audioBuffer)
      case 'whisper':
        return audioProcessor.applyWhisperEffect(audioBuffer)
      case 'chipmunk':
        return audioProcessor.applyPitchShift(audioBuffer, 1.5)
      default:
        return audioBuffer
    }
  }, [])

  const getAudioBlob = useCallback((audioBuffer: Float32Array): Blob => {
    return audioProcessor.bufferToWave(audioBuffer)
  }, [])

  return {
    isRecording,
    recordingTime,
    waveformData,
    startRecording,
    stopRecording,
    applyFilter,
    getAudioBlob,
  }
}
