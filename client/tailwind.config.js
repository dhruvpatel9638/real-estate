/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fameRed: '#7a0c07',
        fameHaki: '#7a7a7a',
        fameGray: '#f1f1f1',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Playfair Display', 'Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
}
