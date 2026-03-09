/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        primary: '#2563eb',
        'primary-light': '#eff6ff',
        'primary-mid': '#dbeafe',
        'primary-dark': '#1d4ed8',
        'primary-soft': '#bfdbfe',
        surface: '#ffffff',
        bg: '#f8fafc',
        border: '#e2e8f0',
        't1': '#0f172a',
        't2': '#475569',
        't3': '#94a3b8',
        success: '#059669',
        'success-light': '#ecfdf5',
        danger: '#dc2626',
        'danger-light': '#fef2f2',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-md': '0 4px 6px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.08)',
        'card-lg': '0 8px 16px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.12)',
      },
      animation: {
        rise: 'rise 0.35s cubic-bezier(0.4,0,0.2,1)',
        blink: 'blink 1.2s ease infinite',
        pop: 'pop 0.3s cubic-bezier(0.34,1.56,0.64,1)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
        pop: {
          from: { opacity: '0', transform: 'scale(0.92) translateY(20px)' },
          to:   { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}