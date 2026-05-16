import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Settings, TranslationLanguage } from '../types'
import { loadSettings, saveSettings } from '../services/storageService'
import { audioService } from '../services/audioService'

interface SettingsContextType {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
  setTheme: (theme: 'light' | 'dark') => void
  setFontSize: (size: number) => void
  setTranslationLanguage: (lang: TranslationLanguage) => void
  toggleTranslation: () => void
  toggleTransliteration: () => void
  setReciter: (reciterId: string) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(loadSettings)

  useEffect(() => {
    saveSettings(settings)
  }, [settings])

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  const setTheme = (theme: 'light' | 'dark') => {
    updateSettings({ theme })
  }

  const setFontSize = (size: number) => {
    updateSettings({ fontSize: Math.max(18, Math.min(40, size)) })
  }

  const setTranslationLanguage = (lang: TranslationLanguage) => {
    updateSettings({ translationLanguage: lang })
  }

  const toggleTranslation = () => {
    updateSettings({ showTranslation: !settings.showTranslation })
  }

  const toggleTransliteration = () => {
    updateSettings({ showTransliteration: !settings.showTransliteration })
  }

  const setReciter = (reciterId: string) => {
    audioService.setReciter(reciterId)
    updateSettings({ reciterId })
  }

  return (
    <SettingsContext.Provider value={{ 
      settings, 
      updateSettings, 
      setTheme, 
      setFontSize,
      setTranslationLanguage,
      toggleTranslation,
      toggleTransliteration,
      setReciter
    }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider')
  }
  return context
}