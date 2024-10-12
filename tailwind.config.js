/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fredoka', 'sans-serif'], // Menambahkan Poppins sebagai font default
      },
    },
  },
  plugins: [],
};
