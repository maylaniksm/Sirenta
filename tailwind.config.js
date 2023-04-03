
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
      fontFamily: {
        'body': ["Poppins"]
      },
      colors: {
        'primary': '#FF6600',
        'secondary': '#F0AD4E',
        'third': '#4D4E50',
        'bgLight': '#FCEFDC'      // light: 'rgba(240, 173, 78, 0.2)'
      },
    }
  },
}
