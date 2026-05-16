import React, { useState } from 'react'
import { SurahList } from './SurahList'
import { SearchBar } from './SearchBar'
import { BookmarksPanel } from './BookmarksPanel'
import { useBookmarks } from '../contexts/BookmarksContext'
import { Surah } from '../types'
import './Sidebar.css'

interface SidebarProps {
  surahs: Surah[]
  currentSurahNumber: number
  onSelectSurah: (number: number) => void
}

export function Sidebar({ surahs, currentSurahNumber, onSelectSurah }: SidebarProps) {
  const { bookmarks } = useBookmarks()
  const [searchQuery, setSearchQuery] = useState('')
  const [showBookmarks, setShowBookmarks] = useState(false)

  const filteredSurahs = searchQuery
    ? surahs.filter(s => 
        s.name.includes(searchQuery) ||
        s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.englishNameTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.number.toString() === searchQuery
      )
    : surahs

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="app-title">القرآن الكريم</h1>
        <p className="app-subtitle">Al-Quran Digital</p>
      </div>
      
      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search Surah..."
      />

      <div className="sidebar-actions">
        <button 
          className={`action-btn ${showBookmarks ? 'active' : ''}`}
          onClick={() => setShowBookmarks(!showBookmarks)}
        >
          <span className="icon">★</span>
          Bookmarks
          {bookmarks.length > 0 && <span className="badge">{bookmarks.length}</span>}
        </button>
      </div>

      {showBookmarks ? (
        <BookmarksPanel onSelectSurah={onSelectSurah} />
      ) : (
        <SurahList 
          surahs={filteredSurahs}
          currentSurahNumber={currentSurahNumber}
          onSelectSurah={onSelectSurah}
        />
      )}
    </aside>
  )
}