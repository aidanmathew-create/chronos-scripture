import { Flame, Moon, Sun, BookOpen, Download, Loader2, Cloud, Languages } from 'lucide-react';
import { useState } from 'react';
import { LanguageMode } from '@/services/progressService';

interface AppHeaderProps {
  candlelight: boolean;
  onToggleCandlelight: () => void;
  currentStreak: number;
  completedCount: number;
  totalCount: number;
  onOpenDrawer: () => void;
  onPrefetchAll: () => void;
  prefetching: boolean;
  prefetchProgress: { done: number; total: number } | null;
  languageMode: LanguageMode;
  onLanguageModeChange: (mode: LanguageMode) => void;
  onOpenAuth: () => void;
  isSignedIn: boolean;
}

export function AppHeader({
  candlelight,
  onToggleCandlelight,
  currentStreak,
  completedCount,
  totalCount,
  onOpenDrawer,
  onPrefetchAll,
  prefetching,
  prefetchProgress,
  languageMode,
  onLanguageModeChange,
  onOpenAuth,
  isSignedIn,
}: AppHeaderProps) {
  const [showStats, setShowStats] = useState(false);
  const progressPct = Math.round((completedCount / totalCount) * 1000) / 10;

  const languageOptions: { mode: LanguageMode; label: string }[] = [
    { mode: 'english', label: 'EN' },
    { mode: 'malayalam', label: 'ML' },
    { mode: 'parallel', label: 'EN+ML' },
  ];

  return (
    <header className="border-b border-gold-300/30 bg-parchment-50/80 backdrop-blur-md dark:bg-ink-100/80 z-20">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <BookOpen size={28} className="burgundy-text dark:text-gold-200" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-300 animate-pulse" />
            </div>
            <div>
              <h1
                className="text-xl font-bold burgundy-text dark:text-gold-200 leading-tight"
                style={{ fontFamily: '"EB Garamond", serif' }}
              >
                Chronos Scripture
              </h1>
              <p className="text-xs text-gold-600 dark:text-gold-300 tracking-wide -mt-0.5">
                Chronological Bible Reading
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div className="flex items-center rounded-lg border border-gold-300/30 overflow-hidden" title="Language: English / Malayalam / Parallel">
            <Languages size={14} className="ml-2 mr-1 text-gold-600 dark:text-gold-300" />
            {languageOptions.map((opt) => (
              <button
                key={opt.mode}
                onClick={() => onLanguageModeChange(opt.mode)}
                className={`px-2 py-1.5 text-xs font-semibold transition-all ${
                  languageMode === opt.mode
                    ? 'bg-burgundy-100/80 text-parchment-50 dark:bg-burgundy-100/60'
                    : 'text-ink-200/50 dark:text-parchment-200/50 hover:bg-parchment-200/30 dark:hover:bg-ink-50/20'
                }`}
                style={languageMode === opt.mode ? { fontFamily: '"Cormorant Garamond", serif' } : undefined}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Cloud sync */}
          <button
            onClick={onOpenAuth}
            className={`relative p-2 rounded-lg transition-all ${
              isSignedIn
                ? 'text-gold-600 dark:text-gold-300 hover:bg-parchment-200/30 dark:hover:bg-ink-50/20'
                : 'text-ink-200/40 dark:text-parchment-200/40 hover:text-gold-600 dark:hover:text-gold-300 hover:bg-parchment-200/30 dark:hover:bg-ink-50/20'
            }`}
            title={isSignedIn ? 'Cloud sync active — click to manage' : 'Sign in for cloud sync'}
          >
            <Cloud size={18} />
            {isSignedIn && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-400 border border-parchment-50 dark:border-ink-100" />
            )}
          </button>

          <div
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-burgundy-50/20 dark:bg-burgundy-100/10 border border-gold-300/20 cursor-pointer"
            onClick={() => setShowStats(!showStats)}
            title="Reading stats"
          >
            <Flame size={16} className={currentStreak > 0 ? 'text-burgundy-300' : 'text-ink-200/30'} />
            <span className="text-sm font-semibold burgundy-text dark:text-gold-200">
              {currentStreak} {currentStreak === 1 ? 'day' : 'days'}
            </span>
          </div>

          <div className="hidden md:block text-xs text-ink-200/50 dark:text-parchment-200/50">
            {completedCount}/{totalCount} ({progressPct}%)
          </div>

          <button
            onClick={onPrefetchAll}
            disabled={prefetching}
            className="p-2 rounded-lg text-ink-200/60 hover:text-gold-600 dark:text-parchment-200/60 dark:hover:text-gold-300 hover:bg-parchment-200/30 dark:hover:bg-ink-50/20 transition-all"
            title={prefetching ? 'Downloading...' : 'Download all chapters for offline reading'}
          >
            {prefetching ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
          </button>

          <button
            onClick={onToggleCandlelight}
            className="p-2 rounded-lg text-ink-200/60 hover:text-gold-600 dark:text-parchment-200/60 dark:hover:text-gold-300 hover:bg-parchment-200/30 dark:hover:bg-ink-50/20 transition-all"
            title={candlelight ? 'Switch to daylight mode' : 'Switch to candlelight mode'}
          >
            {candlelight ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={onOpenDrawer}
            className="p-2 rounded-lg text-ink-200/60 hover:text-burgundy-200 dark:text-parchment-200/60 dark:hover:text-gold-200 hover:bg-parchment-200/30 dark:hover:bg-ink-50/20 transition-all"
            title="Open Hermeneutics & Theology panel"
          >
            <BookOpen size={18} />
          </button>
        </div>
      </div>

      {prefetchProgress && (
        <div className="px-4 pb-2">
          <div className="flex items-center gap-2 text-xs text-gold-600 dark:text-gold-300">
            <Loader2 size={12} className="animate-spin" />
            <span>
              Downloading for offline: {prefetchProgress.done}/{prefetchProgress.total} chapters
            </span>
          </div>
          <div className="h-1 rounded-full bg-parchment-200/30 dark:bg-ink-50/20 mt-1">
            <div
              className="h-full rounded-full bg-gold-300 transition-all duration-300"
              style={{ width: `${(prefetchProgress.done / prefetchProgress.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />
    </header>
  );
}
