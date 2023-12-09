/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(210, 180, 140, 0.77)",
        secondary: "rgba(150, 150, 150, 0.7)",
        tertiary: "rgba(240, 240, 240, 1)",
        heading: '#F8F4E3',
        paragraph: '#E2DCCB',
      },
      fontFamily: {
        heading: ['Philosopher', 'sans-serif'],
        paragraph: ['Philosopher', 'sans-serif'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-background": "url('/src/assets/herobg.png')",
        "side-bg": "url('/src/assets/hero-side-bg.png')",
      },
    },
  },
  plugins: [],
};
