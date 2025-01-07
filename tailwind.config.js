/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif']
      },
      transitionProperty: {
        'opacity-transform-filter': 'opacity, transform, filter',
        'top-left': 'top, left',
      },
    },
  },
  plugins: [tailwindScrollbar],
}

