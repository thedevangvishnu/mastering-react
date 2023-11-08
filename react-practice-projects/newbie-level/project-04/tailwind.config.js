/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "315px",
        ...defaultTheme.screens,
      },
      colors: {
        // primary
        magenta: {
          100: "hsl(300, 24%, 96%)",
          200: "hsl(303, 10%, 53%)",
          300: "hsl(300, 43%, 22%)",
        },
        softPink: "hsl(333, 80%, 67%)",
      },
      fontFamily: {
        display: "League Spartan, sans-serif",
      },
    },
  },
  plugins: [],
};
