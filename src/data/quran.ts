import { Surah, SurahDetail, Verse } from '../types'

export const surahs: Surah[] = [
  { number: 1, name: 'الفاتحة', englishName: 'Al-Fatihah', englishNameTranslation: 'The Opening', numberOfAyahs: 7, revelationType: 'Meccan' },
  { number: 2, name: 'البقرة', englishName: 'Al-Baqarah', englishNameTranslation: 'The Cow', numberOfAyahs: 286, revelationType: 'Medinan' },
  { number: 3, name: 'آل عمران', englishName: 'Ali Imran', englishNameTranslation: 'The Family of Imran', numberOfAyahs: 200, revelationType: 'Medinan' },
  { number: 4, name: 'النساء', englishName: 'An-Nisa', englishNameTranslation: 'The Women', numberOfAyahs: 176, revelationType: 'Medinan' },
  { number: 5, name: 'المائدة', englishName: "Al-Ma'idah", englishNameTranslation: 'The Table Spread', numberOfAyahs: 120, revelationType: 'Medinan' },
  { number: 6, name: 'الأنعام', englishName: 'Al-Anam', englishNameTranslation: 'The Cattle', numberOfAyahs: 165, revelationType: 'Meccan' },
  { number: 7, name: 'الأعراف', englishName: "Al-A'raf", englishNameTranslation: 'The Heights', numberOfAyahs: 206, revelationType: 'Meccan' },
  { number: 8, name: 'الأنفال', englishName: 'Al-Anfal', englishNameTranslation: 'The Spoils of War', numberOfAyahs: 75, revelationType: 'Medinan' },
  { number: 9, name: 'التوبة', englishName: 'At-Tawbah', englishNameTranslation: 'The Repentance', numberOfAyahs: 129, revelationType: 'Medinan' },
  { number: 10, name: 'يونس', englishName: 'Yunus', englishNameTranslation: 'Jonah', numberOfAyahs: 109, revelationType: 'Meccan' },
  { number: 11, name: 'هود', englishName: 'Hud', englishNameTranslation: 'Hud', numberOfAyahs: 123, revelationType: 'Meccan' },
  { number: 12, name: 'يوسف', englishName: 'Yusuf', englishNameTranslation: 'Joseph', numberOfAyahs: 111, revelationType: 'Meccan' },
  { number: 13, name: 'الرعد', englishName: "Ar-Ra'd", englishNameTranslation: 'The Thunder', numberOfAyahs: 43, revelationType: 'Medinan' },
  { number: 14, name: 'إبراهيم', englishName: 'Ibrahim', englishNameTranslation: 'Abraham', numberOfAyahs: 52, revelationType: 'Meccan' },
  { number: 15, name: 'الحجر', englishName: 'Al-Hijr', englishNameTranslation: 'The Rocky Tract', numberOfAyahs: 99, revelationType: 'Meccan' },
  { number: 16, name: 'النحل', englishName: 'An-Nahl', englishNameTranslation: 'The Bee', numberOfAyahs: 128, revelationType: 'Meccan' },
  { number: 17, name: 'الإسراء', englishName: "Al-Isra", englishNameTranslation: 'The Night Journey', numberOfAyahs: 111, revelationType: 'Meccan' },
  { number: 18, name: 'الكهف', englishName: 'Al-Kahf', englishNameTranslation: 'The Cave', numberOfAyahs: 110, revelationType: 'Meccan' },
  { number: 19, name: 'مريم', englishName: 'Maryam', englishNameTranslation: 'Mary', numberOfAyahs: 98, revelationType: 'Meccan' },
  { number: 20, name: 'طه', englishName: 'Ta-Ha', englishNameTranslation: 'Ta-Ha', numberOfAyahs: 135, revelationType: 'Meccan' },
  { number: 21, name: 'الأنبياء', englishName: 'Al-Anbiya', englishNameTranslation: 'The Prophets', numberOfAyahs: 112, revelationType: 'Meccan' },
  { number: 22, name: 'الحج', englishName: 'Al-Hajj', englishNameTranslation: 'The Pilgrimage', numberOfAyahs: 78, revelationType: 'Medinan' },
  { number: 23, name: 'المؤمنون', englishName: "Al-Mu'minun", englishNameTranslation: 'The Believers', numberOfAyahs: 118, revelationType: 'Meccan' },
  { number: 24, name: 'النور', englishName: 'An-Nur', englishNameTranslation: 'The Light', numberOfAyahs: 64, revelationType: 'Medinan' },
  { number: 25, name: 'الفرقان', englishName: 'Al-Furqan', englishNameTranslation: 'The Criterion', numberOfAyahs: 77, revelationType: 'Meccan' },
  { number: 26, name: 'الشعراء', englishName: 'Ash-Shuara', englishNameTranslation: 'The Poets', numberOfAyahs: 227, revelationType: 'Meccan' },
  { number: 27, name: 'النمل', englishName: 'An-Naml', englishNameTranslation: 'The Ant', numberOfAyahs: 93, revelationType: 'Meccan' },
  { number: 28, name: 'القصص', englishName: 'Al-Qasas', englishNameTranslation: 'The Stories', numberOfAyahs: 88, revelationType: 'Meccan' },
  { number: 29, name: 'العنكبوت', englishName: "Al-Ankabut", englishNameTranslation: 'The Spider', numberOfAyahs: 69, revelationType: 'Meccan' },
  { number: 30, name: 'الروم', englishName: 'Ar-Rum', englishNameTranslation: 'The Romans', numberOfAyahs: 60, revelationType: 'Meccan' },
  { number: 31, name: 'لقمان', englishName: 'Luqman', englishNameTranslation: 'Luqman', numberOfAyahs: 34, revelationType: 'Meccan' },
  { number: 32, name: 'السجدة', englishName: 'As-Sajdah', englishNameTranslation: 'The Prostration', numberOfAyahs: 30, revelationType: 'Meccan' },
  { number: 33, name: 'الأحزاب', englishName: 'Al-Ahzab', englishNameTranslation: 'The Combined Forces', numberOfAyahs: 73, revelationType: 'Medinan' },
  { number: 34, name: 'سبأ', englishName: 'Saba', englishNameTranslation: 'Sheba', numberOfAyahs: 54, revelationType: 'Meccan' },
  { number: 35, name: 'فاطر', englishName: 'Fatir', englishNameTranslation: 'Originator', numberOfAyahs: 45, revelationType: 'Meccan' },
  { number: 36, name: 'يس', englishName: 'Ya-Sin', englishNameTranslation: 'Ya Sin', numberOfAyahs: 83, revelationType: 'Meccan' },
  { number: 37, name: 'الصافات', englishName: 'As-Saffat', englishNameTranslation: 'Those Who Set The Ranks', numberOfAyahs: 182, revelationType: 'Meccan' },
  { number: 38, name: 'ص', englishName: 'Sad', englishNameTranslation: 'The Letter Sad', numberOfAyahs: 88, revelationType: 'Meccan' },
  { number: 39, name: 'الزمر', englishName: 'Az-Zumar', englishNameTranslation: 'The Troops', numberOfAyahs: 75, revelationType: 'Meccan' },
  { number: 40, name: 'غافر', englishName: 'Ghafir', englishNameTranslation: 'The Forgiver', numberOfAyahs: 85, revelationType: 'Meccan' },
  { number: 41, name: 'فصلت', englishName: 'Fussilat', englishNameTranslation: 'Explained in Detail', numberOfAyahs: 54, revelationType: 'Meccan' },
  { number: 42, name: 'الشورى', englishName: 'Ash-Shura', englishNameTranslation: 'The Consultation', numberOfAyahs: 53, revelationType: 'Meccan' },
  { number: 43, name: 'الزخرف', englishName: 'Az-Zukhruf', englishNameTranslation: 'The Ornaments of Gold', numberOfAyahs: 89, revelationType: 'Meccan' },
  { number: 44, name: 'الدخان', englishName: 'Ad-Dukhan', englishNameTranslation: 'The Smoke', numberOfAyahs: 59, revelationType: 'Meccan' },
  { number: 45, name: 'الجاثية', englishName: 'Al-Jathiyah', englishNameTranslation: 'The Crouching', numberOfAyahs: 37, revelationType: 'Meccan' },
  { number: 46, name: 'الأحقاف', englishName: 'Al-Ahqaf', englishNameTranslation: 'The Wind-Curved Sandhills', numberOfAyahs: 35, revelationType: 'Meccan' },
  { number: 47, name: 'محمد', englishName: 'Muhammad', englishNameTranslation: 'Muhammad', numberOfAyahs: 38, revelationType: 'Medinan' },
  { number: 48, name: 'الفتح', englishName: 'Al-Fath', englishNameTranslation: 'The Victory', numberOfAyahs: 29, revelationType: 'Medinan' },
  { number: 49, name: 'الحجرات', englishName: 'Al-Hujurat', englishNameTranslation: 'The Rooms', numberOfAyahs: 18, revelationType: 'Medinan' },
  { number: 50, name: 'ق', englishName: 'Qaf', englishNameTranslation: 'The Letter Qaf', numberOfAyahs: 45, revelationType: 'Meccan' },
  { number: 51, name: 'الذاريات', englishName: 'Adh-Dhariyat', englishNameTranslation: 'The Winnowing Winds', numberOfAyahs: 60, revelationType: 'Meccan' },
  { number: 52, name: 'الطور', englishName: 'At-Tur', englishNameTranslation: 'The Mount', numberOfAyahs: 49, revelationType: 'Meccan' },
  { number: 53, name: 'النجم', englishName: 'An-Najm', englishNameTranslation: 'The Star', numberOfAyahs: 62, revelationType: 'Meccan' },
  { number: 54, name: 'القمر', englishName: 'Al-Qamar', englishNameTranslation: 'The Moon', numberOfAyahs: 55, revelationType: 'Meccan' },
  { number: 55, name: 'الرحمن', englishName: 'Ar-Rahman', englishNameTranslation: 'The Beneficent', numberOfAyahs: 78, revelationType: 'Medinan' },
  { number: 56, name: 'الواقعة', englishName: 'Al-Waqiah', englishNameTranslation: 'The Inevitable', numberOfAyahs: 96, revelationType: 'Meccan' },
  { number: 57, name: 'الحديد', englishName: 'Al-Hadid', englishNameTranslation: 'The Iron', numberOfAyahs: 29, revelationType: 'Medinan' },
  { number: 58, name: 'المجادلة', englishName: 'Al-Mujadila', englishNameTranslation: 'The Pleading Woman', numberOfAyahs: 22, revelationType: 'Medinan' },
  { number: 59, name: 'الحشر', englishName: 'Al-Hashr', englishNameTranslation: 'The Exile', numberOfAyahs: 24, revelationType: 'Medinan' },
  { number: 60, name: 'الممتحنة', englishName: 'Al-Mumtahanah', englishNameTranslation: 'The Tested Woman', numberOfAyahs: 13, revelationType: 'Medinan' },
  { number: 61, name: 'الصف', englishName: 'As-Saf', englishNameTranslation: 'The Ranks', numberOfAyahs: 14, revelationType: 'Medinan' },
  { number: 62, name: 'الجمعة', englishName: 'Al-Jumuah', englishNameTranslation: 'The Congregation', numberOfAyahs: 11, revelationType: 'Medinan' },
  { number: 63, name: 'المنافقون', englishName: 'Al-Munafiqun', englishNameTranslation: 'The Hypocrites', numberOfAyahs: 11, revelationType: 'Medinan' },
  { number: 64, name: 'التغابن', englishName: 'At-Taghabun', englishNameTranslation: 'The Mutual Disillusion', numberOfAyahs: 18, revelationType: 'Medinan' },
  { number: 65, name: 'الطلاق', englishName: 'At-Talaq', englishNameTranslation: 'The Divorce', numberOfAyahs: 12, revelationType: 'Medinan' },
  { number: 66, name: 'التحريم', englishName: 'At-Tahrim', englishNameTranslation: 'The Prohibition', numberOfAyahs: 12, revelationType: 'Medinan' },
  { number: 67, name: 'الملك', englishName: 'Al-Mulk', englishNameTranslation: 'The Sovereignty', numberOfAyahs: 30, revelationType: 'Meccan' },
  { number: 68, name: 'القلم', englishName: 'Al-Qalam', englishNameTranslation: 'The Pen', numberOfAyahs: 52, revelationType: 'Meccan' },
  { number: 69, name: 'الحاقة', englishName: 'Al-Haqqah', englishNameTranslation: 'The Reality', numberOfAyahs: 52, revelationType: 'Meccan' },
  { number: 70, name: 'المعارج', englishName: "Al-Ma'arij", englishNameTranslation: 'The Ascending Stairways', numberOfAyahs: 44, revelationType: 'Meccan' },
  { number: 71, name: 'نوح', englishName: 'Nuh', englishNameTranslation: 'Noah', numberOfAyahs: 28, revelationType: 'Meccan' },
  { number: 72, name: 'الجن', englishName: 'Al-Jinn', englishNameTranslation: 'The Jinn', numberOfAyahs: 28, revelationType: 'Meccan' },
  { number: 73, name: 'المزمل', englishName: 'Al-Muzzammil', englishNameTranslation: 'The Enshrouded One', numberOfAyahs: 20, revelationType: 'Meccan' },
  { number: 74, name: 'المدثر', englishName: 'Al-Muddaththir', englishNameTranslation: 'The Cloaked One', numberOfAyahs: 56, revelationType: 'Meccan' },
  { number: 75, name: 'القيامة', englishName: 'Al-Qiyamah', englishNameTranslation: 'The Resurrection', numberOfAyahs: 40, revelationType: 'Meccan' },
  { number: 76, name: 'الإنسان', englishName: 'Al-Insan', englishNameTranslation: 'The Human', numberOfAyahs: 31, revelationType: 'Medinan' },
  { number: 77, name: 'المرسلات', englishName: 'Al-Mursalat', englishNameTranslation: 'The Emissaries', numberOfAyahs: 50, revelationType: 'Meccan' },
  { number: 78, name: 'النبأ', englishName: 'An-Naba', englishNameTranslation: 'The Tidings', numberOfAyahs: 40, revelationType: 'Meccan' },
  { number: 79, name: 'النازعات', englishName: "An-Nazi'at", englishNameTranslation: 'Those Who Drag Forth', numberOfAyahs: 46, revelationType: 'Meccan' },
  { number: 80, name: 'عبس', englishName: 'Abasa', englishNameTranslation: 'He Frowned', numberOfAyahs: 42, revelationType: 'Meccan' },
  { number: 81, name: 'التكوير', englishName: 'At-Takwir', englishNameTranslation: 'The Overthrowing', numberOfAyahs: 29, revelationType: 'Meccan' },
  { number: 82, name: 'الانفطار', englishName: 'Al-Infitar', englishNameTranslation: 'The Cleaving', numberOfAyahs: 19, revelationType: 'Meccan' },
  { number: 83, name: 'المطففين', englishName: 'Al-Mutaffifin', englishNameTranslation: 'The Defrauding', numberOfAyahs: 36, revelationType: 'Meccan' },
  { number: 84, name: 'الانشقاق', englishName: 'Al-Inshiqaq', englishNameTranslation: 'The Sundering', numberOfAyahs: 25, revelationType: 'Meccan' },
  { number: 85, name: 'البروج', englishName: 'Al-Buruj', englishNameTranslation: 'The Mansions of Stars', numberOfAyahs: 22, revelationType: 'Meccan' },
  { number: 86, name: 'الطارق', englishName: 'At-Tariq', englishNameTranslation: 'The Morning Star', numberOfAyahs: 17, revelationType: 'Meccan' },
  { number: 87, name: 'الأعلى', englishName: 'Al-Ala', englishNameTranslation: 'The Most High', numberOfAyahs: 19, revelationType: 'Meccan' },
  { number: 88, name: 'الغاشية', englishName: 'Al-Ghashiyah', englishNameTranslation: 'The Overwhelming', numberOfAyahs: 26, revelationType: 'Meccan' },
  { number: 89, name: 'الفجر', englishName: 'Al-Fajr', englishNameTranslation: 'The Dawn', numberOfAyahs: 30, revelationType: 'Meccan' },
  { number: 90, name: 'البلد', englishName: 'Al-Balad', englishNameTranslation: 'The City', numberOfAyahs: 20, revelationType: 'Meccan' },
  { number: 91, name: 'الشمس', englishName: 'Ash-Shams', englishNameTranslation: 'The Sun', numberOfAyahs: 15, revelationType: 'Meccan' },
  { number: 92, name: 'الليل', englishName: 'Al-Layl', englishNameTranslation: 'The Night', numberOfAyahs: 21, revelationType: 'Meccan' },
  { number: 93, name: 'الضحى', englishName: 'Ad-Duhaa', englishNameTranslation: 'The Morning Hours', numberOfAyahs: 11, revelationType: 'Meccan' },
  { number: 94, name: 'الشرح', englishName: 'Ash-Sharh', englishNameTranslation: 'The Relief', numberOfAyahs: 8, revelationType: 'Meccan' },
  { number: 95, name: 'التين', englishName: 'At-Tin', englishNameTranslation: 'The Fig', numberOfAyahs: 8, revelationType: 'Meccan' },
  { number: 96, name: 'العلق', englishName: 'Al-Alaq', englishNameTranslation: 'The Clot', numberOfAyahs: 19, revelationType: 'Meccan' },
  { number: 97, name: 'القدر', englishName: 'Al-Qadr', englishNameTranslation: 'The Power', numberOfAyahs: 5, revelationType: 'Meccan' },
  { number: 98, name: 'البينة', englishName: 'Al-Bayyinah', englishNameTranslation: 'The Clear Proof', numberOfAyahs: 8, revelationType: 'Medinan' },
  { number: 99, name: 'الزلزلة', englishName: 'Az-Zalzalah', englishNameTranslation: 'The Earthquake', numberOfAyahs: 8, revelationType: 'Medinan' },
  { number: 100, name: 'العاديات', englishName: "Al-Adiyat", englishNameTranslation: 'The Courser', numberOfAyahs: 11, revelationType: 'Meccan' },
  { number: 101, name: 'القارعة', englishName: 'Al-Qariah', englishNameTranslation: 'The Calamity', numberOfAyahs: 11, revelationType: 'Meccan' },
  { number: 102, name: 'التكاثر', englishName: 'At-Takathur', englishNameTranslation: 'The Rivalry', numberOfAyahs: 8, revelationType: 'Meccan' },
  { number: 103, name: 'العصر', englishName: 'Al-Asr', englishNameTranslation: 'The Declining Day', numberOfAyahs: 3, revelationType: 'Meccan' },
  { number: 104, name: 'الهمزة', englishName: 'Al-Humazah', englishNameTranslation: 'The Traducer', numberOfAyahs: 9, revelationType: 'Meccan' },
  { number: 105, name: 'الفيل', englishName: 'Al-Fil', englishNameTranslation: 'The Elephant', numberOfAyahs: 5, revelationType: 'Meccan' },
  { number: 106, name: 'قريش', englishName: 'Quraysh', englishNameTranslation: 'Quraysh', numberOfAyahs: 4, revelationType: 'Meccan' },
  { number: 107, name: 'الماعون', englishName: "Al-Ma'un", englishNameTranslation: 'The Small Kindnesses', numberOfAyahs: 7, revelationType: 'Meccan' },
  { number: 108, name: 'الكوثر', englishName: 'Al-Kawthar', englishNameTranslation: 'The Abundance', numberOfAyahs: 3, revelationType: 'Meccan' },
  { number: 109, name: 'الكافرون', englishName: 'Al-Kafirun', englishNameTranslation: 'The Disbelievers', numberOfAyahs: 6, revelationType: 'Meccan' },
  { number: 110, name: 'النصر', englishName: 'An-Nasr', englishNameTranslation: 'The Divine Support', numberOfAyahs: 3, revelationType: 'Medinan' },
  { number: 111, name: 'المسد', englishName: 'Al-Masad', englishNameTranslation: 'The Palm Fiber', numberOfAyahs: 5, revelationType: 'Meccan' },
  { number: 112, name: 'الإخلاص', englishName: 'Al-Ikhlas', englishNameTranslation: 'The Sincerity', numberOfAyahs: 4, revelationType: 'Meccan' },
  { number: 113, name: 'الفلق', englishName: 'Al-Falaq', englishNameTranslation: 'The Daybreak', numberOfAyahs: 5, revelationType: 'Meccan' },
  { number: 114, name: 'الناس', englishName: 'An-Nas', englishNameTranslation: 'Mankind', numberOfAyahs: 6, revelationType: 'Meccan' }
]

const quranVerses: Record<number, string[]> = {
  1: [
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    'الرَّحْمَٰنِ الرَّحِيمِ',
    'مَالِكِ يَوْمِ الدِّينِ',
    'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
    'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ'
  ],
  112: [
    'قُلْ هُوَ اللَّهُ أَحَدٌ',
    'اللَّهُ الصَّمَدُ',
    'لَمْ يَلِدْ وَلَمْ يُولَدْ',
    'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ'
  ],
  113: [
    'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
    'مِن شَرِّ مَا خَلَقَ',
    'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
    'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
    'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ'
  ],
  114: [
    'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    'مَلِكِ النَّاسِ',
    'إِلَٰهِ النَّاسِ',
    'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
    'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
    'مِنَ الْجِنَّةِ وَالنَّاسِ'
  ]
}

const translations: Record<string, Record<number, string[]>> = {
  en: {
    1: [
      'In the name of Allah, the Most Gracious, the Most Merciful.',
      'Praise be to Allah, the Lord of all the worlds.',
      'The Most Gracious, the Most Merciful.',
      'Master of the Day of Judgment.',
      'You alone we worship, and You alone we ask for help.',
      'Guide us on the straight path.',
      'The path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray.'
    ],
    112: [
      'Say, "He is Allah, [who is] One.',
      'Allah, the Eternal Refuge.',
      'He neither begets nor is born.',
      'Nor is there to Him any equivalent."'
    ],
    113: [
      'Say, "I seek refuge in the Lord of daybreak.',
      'From the evil of that which He created.',
      'And from the evil of darkening when it casts forth.',
      'And from the evil of the blowers in knots.',
      'And from the evil of an envier when he envies."'
    ],
    114: [
      'Say, "I seek refuge in the Lord of mankind.',
      'The King of mankind.',
      'The God of mankind.',
      'From the evil of the whisperer who withdraws.',
      'Who whispers in the breasts of mankind.',
      'From among jinn and mankind."'
    ]
  },
  ur: {
    1: [
      'اللہ کے نام سے جو بہت مہربان نہایت رحم والا ہے۔',
      'ہر شے کا تعریف اللہ ہی کے لیے ہے جو تمام جہانوں کا پالنے والا ہے۔',
      'بہت مہربان نہایت رحم والا۔',
      'قیامت کے دن کا مالک۔',
      'ہم صرف تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد چاہتے ہیں۔',
      'ہمیں سیدھی راہ دکھا۔',
      'ان لوگوں کی راہ جن پر تو نے اپنی نعمتیں عنایت فرمائیں جن پر تیرا غصہ نہیں اور نہ وہ گمراہ ہیں۔'
    ],
    112: [
      'کہہ کہ وہ اللہ ایک ہے۔',
      'اللہ بے نیاز ہے۔',
      'اس نے کسی کو جنم نہیں دیا اور نہ ہی اسے جنم دیا گیا۔',
      'اور اس کا کوئی ہم سر نہیں۔'
    ],
    113: [
      'کہہ کہ میں صبح کے رب کی پناہ چاہتا ہوں۔',
      'اس کے مخطط کرنے والے کے شر سے۔',
      'اور اندھیری رات کے جب وہ چلی آئے۔',
      'اور گرہوں میں پھونکنے والیوں کے شر سے۔',
      'اور حسد کرنے والے کے شر سے جب وہ حسد کرے۔'
    ],
    114: [
      'کہہ کہ میں انسانوں کے رب کی پناہ چاہتا ہوں۔',
      'انسانوں کا بادشاہ۔',
      'انسانوں کا معبود۔',
      'وسوسہ اندازی کے شر سے جو پیچھے ہٹ جاتا ہے۔',
      'جو انسانوں کے سینوں میں وسوسہ ڈالتا ہے۔',
      'جنوں اور انسانوں میں سے۔'
    ]
  },
  id: {
    1: [
      'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.',
      'Segala puji bagi Allah, Tuhan seluruh alam,',
      'Yang Maha Pengasih, Maha Penyayang,',
      'Pemilik hari pembalasan.',
      'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.',
      'Tunjukilah kami jalan yang lurus,',
      '(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.'
    ],
    112: [
      'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa.',
      'Allah tempat meminta segala sesuatu.',
      '(Allah) tidak beranak dan tidak pula diperanakkan.',
      'Dan tidak ada sesuatu yang setara dengan Dia."'
    ],
    113: [
      'Katakanlah, "Aku berlindung kepada Tuhan yang menguasai subuh (fajar),',
      'dari kejahatan (makhluk yang) Dia ciptakan,',
      'dan dari kejahatan malam apabila telah gelap gulita,',
      'dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya),',
      'dan dari kejahatan orang yang dengki apabila dia dengki."'
    ],
    114: [
      'Katakanlah, "Aku berlindung kepada Tuhannya manusia,',
      'Raja manusia,',
      'sembahan manusia,',
      'dari kejahatan (bisikan) setan yang bersembunyi,',
      'yang membisikkan (kejahatan) ke dalam dada manusia,',
      'dari (golongan) jin dan manusia."'
    ]
  },
  ja: {
    1: [
      '慈悲あまねく慈愛深きアッラーの御名において。',
      '万有の主、アッラーに讃えあれ。',
      '慈悲あまねく慈愛深き御方、',
      '最後の審きの日の主宰者に。',
      'わたしたちはあなたにのみ崇め仕え、あなたにのみ御助けを請い願う。',
      'わたしたちを正しい道に導きたまえ、',
      'あなたが御恵みを下された人々の道に、あなたの怒りを受けし者、また踏み迷える人々の道ではなく。'
    ],
    112: [
      '言え、「かれはアッラー、唯一なる御方である。',
      'アッラーは、自存され、',
      '産みたまわず、産まれたまわない。',
      'かれに比べ得る、何ものもない。」'
    ],
    113: [
      '言え、「わたしは、黎明の主（アッラー）に御救いを求める。',
      'かれが創られたものの悪から、',
      'また、暗闇が迫る時の夜の悪から。',
      '結び目に息を吹きかける（妖術使いの）女の悪から。',
      'また、嫉妬する者がねたむ時の悪から。」'
    ],
    114: [
      '言え、「わたしは、人間の主に御救いを求める。',
      '人間の王、',
      '人間の神に。',
      '（人の心に）忍び込んで囁く者の悪から。',
      'それは人間の胸の中に、囁きかける、',
      'ジン（幽精）や、人間（の悪魔）である。」'
    ]
  }
}

export function getAllSurahs(): Surah[] {
  return surahs
}

export function getSurah(number: number): Surah | undefined {
  return surahs.find(s => s.number === number)
}

export function getSurahVerses(surahNumber: number): Verse[] {
  const verses = quranVerses[surahNumber]
  if (!verses) return []
  
  return verses.map((text, index) => ({
    numberInSurah: index + 1,
    text,
    translation: translations.en[surahNumber]?.[index] || '',
    transliteration: getTransliteration(surahNumber, index + 1)
  }))
}

export function getSurahDetail(number: number): SurahDetail | null {
  const surah = getSurah(number)
  if (!surah) return null
  
  return {
    ...surah,
    verses: getSurahVerses(number)
  }
}

export function getTranslation(surahNumber: number, verseNumber: number, language: string): string {
  return translations[language]?.[surahNumber]?.[verseNumber - 1] || translations.en[surahNumber]?.[verseNumber - 1] || ''
}

function getTransliteration(surahNumber: number, verseNumber: number): string {
  const transliterations: Record<number, string[]> = {
    1: [
      "Bismil lahir rahmanir rahim",
      "Alhamdu lillahi rabbil alamin",
      "Ar rahmanir rahim",
      "Maliki yawmid din",
      "Iyyaka na budu wa iyyaka nasta in",
      "Ihdinas siratal mustaqim",
      "Siral ladzina an'amta 'alayhim ghayril maghdubi 'alayhim wa lad dallin"
    ],
    112: [
      "Qul huwal lahu ahad",
      "Allahu samad",
      "Lam yalid wa lam yulad",
      "Wa lam yakun lahu kufuwan ahad"
    ]
  }
  return transliterations[surahNumber]?.[verseNumber - 1] || ""
}

export function searchSurahs(query: string): Surah[] {
  const lowerQuery = query.toLowerCase()
  return surahs.filter(s => 
    s.name.includes(query) ||
    s.englishName.toLowerCase().includes(lowerQuery) ||
    s.englishNameTranslation.toLowerCase().includes(lowerQuery)
  )
}