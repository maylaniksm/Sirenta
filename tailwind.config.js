
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6600',
          light: 'rgba(240, 173, 78, 0.2)'
        },
      }
    },
  }
}