import { BOOK_MAP } from '@/data/bibleBooks';

export interface Verse {
  verse: number;
  text: string;
}

export interface ChapterData {
  bookId: string;
  bookName: string;
  chapter: number;
  verses: Verse[];
  source: string;
}

const CACHE_PREFIX = 'chronos_chapter_';
const CACHE_VERSION = 'web_v1';

function getCacheKey(bookId: string, chapter: number): string {
  return `${CACHE_PREFIX}${CACHE_VERSION}_${bookId}_${chapter}`;
}

function getCachedChapter(bookId: string, chapter: number): ChapterData | null {
  try {
    const raw = localStorage.getItem(getCacheKey(bookId, chapter));
    if (!raw) return null;
    return JSON.parse(raw) as ChapterData;
  } catch {
    return null;
  }
}

function setCachedChapter(data: ChapterData): void {
  try {
    localStorage.setItem(getCacheKey(data.bookId, data.chapter), JSON.stringify(data));
  } catch {
    // Storage full or unavailable — non-fatal, reading still works this session
  }
}

export function isChapterCached(bookId: string, chapter: number): boolean {
  return getCachedChapter(bookId, chapter) !== null;
}

export function getCachedChapterCount(): number {
  let count = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(`${CACHE_PREFIX}${CACHE_VERSION}_`)) count++;
    }
  } catch {
    // ignore
  }
  return count;
}

async function fetchChapterFromAPI(bookId: string, chapter: number): Promise<ChapterData> {
  const book = BOOK_MAP[bookId];
  if (!book) throw new Error(`Unknown book: ${bookId}`);
  const url = `https://bible-api.com/${encodeURIComponent(book.name)}+${chapter}?translation=web`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`API returned ${response.status}`);

  const json = await response.json();

  const verses: Verse[] = (json.verses || []).map((v: { verse: number; text: string }) => ({
    verse: v.verse,
    text: v.text.trim(),
  }));

  return {
    bookId,
    bookName: book.name,
    chapter,
    verses,
    source: 'World English Bible (WEB) — Public Domain',
  };
}

export async function getChapter(bookId: string, chapter: number): Promise<ChapterData> {
  const cached = getCachedChapter(bookId, chapter);
  if (cached) return cached;

  const data = await fetchChapterFromAPI(bookId, chapter);
  setCachedChapter(data);
  return data;
}

export async function prefetchChapter(bookId: string, chapter: number): Promise<void> {
  if (isChapterCached(bookId, chapter)) return;
  try {
    const data = await fetchChapterFromAPI(bookId, chapter);
    setCachedChapter(data);
  } catch {
    // prefetch failures are silent — will retry on actual read
  }
}

export async function prefetchRange(
  entries: { bookId: string; chapter: number }[],
  onProgress?: (done: number, total: number) => void,
): Promise<void> {
  const toFetch = entries.filter((e) => !isChapterCached(e.bookId, e.chapter));
  let done = 0;
  for (const entry of toFetch) {
    try {
      const data = await fetchChapterFromAPI(entry.bookId, entry.chapter);
      setCachedChapter(data);
    } catch {
      // continue even if some fail
    }
    done++;
    onProgress?.(done, toFetch.length);
  }
}
