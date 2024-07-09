/** @type {import('tailwindcss').Config} */

import Bg from "./src/app/_components/svg/background";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#1e90ff', // Dodger blue
              '&:hover': {
                color: '#ff6347', // Tomato red
              },
            },
            'table': {
              'borderCollapse': 'collapse',
            },
            'th': {
              'backgroundColor': '#f8f8f8',
              'borderWidth': '1px',
            },
            'td': {
              'borderWidth': '1px',
            },
            ul: {
              // 'list-style-type': 'disc',
              // 'list-style-position': 'inside',
              // 'list-style-image': 'none',
              'color': 'white', // List icon color
              '> li::marker': {
                color: 'white', // Ensuring the marker color is white
              },
            },
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        figtree: ["figtree"],
      },
      colors: {
        myBorder: "#606060",
        myBG: "black",
        headText: "#BEBEBF",
        normText: "rgba(101, 101, 101, 1)",
        speBG: "#5E2296",
        normBG: "#F8F0FF",
        lineGradient1: "#262626",
        lineGradient2: "#ADA785",
        lineGradient3: "#262626",
        fontColor5: "#E5E5E5",
        footerBG: "#363636",
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
        gradientColor1: "#E54D60",
        gradientColor2: "#A342FF",
        fontColor2: "#97A3B7",
        fontColor3: "#677489",
        gradientColor3: "#7A7A7E",
        fontColor4: "#ABABAB",
        faqBG: "#060606",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    `gatsby-plugin-mdx`,

  ]
};
