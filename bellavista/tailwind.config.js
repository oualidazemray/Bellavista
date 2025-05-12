/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E3C08D",
        background: "#1A1A1A",
      },
      fontFamily: {
        seasons: ["TheSeasons", "serif"],
      },
    },
  },
  plugins: [],
};
