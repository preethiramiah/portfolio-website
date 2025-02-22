/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'star-green': '#61ffb8',
        'grey-custom': 'rgba(255,255,255,0.4)',
        'white-custom': 'rgba(255,255,255,0.8)'
      },
      backgroundImage: {
        'stars': 'url("/src/assets/images/stars.svg")',
        'noise': 'url("/src/assets/images/noise.png")',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        'pockota-medium': ['Pockota-Medium', 'sans-serif']
      }
    },
  },
  plugins: [],
}

