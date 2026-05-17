import { Surah } from '../types'
import { surahs, getSurahVerses, getTranslation } from '../data/quran'

export function searchSurahs(query: string): Surah[] {
  const lowerQuery = query.toLowerCase()
  return surahs.filter(s => 
    s.name.includes(query) ||
    s.englishName.toLowerCase().includes(lowerQuery) ||
    s.englishNameTranslation.toLowerCase().includes(lowerQuery) ||
    s.number.toString() === query
  )
}

export function searchVerses(query: string, surahNumber?: number): Array<{surah: number, verse: number, text: string, translation?: string}> {
  const lowerQuery = query.toLowerCase();
  const results: Array<{surah: number, verse: number, text: string, translation?: string}> = [];

  const searchInSurah = (sNumber: number) => {
    const verses = getSurahVerses(sNumber);
    verses.forEach(v => {
      const idTranslation = getTranslation(sNumber, v.numberInSurah, 'id');
      const enTranslation = getTranslation(sNumber, v.numberInSurah, 'en');
      const jaTranslation = getTranslation(sNumber, v.numberInSurah, 'ja');

      if (
        v.text.includes(query) ||
        (idTranslation && idTranslation.toLowerCase().includes(lowerQuery)) ||
        (enTranslation && enTranslation.toLowerCase().includes(lowerQuery)) ||
        (jaTranslation && jaTranslation.toLowerCase().includes(lowerQuery))
      ) {
        results.push({
          surah: sNumber,
          verse: v.numberInSurah,
          text: v.text,
          translation: idTranslation || enTranslation || jaTranslation || ''
        });
      }
    });
  }

  if (surahNumber) {
     searchInSurah(surahNumber);
  } else {
     for(let i=1; i<=114; i++) {
        searchInSurah(i);
     }
  }

  return results;
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
