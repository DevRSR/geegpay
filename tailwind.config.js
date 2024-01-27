/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Plus Jakarta Sans", "serif"],
    },
    screens: {
      'xsm': '325px',

      'xs': '480px',
      
      'sm': '640px',
      
      'md': '768px',
     
      'lg': '1024px',

      'xl': '1280px',
     
      '2xl': '1440px',

    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
