import { BOOK_MAP, BiblicalEra } from './bibleBooks';
import { MAP_LOCATIONS } from './mapData';

export interface ChronologicalEntry {
  id: number;
  index: number;
  bookId: string;
  bookName: string;
  chapter: number;
  era: BiblicalEra;
  bookAbbr: string;
  chapterCount: number;
}

interface RawEntry {
  bookId: string;
  chapter: number;
}

function r(bookId: string, chapter: number): RawEntry {
  return { bookId, chapter };
}

function range(bookId: string, from: number, to: number): RawEntry[] {
  const out: RawEntry[] = [];
  for (let ch = from; ch <= to; ch++) out.push(r(bookId, ch));
  return out;
}

const PSALM_INTERLEAVES: [string, number, number[]][] = [
  ['1SA', 16, [23]],
  ['1SA', 17, [144]],
  ['1SA', 19, [59]],
  ['1SA', 21, [56, 34]],
  ['1SA', 22, [52, 142]],
  ['1SA', 23, [54, 63]],
  ['1SA', 24, [57, 7]],
  ['1SA', 26, [17]],
  ['2SA', 1, [60]],
  ['2SA', 7, [89, 132, 2]],
  ['2SA', 11, [51, 32]],
  ['2SA', 15, [3, 41, 55, 61, 62]],
  ['2SA', 22, [18, 116, 117, 118]],
  ['1KI', 3, [72]],
  ['1KI', 5, [45]],
  ['1KI', 8, [136, 134, 135]],
];

const ACT_INTERLEAVES: [number, RawEntry[]][] = [
  [2, range('JAS', 1, 5)],
  [15, range('GAL', 1, 6)],
  [
    18,
    [
      ...range('1TH', 1, 5),
      ...range('2TH', 1, 3),
      ...range('1CO', 1, 16),
      ...range('2CO', 1, 13),
      ...range('ROM', 1, 16),
    ],
  ],
  [
    20,
    [
      ...range('EPH', 1, 6),
      ...range('PHP', 1, 4),
      ...range('COL', 1, 4),
      ...range('PHM', 1, 1),
      ...range('1TI', 1, 6),
      ...range('TIT', 1, 3),
    ],
  ],
  [
    28,
    [
      ...range('2TI', 1, 4),
      ...range('HEB', 1, 13),
      ...range('1PE', 1, 5),
      ...range('2PE', 1, 3),
      ...range('1JN', 1, 5),
      ...range('2JN', 1, 1),
      ...range('3JN', 1, 1),
      ...range('JUD', 1, 1),
      ...range('REV', 1, 22),
    ],
  ],
];

function buildPlan(): RawEntry[] {
  const plan: RawEntry[] = [];

  // 1. Creation & Primeval: Genesis 1-11
  plan.push(...range('GEN', 1, 11));

  // 2. Patriarchal Era: Job 1-42, Genesis 12-50
  plan.push(...range('JOB', 1, 42));
  plan.push(...range('GEN', 12, 50));

  // 3. Exodus & Wilderness: Exodus, Leviticus, Numbers, Deuteronomy
  plan.push(...range('EXO', 1, 40));
  plan.push(...range('LEV', 1, 27));
  plan.push(...range('NUM', 1, 36));
  plan.push(...range('DEU', 1, 34));

  // 4. Conquest & Judges: Joshua, Judges, Ruth
  plan.push(...range('JOS', 1, 24));
  plan.push(...range('JDG', 1, 21));
  plan.push(...range('RUT', 1, 4));

  // 5. United Monarchy: 1Sam, 2Sam, 1Chr, Psalms (interleaved), 1Kgs 1-11, 2Chr 1-9, Prov, Ecc, Song
  const interleavedPsalms = new Set<number>();
  for (const [, , psalms] of PSALM_INTERLEAVES) {
    for (const p of psalms) interleavedPsalms.add(p);
  }

  const psalmsAfter = (bookId: string, ch: number): RawEntry[] => {
    const out: RawEntry[] = [];
    for (const [bid, anchorCh, psalms] of PSALM_INTERLEAVES) {
      if (bid === bookId && anchorCh === ch) {
        for (const p of psalms) out.push(r('PSA', p));
      }
    }
    return out;
  };

  for (let ch = 1; ch <= 31; ch++) {
    plan.push(r('1SA', ch));
    plan.push(...psalmsAfter('1SA', ch));
  }

  for (let ch = 1; ch <= 24; ch++) {
    plan.push(r('2SA', ch));
    plan.push(...psalmsAfter('2SA', ch));
  }

  plan.push(...range('1CH', 1, 29));

  for (let p = 1; p <= 150; p++) {
    if (!interleavedPsalms.has(p)) plan.push(r('PSA', p));
  }

  for (let ch = 1; ch <= 11; ch++) {
    plan.push(r('1KI', ch));
    plan.push(...psalmsAfter('1KI', ch));
  }

  plan.push(...range('2CH', 1, 9));
  plan.push(...range('PRO', 1, 31));
  plan.push(...range('ECC', 1, 12));
  plan.push(...range('SNG', 1, 8));

  // 6. Divided Kingdom: 1Kgs 12-22, 2Kgs 1-17, 2Chr 10-28, Obadiah, Joel, Amos, Jonah, Hosea, Isaiah, Micah, Nahum, Zephaniah, Habakkuk
  plan.push(...range('1KI', 12, 22));
  plan.push(...range('2KI', 1, 17));
  plan.push(...range('2CH', 10, 28));
  plan.push(...range('OBA', 1, 1));
  plan.push(...range('JOL', 1, 3));
  plan.push(...range('AMO', 1, 9));
  plan.push(...range('JON', 1, 4));
  plan.push(...range('HOS', 1, 14));
  plan.push(...range('ISA', 1, 66));
  plan.push(...range('MIC', 1, 7));
  plan.push(...range('NAM', 1, 3));
  plan.push(...range('ZEP', 1, 3));
  plan.push(...range('HAB', 1, 3));

  // 7. Exile & Judah's Fall: 2Kgs 18-25, 2Chr 29-36, Jeremiah, Lamentations, Ezekiel, Daniel
  plan.push(...range('2KI', 18, 25));
  plan.push(...range('2CH', 29, 36));
  plan.push(...range('JER', 1, 52));
  plan.push(...range('LAM', 1, 5));
  plan.push(...range('EZK', 1, 48));
  plan.push(...range('DAN', 1, 12));

  // 8. Post-Exilic Return: Ezra, Nehemiah, Esther, Haggai, Zechariah, Malachi
  plan.push(...range('EZR', 1, 10));
  plan.push(...range('NEH', 1, 13));
  plan.push(...range('EST', 1, 10));
  plan.push(...range('HAG', 1, 2));
  plan.push(...range('ZEC', 1, 14));
  plan.push(...range('MAL', 1, 4));

  // 9. Gospels: Matthew, Mark, Luke, John
  plan.push(...range('MAT', 1, 28));
  plan.push(...range('MRK', 1, 16));
  plan.push(...range('LUK', 1, 24));
  plan.push(...range('JHN', 1, 21));

  // 10. Acts with interleaved Epistles and Revelation
  for (let ch = 1; ch <= 28; ch++) {
    plan.push(r('ACT', ch));
    for (const [anchorCh, entries] of ACT_INTERLEAVES) {
      if (anchorCh === ch) plan.push(...entries);
    }
  }

  return plan;
}

const RAW_PLAN = buildPlan();

export const CHRONOLOGICAL_PLAN: ChronologicalEntry[] = RAW_PLAN.map((entry, idx) => {
  const book = BOOK_MAP[entry.bookId];
  return {
    id: idx,
    index: idx,
    bookId: entry.bookId,
    bookName: book.name,
    chapter: entry.chapter,
    era: book.era,
    bookAbbr: book.abbr,
    chapterCount: book.chapters,
  };
});

export const TOTAL_READING_CHAPTERS = 1189;

// Backward-compatible alias used by existing components
export { CHRONOLOGICAL_PLAN as READING_PLAN };

export function getEntry(index: number): ChronologicalEntry | null {
  if (index < 0 || index >= CHRONOLOGICAL_PLAN.length) return null;
  return CHRONOLOGICAL_PLAN[index];
}

export function getEraForIndex(index: number): BiblicalEra {
  const entry = getEntry(index);
  return entry ? entry.era : 'Patriarchal';
}

export function getEraRanges(): { era: BiblicalEra; startIndex: number; endIndex: number }[] {
  const ranges: { era: BiblicalEra; startIndex: number; endIndex: number }[] = [];
  let currentEra: BiblicalEra | null = null;
  let startIndex = 0;

  for (let i = 0; i < CHRONOLOGICAL_PLAN.length; i++) {
    const era = CHRONOLOGICAL_PLAN[i].era;
    if (era !== currentEra) {
      if (currentEra !== null) {
        ranges.push({ era: currentEra, startIndex, endIndex: i - 1 });
      }
      currentEra = era;
      startIndex = i;
    }
  }
  if (currentEra !== null) {
    ranges.push({ era: currentEra, startIndex, endIndex: CHRONOLOGICAL_PLAN.length - 1 });
  }
  return ranges;
}

export function getFirstIndexOfEra(era: BiblicalEra): number {
  const idx = CHRONOLOGICAL_PLAN.findIndex((e) => e.era === era);
  return idx >= 0 ? idx : 0;
}

export function getLocationsForEra(era: BiblicalEra) {
  return MAP_LOCATIONS.filter((l) => l.era === era);
}
