const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      // https://www.tailwindshades.com/
      'brand': {
        DEFAULT: '#0D2237',
        '50': '#78ACDF',
        '100': '#609CD9',
        '200': '#307ECC',
        '300': '#245F9A',
        '400': '#194169',
        '500': '#0D2237',
        '600': '#0A1A2B',
        '700': '#07131E',
        '800': '#040B12',
        '900': '#010306'
      },
      ...colors,
    },
     screens: {
      // 'xm': {'max': '340px'},
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
  ],
}
