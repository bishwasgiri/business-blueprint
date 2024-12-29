/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        tint: "#e1e5fe",
        secbg: "5b4ae1",
        secondary: "#4f3cc6",
        primary: "#4335a7",
        tertiary: "#221c4a",
        action: "#f4b400",
      },

      screens: {
        sm: "480px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
        sec: "1200px",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
