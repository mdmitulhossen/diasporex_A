/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
      colors: {
        adminBackground: '#F1F1F1',
        adminGray: {
          100: '#808797',
          200: '#6E768E',
          300: '#282E38',
        },
        adminTextGray:{
          100:'#F7F7F7',
          200:'#808797'
        },
        adminTitle:{
          200:'#343A40'
        },
      },
    },
  },
  plugins: [],
}