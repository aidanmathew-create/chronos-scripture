import { CHRONOLOGICAL_PLAN, TOTAL_READING_CHAPTERS } from '@/data/chronologicalPlan';

const PROGRESS_KEY = 'chronos_progress';
const STREAK_KEY = 'chronos_streak';
const SETTINGS_KEY = 'chronos_settings';

export interface ReadingProgress {
  currentIndex: number;
  completedIndices: number[];
  lastReadTimestamp: number;
}

export interface ReadingStreak {
  currentStreak: number;
  longestStreak: number;
  lastReadDate: string;
  history: string[];
}

export type LanguageMode = 'english' | 'malayalam' | 'parallel';

export interface AppSettings {
  candlelightMode: boolean;
  fontSize: number;
  languageMode: LanguageMode;
}

const DEFAULT_PROGRESS: ReadingProgress = {
  currentIndex: 0,
  completedIndices: [],
  lastReadTimestamp: 0,
};

const DEFAULT_STREAK: ReadingStreak = {
  currentStreak: 0,
  longestStreak: 0,
  lastReadDate: '',
  history: [],
};

const DEFAULT_SETTINGS: AppSettings = {
  candlelightMode: false,
  fontSize: 18,
  languageMode: 'english',
};

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage full, unavailable, or blocked — non-fatal
  }
}

export function loadProgress(): ReadingProgress {
  return safeParse(safeGetItem(PROGRESS_KEY), DEFAULT_PROGRESS);
}

export function saveProgress(progress: ReadingProgress): void {
  safeSetItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function loadStreak(): ReadingStreak {
  return safeParse(safeGetItem(STREAK_KEY), DEFAULT_STREAK);
}

export function saveStreak(streak: ReadingStreak): void {
  safeSetItem(STREAK_KEY, JSON.stringify(streak));
}

export function loadSettings(): AppSettings {
  return safeParse(safeGetItem(SETTINGS_KEY), DEFAULT_SETTINGS);
}

export function saveSettings(settings: AppSettings): void {
  safeSetItem(SETTINGS_KEY, JSON.stringify(settings));
}

function getDateString(date: Date): string {
  return date.toISOString().split('T')[0];
}

function isConsecutiveDay(prevDate: string, currentDate: string): boolean {
  const prev = new Date(prevDate + 'T00:00:00Z');
  const curr = new Date(currentDate + 'T00:00:00Z');
  const diffMs = curr.getTime() - prev.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays === 1;
}

export function markChapterComplete(
  progress: ReadingProgress,
  streak: ReadingStreak,
  index: number,
): { progress: ReadingProgress; streak: ReadingStreak } {
  const completedIndices = [...progress.completedIndices];
  if (!completedIndices.includes(index)) {
    completedIndices.push(index);
  }

  const newIndex = Math.min(index + 1, TOTAL_READING_CHAPTERS - 1);
  const now = new Date();
  const todayStr = getDateString(now);

  let newStreak: ReadingStreak;
  if (streak.lastReadDate === todayStr) {
    newStreak = streak;
  } else if (streak.lastReadDate && isConsecutiveDay(streak.lastReadDate, todayStr)) {
    newStreak = {
      ...streak,
      currentStreak: streak.currentStreak + 1,
      longestStreak: Math.max(streak.longestStreak, streak.currentStreak + 1),
      lastReadDate: todayStr,
      history: [...streak.history, todayStr],
    };
  } else {
    newStreak = {
      currentStreak: 1,
      longestStreak: Math.max(streak.longestStreak, 1),
      lastReadDate: todayStr,
      history: [...streak.history, todayStr],
    };
  }

  return {
    progress: {
      currentIndex: newIndex,
      completedIndices,
      lastReadTimestamp: now.getTime(),
    },
    streak: newStreak,
  };
}

export function setReadingPosition(index: number): ReadingProgress {
  const progress = loadProgress();
  return {
    ...progress,
    currentIndex: index,
  };
}

export function getProgressPercentage(completedIndices: number[]): number {
  return Math.round((completedIndices.length / TOTAL_READING_CHAPTERS) * 1000) / 10;
}

export function getCurrentEntry(index: number) {
  return CHRONOLOGICAL_PLAN[index] || null;
}
