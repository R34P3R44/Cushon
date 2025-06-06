/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackground: '#FFFFFF',
        formBackground: '#F5F0F3',
        Purple: '#DC1E83',
      },
    },
  },
  plugins: [],
};