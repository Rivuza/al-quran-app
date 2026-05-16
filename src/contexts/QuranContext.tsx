import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Surah, SurahDetail } from '../types'
import { quranService, englishNames, englishTranslations, verseCounts, surahMetadata } from '../data/quranApi'
import { useSettings } from './SettingsContext'

interface QuranContextType {
  surahs: Surah[]
  currentSurah: SurahDetail | null
  loading: boolean
  setCurrentSurah: (number: number) => void
  refreshCurrentSurah: () => void
  error: string | null
}

const QuranContext = createContext<QuranContextType | undefined>(undefined)

export function QuranProvider({ children }: { children: ReactNode }) {
  const { settings } = useSettings()
  const [surahs, setSurahs] = useState<Surah[]>([])
  const [currentSurah, setCurrentSurahState] = useState<SurahDetail | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        const surahList = await quranService.getAllSurahs()
        setSurahs(surahList)
      } catch (err) {
        console.error('Failed to load surah list:', err)
        setError('Failed to load Surah list')
      }
    }
    loadSurahs()
  }, [])

  const setCurrentSurah = async (number: number) => {
    setLoading(true)
    setError(null)
    try {
      const detail = await quranService.getFullSurahWithTranslation(number, settings.translationLanguage)
      setCurrentSurahState(detail)
    } catch (err) {
      console.error('Failed to load surah:', err)
      setError('Failed to load Surah')
    } finally {
      setLoading(false)
    }
  }

  const refreshCurrentSurah = async () => {
    if (currentSurah) {
      await setCurrentSurah(currentSurah.number)
    }
  }

  useEffect(() => {
    if (currentSurah) {
      setCurrentSurah(currentSurah.number)
    }
  }, [settings.translationLanguage])

  useEffect(() => {
    if (surahs.length > 0 && !currentSurah) {
      setCurrentSurah(1)
    }
  }, [surahs.length])

  return (
    <QuranContext.Provider value={{ 
      surahs, 
      currentSurah, 
      loading, 
      setCurrentSurah,
      refreshCurrentSurah,
      error
    }}>
      {children}
    </QuranContext.Provider>
  )
}

export function useQuran() {
  const context = useContext(QuranContext)
  if (!context) {
    throw new Error('useQuran must be used within QuranProvider')
  }
  return context
}