/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackground: '#FFFFFF',
        formBackground: '#F5F0F3',
        purple: '#DC1E83',
      },
      boxShadow: {
        'pink-outline': '0 0 0 3px rgba(220,30,131,1)',
      },
      borderColor: {
        'grey-border': 'rgb(196, 196, 196)'
      }
    },
  },
  plugins: [],
};