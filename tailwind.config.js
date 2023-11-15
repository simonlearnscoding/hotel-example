module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      fontFamily: {
        sans: [
          "Helvetica",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ["Baskerville", "Georgia", "Times New Roman", "Times", "serif"],
      },
      colors: {
        black: "#201315",
        white: "#F8F3EB",
        primary: "#EF767A",
      },
    },
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
