/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App/**/*.js',
    './App.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins')
}

