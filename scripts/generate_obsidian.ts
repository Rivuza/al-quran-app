import fs from 'fs';
import path from 'path';
import { getAllSurahs, getSurahVerses, getTranslation } from '../src/data/quran';

const OBSIDIAN_DIR = path.join(__dirname, '..', 'obsidian_vault');

if (!fs.existsSync(OBSIDIAN_DIR)) {
  fs.mkdirSync(OBSIDIAN_DIR, { recursive: true });
}

console.log('Generating Obsidian Vault...');

const surahs = getAllSurahs();

surahs.forEach(surah => {
  // Generate Surah Index File
  let surahContent = `# ${surah.name} (${surah.englishName})\n\n`;
  surahContent += `**Translation:** ${surah.englishNameTranslation}\n`;
  surahContent += `**Type:** ${surah.revelationType}\n`;
  surahContent += `**Ayahs:** ${surah.numberOfAyahs}\n\n`;

  surahContent += `## Ayats\n`;

  const verses = getSurahVerses(surah.number);

  verses.forEach((verse, index) => {
    const verseNum = verse.numberInSurah;
    const fileName = `Surah_${surah.number}_Ayat_${verseNum}.md`;

    // Add link to Surah Index
    surahContent += `- [[${fileName.replace('.md', '')}]]\n`;

    // Generate Ayat File
    let ayatContent = `# Surah ${surah.number} (${surah.englishName}) - Ayat ${verseNum}\n\n`;
    ayatContent += `**Arabic:** ${verse.text}\n\n`;

    const enTrans = getTranslation(surah.number, verseNum, 'en');
    const idTrans = getTranslation(surah.number, verseNum, 'id');
    const jaTrans = getTranslation(surah.number, verseNum, 'ja');

    if (enTrans) ayatContent += `**EN:** ${enTrans}\n\n`;
    if (idTrans) ayatContent += `**ID:** ${idTrans}\n\n`;
    if (jaTrans) ayatContent += `**JA:** ${jaTrans}\n\n`;

    ayatContent += `---\n### Connections\n`;
    ayatContent += `- **Surah:** [[Surah_${surah.number}]]\n`;

    if (index > 0) {
      ayatContent += `- **Previous Ayat:** [[Surah_${surah.number}_Ayat_${verseNum - 1}]]\n`;
    }
    if (index < verses.length - 1) {
      ayatContent += `- **Next Ayat:** [[Surah_${surah.number}_Ayat_${verseNum + 1}]]\n`;
    }

    fs.writeFileSync(path.join(OBSIDIAN_DIR, fileName), ayatContent);
  });

  fs.writeFileSync(path.join(OBSIDIAN_DIR, `Surah_${surah.number}.md`), surahContent);
});

console.log('Vault generation complete!');
