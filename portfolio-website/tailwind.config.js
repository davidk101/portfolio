module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans'],
        'serif': ['Merriweather'],
        'mono': ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
