export interface Reciter {
  id: string
  name: string
  identifier: string
}

export const reciters: Reciter[] = [
  { id: 'alafasy', name: 'Mishary Rashid Alafasy', identifier: 'ar.alafasy' },
  { id: 'sudos', name: 'Abdul Rahman Al-Sudais', identifier: 'ar.abdulbasitmurattal' },
  { id: 'shur', name: 'Saud Al-Shuraim', identifier: 'ar.saaborig' }
]

export class AudioService {
  private audio: HTMLAudioElement | null = null
  private currentReciter: string = reciters[0].identifier
  private volume: number = 1

  constructor() {
    this.audio = new Audio()
    this.audio.volume = this.volume
  }

  setReciter(reciterId: string) {
    const reciter = reciters.find(r => r.id === reciterId)
    if (reciter) {
      this.currentReciter = reciter.identifier
    }
  }

  getAudioUrl(surahNumber: number, verseNumber?: number): string {
    const paddedSurah = surahNumber.toString().padStart(3, '0')
    if (verseNumber) {
      return `https://cdn.islamic.network/quran/audio/128/${this.currentReciter}/${surahNumber}/${verseNumber}.mp3`
    }
    return `https://cdn.islamic.network/quran/audio/128/${this.currentReciter}/${paddedSurah}.mp3`
  }

  async play(surahNumber: number, verseNumber?: number): Promise<void> {
    if (!this.audio) return
    
    const url = this.getAudioUrl(surahNumber, verseNumber)
    this.audio.src = url
    this.audio.currentTime = 0
    
    try {
      await this.audio.play()
    } catch (error) {
      console.error('Audio playback error:', error)
    }
  }

  pause(): void {
    this.audio?.pause()
  }

  resume(): void {
    this.audio?.play()
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause()
      this.audio.currentTime = 0
    }
  }

  setVolume(level: number): void {
    this.volume = Math.max(0, Math.min(1, level))
    if (this.audio) {
      this.audio.volume = this.volume
    }
  }

  getVolume(): number {
    return this.volume
  }

  getCurrentTime(): number {
    return this.audio?.currentTime || 0
  }

  getDuration(): number {
    return this.audio?.duration || 0
  }

  onTimeUpdate(callback: (time: number) => void): void {
    if (this.audio) {
      this.audio.ontimeupdate = () => callback(this.audio!.currentTime)
    }
  }

  onEnded(callback: () => void): void {
    if (this.audio) {
      this.audio.onended = callback
    }
  }

  onError(callback: (error: Error) => void): void {
    if (this.audio) {
      this.audio.onerror = () => callback(new Error('Audio playback failed'))
    }
  }
}

export const audioService = new AudioService()