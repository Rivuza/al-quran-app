# Digital Al-Quran Desktop Application

## 1. Project Overview

**Project Name:** Al-Quran Digital
**Type:** Cross-platform Desktop Application (Electron)
**Core Feature Summary:** A comprehensive digital Quran reader with multi-language translations, audio recitation, search functionality, and bookmark management.
**Target Users:** Muslims worldwide seeking a beautiful, functional desktop Quran reading experience.

## 2. UI/UX Specification

### 2.1 Layout Structure

**Window Model:**
- Single main window with responsive layout
- Modal dialogs for settings and surah information
- Native window frame with standard controls
- Minimum window size: 1024x768

**Major Layout Areas:**
```
┌─────────────────────────────────────────────────────────────┐
│  Title Bar (Native)                                         │
├──────────────┬──────────────────────────────────────────────┤
│              │  Header: Current Surah + Translation Selector│
│   Sidebar    ├──────────────────────────────────────────────┤
│   (280px)    │                                              │
│              │              Main Content                    │
│  - Surah     │              (Scrollable)                    │
│    List      │                                              │
│              │              - Arabic Text                   │
│  - Search    │              - Translation                   │
│    Bar       │              - Audio Controls                │
│              │                                              │
│  - Bookmarks ├──────────────────────────────────────────────┤
│    Section   │  Audio Player Bar (Fixed Bottom)             │
└──────────────┴──────────────────────────────────────────────┘
```

### 2.2 Visual Design

**Color Palette:**
- Primary: #1B5E20 (Deep Islamic Green)
- Primary Light: #4CAF50 (Lighter Green)
- Primary Dark: #0D3B12 (Dark Green)
- Secondary: #B8860B (Dark Goldenrod - Islamic Gold)
- Accent: #FFD700 (Gold)
- Background Primary: #FAFAFA (Off-white)
- Background Secondary: #FFFFFF (Pure White)
- Sidebar Background: #F5F5F5 (Light Gray)
- Text Primary: #212121 (Near Black)
- Text Secondary: #757575 (Medium Gray)
- Border: #E0E0E0 (Light Border)
- Highlight: #E8F5E9 (Light Green Highlight)

**Typography:**
- Arabic Font: "Amiri Quran" (Google Fonts) - 28px for verses
- UI Font: "Segoe UI", system-ui, sans-serif
- Headings: 20px bold
- Body Text: 16px regular
- Surah Title Arabic: 24px
- Verse Numbers: 18px, gold color

**Spacing System:**
- Base unit: 8px
- Sidebar padding: 16px
- Content padding: 24px
- Verse spacing: 24px
- Section spacing: 32px

**Visual Effects:**
- Card shadows: 0 2px 4px rgba(0,0,0,0.1)
- Hover states: background opacity change
- Smooth transitions: 200ms ease-in-out
- Active verse highlight: subtle green glow
- Gold decorative borders for surah headers

### 2.3 Components

**Sidebar Components:**
1. **App Logo/Title** - "القرآن الكريم" with decorative Islamic pattern
2. **Search Input** - Icon + text field with clear button
3. **Surah List** - Scrollable list with 114 surahs
   - Surah number (circular badge)
   - Surah name (Arabic)
   - English name (transliterated)
   - Number of verses
   - Revelation type (Meccan/Medinan) icon
4. **Bookmarks Section** - Collapsible, shows saved verses

**Main Content Components:**
1. **Surah Header** - Bismillah with decorative calligraphy
2. **Verse Display** - Each verse shows:
   - Verse number (gold circle)
   - Arabic text (right-aligned, large)
   - Translation (below, left-aligned)
   - Transliteration (optional, italic)
   - Bookmark icon (right side)
3. **Translation Toggle** - Show/hide translations

**Audio Player:**
- Play/Pause button
- Progress bar
- Current time / Total time
- Volume control
- Surah selection dropdown
- Reciter selection

**States:**
- Default, Hover, Active, Disabled for all interactive elements
- Loading states with Islamic geometric pattern loader
- Empty states with appropriate messaging

## 3. Functional Specification

### 3.1 Core Features

**F1: Surah Reading**
- Display all 114 Surahs
- Show Arabic text with proper Quranic formatting
- Display verse numbers clearly
- Support smooth scrolling between verses
- Remember last read position

**F2: Multi-Language Translations**
Available translations:
- English (Sahih International)
- Urdu (Ahmed Ali)
- Indonesian (Bahasa Indonesia)
- Spanish (Spanish)
- French (French)
- German (German)
User can select any translation from dropdown

**F3: Search Functionality**
- Search by Surah name (Arabic/English)
- Search within verses (text content)
- Highlight search results
- Navigate to results
- Search suggestions as user types

**F4: Bookmarks**
- Add/remove verse bookmarks
- View all bookmarks in sidebar
- Navigate to bookmarked verses
- Export/import bookmarks (JSON format)
- Persist bookmarks in local storage

**F5: Audio Recitation**
- Audio playback of Arabic recitation
- Multiple reciters available:
  - Mishary Rashid Alafasy
  - Abdul Rahman Al-Sudais
  - Saud Al-Shuraim
- Auto-play next verse option
- Adjustable playback speed
- Continuous play through surah

**F6: User Preferences**
- Theme selection (Light/Dark)
- Font size adjustment
- Translation visibility toggle
- Transliteration visibility toggle
- Audio settings persistence

### 3.2 Data Flow & Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Electron Main Process                   │
│  - Window management                                         │
│  - File system access (bookmarks, settings)                 │
│  - IPC communication                                         │
└─────────────────────────────────────────────────────────────┘
                              │ IPC
┌─────────────────────────────────────────────────────────────┐
│                    React Renderer Process                    │
├─────────────────────────────────────────────────────────────┤
│  Components Layer                                            │
│  ├── App.tsx (Root component)                               │
│  ├── Sidebar/                                               │
│  │   ├── SurahList.tsx                                      │
│  │   ├── SearchBar.tsx                                      │
│  │   └── BookmarksPanel.tsx                                 │
│  ├── Content/                                               │
│  │   ├── SurahView.tsx                                      │
│  │   ├── VerseCard.tsx                                      │
│  │   └── Bismillah.tsx                                      │
│  └── Player/                                                │
│      ├── AudioPlayer.tsx                                    │
│      └── ReciterSelector.tsx                                │
├─────────────────────────────────────────────────────────────┤
│  Services Layer                                             │
│  ├── QuranService.ts (Data fetching/parsing)                │
│  ├── AudioService.ts (Audio playback control)               │
│  ├── SearchService.ts (Search algorithms)                  │
│  └── StorageService.ts (Local storage management)           │
├─────────────────────────────────────────────────────────────┤
│  State Management (React Context + Hooks)                   │
│  ├── QuranContext.tsx                                       │
│  ├── AudioContext.tsx                                       │
│  ├── SettingsContext.tsx                                    │
│  └── BookmarksContext.tsx                                   │
├─────────────────────────────────────────────────────────────┤
│  Data Layer                                                  │
│  ├── quran.json (Arabic text + metadata)                    │
│  ├── translations/ (Translation files by language)        │
│  └── settings.json (User preferences)                       │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Key Modules

**QuranService:**
- `getAllSurahs()`: Returns list of all 114 surahs
- `getSurah(surahNumber)`: Returns specific surah with verses
- `getVerse(surahNumber, verseNumber)`: Returns specific verse
- `getTranslation(surahNumber, language)`: Returns translation

**AudioService:**
- `play(surahNumber, verseNumber?)`: Start playback
- `pause()`: Pause current playback
- `resume()`: Resume paused playback
- `stop()`: Stop and reset
- `setReciter(reciterId)`: Change audio source
- `setVolume(level)`: Adjust volume
- `seek(position)`: Jump to position

**SearchService:**
- `searchSurah(query)`: Search by surah names
- `searchVerses(query)`: Search verse content
- `getSuggestions(query)`: Autocomplete suggestions

**StorageService:**
- `saveBookmarks(bookmarks)`: Persist bookmarks
- `loadBookmarks()`: Retrieve bookmarks
- `saveSettings(settings)`: Persist user settings
- `loadSettings()`: Retrieve settings

### 3.4 Edge Cases

1. **Offline Mode**: App works offline with cached Quran data
2. **Large Surahs**: Lazy loading for Al-Baqarah (286 verses)
3. **Audio Failures**: Graceful fallback with error message
4. **Missing Translations**: Fallback to English if unavailable
5. **Search No Results**: Show helpful empty state message
6. **First Launch**: Show brief onboarding/tips
7. **Window Resize**: Responsive layout adjustments
8. **Storage Full**: Handle localStorage quota exceeded

## 4. Acceptance Criteria

### 4.1 Success Conditions

**SC1: Application Launch**
- [ ] App launches without errors
- [ ] Main window displays correctly
- [ ] Sidebar loads with all 114 surahs
- [ ] Default surah (Al-Fatiha) displays in main content

**SC2: Surah Reading**
- [ ] All 114 surahs are accessible
- [ ] Arabic text displays correctly (RTL)
- [ ] Verse numbers are visible and accurate
- [ ] Translations display below Arabic text
- [ ] Smooth scrolling through long surahs

**SC3: Search**
- [ ] Search by Arabic surah name works
- [ ] Search by English surah name works
- [ ] Search within verses returns results
- [ ] Search results highlight matching text
- [ ] Empty search shows all surahs

**SC4: Bookmarks**
- [ ] Can add bookmark to any verse
- [ ] Can remove bookmark from verse
- [ ] Bookmarks persist after app restart
- [ ] Can navigate to bookmarked verses
- [ ] Bookmarks show surah and verse info

**SC5: Audio**
- [ ] Can play audio for any surah
- [ ] Play/pause controls work
- [ ] Volume control works
- [ ] Can change reciter
- [ ] Audio continues through surah

**SC6: Settings**
- [ ] Can change translation language
- [ ] Can toggle translation visibility
- [ ] Settings persist after restart
- [ ] Font size changes apply correctly

### 4.2 Visual Checkpoints

1. **Launch Screen**: Green Islamic theme, sidebar visible, Al-Fatiha loaded
2. **Surah Al-Baqarah**: Bismillah header, 286 verses with numbers, proper spacing
3. **Search Active**: Results filtered, matching text highlighted
4. **Bookmark Added**: Verse has gold bookmark icon
5. **Audio Playing**: Player bar shows progress, play icon changes to pause
6. **Dark Mode**: All colors inverted appropriately, readable text
