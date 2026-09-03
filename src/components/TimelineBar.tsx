import { ERA_ORDER, ERA_COLORS, BiblicalEra } from '@/data/bibleBooks';
import { getEraRanges, CHRONOLOGICAL_PLAN, TOTAL_READING_CHAPTERS } from '@/data/chronologicalPlan';
import { useMemo } from 'react';

interface TimelineBarProps {
  currentIndex: number;
  onEraSelect: (index: number) => void;
}

export function TimelineBar({ currentIndex, onEraSelect }: TimelineBarProps) {
  const ranges = useMemo(() => getEraRanges(), []);

  const currentEra = CHRONOLOGICAL_PLAN[currentIndex]?.era || 'Patriarchal';

  const clampedIndex = Math.max(0, Math.min(currentIndex, TOTAL_READING_CHAPTERS - 1));
  const progressPct = (clampedIndex / (TOTAL_READING_CHAPTERS - 1)) * 100;

  return (
    <div className="border-b border-gold-300/30 bg-parchment-50/80 backdrop-blur-sm dark:bg-ink-100/80">
      <div className="flex items-center gap-1 px-4 py-2 overflow-x-auto">
        {ERA_ORDER.map((era, i) => {
          const range = ranges.find((r) => r.era === era);
          const isActive = era === currentEra;
          const eraColor = ERA_COLORS[era as BiblicalEra];

          return (
            <button
              key={`era-${era}-${i}`}
              onClick={() => range && onEraSelect(range.startIndex)}
              className={`group relative flex flex-col items-center px-4 py-1.5 rounded transition-all duration-300 flex-shrink-0 ${
                isActive
                  ? 'bg-parchment-200/60 dark:bg-ink-50/40'
                  : 'hover:bg-parchment-200/30 dark:hover:bg-ink-50/20'
              }`}
            >
              <div
                className="h-1.5 w-full rounded-full mb-1.5 transition-all duration-300"
                style={{
                  backgroundColor: eraColor,
                  opacity: isActive ? 1 : 0.4,
                  boxShadow: isActive ? `0 0 8px ${eraColor}` : 'none',
                }}
              />
              <span
                className={`text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${
                  isActive
                    ? 'burgundy-text dark:text-gold-200'
                    : 'ink-200/60 dark:text-parchment-200/50 group-hover:ink-200/80'
                }`}
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {era}
              </span>
              {range && (
                <span className="text-xs text-ink-200/40 dark:text-parchment-200/30 mt-0.5">
                  {range.endIndex - range.startIndex + 1} ch.
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative h-2 px-4 pb-1">
        <div className="absolute inset-x-4 h-1 rounded-full bg-parchment-200/40 dark:bg-ink-50/30" />
        <div className="relative h-1 flex">
          {ranges.map((range, i) => {
            const widthPct =
              ((range.endIndex - range.startIndex + 1) / TOTAL_READING_CHAPTERS) * 100;
            const isInRange = clampedIndex >= range.startIndex && clampedIndex <= range.endIndex;
            return (
              <div
                key={`seg-${range.era}-${i}`}
                className="h-full transition-all duration-300"
                style={{
                  width: `${widthPct}%`,
                  backgroundColor: ERA_COLORS[range.era],
                  opacity: isInRange ? 1 : 0.25,
                  boxShadow: isInRange ? `0 0 6px ${ERA_COLORS[range.era]}` : 'none',
                  borderRadius: i === 0 ? '4px 0 0 4px' : i === ranges.length - 1 ? '0 4px 4px 0' : '0',
                }}
              />
            );
          })}
        </div>
        <div
          className="absolute top-0 h-3 w-3 rounded-full border-2 border-gold-300 bg-parchment-100 dark:bg-ink-200 transition-all duration-500"
          style={{
            left: `calc(${progressPct}% + 1rem)`,
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}
