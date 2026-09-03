interface ManuscriptBorderProps {
  className?: string;
}

export function ManuscriptBorder({ className = '' }: ManuscriptBorderProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D9A8" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>
        </defs>

        <rect x="1" y="1" width="98" height="98" fill="none" stroke="url(#goldGrad)" strokeWidth="0.4" />
        <rect x="2.5" y="2.5" width="95" height="95" fill="none" stroke="url(#goldGrad)" strokeWidth="0.15" opacity="0.5" />
      </svg>

      <svg className="absolute left-0 top-0 h-16 w-16" viewBox="0 0 64 64" fill="none">
        <g stroke="url(#goldGrad)" strokeWidth="1.5" fill="none">
          <path d="M0 0 L24 0 L24 1 L1 1 L1 24 L0 24 Z" fill="url(#goldGrad)" fillOpacity="0.15" />
          <circle cx="8" cy="8" r="3" />
          <path d="M4 8 L12 8 M8 4 L8 12" strokeWidth="0.8" />
          <path d="M14 2 L14 14 L2 14" strokeWidth="1" opacity="0.6" />
          <circle cx="8" cy="8" r="5" strokeWidth="0.5" opacity="0.4" />
        </g>
      </svg>

      <svg className="absolute right-0 top-0 h-16 w-16" viewBox="0 0 64 64" fill="none">
        <g stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" transform="scale(-1, 1) translate(-64, 0)">
          <path d="M0 0 L24 0 L24 1 L1 1 L1 24 L0 24 Z" fill="url(#goldGrad)" fillOpacity="0.15" />
          <circle cx="8" cy="8" r="3" />
          <path d="M4 8 L12 8 M8 4 L8 12" strokeWidth="0.8" />
          <path d="M14 2 L14 14 L2 14" strokeWidth="1" opacity="0.6" />
          <circle cx="8" cy="8" r="5" strokeWidth="0.5" opacity="0.4" />
        </g>
      </svg>

      <svg className="absolute left-0 bottom-0 h-16 w-16" viewBox="0 0 64 64" fill="none">
        <g stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" transform="scale(1, -1) translate(0, -64)">
          <path d="M0 0 L24 0 L24 1 L1 1 L1 24 L0 24 Z" fill="url(#goldGrad)" fillOpacity="0.15" />
          <circle cx="8" cy="8" r="3" />
          <path d="M4 8 L12 8 M8 4 L8 12" strokeWidth="0.8" />
          <path d="M14 2 L14 14 L2 14" strokeWidth="1" opacity="0.6" />
          <circle cx="8" cy="8" r="5" strokeWidth="0.5" opacity="0.4" />
        </g>
      </svg>

      <svg className="absolute right-0 bottom-0 h-16 w-16" viewBox="0 0 64 64" fill="none">
        <g stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" transform="scale(-1, -1) translate(-64, -64)">
          <path d="M0 0 L24 0 L24 1 L1 1 L1 24 L0 24 Z" fill="url(#goldGrad)" fillOpacity="0.15" />
          <circle cx="8" cy="8" r="3" />
          <path d="M4 8 L12 8 M8 4 L8 12" strokeWidth="0.8" />
          <path d="M14 2 L14 14 L2 14" strokeWidth="1" opacity="0.6" />
          <circle cx="8" cy="8" r="5" strokeWidth="0.5" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-2 ${className}`}>
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-300" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
          fill="#C5A059"
          opacity="0.8"
        />
        <circle cx="12" cy="12" r="2" fill="#8B6914" />
      </svg>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-300" />
    </div>
  );
}

export function ChapterOrnament({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="120" height="24" viewBox="0 0 120 24" fill="none">
      <path d="M0 12 L40 12" stroke="#C5A059" strokeWidth="1" />
      <path d="M80 12 L120 12" stroke="#C5A059" strokeWidth="1" />
      <g transform="translate(60, 12)">
        <path d="M-12 0 L0 -8 L12 0 L0 8 Z" fill="#C5A059" opacity="0.7" />
        <circle r="3" fill="#5C1D24" />
        <circle r="1.5" fill="#C5A059" />
      </g>
      <circle cx="40" cy="12" r="2" fill="#8B6914" />
      <circle cx="80" cy="12" r="2" fill="#8B6914" />
    </svg>
  );
}
