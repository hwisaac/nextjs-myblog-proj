/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {},
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin)'],
        serif: ['var(--font-source-serif-pro)'],
      },
      colors: {
        primary: '#4A4870',
        fontColor: '#586171',
        blue: '#4A4870',
        red: '#FF4B60',
        white: '#FFFFFF',
        gray: '#9A9FA9',
        twitter: '#1DA1F1',
        facebook: '#165BEA',
        instargram: '#EF00A1',
        yellow: '#FAC469',
        skyBlue: '#65EBE7',
      },
    },
  },
  plugins: [],
};
