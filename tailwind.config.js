/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        backGround: '#20597c',
        primaryColor: '#369eb3',
        primaryColorHover: '#268396',
        botonEliminar: '#f5786a'
      },
    },
  },
  plugins: [],
}
