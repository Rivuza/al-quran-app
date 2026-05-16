import React from 'react'
import { Verse } from '../types'
import { useBookmarks } from '../contexts/BookmarksContext'
import './VerseCard.css'

interface VerseCardProps {
  surahNumber: number
  verse: Verse
  fontSize: number
  showTranslation: boolean
  showTransliteration: boolean
  onPlayAudio?: () => void
}

export function VerseCard({ surahNumber, verse, fontSize, showTranslation, showTransliteration, onPlayAudio }: VerseCardProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks()
  const bookmarked = isBookmarked(surahNumber, verse.numberInSurah)

  const handleToggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(surahNumber, verse.numberInSurah)
    } else {
      addBookmark(surahNumber, verse.numberInSurah)
    }
  }

  return (
    <div className="verse-card">
      <div className="verse-number-circle">
        {verse.numberInSurah}
      </div>
      <div className="verse-content">
        <div className="verse-arabic" style={{ fontSize: `${fontSize}px` }}>
          {verse.text}
        </div>
        {showTransliteration && verse.transliteration && (
          <div className="verse-transliteration">
            {verse.transliteration}
          </div>
        )}
        {showTranslation && verse.translation && (
          <div className="verse-translation">
            {verse.translation}
          </div>
        )}
      </div>
      <div className="verse-actions">
        <button 
          className={`action-icon-btn ${bookmarked ? 'bookmarked' : ''}`}
          onClick={handleToggleBookmark}
          title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {bookmarked ? '★' : '☆'}
        </button>
        {onPlayAudio && (
          <button 
            className="action-icon-btn"
            onClick={onPlayAudio}
            title="Play audio"
          >
            ▶
          </button>
        )}
      </div>
    </div>
  )
}