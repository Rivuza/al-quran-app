import React from 'react'
import { useSettings } from '../contexts/SettingsContext'
import { TranslationLanguage } from '../types'
import './SettingsPanel.css'

const translationOptions: { value: TranslationLanguage; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'ur', label: 'Urdu' },
  { value: 'id', label: 'Indonesian' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' }
]

export function SettingsPanel() {
  const { 
    settings, 
    setTheme, 
    setFontSize, 
    setTranslationLanguage,
    toggleTranslation,
    toggleTransliteration 
  } = useSettings()

  return (
    <div className="settings-panel">
      <h3 className="settings-title">Settings</h3>

      <div className="setting-group">
        <label className="setting-label">Theme</label>
        <div className="theme-buttons">
          <button 
            className={`theme-btn ${settings.theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            ☀️ Light
          </button>
          <button 
            className={`theme-btn ${settings.theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            🌙 Dark
          </button>
        </div>
      </div>

      <div className="setting-group">
        <label className="setting-label">Font Size: {settings.fontSize}px</label>
        <input
          type="range"
          min="18"
          max="40"
          value={settings.fontSize}
          onChange={(e) => setFontSize(parseInt(e.target.value))}
          className="font-slider"
        />
      </div>

      <div className="setting-group">
        <label className="setting-label">Translation</label>
        <select
          value={settings.translationLanguage}
          onChange={(e) => setTranslationLanguage(e.target.value as TranslationLanguage)}
          className="setting-select"
        >
          {translationOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="setting-group">
        <label className="setting-label">Display</label>
        <div className="toggle-options">
          <label className="toggle-option">
            <input
              type="checkbox"
              checked={settings.showTranslation}
              onChange={toggleTranslation}
            />
            <span>Show Translation</span>
          </label>
          <label className="toggle-option">
            <input
              type="checkbox"
              checked={settings.showTransliteration}
              onChange={toggleTransliteration}
            />
            <span>Show Transliteration</span>
          </label>
        </div>
      </div>
    </div>
  )
}