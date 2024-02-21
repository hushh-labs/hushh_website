/** @type {import('tailwindcss').Config} */
import Bg from './src/app/_components/svg/background'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        figtree: ['figtree'],
      },
      colors: {
        myBorder: '#8736D2',
        myBG: 'black',
        headText: '#BEBEBF',
        normText: 'rgba(101, 101, 101, 1)',
        speBG: '#5E2296',
        normBG: '#F8F0FF',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
