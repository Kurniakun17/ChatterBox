/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLight: '#E9EBF1',
        primaryDark: '#171717',
        bodyTextLight: 'rgba(0,0,0, 0.7)',
        bodyTextDark: 'rgba(255,255,255, 0.7)',
        accentLight: '#4576B7',
        accentDark: '#6593CD',
        secondElevationLight: '#fff',
        secondElevationDark: '#242424',
        thirdElevationLight: '#ebebeb',
        thirdElevationDark: '#3b3b3b',
      },
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
