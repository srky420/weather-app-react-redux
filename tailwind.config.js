/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/*.{js,jsx}',
    './src/App.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif;'
      },
      width: {
        '112': '30rem',
        '128': '40rem'
      }
    },
  },
  plugins: [],
}

