const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/*.html",
    "./src/partials/*.html",
    "./src/scripts/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "list-icon-arrow": 'url("/assets/images/arrow.svg")'
      },
      fontFamily: {
        sans: ["Noto Sans Display", ...defaultTheme.fontFamily.sans],
        rubl: "Rubl Sign"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries")
  ]
};
