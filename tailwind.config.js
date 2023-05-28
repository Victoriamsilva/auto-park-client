/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: "#FFFFFF",
      "gray-lighter": "#FDFDFD",
      "gray-light": "#F9F9F9",
      gray: "#B3BDCD",
      "gray-dark": "#273444",

      "primary-light": "#56E2A0",
      primary: "#43D28F",
      "primary-dark": "#37C381",

      "black-light": "#3B3C3C",
      black: "#17181a",
      "black-dark": "#151833",

      red: "#ff4d4f",
      "red-dark": "#EE4748",
      transparent: "transparent",
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
