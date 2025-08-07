
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-green': '#00B894',
        'brand-green-dark': '#009975',
        'brand-black': '#1D1D1D',
        'brand-gray': '#F5F5F5',
      }
    },
  },
  plugins: [],
}
