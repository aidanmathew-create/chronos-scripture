export interface BibleBook {
  id: string;
  name: string;
  abbr: string;
  testament: 'OT' | 'NT';
  era: BiblicalEra;
  chapters: number;
  historicalOrder: number;
}

export type BiblicalEra =
  | 'Patriarchal'
  | 'Exodus'
  | 'Monarchy'
  | 'Exile'
  | 'Gospel'
  | 'Apostolic';

export const ERA_ORDER: BiblicalEra[] = [
  'Patriarchal',
  'Exodus',
  'Monarchy',
  'Exile',
  'Gospel',
  'Apostolic',
];

export const ERA_COLORS: Record<BiblicalEra, string> = {
  Patriarchal: '#8B6914',
  Exodus: '#C5A059',
  Monarchy: '#5C1D24',
  Exile: '#3A6B5C',
  Gospel: '#B8860B',
  Apostolic: '#6B4226',
};

export const BIBLE_BOOKS: BibleBook[] = [
  { id: 'GEN', name: 'Genesis', abbr: 'Gen', testament: 'OT', era: 'Patriarchal', chapters: 50, historicalOrder: 1 },
  { id: 'EXO', name: 'Exodus', abbr: 'Exod', testament: 'OT', era: 'Exodus', chapters: 40, historicalOrder: 2 },
  { id: 'LEV', name: 'Leviticus', abbr: 'Lev', testament: 'OT', era: 'Exodus', chapters: 27, historicalOrder: 3 },
  { id: 'NUM', name: 'Numbers', abbr: 'Num', testament: 'OT', era: 'Exodus', chapters: 36, historicalOrder: 4 },
  { id: 'DEU', name: 'Deuteronomy', abbr: 'Deut', testament: 'OT', era: 'Exodus', chapters: 34, historicalOrder: 5 },
  { id: 'JOS', name: 'Joshua', abbr: 'Josh', testament: 'OT', era: 'Exodus', chapters: 24, historicalOrder: 6 },
  { id: 'JDG', name: 'Judges', abbr: 'Judg', testament: 'OT', era: 'Monarchy', chapters: 21, historicalOrder: 7 },
  { id: 'RUT', name: 'Ruth', abbr: 'Ruth', testament: 'OT', era: 'Monarchy', chapters: 4, historicalOrder: 8 },
  { id: '1SA', name: '1 Samuel', abbr: '1Sam', testament: 'OT', era: 'Monarchy', chapters: 31, historicalOrder: 9 },
  { id: '2SA', name: '2 Samuel', abbr: '2Sam', testament: 'OT', era: 'Monarchy', chapters: 24, historicalOrder: 11 },
  { id: '1KI', name: '1 Kings', abbr: '1Kgs', testament: 'OT', era: 'Monarchy', chapters: 22, historicalOrder: 12 },
  { id: '2KI', name: '2 Kings', abbr: '2Kgs', testament: 'OT', era: 'Exile', chapters: 25, historicalOrder: 14 },
  { id: '1CH', name: '1 Chronicles', abbr: '1Chr', testament: 'OT', era: 'Monarchy', chapters: 29, historicalOrder: 10 },
  { id: '2CH', name: '2 Chronicles', abbr: '2Chr', testament: 'OT', era: 'Exile', chapters: 36, historicalOrder: 13 },
  { id: 'EZR', name: 'Ezra', abbr: 'Ezra', testament: 'OT', era: 'Exile', chapters: 10, historicalOrder: 15 },
  { id: 'NEH', name: 'Nehemiah', abbr: 'Neh', testament: 'OT', era: 'Exile', chapters: 13, historicalOrder: 16 },
  { id: 'EST', name: 'Esther', abbr: 'Est', testament: 'OT', era: 'Exile', chapters: 10, historicalOrder: 17 },
  { id: 'JOB', name: 'Job', abbr: 'Job', testament: 'OT', era: 'Patriarchal', chapters: 42, historicalOrder: 18 },
  { id: 'PSA', name: 'Psalms', abbr: 'Ps', testament: 'OT', era: 'Monarchy', chapters: 150, historicalOrder: 19 },
  { id: 'PRO', name: 'Proverbs', abbr: 'Prov', testament: 'OT', era: 'Monarchy', chapters: 31, historicalOrder: 20 },
  { id: 'ECC', name: 'Ecclesiastes', abbr: 'Eccles', testament: 'OT', era: 'Monarchy', chapters: 12, historicalOrder: 21 },
  { id: 'SNG', name: 'Song of Solomon', abbr: 'Song', testament: 'OT', era: 'Monarchy', chapters: 8, historicalOrder: 22 },
  { id: 'ISA', name: 'Isaiah', abbr: 'Isa', testament: 'OT', era: 'Exile', chapters: 66, historicalOrder: 23 },
  { id: 'JER', name: 'Jeremiah', abbr: 'Jer', testament: 'OT', era: 'Exile', chapters: 52, historicalOrder: 24 },
  { id: 'LAM', name: 'Lamentations', abbr: 'Lam', testament: 'OT', era: 'Exile', chapters: 5, historicalOrder: 25 },
  { id: 'EZK', name: 'Ezekiel', abbr: 'Ezek', testament: 'OT', era: 'Exile', chapters: 48, historicalOrder: 26 },
  { id: 'DAN', name: 'Daniel', abbr: 'Dan', testament: 'OT', era: 'Exile', chapters: 12, historicalOrder: 27 },
  { id: 'HOS', name: 'Hosea', abbr: 'Hos', testament: 'OT', era: 'Exile', chapters: 14, historicalOrder: 28 },
  { id: 'JOL', name: 'Joel', abbr: 'Joel', testament: 'OT', era: 'Exile', chapters: 3, historicalOrder: 29 },
  { id: 'AMO', name: 'Amos', abbr: 'Amos', testament: 'OT', era: 'Exile', chapters: 9, historicalOrder: 30 },
  { id: 'OBA', name: 'Obadiah', abbr: 'Obad', testament: 'OT', era: 'Exile', chapters: 1, historicalOrder: 31 },
  { id: 'JON', name: 'Jonah', abbr: 'Jonah', testament: 'OT', era: 'Exile', chapters: 4, historicalOrder: 32 },
  { id: 'MIC', name: 'Micah', abbr: 'Mic', testament: 'OT', era: 'Exile', chapters: 7, historicalOrder: 33 },
  { id: 'NAM', name: 'Nahum', abbr: 'Nah', testament: 'OT', era: 'Exile', chapters: 3, historicalOrder: 34 },
  { id: 'HAB', name: 'Habakkuk', abbr: 'Hab', testament: 'OT', era: 'Exile', chapters: 3, historicalOrder: 35 },
  { id: 'ZEP', name: 'Zephaniah', abbr: 'Zeph', testament: 'OT', era: 'Exile', chapters: 3, historicalOrder: 36 },
  { id: 'HAG', name: 'Haggai', abbr: 'Hag', testament: 'OT', era: 'Exile', chapters: 2, historicalOrder: 37 },
  { id: 'ZEC', name: 'Zechariah', abbr: 'Zech', testament: 'OT', era: 'Exile', chapters: 14, historicalOrder: 38 },
  { id: 'MAL', name: 'Malachi', abbr: 'Mal', testament: 'OT', era: 'Exile', chapters: 4, historicalOrder: 39 },
  { id: 'MAT', name: 'Matthew', abbr: 'Matt', testament: 'NT', era: 'Gospel', chapters: 28, historicalOrder: 40 },
  { id: 'MRK', name: 'Mark', abbr: 'Mark', testament: 'NT', era: 'Gospel', chapters: 16, historicalOrder: 41 },
  { id: 'LUK', name: 'Luke', abbr: 'Luke', testament: 'NT', era: 'Gospel', chapters: 24, historicalOrder: 42 },
  { id: 'JHN', name: 'John', abbr: 'John', testament: 'NT', era: 'Gospel', chapters: 21, historicalOrder: 43 },
  { id: 'ACT', name: 'Acts', abbr: 'Acts', testament: 'NT', era: 'Apostolic', chapters: 28, historicalOrder: 44 },
  { id: 'ROM', name: 'Romans', abbr: 'Rom', testament: 'NT', era: 'Apostolic', chapters: 16, historicalOrder: 45 },
  { id: '1CO', name: '1 Corinthians', abbr: '1Cor', testament: 'NT', era: 'Apostolic', chapters: 16, historicalOrder: 46 },
  { id: '2CO', name: '2 Corinthians', abbr: '2Cor', testament: 'NT', era: 'Apostolic', chapters: 13, historicalOrder: 47 },
  { id: 'GAL', name: 'Galatians', abbr: 'Gal', testament: 'NT', era: 'Apostolic', chapters: 6, historicalOrder: 48 },
  { id: 'EPH', name: 'Ephesians', abbr: 'Eph', testament: 'NT', era: 'Apostolic', chapters: 6, historicalOrder: 49 },
  { id: 'PHP', name: 'Philippians', abbr: 'Phil', testament: 'NT', era: 'Apostolic', chapters: 4, historicalOrder: 50 },
  { id: 'COL', name: 'Colossians', abbr: 'Col', testament: 'NT', era: 'Apostolic', chapters: 4, historicalOrder: 51 },
  { id: '1TH', name: '1 Thessalonians', abbr: '1Thess', testament: 'NT', era: 'Apostolic', chapters: 5, historicalOrder: 52 },
  { id: '2TH', name: '2 Thessalonians', abbr: '2Thess', testament: 'NT', era: 'Apostolic', chapters: 3, historicalOrder: 53 },
  { id: '1TI', name: '1 Timothy', abbr: '1Tim', testament: 'NT', era: 'Apostolic', chapters: 6, historicalOrder: 54 },
  { id: '2TI', name: '2 Timothy', abbr: '2Tim', testament: 'NT', era: 'Apostolic', chapters: 4, historicalOrder: 55 },
  { id: 'TIT', name: 'Titus', abbr: 'Titus', testament: 'NT', era: 'Apostolic', chapters: 3, historicalOrder: 56 },
  { id: 'PHM', name: 'Philemon', abbr: 'Phlm', testament: 'NT', era: 'Apostolic', chapters: 1, historicalOrder: 57 },
  { id: 'HEB', name: 'Hebrews', abbr: 'Heb', testament: 'NT', era: 'Apostolic', chapters: 13, historicalOrder: 58 },
  { id: 'JAS', name: 'James', abbr: 'Jas', testament: 'NT', era: 'Apostolic', chapters: 5, historicalOrder: 59 },
  { id: '1PE', name: '1 Peter', abbr: '1Pet', testament: 'NT', era: 'Apostolic', chapters: 5, historicalOrder: 60 },
  { id: '2PE', name: '2 Peter', abbr: '2Pet', testament: 'NT', era: 'Apostolic', chapters: 3, historicalOrder: 61 },
  { id: '1JN', name: '1 John', abbr: '1John', testament: 'NT', era: 'Apostolic', chapters: 5, historicalOrder: 62 },
  { id: '2JN', name: '2 John', abbr: '2John', testament: 'NT', era: 'Apostolic', chapters: 1, historicalOrder: 63 },
  { id: '3JN', name: '3 John', abbr: '3John', testament: 'NT', era: 'Apostolic', chapters: 1, historicalOrder: 64 },
  { id: 'JUD', name: 'Jude', abbr: 'Jude', testament: 'NT', era: 'Apostolic', chapters: 1, historicalOrder: 65 },
  { id: 'REV', name: 'Revelation', abbr: 'Rev', testament: 'NT', era: 'Apostolic', chapters: 22, historicalOrder: 66 },
];

export const BOOK_MAP: Record<string, BibleBook> = Object.fromEntries(
  BIBLE_BOOKS.map((b) => [b.id, b]),
);

export const TOTAL_CHAPTERS = BIBLE_BOOKS.reduce((sum, b) => sum + b.chapters, 0);
