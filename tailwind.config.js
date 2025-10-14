/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFFDF0',
          100: '#FFF9D9',
          200: '#FFF2B3',
          300: '#FFEB8C',
          400: '#F0C724', // Couleur principale LED Alsace
          500: '#F0C724', // Couleur principale LED Alsace
          600: '#D4AD1F',
          700: '#B8931A',
          800: '#9C7915',
          900: '#805F10',
        },
      },
    },
  },
  plugins: [],
}

