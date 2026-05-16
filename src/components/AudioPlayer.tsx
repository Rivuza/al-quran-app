import React, { useState, useEffect } from 'react'
import { reciters } from '../services/audioService'
import { useSettings } from '../contexts/SettingsContext'
import { Surah } from '../types'
import './AudioPlayer.css'

interface AudioPlayerProps {
  currentSurah: Surah
  onPlayVerse?: (verseNumber: number) => void
}

export function AudioPlayer({ currentSurah, onPlayVerse }: AudioPlayerProps) {
  const { settings, setReciter } = useSettings()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVerse, setCurrentVerse] = useState(1)
  const [showReciters, setShowReciters] = useState(false)

  useEffect(() => {
    setIsPlaying(false)
    setCurrentVerse(1)
  }, [currentSurah])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const selectReciter = (reciterId: string) => {
    setReciter(reciterId)
    setShowReciters(false)
  }

  const currentReciterName = reciters.find(r => r.id === settings.reciterId)?.name || 'Select Reciter'

  return (
    <div className="audio-player">
      <div className="player-info">
        <span className="player-surah-name">{currentSurah.name}</span>
        <span className="player-verse">Verse {currentVerse} of {currentSurah.numberOfAyahs}</span>
      </div>

      <div className="player-controls">
        <button 
          className={`control-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>

      <div className="player-reciter">
        <button 
          className="reciter-btn"
          onClick={() => setShowReciters(!showReciters)}
        >
          <span className="reciter-icon">🎙</span>
          <span className="reciter-name">{currentReciterName}</span>
          <span className="dropdown-arrow">{showReciters ? '▲' : '▼'}</span>
        </button>
        
        {showReciters && (
          <div className="reciters-dropdown">
            {reciters.map(reciter => (
              <button
                key={reciter.id}
                className={`reciter-option ${settings.reciterId === reciter.id ? 'active' : ''}`}
                onClick={() => selectReciter(reciter.id)}
              >
                {reciter.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="player-verse-nav">
        <button 
          className="nav-btn"
          disabled={currentVerse <= 1}
          onClick={() => {
            if (currentVerse > 1) {
              setCurrentVerse(currentVerse - 1)
              onPlayVerse?.(currentVerse - 1)
            }
          }}
        >
          ◀
        </button>
        <span className="verse-indicator">{currentVerse}/{currentSurah.numberOfAyahs}</span>
        <button 
          className="nav-btn"
          disabled={currentVerse >= currentSurah.numberOfAyahs}
          onClick={() => {
            if (currentVerse < currentSurah.numberOfAyahs) {
              setCurrentVerse(currentVerse + 1)
              onPlayVerse?.(currentVerse + 1)
            }
          }}
        >
          ▶
        </button>
      </div>
    </div>
  )
}