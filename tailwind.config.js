module.exports = {
  prefix: 'tw-',
  content: [
    './views/*.html',
    './views/global/**/*.html',
    './views/components/**/*.html'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '960px',
      lg: '1200px',
      xl: '1600px'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
