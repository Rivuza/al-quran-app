import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Bookmark } from '../types'
import { loadBookmarks, addBookmark as addBookmarkToStorage, removeBookmark as removeBookmarkFromStorage } from '../services/storageService'

interface BookmarksContextType {
  bookmarks: Bookmark[]
  addBookmark: (surahNumber: number, verseNumber: number) => void
  removeBookmark: (surahNumber: number, verseNumber: number) => void
  isBookmarked: (surahNumber: number, verseNumber: number) => boolean
  refreshBookmarks: () => void
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined)

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(loadBookmarks())

  const addBookmark = (surahNumber: number, verseNumber: number) => {
    const bookmark: Bookmark = {
      id: `${surahNumber}-${verseNumber}-${Date.now()}`,
      surahNumber,
      verseNumber,
      createdAt: new Date().toISOString()
    }
    addBookmarkToStorage(bookmark)
    setBookmarks(loadBookmarks())
  }

  const removeBookmark = (surahNumber: number, verseNumber: number) => {
    removeBookmarkFromStorage(surahNumber, verseNumber)
    setBookmarks(loadBookmarks())
  }

  const isBookmarked = (surahNumber: number, verseNumber: number): boolean => {
    return bookmarks.some(
      b => b.surahNumber === surahNumber && b.verseNumber === verseNumber
    )
  }

  const refreshBookmarks = () => {
    setBookmarks(loadBookmarks())
  }

  return (
    <BookmarksContext.Provider value={{ 
      bookmarks, 
      addBookmark, 
      removeBookmark, 
      isBookmarked,
      refreshBookmarks
    }}>
      {children}
    </BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  const context = useContext(BookmarksContext)
  if (!context) {
    throw new Error('useBookmarks must be used within BookmarksProvider')
  }
  return context
}