/**
 * Voice modulation using Web Audio API and Tone.js
 * Client-side audio processing before upload
 */

import * as Tone from 'tone'

export type ModulationType = 'original' | 'deep' | 'robot' | 'whisper'

/**
 * Process audio blob with selected modulation
 * Returns processed audio blob ready for upload
 */
export async function processAudioWithModulation(
  audioBlob: Blob,
  modulationType: ModulationType
): Promise<Blob> {
  if (modulationType === 'original') {
    return audioBlob
  }

  try {
    // Initialize Tone.js
    await Tone.start()
    
    // Convert blob to AudioBuffer
    const arrayBuffer = await audioBlob.arrayBuffer()
    const audioContext = Tone.getContext().rawContext as AudioContext
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
    
    // Create Tone.js buffer
    const toneBuffer = new Tone.ToneAudioBuffer(audioBuffer)
    const player = new Tone.Player(toneBuffer)
    
    // Create recorder
    const recorder = new Tone.Recorder()
    
    // Build effect chain
    let output: Tone.ToneAudioNode = player
    
    switch (modulationType) {
      case 'deep':
        // Lower pitch by 6 semitones
        const pitchShift = new Tone.PitchShift(-6)
        player.connect(pitchShift)
        output = pitchShift
        break
        
      case 'robot':
        // Bit crusher for robotic effect
        const bitCrusher = new Tone.BitCrusher(4)
        player.connect(bitCrusher)
        output = bitCrusher
        break
        
      case 'whisper':
        // High-pass filter + reduced gain for whisper effect
        const gain = new Tone.Gain(0.6)
        const highPass = new Tone.Filter({
          type: 'highpass',
          frequency: 1000,
        })
        player.connect(gain)
        gain.connect(highPass)
        output = highPass
        break
    }
    
    // Connect to recorder
    output.connect(recorder)
    
    // Start recording and playback
    await recorder.start()
    player.start()
    
    // Wait for playback to finish
    const duration = audioBuffer.duration * 1000
    await new Promise(resolve => setTimeout(resolve, duration + 500))
    
    // Stop and get processed blob
    const processedBlob = await recorder.stop()
    player.stop()
    
    // Cleanup
    player.dispose()
    recorder.dispose()
    if (output !== player) {
      (output as any).dispose?.()
    }
    
    return processedBlob
  } catch (error) {
    console.error('[Voice Modulation] Error processing audio:', error)
    // Fallback to original if processing fails
    return audioBlob
  }
}

/**
 * Preview audio with modulation (for testing before upload)
 */
export async function previewModulatedAudio(
  audioBlob: Blob,
  modulationType: ModulationType
): Promise<void> {
  if (modulationType === 'original') {
    const url = URL.createObjectURL(audioBlob)
    const audio = new Audio(url)
    await audio.play()
    audio.onended = () => URL.revokeObjectURL(url)
    return
  }

  try {
    await Tone.start()
    
    const arrayBuffer = await audioBlob.arrayBuffer()
    const audioContext = Tone.getContext().rawContext as AudioContext
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
    
    const toneBuffer = new Tone.ToneAudioBuffer(audioBuffer)
    const player = new Tone.Player(toneBuffer)
    
    let output: Tone.ToneAudioNode = player
    
    // Apply modulation
    switch (modulationType) {
      case 'deep':
        const pitchShift = new Tone.PitchShift(-6)
        player.connect(pitchShift)
        output = pitchShift
        break
      case 'robot':
        const bitCrusher = new Tone.BitCrusher(4)
        player.connect(bitCrusher)
        output = bitCrusher
        break
      case 'whisper':
        const gain = new Tone.Gain(0.6)
        const highPass = new Tone.Filter({
          type: 'highpass',
          frequency: 1000,
        })
        player.connect(gain)
        gain.connect(highPass)
        output = highPass
        break
    }
    
    output.toDestination()
    player.start()
    
    // Cleanup after playback
    const duration = audioBuffer.duration * 1000
    setTimeout(() => {
      player.dispose()
      if (output !== player) {
        (output as any).dispose?.()
      }
    }, duration + 1000)
  } catch (error) {
    console.error('[Voice Modulation] Error previewing audio:', error)
  }
}

