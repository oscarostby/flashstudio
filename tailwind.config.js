/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        border: 'rgba(255,255,255,0.1)',
        input: 'rgba(255,255,255,0.12)',
        ring: '#7be7ff',
        background: '#060b14',
        foreground: '#f5f7fb',
        primary: {
          DEFAULT: '#7be7ff',
          foreground: '#05111d',
        },
        secondary: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          foreground: '#f5f7fb',
        },
        muted: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          foreground: '#9fb1c8',
        },
        card: {
          DEFAULT: 'rgba(10, 18, 31, 0.78)',
          foreground: '#f5f7fb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 80px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
