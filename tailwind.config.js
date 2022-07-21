/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#f8f8f2",
        black: "#282A36",
        lightblack: "#44475A",
        blue: "#6272A4",
        purple: "#BD93F9",
        pink: "#FF79C6",
        placeholdertext: "#BEBDBD",
      },
    },
  },
  plugins: [],
};
