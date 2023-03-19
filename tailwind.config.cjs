const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: 'var(--primary)'
      },
      light: {
        DEFAULT: 'var(--light)'
      },
      black: 'var(--black)',
      white: 'var(--white)',
      gray: colors.neutral
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
