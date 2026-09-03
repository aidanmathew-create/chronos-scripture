import { useState, useEffect, useRef, useMemo } from 'react';
import { ChapterData, getChapter } from '@/services/bibleTextService';
import { ChronologicalEntry, TOTAL_READING_CHAPTERS } from '@/data/chronologicalPlan';
import { ManuscriptBorder, ChapterOrnament } from '@/components/ManuscriptBorder';
import { Loader2, BookOpen, CheckCircle2, ChevronLeft, ChevronRight, Church } from 'lucide-react';
import { getMalayalamChapter, MalayalamChapter } from '@/data/malayalamBible';
import { findLexiconEntriesForWord, LexiconEntry } from '@/data/lexicon';
import { getLiturgyForChapter } from '@/data/marThomaLiturgy';
import { LiturgyModal } from '@/components/LiturgyModal';
import { LanguageMode } from '@/services/progressService';

interface ScriptureReaderProps {
  entry: ChronologicalEntry;
  fontSize: number;
  isCompleted: boolean;
  onComplete: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  onCompleteGlow: boolean;
  languageMode: LanguageMode;
  onLexiconClick: (entry: LexiconEntry) => void;
}

function renderTextWithLexiconLinks(
  text: string,
  onLexiconClick: (entry: LexiconEntry) => void,
  fontSize: number,
): React.ReactNode {
  const words = text.split(/(\s+)/);

  return words.map((word, i) => {
    const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    if (cleanWord.length < 3) return word;

    const entries = findLexiconEntriesForWord(cleanWord);
    if (entries.length === 0) return word;

    return (
      <span
        key={i}
        className="lexicon-word"
        onClick={() => onLexiconClick(entries[0])}
        title={`${entries[0].transliteration} — ${entries[0].strongNumber}`}
      >
        {word}
      </span>
    );
  });
}

export function ScriptureReader({
  entry,
  fontSize,
  isCompleted,
  onComplete,
  onNavigate,
  onCompleteGlow,
  languageMode,
  onLexiconClick,
}: ScriptureReaderProps) {
  const [chapterData, setChapterData] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiturgyOpen, setIsLiturgyOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const liturgyEntries = useMemo(
    () => getLiturgyForChapter(entry.bookId, entry.chapter),
    [entry.bookId, entry.chapter],
  );

  const malayalamChapter: MalayalamChapter | null = useMemo(
    () => getMalayalamChapter(entry.bookId, entry.chapter),
    [entry.bookId, entry.chapter],
  );

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setChapterData(null);

    getChapter(entry.bookId, entry.chapter)
      .then((data) => {
        if (!cancelled) {
          setChapterData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || 'Unable to load this chapter. Please check your connection.');
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [entry.bookId, entry.chapter]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [entry.index]);

  const showEnglish = languageMode === 'english' || languageMode === 'parallel';
  const showMalayalam = languageMode === 'malayalam' || languageMode === 'parallel';
  const isParallel = languageMode === 'parallel';

  const firstVerseText = chapterData?.verses[0]?.text || '';
  const firstLetter = firstVerseText.charAt(0).toUpperCase();
  const restOfFirstVerse = firstVerseText.slice(1);

  const malayalamNotAvailable = showMalayalam && !malayalamChapter;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gold-300/20">
        <button
          onClick={() => onNavigate('prev')}
          disabled={entry.index === 0}
          className="p-2 rounded-lg text-ink-200/60 hover:text-burgundy-200 hover:bg-parchment-200/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all dark:text-parchment-200/60"
          aria-label="Previous chapter"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="text-center">
          <div className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
            Day {entry.index + 1} of {TOTAL_READING_CHAPTERS}
          </div>
          <h2 className="text-xl font-semibold burgundy-text dark:text-gold-200" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            {entry.bookName} {entry.chapter}
          </h2>
        </div>

        <button
          onClick={() => onNavigate('next')}
          disabled={entry.index >= TOTAL_READING_CHAPTERS - 1}
          className="p-2 rounded-lg text-ink-200/60 hover:text-burgundy-200 hover:bg-parchment-200/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all dark:text-parchment-200/60"
          aria-label="Next chapter"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className={`flex-1 overflow-y-auto px-4 py-6 transition-all duration-500 ${onCompleteGlow ? 'animate-glow-pulse' : ''}`}
      >
        {loading && (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <Loader2 className="animate-spin text-gold-400" size={32} />
            <p className="text-ink-200/50 dark:text-parchment-200/50 italic">
              Unrolling the parchment...
            </p>
          </div>
        )}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
            <BookOpen className="text-burgundy-300" size={32} />
            <p className="text-ink-200/70 dark:text-parchment-200/70 max-w-md">
              {error}
            </p>
            <p className="text-sm text-ink-200/40 dark:text-parchment-200/40">
              This chapter will be available once you're online. Previously read chapters remain accessible offline.
            </p>
          </div>
        )}

        {chapterData && !loading && (
          <div className={`mx-auto ${isParallel ? 'max-w-5xl' : 'max-w-2xl'}`}>
            <div className="text-center mb-6">
              <div className="text-xs uppercase tracking-[0.3em] text-gold-600 dark:text-gold-300 mb-2">
                {entry.bookName}
              </div>
              <h3
                className="text-3xl font-bold burgundy-text dark:text-gold-200"
                style={{ fontFamily: '"EB Garamond", serif' }}
              >
                Chapter {entry.chapter}
              </h3>
              <ChapterOrnament className="mx-auto mt-3" />
            </div>

            {malayalamNotAvailable && (
              <div className="text-center mb-4 p-3 rounded-lg bg-gold-300/10 border border-gold-300/20">
                <p className="text-xs text-gold-600 dark:text-gold-300">
                  Malayalam translation for this chapter is not yet bundled offline. Showing {showEnglish ? 'English' : 'available'} text.
                </p>
              </div>
            )}

            {isParallel ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {showEnglish && (
                  <div className="scripture-text leading-loose text-ink-200 dark:text-parchment-100" style={{ fontSize: `${fontSize}px`, lineHeight: 1.8, fontFamily: '"EB Garamond", serif' }}>
                    {chapterData.verses.map((verse, i) => (
                      <span key={verse.verse}>
                        {i === 0 ? (
                          <span>
                            <span className="drop-cap" style={{ fontSize: `${fontSize * 3.5}px` }}>{firstLetter}</span>
                            <span className="verse-number">{verse.verse}</span>
                            {renderTextWithLexiconLinks(restOfFirstVerse, onLexiconClick, fontSize)}
                          </span>
                        ) : (
                          <span>
                            <span className="verse-number">{verse.verse}</span>
                            {renderTextWithLexiconLinks(verse.text, onLexiconClick, fontSize)}
                          </span>
                        )}
                        {' '}
                      </span>
                    ))}
                  </div>
                )}
                <div className="scripture-text leading-loose text-ink-200/80 dark:text-parchment-200/80 border-l-0 md:border-l border-gold-300/20 md:pl-6" style={{ fontSize: `${fontSize * 0.9}px`, lineHeight: 1.8, fontFamily: '"Noto Sans Malayalam", "EB Garamond", serif' }}>
                  {malayalamChapter ? (
                    malayalamChapter.verses.map((verse) => (
                      <span key={verse.verse}>
                        <span className="verse-number">{verse.verse}</span>
                        {verse.text}
                        {' '}
                      </span>
                    ))
                  ) : (
                    <p className="text-sm italic text-ink-200/40 dark:text-parchment-200/40">
                      Malayalam text not yet available for this chapter.
                    </p>
                  )}
                </div>
              </div>
            ) : showMalayalam && malayalamChapter && !showEnglish ? (
              <div className="scripture-text leading-loose text-ink-200 dark:text-parchment-100" style={{ fontSize: `${fontSize}px`, lineHeight: 1.9, fontFamily: '"Noto Sans Malayalam", "EB Garamond", serif' }}>
                {malayalamChapter.verses.map((verse, i) => (
                  <span key={verse.verse}>
                    <span className="verse-number">{verse.verse}</span>
                    {verse.text}
                    {' '}
                  </span>
                ))}
              </div>
            ) : (
              <div className="scripture-text leading-loose text-ink-200 dark:text-parchment-100" style={{ fontSize: `${fontSize}px`, lineHeight: 1.8, fontFamily: '"EB Garamond", serif' }}>
                {chapterData.verses.map((verse, i) => (
                  <span key={verse.verse}>
                    {i === 0 ? (
                      <span>
                        <span className="drop-cap" style={{ fontSize: `${fontSize * 3.5}px` }}>{firstLetter}</span>
                        <span className="verse-number">{verse.verse}</span>
                        {renderTextWithLexiconLinks(restOfFirstVerse, onLexiconClick, fontSize)}
                      </span>
                    ) : (
                      <span>
                        <span className="verse-number">{verse.verse}</span>
                        {renderTextWithLexiconLinks(verse.text, onLexiconClick, fontSize)}
                      </span>
                    )}
                    {' '}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 mb-4">
              <ChapterOrnament className="mx-auto" />
            </div>

            <p className="text-center text-xs text-ink-200/40 dark:text-parchment-200/40 italic mb-4">
              {chapterData.source}
              {showMalayalam && malayalamChapter && '  •  Sathyavedapusthakam (Malayalam) — Public Domain'}
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-gold-300/20 px-4 py-3 bg-parchment-50/50 dark:bg-ink-100/50">
        <div className="flex items-center justify-center gap-3">
          {liturgyEntries.length > 0 && (
            <button
              onClick={() => setIsLiturgyOpen(true)}
              className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 bg-transparent border text-burgundy-300 dark:text-gold-200 hover:bg-burgundy-300/10 dark:hover:bg-gold-200/10"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                borderColor: '#8B6914',
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
            >
              <Church size={16} />
              Mar Thoma Liturgy
            </button>
          )}
          <button
            onClick={onComplete}
            disabled={isCompleted || loading}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              isCompleted
                ? 'text-success-400 cursor-default'
                : 'bg-transparent border text-burgundy-200 dark:text-gold-200 hover:bg-burgundy-200 hover:text-parchment-50 dark:hover:bg-gold-200 dark:hover:text-ink-100'
            }`}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              borderColor: isCompleted ? 'transparent' : '#C5A059',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 size={16} />
                Chapter Complete
              </>
            ) : (
              <>
                <CheckCircle2 size={16} />
                Mark Chapter Complete
              </>
            )}
          </button>
        </div>
      </div>

      <LiturgyModal
        isOpen={isLiturgyOpen}
        onClose={() => setIsLiturgyOpen(false)}
        entries={liturgyEntries}
        bookName={entry.bookName}
        chapter={entry.chapter}
      />
    </div>
  );
}
