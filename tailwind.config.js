/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#3C486B',
        'secondary': "#F0F0F0",
        'third': "#F9D949",
        "fourth": "#F45050"
      }
    },
  },
  plugins: [],
}