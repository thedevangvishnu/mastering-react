/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "325px",
      },
      colors: {
        gradient: {
          100: "hsl(236, 72%, 79%)",
          200: "hsl(237, 63%, 64%)",
        },
        grayishBlue: {
          100: "hsl(240, 78%, 98%)",
          200: "hsl(234, 14%, 74%)",
          300: "hsl(233, 13%, 49%)",
          400: "hsl(232, 13%, 33%)",
        },
      },
      fontFamily: {
        display: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
