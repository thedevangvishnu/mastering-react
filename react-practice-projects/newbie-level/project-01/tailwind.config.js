/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Kumbh Sans, sans-serif",
      },
      colors: {
        darkCyan: "hsl(185, 75%, 39%)",
        desaturatedBlue: "hsl(229, 23%, 23%)",
        grayishBlue: "hsl(227, 10%, 46%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
