// lib/audio-encode-mp3.ts
import lamejs from 'lamejs'

export async function encodePcmToMp3(
  pcmData: Float32Array,
  sampleRate: number = 44100,
  kbps: number = 128,
): Promise<Blob> {
  const mp3encoder = new lamejs.Mp3Encoder(1, sampleRate, kbps)
  const samples = new Int16Array(pcmData.length)

  for (let i = 0; i < pcmData.length; i++) {
    const s = Math.max(-1, Math.min(1, pcmData[i]))
    samples[i] = s < 0 ? s * 0x8000 : s * 0x7fff
  }

  const blockSize = 1152
  const mp3Data: Uint8Array[] = []

  for (let i = 0; i < samples.length; i += blockSize) {
    const chunk = samples.subarray(i, i + blockSize)
    const mp3buf = mp3encoder.encodeBuffer(chunk)
    if (mp3buf.length > 0) {
      mp3Data.push(mp3buf)
    }
  }

  const end = mp3encoder.flush()
  if (end.length > 0) {
    mp3Data.push(end)
  }

  return new Blob(mp3Data, { type: 'audio/mpeg' })
}