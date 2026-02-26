/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#629D23',
        'primary-dark': '#4a7a1a',
      },
    },
  },
  plugins: [],
}
