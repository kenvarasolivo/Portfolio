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
        // that's clearly visible against white by default (no hover needed).
        // NOTE: keyed as `card-rest` (not `card`) — `card` is also a color, and
        // `shadow-card` would collide, emitting a white shadow-color that wipes
        // the shadow out against the white page.
        'card-rest': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 1px 1px rgba(15, 23, 42, 0.05), 0 3px 6px -1px rgba(15, 23, 42, 0.10), 0 10px 18px -4px rgba(15, 23, 42, 0.14), 0 22px 36px -12px rgba(15, 23, 42, 0.18), 0 40px 64px -24px rgba(15, 23, 42, 0.20)',
        // Hover state — deeper lift with an accent-tinted ring for a stronger 3D pop
        'card-hover': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(37, 99, 235, 0.30), 0 6px 12px -2px rgba(15, 23, 42, 0.12), 0 18px 32px -8px rgba(15, 23, 42, 0.18), 0 36px 56px -16px rgba(37, 99, 235, 0.22), 0 56px 88px -28px rgba(15, 23, 42, 0.28)',
        // Neutral lift — same layered 3D depth as `card-hover` but NO accent ring
        // or blue tint. Used for static (non-clickable) panels so they still pop
        // in 3D on hover without signalling "press me".
        'card-lift': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 6px 12px -2px rgba(15, 23, 42, 0.12), 0 18px 32px -8px rgba(15, 23, 42, 0.18), 0 36px 56px -16px rgba(15, 23, 42, 0.20), 0 56px 88px -28px rgba(15, 23, 42, 0.30)',
        // Powerful blue glow — for hovered CLICKABLE cards. Thicker accent ring +
        // large, wide-spread electric-blue halo so they clearly read as pressable.
        'card-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1.5px rgba(37, 99, 235, 0.55), 0 8px 18px -4px rgba(15, 23, 42, 0.16), 0 24px 48px -8px rgba(37, 99, 235, 0.48), 0 44px 80px -12px rgba(37, 99, 235, 0.52), 0 70px 120px -28px rgba(37, 99, 235, 0.45)',
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
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(60% 50% at 50% 0%, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0.10) 35%, rgba(0,0,0,0) 70%)',
      },
    },
  },
  plugins: [],
};
