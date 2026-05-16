import React from 'react'
import { Surah } from '../types'
import './SurahList.css'

interface SurahListProps {
  surahs: Surah[]
  currentSurahNumber: number
  onSelectSurah: (number: number) => void
}

export function SurahList({ surahs, currentSurahNumber, onSelectSurah }: SurahListProps) {
  return (
    <div className="surah-list">
      {surahs.map(surah => (
        <div
          key={surah.number}
          className={`surah-item ${currentSurahNumber === surah.number ? 'active' : ''}`}
          onClick={() => onSelectSurah(surah.number)}
        >
          <span className="surah-number">{surah.number}</span>
          <div className="surah-info">
            <span className="surah-name-arabic">{surah.name}</span>
            <span className="surah-name-english">{surah.englishName}</span>
            <span className="surah-meta">{surah.numberOfAyahs} verses • {surah.revelationType}</span>
          </div>
        </div>
      ))}
    </div>
  )
}