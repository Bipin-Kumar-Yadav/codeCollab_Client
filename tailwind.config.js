/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#5C2A17',
        secondary : '#F4E3C5',
        modal : '#19181880'
      }
    },
  },
  plugins: [],
}

