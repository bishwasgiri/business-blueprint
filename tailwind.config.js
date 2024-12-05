/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#4335A7",
        secondary: "#6b5fc1",
        tertiary: "#333333",
        tint: "#bab0e0",
        action: "#f4b400",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
