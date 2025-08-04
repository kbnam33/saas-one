/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'brand-dark': '#0A0A0A',
        'brand-light': '#F5F5F5',
        'brand-muted': '#A1A1AA',
        'brand-accent': '#2DD4BF',
        'brand-success': '#4ADE80',
      }
    },
  },
  plugins: [],
}