export interface ReadingEntry {
  bookId: string;
  chapter: number;
}

import { BIBLE_BOOKS, BOOK_MAP, BiblicalEra } from './bibleBooks';
import { MAP_LOCATIONS } from './mapData';

function bk(bookId: string, chapter: number): ReadingEntry {
  return { bookId, chapter };
}

export interface ChronologicalEntry extends ReadingEntry {
  index: number;
  era: BiblicalEra;
  bookName: string;
  bookAbbr: string;
  chapterCount: number;
}

function buildCanonicalOrder(): ReadingEntry[] {
  const entries: ReadingEntry[] = [];
  for (const book of BIBLE_BOOKS) {
    for (let ch = 1; ch <= book.chapters; ch++) {
      entries.push(bk(book.id, ch));
    }
  }
  return entries;
}

const INTERLEAVE_INSERTIONS: { afterBookId: string; afterChapter: number; entries: ReadingEntry[] }[] = [
  { afterBookId: 'GEN', afterChapter: 11, entries: [bk('JOB', 1)] },
  { afterBookId: 'GEN', afterChapter: 20, entries: [bk('JOB', 2)] },
  { afterBookId: 'GEN', afterChapter: 31, entries: [bk('JOB', 3)] },
  { afterBookId: 'GEN', afterChapter: 45, entries: [bk('JOB', 4)] },
  { afterBookId: 'GEN', afterChapter: 50, entries: [bk('JOB', 5)] },
  { afterBookId: 'JDG', afterChapter: 4, entries: [bk('PSA', 57)] },
  { afterBookId: '1SA', afterChapter: 24, entries: [bk('PSA', 142), bk('PSA', 57), bk('PSA', 34)] },
  { afterBookId: '1SA', afterChapter: 26, entries: [bk('PSA', 7), bk('PSA', 17), bk('PSA', 35), bk('PSA', 54), bk('PSA', 63)] },
  { afterBookId: '1SA', afterChapter: 30, entries: [bk('PSA', 18)] },
  { afterBookId: '2SA', afterChapter: 1, entries: [bk('PSA', 60), bk('PSA', 23)] },
  { afterBookId: '2SA', afterChapter: 7, entries: [bk('PSA', 89), bk('PSA', 132)] },
  { afterBookId: '2SA', afterChapter: 11, entries: [bk('PSA', 51), bk('PSA', 32)] },
  { afterBookId: '2SA', afterChapter: 15, entries: [bk('PSA', 3), bk('PSA', 41), bk('PSA', 55), bk('PSA', 61), bk('PSA', 62), bk('PSA', 63)] },
  { afterBookId: '2SA', afterChapter: 22, entries: [bk('PSA', 18), bk('PSA', 116), bk('PSA', 117), bk('PSA', 118)] },
  { afterBookId: '2SA', afterChapter: 23, entries: [bk('PSA', 2)] },
  { afterBookId: '1KI', afterChapter: 3, entries: [bk('PSA', 72), bk('PRO', 1)] },
  { afterBookId: '1KI', afterChapter: 5, entries: [bk('PSA', 45), bk('SNG', 1)] },
  { afterBookId: '1KI', afterChapter: 8, entries: [bk('PSA', 136), bk('PSA', 134), bk('PSA', 135)] },
  { afterBookId: '1KI', afterChapter: 11, entries: [bk('ECC', 1)] },
  { afterBookId: '2KI', afterChapter: 15, entries: [bk('ISA', 1), bk('HOS', 1), bk('AMO', 1)] },
  { afterBookId: '2KI', afterChapter: 17, entries: [bk('ISA', 2), bk('MIC', 1), bk('HOS', 2), bk('AMO', 2)] },
  { afterBookId: '2KI', afterChapter: 18, entries: [bk('ISA', 36), bk('ISA', 37)] },
  { afterBookId: '2KI', afterChapter: 19, entries: [bk('ISA', 38), bk('ISA', 39)] },
  { afterBookId: '2KI', afterChapter: 20, entries: [bk('ISA', 40), bk('ISA', 41)] },
  { afterBookId: '2KI', afterChapter: 21, entries: [bk('NAM', 1), bk('ZEP', 1)] },
  { afterBookId: '2KI', afterChapter: 22, entries: [bk('JER', 1), bk('HAB', 1)] },
  { afterBookId: '2KI', afterChapter: 23, entries: [bk('JER', 2), bk('JER', 3)] },
  { afterBookId: '2KI', afterChapter: 24, entries: [bk('JER', 4), bk('JER', 5), bk('JER', 6)] },
  { afterBookId: '2KI', afterChapter: 25, entries: [bk('JER', 52), bk('LAM', 1), bk('LAM', 2), bk('LAM', 3), bk('LAM', 4), bk('LAM', 5), bk('EZK', 1), bk('EZK', 2), bk('EZK', 3), bk('EZK', 4), bk('EZK', 5), bk('EZK', 6), bk('EZK', 7), bk('EZK', 8), bk('EZK', 9), bk('EZK', 10), bk('EZK', 11), bk('EZK', 12), bk('EZK', 13), bk('EZK', 14), bk('EZK', 15), bk('EZK', 16), bk('EZK', 17), bk('EZK', 18), bk('EZK', 19), bk('EZK', 20), bk('EZK', 21), bk('EZK', 22), bk('EZK', 23), bk('EZK', 24), bk('EZK', 25), bk('EZK', 26), bk('EZK', 27), bk('EZK', 28), bk('EZK', 29), bk('EZK', 30), bk('EZK', 31), bk('EZK', 32), bk('EZK', 33), bk('EZK', 34), bk('EZK', 35), bk('EZK', 36), bk('EZK', 37), bk('EZK', 38), bk('EZK', 39), bk('EZK', 40), bk('EZK', 41), bk('EZK', 42), bk('EZK', 43), bk('EZK', 44), bk('EZK', 45), bk('EZK', 46), bk('EZK', 47), bk('EZK', 48), bk('OBA', 1)] },
  { afterBookId: 'EZR', afterChapter: 4, entries: [bk('EZK', 25), bk('ZEC', 1), bk('HAG', 1)] },
  { afterBookId: 'EZR', afterChapter: 6, entries: [bk('ZEC', 2), bk('ZEC', 3), bk('ZEC', 4), bk('HAG', 2)] },
  { afterBookId: 'EZR', afterChapter: 7, entries: [bk('MAL', 1)] },
  { afterBookId: 'NEH', afterChapter: 13, entries: [bk('MAL', 2), bk('MAL', 3), bk('MAL', 4)] },
  { afterBookId: 'EST', afterChapter: 4, entries: [bk('DAN', 1), bk('DAN', 2)] },
  { afterBookId: 'EST', afterChapter: 10, entries: [bk('DAN', 3), bk('DAN', 4), bk('DAN', 5), bk('DAN', 6), bk('DAN', 7), bk('DAN', 8), bk('DAN', 9), bk('DAN', 10), bk('DAN', 11), bk('DAN', 12)] },
  { afterBookId: 'JHN', afterChapter: 12, entries: [bk('MAT', 21), bk('MAT', 22), bk('MAT', 23), bk('MAT', 24), bk('MAT', 25), bk('MAT', 26)] },
  { afterBookId: 'JHN', afterChapter: 19, entries: [bk('MAT', 27)] },
  { afterBookId: 'JHN', afterChapter: 20, entries: [bk('MAT', 28), bk('MRK', 16), bk('LUK', 24)] },
  { afterBookId: 'ACT', afterChapter: 2, entries: [bk('JAS', 1), bk('JAS', 2), bk('JAS', 3), bk('JAS', 4), bk('JAS', 5)] },
  { afterBookId: 'ACT', afterChapter: 15, entries: [bk('GAL', 1), bk('GAL', 2), bk('GAL', 3), bk('GAL', 4), bk('GAL', 5), bk('GAL', 6)] },
  { afterBookId: 'ACT', afterChapter: 18, entries: [bk('1TH', 1), bk('1TH', 2), bk('1TH', 3), bk('1TH', 4), bk('1TH', 5), bk('2TH', 1), bk('2TH', 2), bk('2TH', 3), bk('1CO', 1), bk('1CO', 2), bk('1CO', 3), bk('1CO', 4), bk('1CO', 5), bk('1CO', 6), bk('1CO', 7), bk('1CO', 8), bk('1CO', 9), bk('1CO', 10), bk('1CO', 11), bk('1CO', 12), bk('1CO', 13), bk('1CO', 14), bk('1CO', 15), bk('1CO', 16), bk('2CO', 1), bk('2CO', 2), bk('2CO', 3), bk('2CO', 4), bk('2CO', 5), bk('2CO', 6), bk('2CO', 7), bk('2CO', 8), bk('2CO', 9), bk('2CO', 10), bk('2CO', 11), bk('2CO', 12), bk('2CO', 13), bk('ROM', 1), bk('ROM', 2), bk('ROM', 3), bk('ROM', 4), bk('ROM', 5), bk('ROM', 6), bk('ROM', 7), bk('ROM', 8), bk('ROM', 9), bk('ROM', 10), bk('ROM', 11), bk('ROM', 12), bk('ROM', 13), bk('ROM', 14), bk('ROM', 15), bk('ROM', 16)] },
  { afterBookId: 'ACT', afterChapter: 20, entries: [bk('EPH', 1), bk('EPH', 2), bk('EPH', 3), bk('EPH', 4), bk('EPH', 5), bk('EPH', 6), bk('PHP', 1), bk('PHP', 2), bk('PHP', 3), bk('PHP', 4), bk('COL', 1), bk('COL', 2), bk('COL', 3), bk('COL', 4), bk('PHM', 1), bk('1TI', 1), bk('1TI', 2), bk('1TI', 3), bk('1TI', 4), bk('1TI', 5), bk('1TI', 6), bk('TIT', 1), bk('TIT', 2), bk('TIT', 3)] },
  { afterBookId: 'ACT', afterChapter: 28, entries: [bk('2TI', 1), bk('2TI', 2), bk('2TI', 3), bk('2TI', 4), bk('HEB', 1), bk('HEB', 2), bk('HEB', 3), bk('HEB', 4), bk('HEB', 5), bk('HEB', 6), bk('HEB', 7), bk('HEB', 8), bk('HEB', 9), bk('HEB', 10), bk('HEB', 11), bk('HEB', 12), bk('HEB', 13), bk('1PE', 1), bk('1PE', 2), bk('1PE', 3), bk('1PE', 4), bk('1PE', 5), bk('2PE', 1), bk('2PE', 2), bk('2PE', 3), bk('1JN', 1), bk('1JN', 2), bk('1JN', 3), bk('1JN', 4), bk('1JN', 5), bk('2JN', 1), bk('3JN', 1), bk('JUD', 1), bk('REV', 1), bk('REV', 2), bk('REV', 3), bk('REV', 4), bk('REV', 5), bk('REV', 6), bk('REV', 7), bk('REV', 8), bk('REV', 9), bk('REV', 10), bk('REV', 11), bk('REV', 12), bk('REV', 13), bk('REV', 14), bk('REV', 15), bk('REV', 16), bk('REV', 17), bk('REV', 18), bk('REV', 19), bk('REV', 20), bk('REV', 21), bk('REV', 22)] },
];

function buildChronologicalOrder(): ReadingEntry[] {
  const canonical = buildCanonicalOrder();
  const insertedBookChapters = new Set<string>();

  for (const ins of INTERLEAVE_INSERTIONS) {
    for (const e of ins.entries) {
      insertedBookChapters.add(`${e.bookId}:${e.chapter}`);
    }
  }

  const filtered = canonical.filter((e) => !insertedBookChapters.has(`${e.bookId}:${e.chapter}`));

  const result: ReadingEntry[] = [...filtered];
  const insertions = [...INTERLEAVE_INSERTIONS].sort((a, b) => {
    const aIdx = filtered.findIndex((e) => e.bookId === a.afterBookId && e.chapter === a.afterChapter);
    const bIdx = filtered.findIndex((e) => e.bookId === b.afterBookId && e.chapter === b.afterChapter);
    return bIdx - aIdx;
  });

  for (const ins of insertions) {
    const idx = result.findIndex((e) => e.bookId === ins.afterBookId && e.chapter === ins.afterChapter);
    if (idx >= 0) {
      result.splice(idx + 1, 0, ...ins.entries);
    }
  }

  return result;
}

const RAW_ORDER = buildChronologicalOrder();

const seen = new Set<string>();
const DEDUPED_ORDER = RAW_ORDER.filter((e) => {
  const key = `${e.bookId}:${e.chapter}`;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

export const CHRONOLOGICAL_PLAN: ChronologicalEntry[] = DEDUPED_ORDER
  .filter((entry) => BOOK_MAP[entry.bookId] !== undefined)
  .map((entry, index) => {
    const book = BOOK_MAP[entry.bookId];
    return {
      ...entry,
      index,
      era: book.era,
      bookName: book.name,
      bookAbbr: book.abbr,
      chapterCount: book.chapters,
    };
  });

export const TOTAL_READING_CHAPTERS = CHRONOLOGICAL_PLAN.length;

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
