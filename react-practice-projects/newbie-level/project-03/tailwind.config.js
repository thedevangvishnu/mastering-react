/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Hanken Grotesk, sans-serif",
      },
      screens: {
        xs: { min: "375px", max: "640px" },
      },
      colors: {
        // primary
        lightRed: "hsl(0, 100%, 67%)",
        orangeyYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        // background
        lightSlateBlue: "hsl(252, 100%, 67%) ",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        // circle
        violeyBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
        // neutral
        white: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
