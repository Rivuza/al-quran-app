import React from 'react'
import { SettingsProvider } from './contexts/SettingsContext'
import { QuranProvider, useQuran } from './contexts/QuranContext'
import { BookmarksProvider } from './contexts/BookmarksContext'
import { Sidebar } from './components/Sidebar'
import { SurahView } from './components/SurahView'
import { AudioPlayer } from './components/AudioPlayer'
import './App.css'

function AppContent() {
  const { surahs, currentSurah, setCurrentSurah, loading, error } = useQuran()

  return (
    <div className="app">
      <Sidebar
        surahs={surahs}
        currentSurahNumber={currentSurah?.number || 1}
        onSelectSurah={setCurrentSurah}
      />
      <main className="main-content">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading Surah...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <p>{error}</p>
            <button onClick={() => setCurrentSurah(currentSurah?.number || 1)}>
              Retry
            </button>
          </div>
        ) : currentSurah ? (
          <>
            <SurahView surah={currentSurah} />
            <AudioPlayer currentSurah={currentSurah} />
          </>
        ) : (
          <div className="empty-state">
            <p>Loading Quran data...</p>
          </div>
        )}
      </main>
    </div>
  )
}

function App() {
  return (
    <SettingsProvider>
      <QuranProvider>
        <BookmarksProvider>
          <AppContent />
        </BookmarksProvider>
      </QuranProvider>
    </SettingsProvider>
  )
}

export default App