export class AudioProcessor {
  private audioContext: AudioContext | null = null
  private processor: ScriptProcessorNode | null = null
  private analyser: AnalyserNode | null = null
  private mediaStream: MediaStream | null = null
  private source: MediaStreamAudioSourceNode | null = null

  async initialize(): Promise<AudioContext> {
    if (this.audioContext) {
      return this.audioContext
    }

    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    return this.audioContext
  }

  async startRecording(
    onDataAvailable: (chunk: Float32Array) => void
  ): Promise<MediaStream> {
    const audioContext = await this.initialize()

    if (audioContext.state === 'suspended') {
      await audioContext.resume()
    }

    this.mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true },
    })

    this.source = audioContext.createMediaStreamSource(this.mediaStream)
    this.analyser = audioContext.createAnalyser()
    this.processor = audioContext.createScriptProcessor(4096, 1, 1)

    this.processor.onaudioprocess = (event) => {
      const inputData = event.inputBuffer.getChannelData(0)
      onDataAvailable(new Float32Array(inputData))
    }

    this.source.connect(this.processor)
    this.processor.connect(this.analyser)
    this.analyser.connect(audioContext.destination)

    return this.mediaStream
  }

  stopRecording(): void {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop())
    }

    if (this.processor) {
      this.processor.disconnect()
    }

    if (this.source) {
      this.source.disconnect()
    }
  }

  applyPitchShift(audioBuffer: Float32Array, shift: number): Float32Array {
    // Pitch shift by modifying playback rate
    // shift > 1 = higher pitch, shift < 1 = lower pitch
    const shifted = new Float32Array(Math.floor(audioBuffer.length / shift))

    for (let i = 0; i < shifted.length; i++) {
      shifted[i] = audioBuffer[Math.floor(i * shift)]
    }

    return shifted
  }

  applyRobotEffect(audioBuffer: Float32Array): Float32Array {
    // Apply bit crushing for robotic sound
    const bits = 8
    const step = Math.pow(2, bits)

    return new Float32Array(
      audioBuffer.map((sample) => {
        return step * Math.floor(sample / step)
      })
    )
  }

  applyEchoEffect(audioBuffer: Float32Array, delay: number = 0.5): Float32Array {
    const delayFrames = Math.floor(delay * 44100)
    const result = new Float32Array(audioBuffer.length + delayFrames)

    result.set(audioBuffer)

    for (let i = 0; i < audioBuffer.length; i++) {
      if (i + delayFrames < result.length) {
        result[i + delayFrames] += audioBuffer[i] * 0.4
      }
    }

    return result
  }

  applyWhisperEffect(audioBuffer: Float32Array): Float32Array {
    // Reduce amplitude for whisper effect
    return new Float32Array(audioBuffer.map((sample) => sample * 0.5))
  }

  getWaveformData(audioBuffer: Float32Array, samples: number = 100): number[] {
    const blockSize = Math.floor(audioBuffer.length / samples)
    const result: number[] = []

    for (let i = 0; i < samples; i++) {
      let sum = 0
      for (let j = 0; j < blockSize; j++) {
        sum += Math.abs(audioBuffer[i * blockSize + j])
      }
      result.push(sum / blockSize)
    }

    return result
  }

  bufferToWave(audioBuffer: Float32Array, sampleRate: number = 44100): Blob {
    const numberOfChannels = 1
    const length = audioBuffer.length * numberOfChannels * 2 + 44
    const arrayBuffer = new ArrayBuffer(length)
    const view = new DataView(arrayBuffer)
    const channels: Float32Array[] = [audioBuffer]
    let offset = 0
    let pos = 0

    // "RIFF" chunk descriptor
    const setUint32 = (data: number) => {
      view.setUint32(pos, data, true)
      pos += 4
    }
    const setUint16 = (data: number) => {
      view.setUint16(pos, data, true)
      pos += 2
    }
    const setUint8 = (data: number) => {
      view.setUint8(pos, data)
      pos += 1
    }

    // "RIFF" chunk descriptor
    setUint32(0x46464952) // "RIFF"
    setUint32(length - 8) // file length - 8
    setUint32(0x45564157) // "WAVE"

    // "fmt " sub-chunk
    setUint32(0x20746d66) // "fmt "
    setUint32(16) // chunkSize
    setUint16(1) // audioFormat (PCM)
    setUint16(numberOfChannels)
    setUint32(sampleRate)
    setUint32(sampleRate * 2 * numberOfChannels) // avgByteRate
    setUint16(numberOfChannels * 2) // blockAlign
    setUint16(16) // bitsPerSample

    // "data" sub-chunk
    setUint32(0x61746164) // "data"
    setUint32(length - pos - 4) // chunkSize

    // Write the PCM samples
    let index = 0
    const volume = 0.8
    while (pos < length) {
      setUint16(Math.max(-1, Math.min(1, channels[index % channels.length][offset])) < 0 ? Math.max(-1, Math.min(1, channels[index % channels.length][offset])) * 0x8000 : Math.max(-1, Math.min(1, channels[index % channels.length][offset])) * 0x7fff)
      offset++
      if (offset < channels[0].length) {
        index++
      } else {
        offset = 0
      }
    }

    return new Blob([arrayBuffer], { type: 'audio/wav' })
  }
}

export const audioProcessor = new AudioProcessor()
