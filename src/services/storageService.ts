import { Bookmark, Settings } from '../types'

const BOOKMARKS_KEY = 'alquran_bookmarks'
const SETTINGS_KEY = 'alquran_settings'

const defaultSettings: Settings = {
  theme: 'light',
  fontSize: 28,
  translationLanguage: 'en',
  showTranslation: true,
  showTransliteration: false,
  reciterId: 'alafasy'
}

export function saveBookmarks(bookmarks: Bookmark[]): void {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
  } catch (error) {
    console.error('Failed to save bookmarks:', error)
  }
}

export function loadBookmarks(): Bookmark[] {
  try {
    const data = localStorage.getItem(BOOKMARKS_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Failed to load bookmarks:', error)
    return []
  }
}

export function addBookmark(bookmark: Bookmark): void {
  const bookmarks = loadBookmarks()
  const exists = bookmarks.some(
    b => b.surahNumber === bookmark.surahNumber && b.verseNumber === bookmark.verseNumber
  )
  if (!exists) {
    bookmarks.push(bookmark)
    saveBookmarks(bookmarks)
  }
}

export function removeBookmark(surahNumber: number, verseNumber: number): void {
  const bookmarks = loadBookmarks()
  const filtered = bookmarks.filter(
    b => !(b.surahNumber === surahNumber && b.verseNumber === verseNumber)
  )
  saveBookmarks(filtered)
}

export function isBookmarked(surahNumber: number, verseNumber: number): boolean {
  const bookmarks = loadBookmarks()
  return bookmarks.some(
    b => b.surahNumber === surahNumber && b.verseNumber === verseNumber
  )
}

export function saveSettings(settings: Settings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
  } catch (error) {
    console.error('Failed to save settings:', error)
  }
}

export function loadSettings(): Settings {
  try {
    const data = localStorage.getItem(SETTINGS_KEY)
    return data ? { ...defaultSettings, ...JSON.parse(data) } : defaultSettings
  } catch (error) {
    console.error('Failed to load settings:', error)
    return defaultSettings
  }
}

export function saveLastRead(surahNumber: number, verseNumber: number): void {
  try {
    localStorage.setItem('alquran_lastread', JSON.stringify({ surahNumber, verseNumber }))
  } catch (error) {
    console.error('Failed to save last read:', error)
  }
}

export function loadLastRead(): { surahNumber: number; verseNumber: number } | null {
  try {
    const data = localStorage.getItem('alquran_lastread')
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error('Failed to load last read:', error)
    return null
  }
}