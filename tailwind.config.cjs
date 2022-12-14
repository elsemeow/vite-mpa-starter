/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/partials/*.html", "./src/scripts/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "list-icon-arrow": 'url("/assets/images/arrow.svg")'
      },
      fontFamily: {
        sans: [
          '"Noto Sans Display"',
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
          '"Noto Color Emoji"'
        ],
        rubl: '"Rubl Sign"'
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/container-queries")
  ]
};
