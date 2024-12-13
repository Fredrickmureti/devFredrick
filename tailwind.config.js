/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#9f7aea',
          600: '#805ad5',
          700: '#6b46c1',
        },
      },
    },
  },
  plugins: [],
};