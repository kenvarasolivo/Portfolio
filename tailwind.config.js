/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      // ── CUSTOMIZE: brand colors live here ──────────────────────────────
      colors: {
        // Deep navy/near-black — used ONLY for the dark hero backdrop
        ink: {
          DEFAULT: '#0A0A0A',
          950: '#05070D',
          900: '#0D0E11',
        },
        // Light surface tones for cards on the white page
        card: {
          DEFAULT: '#FFFFFF',
          2: '#F4F6F9',
        },
        // Primary electric-blue accent
        accent: {
          DEFAULT: '#2563EB', // blue-600
          dark: '#1D4ED8', // blue-700
          light: '#3B82F6', // blue-500
        },
        // Muted secondary text (reads on both white and the dark hero)
        muted: '#64748B', // slate-500
      },
      fontFamily: {
        // ── CUSTOMIZE: swap the display/sans stack here ──────────────────
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        xl: '0.875rem',
      },
      boxShadow: {
        // Resting card shadow on the white page — layered for a raised, 3D feel
        card: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 1px 1px rgba(15, 23, 42, 0.04), 0 4px 8px -2px rgba(15, 23, 42, 0.08), 0 12px 24px -8px rgba(15, 23, 42, 0.12), 0 28px 48px -20px rgba(15, 23, 42, 0.16)',
        // Soft blue glow for hovered cards
        glow: '0 0 0 1px rgba(37, 99, 235, 0.25), 0 16px 48px -16px rgba(37, 99, 235, 0.35)',
        'glow-sm': '0 0 24px -6px rgba(37, 99, 235, 0.4)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Blue breathes up + down: swells and sinks downward, then retreats
        breathe: {
          '0%, 100%': { transform: 'translateY(-14%) scale(0.8)', opacity: '0.35' },
          '50%': { transform: 'translateY(16%) scale(1.45)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        breathe: 'breathe 7s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(60% 50% at 50% 0%, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0.10) 35%, rgba(0,0,0,0) 70%)',
      },
    },
  },
  plugins: [],
};
