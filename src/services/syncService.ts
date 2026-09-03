import { supabase } from './supabaseClient';
import { ReadingProgress, ReadingStreak, AppSettings, loadProgress, loadStreak, loadSettings } from './progressService';

export interface SyncData {
  current_index: number;
  completed_indices: number[];
  last_read_timestamp: number;
  current_streak: number;
  longest_streak: number;
  last_read_date: string;
  history: string[];
  candlelight_mode: boolean;
  font_size: number;
  language_mode: string;
}

export function buildSyncDataFromLocal(): SyncData {
  const progress = loadProgress();
  const streak = loadStreak();
  const settings = loadSettings();

  return {
    current_index: progress.currentIndex,
    completed_indices: progress.completedIndices,
    last_read_timestamp: progress.lastReadTimestamp,
    current_streak: streak.currentStreak,
    longest_streak: streak.longestStreak,
    last_read_date: streak.lastReadDate,
    history: streak.history,
    candlelight_mode: settings.candlelightMode,
    font_size: settings.fontSize,
    language_mode: settings.languageMode || 'english',
  };
}

export async function pushToCloud(): Promise<void> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return;

  const syncData = buildSyncDataFromLocal();

  const { error } = await supabase
    .from('reading_sync')
    .upsert({
      user_id: session.user.id,
      ...syncData,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' });

  if (error) throw error;
}

export async function pullFromCloud(): Promise<SyncData | null> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;

  const { data, error } = await supabase
    .from('reading_sync')
    .select('*')
    .eq('user_id', session.user.id)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return data as SyncData;
}

export async function syncFromCloudToLocal(): Promise<{ progress: ReadingProgress; streak: ReadingStreak; settings: AppSettings } | null> {
  const cloud = await pullFromCloud();
  if (!cloud) return null;

  return {
    progress: {
      currentIndex: cloud.current_index,
      completedIndices: cloud.completed_indices || [],
      lastReadTimestamp: cloud.last_read_timestamp,
    },
    streak: {
      currentStreak: cloud.current_streak,
      longestStreak: cloud.longest_streak,
      lastReadDate: cloud.last_read_date,
      history: cloud.history || [],
    },
    settings: {
      candlelightMode: cloud.candlelight_mode,
      fontSize: cloud.font_size,
      languageMode: cloud.language_mode as 'english' | 'malayalam' | 'parallel',
    },
  };
}

let syncTimer: ReturnType<typeof setTimeout> | null = null;

export function debouncedPush(delay = 3000): void {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(async () => {
    try {
      await pushToCloud();
    } catch {
      // silent — will retry on next change
    }
  }, delay);
}
