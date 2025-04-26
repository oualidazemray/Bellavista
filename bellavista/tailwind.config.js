// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Ensure this is correct for your Next.js file structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        seasons: ['"Theseasons"', "sans-serif"], // Use your custom font here
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode
};
