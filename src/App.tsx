import { useState, useEffect, useCallback, useMemo } from 'react';
import { AppHeader } from '@/components/AppHeader';
import { TimelineBar } from '@/components/TimelineBar';
import { ScriptureReader } from '@/components/ScriptureReader';
import { HermeneuticsDrawer } from '@/components/HermeneuticsDrawer';
import { MapModal } from '@/components/MapModal';
import { AuthModal } from '@/components/AuthModal';
import { LexiconModal } from '@/components/LexiconModal';
import { ChapterList } from '@/components/ChapterList';
import { ManuscriptBorder } from '@/components/ManuscriptBorder';
import { CHRONOLOGICAL_PLAN, TOTAL_READING_CHAPTERS, getEntry, getLocationsForEra } from '@/data/chronologicalPlan';
import { getLocationsForChapter } from '@/data/mapData';
import { MapLocation } from '@/data/mapData';
import { BiblicalEra } from '@/data/bibleBooks';
import { LexiconEntry } from '@/data/lexicon';
import {
  loadProgress,
  saveProgress,
  loadStreak,
  saveStreak,
  loadSettings,
  saveSettings,
  markChapterComplete,
  ReadingProgress,
  ReadingStreak,
  AppSettings,
  LanguageMode,
} from '@/services/progressService';
import { prefetchRange, getCachedChapterCount } from '@/services/bibleTextService';
import { supabase } from '@/services/supabaseClient';
import { syncFromCloudToLocal, debouncedPush } from '@/services/syncService';
import { Map as MapIcon, List as ListIcon, X } from 'lucide-react';

function App() {
  const [progress, setProgress] = useState<ReadingProgress>(loadProgress());
  const [streak, setStreak] = useState<ReadingStreak>(loadStreak());
  const [settings, setSettings] = useState<AppSettings>(loadSettings());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [completeGlow, setCompleteGlow] = useState(false);
  const [prefetching, setPrefetching] = useState(false);
  const [prefetchProgress, setPrefetchProgress] = useState<{ done: number; total: number } | null>(null);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [lexiconEntry, setLexiconEntry] = useState<LexiconEntry | null>(null);
  const [lexiconModalOpen, setLexiconModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const currentIndex = progress.currentIndex;
  const currentEntry = getEntry(currentIndex) || CHRONOLOGICAL_PLAN[0];
  const isCompleted = progress.completedIndices.includes(currentEntry.index);

  const currentLocations: MapLocation[] = useMemo(() => {
    const chapterLocs = getLocationsForChapter(currentEntry.index);
    return chapterLocs.length > 0 ? chapterLocs : getLocationsForEra(currentEntry.era);
  }, [currentEntry.index, currentEntry.era]);

  useEffect(() => {
    saveProgress(progress);
    if (isSignedIn) debouncedPush();
  }, [progress, isSignedIn]);

  useEffect(() => {
    saveStreak(streak);
    if (isSignedIn) debouncedPush();
  }, [streak, isSignedIn]);

  useEffect(() => {
    saveSettings(settings);
    if (isSignedIn) debouncedPush();
  }, [settings, isSignedIn]);

  useEffect(() => {
    if (settings.candlelightMode) {
      document.documentElement.classList.add('candlelight', 'dark');
    } else {
      document.documentElement.classList.remove('candlelight', 'dark');
    }
  }, [settings.candlelightMode]);

  // Auth state listener + initial cloud sync on sign-in
  useEffect(() => {
    const { data: authData } = supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        if (session) {
          setIsSignedIn(true);
          setUserEmail(session.user.email || null);
          try {
            const cloudData = await syncFromCloudToLocal();
            if (cloudData) {
              setProgress(cloudData.progress);
              setStreak(cloudData.streak);
              setSettings(cloudData.settings);
            }
          } catch {
            // sync failed — will retry next session
          }
        } else {
          setIsSignedIn(false);
          setUserEmail(null);
        }
      })();
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsSignedIn(true);
        setUserEmail(session.user.email || null);
        syncFromCloudToLocal().then((cloudData) => {
          if (cloudData) {
            setProgress(cloudData.progress);
            setStreak(cloudData.streak);
            setSettings(cloudData.settings);
          }
        }).catch(() => {});
      }
    });

    return () => {
      authData.subscription.unsubscribe();
    };
  }, []);

  const handleComplete = useCallback(() => {
    if (isCompleted) return;
    const result = markChapterComplete(progress, streak, currentEntry.index);
    setProgress(result.progress);
    setStreak(result.streak);
    setCompleteGlow(true);
    setTimeout(() => setCompleteGlow(false), 2000);
  }, [isCompleted, progress, streak, currentEntry.index]);

  const handleNavigate = useCallback(
    (direction: 'prev' | 'next') => {
      const newIndex =
        direction === 'prev'
          ? Math.max(0, currentIndex - 1)
          : Math.min(TOTAL_READING_CHAPTERS - 1, currentIndex + 1);
      setProgress({ ...progress, currentIndex: newIndex });
    },
    [currentIndex, progress],
  );

  const handleJumpTo = useCallback(
    (index: number) => {
      setProgress({ ...progress, currentIndex: index });
      setShowMobileSidebar(false);
    },
    [progress],
  );

  const handleEraSelect = useCallback(
    (index: number) => {
      setProgress({ ...progress, currentIndex: index });
    },
    [progress],
  );

  const handleToggleCandlelight = useCallback(() => {
    setSettings({ ...settings, candlelightMode: !settings.candlelightMode });
  }, [settings]);

  const handleLanguageModeChange = useCallback((mode: LanguageMode) => {
    setSettings((prev) => ({ ...prev, languageMode: mode }));
  }, []);

  const handlePrefetchAll = useCallback(async () => {
    setPrefetching(true);
    const cachedCount = getCachedChapterCount();
    const remaining = CHRONOLOGICAL_PLAN.slice(cachedCount);
    setPrefetchProgress({ done: 0, total: remaining.length });
    await prefetchRange(remaining, (done, total) => {
      setPrefetchProgress({ done, total });
    });
    setPrefetching(false);
    setPrefetchProgress(null);
  }, []);

  const handleCrossRefJump = useCallback(
    (bookAbbr: string, chapter: number) => {
      const targetEntry = CHRONOLOGICAL_PLAN.find(
        (e) =>
          e.bookAbbr.toLowerCase() === bookAbbr.toLowerCase().replace(/\s/g, '') &&
          e.chapter === chapter,
      );
      if (targetEntry) {
        handleJumpTo(targetEntry.index);
        setDrawerOpen(false);
      }
    },
    [handleJumpTo],
  );

  const handleLexiconClick = useCallback((entry: LexiconEntry) => {
    setLexiconEntry(entry);
    setLexiconModalOpen(true);
  }, []);

  const handleSignOut = useCallback(async () => {
    await supabase.auth.signOut();
    setIsSignedIn(false);
    setUserEmail(null);
  }, []);

  const chapterLocationNames = getLocationsForChapter(currentEntry.index).map((l) => ({
    id: l.id,
    name: l.name,
  }));

  return (
    <div
      className={`h-screen flex flex-col ${settings.candlelightMode ? 'candlelight-bg' : 'parchment-bg'}`}
    >
      <AppHeader
        candlelight={settings.candlelightMode}
        onToggleCandlelight={handleToggleCandlelight}
        currentStreak={streak.currentStreak}
        completedCount={progress.completedIndices.length}
        totalCount={TOTAL_READING_CHAPTERS}
        onOpenDrawer={() => setDrawerOpen(true)}
        onPrefetchAll={handlePrefetchAll}
        prefetching={prefetching}
        prefetchProgress={prefetchProgress}
        languageMode={settings.languageMode}
        onLanguageModeChange={handleLanguageModeChange}
        onOpenAuth={() => setAuthModalOpen(true)}
        isSignedIn={isSignedIn}
      />

      <TimelineBar currentIndex={currentIndex} onEraSelect={handleEraSelect} />

      <div className="flex-1 flex overflow-hidden relative">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex w-64 border-r border-gold-300/20 bg-parchment-50/50 dark:bg-ink-100/50 flex-col">
          <ChapterList
            currentIndex={currentIndex}
            completedIndices={progress.completedIndices}
            onJumpTo={handleJumpTo}
            currentLocations={chapterLocationNames}
          />
        </aside>

        {/* Mobile sidebar overlay */}
        {showMobileSidebar && (
          <>
            <div
              className="fixed inset-0 bg-black/30 z-30 lg:hidden"
              onClick={() => setShowMobileSidebar(false)}
            />
            <aside className="fixed left-0 top-0 bottom-0 w-72 z-30 lg:hidden animate-slide-in-right bg-parchment-50 dark:bg-ink-100 border-r border-gold-300/30">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gold-300/20">
                <span className="text-sm font-semibold burgundy-text dark:text-gold-200">Reading Plan</span>
                <button onClick={() => setShowMobileSidebar(false)}>
                  <X size={18} className="text-ink-200/60" />
                </button>
              </div>
              <div className="h-[calc(100%-3.5rem)]">
                <ChapterList
                  currentIndex={currentIndex}
                  completedIndices={progress.completedIndices}
                  onJumpTo={handleJumpTo}
                  currentLocations={chapterLocationNames}
                />
              </div>
            </aside>
          </>
        )}

        {/* Main reader area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="lg:hidden flex items-center gap-2 px-3 py-2 border-b border-gold-300/20">
            <button
              onClick={() => setShowMobileSidebar(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-ink-200/70 dark:text-parchment-200/70 hover:bg-parchment-200/30 dark:hover:bg-ink-50/20 transition-all"
            >
              <ListIcon size={16} />
              Plan
            </button>
          </div>

          {/* Scripture reader — full width, no static map */}
          <div className="flex-1 overflow-hidden p-2 sm:p-4">
            <div className="relative h-full manuscript-card rounded-xl overflow-hidden">
              <ManuscriptBorder />
              <div className="relative h-full">
                <ScriptureReader
                  entry={currentEntry}
                  fontSize={settings.fontSize}
                  isCompleted={isCompleted}
                  onComplete={handleComplete}
                  onNavigate={handleNavigate}
                  onCompleteGlow={completeGlow}
                  languageMode={settings.languageMode}
                  onLexiconClick={handleLexiconClick}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Map button */}
      <button
        onClick={() => setMapModalOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-3 rounded-full btn-burgundy shadow-lg hover:scale-105 transition-all duration-300 text-sm font-semibold"
        style={{ fontFamily: '"Cormorant Garamond", serif' }}
        title="Open interactive map"
      >
        <MapIcon size={18} />
        Interactive Map
      </button>

      {/* Modals */}
      <MapModal
        isOpen={mapModalOpen}
        onClose={() => setMapModalOpen(false)}
        locations={currentLocations}
        era={currentEntry.era as BiblicalEra}
        candlelight={settings.candlelightMode}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={() => setIsSignedIn(true)}
        isSignedIn={isSignedIn}
        userEmail={userEmail}
        onSignOut={handleSignOut}
      />

      <LexiconModal
        entry={lexiconEntry}
        isOpen={lexiconModalOpen}
        onClose={() => setLexiconModalOpen(false)}
      />

      <HermeneuticsDrawer
        entry={currentEntry}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onCrossRefClick={handleCrossRefJump}
      />
    </div>
  );
}

export default App;
