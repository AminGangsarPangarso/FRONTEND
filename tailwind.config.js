/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    shadow: {
      'card-shadow': ['rgba(20, 20, 20, 0.35) 0px 5px 15px'],
    },
    fontFamily: {
      'dm-serif': ['DM Serif Text'],
      raleway: ['Raleway'],
    },
  },
  plugins: [],
}
