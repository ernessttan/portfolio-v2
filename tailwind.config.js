/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        yellow: "#f1fa8c",
        orange: "#ffb86c",
        red: "#ff5555",
        placeholdertext: "#BEBDBD",
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(offwhite|black|lightblack|blue|purple|pink|yellow|orange|red|placeholdertext)/,
  }],
};
