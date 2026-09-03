/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FBF6EE',
          100: '#F3E9D9',
          200: '#E8D5C4',
          300: '#D9BEA8',
          400: '#C5A059',
          500: '#B8860B',
          600: '#8B6914',
        },
        burgundy: {
          50: '#3D1015',
          100: '#4A151B',
          200: '#5C1D24',
          300: '#6B0F1A',
          400: '#822D3C',
          500: '#9A3A4A',
          600: '#B04A5B',
        },
        gold: {
          100: '#F0E0B0',
          200: '#E8D9A8',
          300: '#D4AF37',
          400: '#C5A059',
          500: '#B8860B',
          600: '#8B6914',
        },
        ink: {
          50: '#3A2E28',
          100: '#2A2018',
          200: '#1E1613',
          300: '#15100D',
        },
        candlelight: {
          50: '#2A2018',
          100: '#1E1613',
          200: '#15100D',
          300: '#0D0907',
        },
        success: {
          400: '#3A6B5C',
          500: '#2D5A4D',
        },
        warning: {
          400: '#C5A059',
          500: '#B08840',
        },
        error: {
          400: '#822D3C',
          500: '#6F2530',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"EB Garamond"', 'Garamond', 'serif'],
        display: ['"Cormorant Garamond"', '"EB Garamond"', 'serif'],
        body: ['"Cormorant Garamond"', '"EB Garamond"', 'serif'],
      },
      fontSize: {
        'scripture': ['1.125rem', { lineHeight: '1.8' }],
        'scripture-lg': ['1.25rem', { lineHeight: '1.85' }],
        'dropcap': ['3.5rem', { lineHeight: '1' }],
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(197, 160, 89, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(197, 160, 89, 0.8), 0 0 60px rgba(197, 160, 89, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
