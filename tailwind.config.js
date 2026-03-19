/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        border: 'rgba(203,213,225,0.65)',
        input: 'rgba(255,255,255,0.82)',
        ring: '#0ea5e9',
        background: '#f8fbff',
        foreground: '#0f172a',
        primary: {
          DEFAULT: '#0ea5e9',
          foreground: '#f8fbff',
        },
        secondary: {
          DEFAULT: 'rgba(255,255,255,0.88)',
          foreground: '#0f172a',
        },
        muted: {
          DEFAULT: 'rgba(241,245,249,0.92)',
          foreground: '#64748b',
        },
        card: {
          DEFAULT: 'rgba(255,255,255,0.78)',
          foreground: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 90px rgba(148, 163, 184, 0.18)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
