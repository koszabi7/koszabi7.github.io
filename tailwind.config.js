/** @type {import('tailwindcss').Config} */
export default {
  // Ez a sor a legfontosabb a váltóhoz:
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}