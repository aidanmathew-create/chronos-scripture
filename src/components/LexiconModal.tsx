import { X } from 'lucide-react';
import { LexiconEntry } from '@/data/lexicon';

interface LexiconModalProps {
  entry: LexiconEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LexiconModal({ entry, isOpen, onClose }: LexiconModalProps) {
  if (!isOpen || !entry) return null;

  const isHebrew = entry.language === 'Hebrew';

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[85vh] animate-fade-in">
        <div className="illuminated-container rounded-xl flex flex-col overflow-hidden max-h-[85vh]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gold-300/30">
            <div className="flex items-center gap-3">
              <span
                className="px-2 py-0.5 rounded text-xs font-bold text-white"
                style={{ backgroundColor: isHebrew ? '#5C1D24' : '#3A6B5C' }}
              >
                {entry.strongNumber}
              </span>
              <h3
                className="text-lg font-semibold burgundy-text dark:text-gold-200"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Original Word Exegesis
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-ink-200/60 hover:text-burgundy-200 hover:bg-parchment-200/30 dark:text-parchment-200/60 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto px-5 py-4 space-y-4">
            <div className="text-center py-2">
              <div
                className="text-4xl mb-2"
                style={{
                  fontFamily: isHebrew ? '"Times New Roman", serif' : '"Gentium Plus", "Times New Roman", serif',
                  direction: isHebrew ? 'rtl' : 'ltr',
                  color: '#5C1D24',
                }}
              >
                {entry.originalScript}
              </div>
              <div className="text-lg italic text-gold-600 dark:text-gold-300" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                {entry.transliteration}
              </div>
              <div className="text-sm text-ink-200/60 dark:text-parchment-200/60 mt-1">
                {entry.language} — "{entry.englishWord}"
              </div>
            </div>

            <div className="ornamental-divider">
              <span className="text-gold-400 text-xs">✦</span>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 font-semibold mb-1">
                Literal Translation
              </h4>
              <p className="text-sm text-ink-200/80 dark:text-parchment-200/80 leading-relaxed">
                {entry.literalTranslation}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 font-semibold mb-1">
                Root Definition
              </h4>
              <p className="text-sm text-ink-200/80 dark:text-parchment-200/80 leading-relaxed">
                {entry.rootDefinition}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 font-semibold mb-1">
                Cultural Context
              </h4>
              <p className="text-sm text-ink-200/80 dark:text-parchment-200/80 leading-relaxed">
                {entry.context}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 font-semibold mb-1">
                Translational Nuances
              </h4>
              <p className="text-sm text-ink-200/80 dark:text-parchment-200/80 leading-relaxed">
                {entry.translationalNuances}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
