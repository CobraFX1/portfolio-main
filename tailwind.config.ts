import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* ──────────────────────────────────
         Typography — Outfit for headings,
         Inter for body text
         ────────────────────────────────── */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },

      /* ──────────────────────────────────
         Color Tokens — Semantic naming
         so we never hardcode hex values
         ────────────────────────────────── */
      colors: {
        // Core backgrounds
        background: {
          DEFAULT: '#fafafa',
          dark: '#0a0a0a',
        },
        // Primary brand (Indigo)
        primary: {
          DEFAULT: '#6366f1',
          bold: '#4f46e5',
          dark: '#818cf8',
          light: '#a5b4fc',
        },
        // Surface cards / inputs
        surface: {
          DEFAULT: '#f3f4f6',
          dark: '#171717',
        },
        // Accent colors used across project cards & tech dots
        accent: {
          teal: '#14b8a6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          purple: '#a855f7',
          blue: '#3b82f6',
          red: '#ef4444',
          orange: '#fb923c',
          green: '#22c55e',
        },
      },

      /* ──────────────────────────────────
         Spacing — Large section paddings
         ────────────────────────────────── */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      /* ──────────────────────────────────
         Border Radius — Mega-rounded cards
         ────────────────────────────────── */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },

      /* ──────────────────────────────────
         Box Shadows — Glow effects for
         tech dots & card hover states
         ────────────────────────────────── */
      boxShadow: {
        'glow-primary': '0 0 20px rgba(99, 102, 241, 0.15)',
        'glow-primary-lg': '0 0 40px rgba(99, 102, 241, 0.15)',
        'glow-purple': '0 0 8px rgba(168, 85, 247, 0.6)',
        'glow-blue': '0 0 8px rgba(59, 130, 246, 0.6)',
        'glow-emerald': '0 0 8px rgba(16, 185, 129, 0.6)',
        'glow-cyan': '0 0 8px rgba(6, 182, 212, 0.6)',
        'glow-green': '0 0 8px rgba(34, 197, 94, 0.6)',
        'glow-red': '0 0 8px rgba(239, 68, 68, 0.6)',
        'glow-orange': '0 0 8px rgba(251, 146, 60, 0.6)',
        'glow-indigo': '0 0 8px rgba(99, 102, 241, 0.6)',
        'glow-blue-400': '0 0 8px rgba(96, 165, 250, 0.6)',
        'glow-blue-600': '0 0 8px rgba(37, 99, 235, 0.6)',
        'glow-emerald-400': '0 0 8px rgba(52, 211, 153, 0.6)',
        'glow-white': '0 0 8px rgba(255, 255, 255, 0.4)',
      },

      /* ──────────────────────────────────
         Animations — Background blobs
         ────────────────────────────────── */
      animation: {
        'blob': 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },

      /* ──────────────────────────────────
         Screens — Explicit breakpoints
         matching the original design
         ────────────────────────────────── */
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
} satisfies Config
