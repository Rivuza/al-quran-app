import { Surah } from '../types'
import { surahs } from '../data/quran'

export function searchSurahs(query: string): Surah[] {
  const lowerQuery = query.toLowerCase()
  return surahs.filter(s => 
    s.name.includes(query) ||
    s.englishName.toLowerCase().includes(lowerQuery) ||
    s.englishNameTranslation.toLowerCase().includes(lowerQuery) ||
    s.number.toString() === query
  )
}

export function searchVerses(query: string, surahNumber?: number): Array<{surah: number, verse: number, text: string}> {
  return []
}

export function getSuggestions(query: string): string[] {
  if (query.length < 2) return []
  
  const suggestions: string[] = []
  const lowerQuery = query.toLowerCase()
  
  surahs.forEach(s => {
    if (s.englishName.toLowerCase().startsWith(lowerQuery)) {
      suggestions.push(s.englishName)
    }
    if (s.englishNameTranslation.toLowerCase().startsWith(lowerQuery)) {
      suggestions.push(s.englishNameTranslation)
    }
  })
  
  return suggestions.slice(0, 5)
}