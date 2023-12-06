/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    shadow: {
      'card-shadow': ['rgba(20, 20, 20, 0.35) 0px 5px 15px'],
    },
    fontFamily: {
      'dm-serif': ['DM Serif Text'],
    },
  },
  plugins: [],
}
