import { CHRONOLOGICAL_PLAN, TOTAL_READING_CHAPTERS } from '@/data/chronologicalPlan';
import { ERA_COLORS, BiblicalEra } from '@/data/bibleBooks';
import { CheckCircle2, Circle, MapPin } from 'lucide-react';

interface ChapterListProps {
  currentIndex: number;
  completedIndices: number[];
  onJumpTo: (index: number) => void;
  currentLocations: { id: string; name: string }[];
}

export function ChapterList({
  currentIndex,
  completedIndices,
  onJumpTo,
  currentLocations,
}: ChapterListProps) {
  const completedSet = new Set(completedIndices);

  return (
    <div className="flex flex-col h-full">
      {currentLocations.length > 0 && (
        <div className="px-4 py-3 border-b border-gold-300/20 bg-parchment-100/40 dark:bg-ink-100/30">
          <div className="flex items-center gap-2 mb-1.5">
            <MapPin size={14} className="text-gold-600 dark:text-gold-300" />
            <span className="text-xs uppercase tracking-wide text-gold-600 dark:text-gold-300 font-semibold">
              Locations in this chapter
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {currentLocations.map((loc) => (
              <span
                key={loc.id}
                className="text-xs px-2 py-0.5 rounded-full bg-burgundy-50/20 dark:bg-burgundy-100/10 border border-gold-300/20 text-ink-200/70 dark:text-parchment-200/70"
              >
                {loc.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="px-4 py-2 border-b border-gold-300/20">
        <div className="text-xs uppercase tracking-wide text-gold-600 dark:text-gold-300 font-semibold mb-1">
          Reading Plan
        </div>
        <div className="text-xs text-ink-200/50 dark:text-parchment-200/50">
          {completedIndices.length} of {TOTAL_READING_CHAPTERS} chapters complete
        </div>
        <div className="h-1.5 rounded-full bg-parchment-200/40 dark:bg-ink-50/20 mt-1.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-burgundy-200 to-gold-300 transition-all duration-500"
            style={{ width: `${(completedIndices.length / TOTAL_READING_CHAPTERS) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {CHRONOLOGICAL_PLAN.map((entry) => {
          const isCompleted = completedSet.has(entry.index);
          const isCurrent = entry.index === currentIndex;
          const eraColor = ERA_COLORS[entry.era as BiblicalEra];

          return (
            <button
              key={entry.index}
              onClick={() => onJumpTo(entry.index)}
              className={`w-full text-left px-4 py-1.5 flex items-center gap-2.5 transition-all border-l-2 ${
                isCurrent
                  ? 'bg-parchment-200/40 dark:bg-ink-50/20 border-l-gold-300'
                  : 'border-l-transparent hover:bg-parchment-100/30 dark:hover:bg-ink-100/20'
              }`}
            >
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle2 size={14} className="text-success-400" />
                ) : (
                  <Circle size={14} className="text-ink-200/20 dark:text-parchment-200/20" />
                )}
              </div>

              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: eraColor, opacity: 0.6 }}
              />

              <div className="flex-1 min-w-0">
                <span
                  className={`text-sm truncate ${
                    isCurrent
                      ? 'font-semibold burgundy-text dark:text-gold-200'
                      : isCompleted
                        ? 'text-ink-200/40 dark:text-parchment-200/40'
                        : 'text-ink-200/70 dark:text-parchment-200/70'
                  }`}
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {entry.bookAbbr} {entry.chapter}
                </span>
              </div>

              <span className="text-xs text-ink-200/30 dark:text-parchment-200/30 flex-shrink-0">
                {entry.index + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
