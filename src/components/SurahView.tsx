import React from 'react'
import { SurahDetail } from '../types'
import { VerseCard } from './VerseCard'
import { Bismillah } from './Bismillah'
import { useSettings } from '../contexts/SettingsContext'
import './SurahView.css'

interface SurahViewProps {
  surah: SurahDetail
}

export function SurahView({ surah }: SurahViewProps) {
  const { settings } = useSettings()
  const showBismillah = surah.number !== 9 && surah.number !== 1

  return (
    <div className="surah-view">
      <div className="surah-header">
        <h2 className="surah-title-arabic">{surah.name}</h2>
        <div className="surah-title-english">
          <span className="surah-name">{surah.englishName}</span>
          <span className="surah-translation">{surah.englishNameTranslation}</span>
        </div>
        <div className="surah-info-bar">
          <span className="verses-count">{surah.numberOfAyahs} verses</span>
          <span className={`revelation-type ${surah.revelationType.toLowerCase()}`}>
            {surah.revelationType}
          </span>
        </div>
      </div>

      {showBismillah && <Bismillah />}

      <div className="verses-container">
        {surah.verses.map(verse => (
          <VerseCard
            key={verse.numberInSurah}
            surahNumber={surah.number}
            verse={verse}
            fontSize={settings.fontSize}
            showTranslation={settings.showTranslation}
            showTransliteration={settings.showTransliteration}
          />
        ))}
      </div>

      <div className="surah-footer">
        <div className="end-mark">
          <span className="end-symbol">۝</span>
          <span className="end-text">End of {surah.englishName}</span>
        </div>
      </div>
    </div>
  )
}