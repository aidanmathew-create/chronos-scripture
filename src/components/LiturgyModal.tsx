import { X, Church, ScrollText } from 'lucide-react';
import { LiturgyEntry } from '@/data/marThomaLiturgy';

interface LiturgyModalProps {
  isOpen: boolean;
  onClose: () => void;
  entries: LiturgyEntry[];
  bookName: string;
  chapter: number;
}

const SERVICE_COLORS: Record<string, string> = {
  'Holy Qurbana': '#6B0F1A',
  'Holy Baptism': '#3A6B5C',
  'Holy Matrimony': '#8B6914',
  'Passion Week': '#4A2B1C',
  Ordination: '#4A7C59',
  Lectionary: '#6B8E23',
};

export function LiturgyModal({ isOpen, onClose, entries, bookName, chapter }: LiturgyModalProps) {
  if (!isOpen || entries.length === 0) return null;

  const services = [...new Set(entries.map((e) => e.service))];

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[85vh] animate-fade-in">
        <div className="illuminated-container rounded-xl flex flex-col overflow-hidden max-h-[85vh]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gold-300/30">
            <div className="flex items-center gap-3">
              <Church size={22} className="text-burgundy-300 dark:text-gold-300" />
              <div>
                <h3
                  className="text-lg font-semibold burgundy-text dark:text-gold-200"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Mar Thoma Liturgy
                </h3>
                <p className="text-xs text-gold-600 dark:text-gold-300 mt-0.5">
                  {bookName} {chapter}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-ink-200/60 hover:text-burgundy-200 hover:bg-parchment-200/30 dark:text-parchment-200/60 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto px-5 py-4 space-y-5">
            <div className="flex flex-wrap gap-2 justify-center">
              {services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-parchment-50 dark:text-parchment-50"
                  style={{
                    backgroundColor: SERVICE_COLORS[service] || '#6B4226',
                  }}
                >
                  {service}
                </span>
              ))}
            </div>

            {entries.map((entry, i) => (
              <div
                key={`liturgy-${i}`}
                className="relative pl-4 border-l-2"
                style={{ borderColor: SERVICE_COLORS[entry.service] || '#C5A059' }}
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h4
                    className="text-sm font-semibold tracking-wide text-burgundy-300 dark:text-gold-200"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    <ScrollText size={14} className="inline mr-1.5 mb-0.5 text-gold-500 dark:text-gold-400" />
                    {entry.section}
                  </h4>
                  {entry.syriacTerm && (
                    <span
                      className="px-2 py-0.5 rounded text-xs italic whitespace-nowrap flex-shrink-0"
                      style={{
                        fontFamily: '"Serto", "Cormorant Garamond", serif',
                        backgroundColor: 'rgba(197, 160, 89, 0.15)',
                        color: '#8B6914',
                      }}
                    >
                      {entry.syriacTerm}
                    </span>
                  )}
                </div>
                <p className="text-sm text-ink-200/80 dark:text-parchment-200/80 leading-relaxed">
                  {entry.insight}
                </p>
              </div>
            ))}

            <div className="ornamental-divider">
              <span className="text-gold-400 text-xs">✦</span>
            </div>
            <p className="text-center text-xs text-ink-200/40 dark:text-parchment-200/40 italic">
              Mar Thoma Syrian Liturgical Tradition — West Syrian Rite
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
