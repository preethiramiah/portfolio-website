/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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

