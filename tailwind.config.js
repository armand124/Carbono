/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'primaryGreen' : '#a1e2a6',
      'primaryBlue' : '#a0d9d9',
      'bgWhite' : '#f6f6f6',
      'accent' : '#fdf1a9',
      'textColor' : '#30343f',
      'gray' : '#cecece',
      'darkGreen': '#075b42',
      'red' : '#ff4646',
    },
    extend: {},
  },
  plugins: [],
}

