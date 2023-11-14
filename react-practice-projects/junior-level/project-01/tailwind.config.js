/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "325px",
      },
      colors: {
        customCyan: {
          50: "hsl(0, 0%, 100%)",
          100: "hsl(189, 41%, 97%)",
          200: "hsl(185, 41%, 84%)",
          300: "hsl(184, 14%, 56%)",
          400: "hsl(186, 14%, 43%)",
          500: "hsl(183, 100%, 15%)",
          600: "hsl(172, 67%, 45%)",
          700: "hsl(183, 100%, 10%)",
        },
      },
      fontFamily: {
        display: "Space Mono, monospace",
      },
    },
  },
  plugins: [],
};
