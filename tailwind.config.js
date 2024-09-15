/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-rose": '#F2DFD8',
        "primary-white": '#F1F2E9',
        "primary-blue": '#80ADBF',
        "primary-brown": '#A6796F',
        "dark-blue": '#376B8C',

      },
      fontFamily:{
        headings: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}

