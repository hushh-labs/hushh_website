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
        myBorder: '#606060',
        myBG: 'black',
        headText: '#BEBEBF',
        normText: 'rgba(101, 101, 101, 1)',
        speBG: '#5E2296',
        normBG: '#F8F0FF',
        lineGradient1: '#262626',
        lineGradient2: '#ADA785',
        lineGradient3: '#262626',
        fontColor5: '#E5E5E5',
        footerBG: '#363636',
        gradientColor1: '#E54D60',
        gradientColor2: '#A342FF',
        fontColor2: '#97A3B7',
        fontColor3: '#677489',
        gradientColor3: '#7A7A7E',
        fontColor4: '#ABABAB',
        faqBG: '#060606'
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
