/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway-Regular', 'sans-serif'],
      serif: ['Raleway-Medium', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
