/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      colors:{
          'primary': '#42065B',
          'secondary': '#CB8BE8',
      }
    },
  },
  plugins: [],
}

