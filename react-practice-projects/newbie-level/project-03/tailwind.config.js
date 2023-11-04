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
        lightRed: {
          100: "hsl(0, 100%, 67%, 0.1)",
          200: "hsl(0, 100%, 67%)",
        },
        orangeyYellow: {
          100: "hsl(39, 100%, 56%, 0.1)",
          200: "hsl(39, 100%, 56%)",
        },
        greenTeal: {
          100: "hsl(166, 100%, 37%, 0.1)",
          200: "hsl(166, 100%, 37%)",
        },
        cobaltBlue: {
          100: "hsl(234, 85%, 45%, 0.1)",
          200: "hsl(234, 85%, 45%)",
        },
        // background
        lightSlateBlue: "hsl(252, 100%, 67%) ",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        // circle
        violetBlue: "hsla(256, 72%, 46%, 1)",
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
