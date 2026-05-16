import React from 'react'
import { useBookmarks } from '../contexts/BookmarksContext'
import { useQuran } from '../contexts/QuranContext'
import './BookmarksPanel.css'

interface BookmarksPanelProps {
  onSelectSurah: (number: number) => void
}

export function BookmarksPanel({ onSelectSurah }: BookmarksPanelProps) {
  const { bookmarks, removeBookmark } = useBookmarks()
  const { surahs } = useQuran()

  const getSurahName = (surahNumber: number) => {
    const surah = surahs.find(s => s.number === surahNumber)
    return surah ? `${surah.name} (${surah.englishName})` : `Surah ${surahNumber}`
  }

  if (bookmarks.length === 0) {
    return (
      <div className="bookmarks-panel">
        <div className="empty-state">
          <span className="empty-icon">★</span>
          <p>No bookmarks yet</p>
          <span className="empty-hint">Click the bookmark icon on any verse to save it</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bookmarks-panel">
      <div className="bookmarks-header">
        <h3>Your Bookmarks</h3>
        <span className="count">{bookmarks.length}</span>
      </div>
      <div className="bookmarks-list">
        {bookmarks.map(bookmark => (
          <div key={bookmark.id} className="bookmark-item">
            <div 
              className="bookmark-info"
              onClick={() => onSelectSurah(bookmark.surahNumber)}
            >
              <span className="bookmark-surah">{getSurahName(bookmark.surahNumber)}</span>
              <span className="bookmark-verse">Verse {bookmark.verseNumber}</span>
            </div>
            <button 
              className="remove-btn"
              onClick={() => removeBookmark(bookmark.surahNumber, bookmark.verseNumber)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}