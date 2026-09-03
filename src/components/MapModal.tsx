import { X } from 'lucide-react';
import { BibleMap } from '@/components/BibleMap';
import { MapLocation } from '@/data/mapData';
import { BiblicalEra } from '@/data/bibleBooks';
import { Map as MapIcon } from 'lucide-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  locations: MapLocation[];
  era: BiblicalEra;
  candlelight: boolean;
}

export function MapModal({ isOpen, onClose, locations, era, candlelight }: MapModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl h-[80vh] animate-fade-in">
        <div className="illuminated-container rounded-xl h-full flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gold-300/30">
            <div className="flex items-center gap-2">
              <MapIcon size={20} className="text-gold-600 dark:text-gold-300" />
              <h3 className="text-lg font-semibold burgundy-text dark:text-gold-200" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Biblical Lands — {era} Era
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-ink-200/60 hover:text-burgundy-200 hover:bg-parchment-200/30 dark:text-parchment-200/60 transition-all"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex-1 p-4 min-h-0">
            <BibleMap
              locations={locations}
              era={era}
              candlelight={candlelight}
            />
          </div>
        </div>
      </div>
    </>
  );
}
