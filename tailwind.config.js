/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#389DF1', // Blue
        primaryD: '#50A9F3', //Blue for dark mode
        blackD: '#131313', //black for dark mode
        secondary: '#FEA01C', // Yellow
        pink: '#E73774',
        green: '#5EB562', // green
        white: '#F9F9F9', // Your white color
        graybg: '#EEEEEE', // gray bg
        blackbg: '#1E1E1E',
        yellow: '#FEA01C',
      },
      fontSize: {
        'title': '32px',
      },
    },
  },
  plugins: [],
}
