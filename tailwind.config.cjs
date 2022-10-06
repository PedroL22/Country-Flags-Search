/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { min: "922px" },
        // => @media (min-width: 922px) { ... }
      },
    },
  },
  plugins: [],
};
