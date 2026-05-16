export interface Surah {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  revelationType: 'Meccan' | 'Medinan'
}

export interface Verse {
  numberInSurah: number
  text: string
  translation?: string
  transliteration?: string
}

export interface SurahDetail extends Surah {
  verses: Verse[]
}

export interface Bookmark {
  id: string
  surahNumber: number
  verseNumber: number
  createdAt: string
}

export interface Settings {
  theme: 'light' | 'dark'
  fontSize: number
  translationLanguage: string
  showTranslation: boolean
  showTransliteration: boolean
  reciterId: string
}

export interface AudioState {
  isPlaying: boolean
  currentSurah: number
  currentVerse: number
  duration: number
  currentTime: number
  volume: number
}

export type TranslationLanguage = 'en' | 'ur' | 'id' | 'es' | 'fr' | 'de'