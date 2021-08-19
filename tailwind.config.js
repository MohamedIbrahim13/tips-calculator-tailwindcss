module.exports = {
  mode: "jit",
  purge: ["./*.html","./*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
