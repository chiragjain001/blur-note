/**
 * Generate waveform data from audio buffer
 * Returns array of peak values normalized to 0-1 range
 */
export async function generateWaveform(
  audioBuffer: ArrayBuffer,
  samples: number = 100
): Promise<number[]> {
  try {
    const audioContext = new AudioContext()
    const decodedData = await audioContext.decodeAudioData(audioBuffer)
    const channelData = decodedData.getChannelData(0) // Use first channel
    const blockSize = Math.floor(channelData.length / samples)
    const waveform: number[] = []

    for (let i = 0; i < samples; i++) {
      let sum = 0
      const start = i * blockSize
      const end = Math.min(start + blockSize, channelData.length)

      for (let j = start; j < end; j++) {
        sum += Math.abs(channelData[j])
      }

      const average = sum / (end - start)
      // Normalize to 0-1 range
      waveform.push(Math.min(average * 2, 1))
    }

    return waveform
  } catch (error) {
    console.error('[Waveform] Error generating waveform:', error)
    // Return flat waveform on error
    return new Array(samples).fill(0.1)
  }
}

/**
 * Generate waveform from Blob (audio file)
 */
export async function generateWaveformFromBlob(
  blob: Blob,
  samples: number = 100
): Promise<number[]> {
  const arrayBuffer = await blob.arrayBuffer()
  return generateWaveform(arrayBuffer, samples)
}

