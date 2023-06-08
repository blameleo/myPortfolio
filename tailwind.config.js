/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#151515',
        'secondary-dark': '#242424',
        'primary-green': "#4EE1A0",
        'primary-white': '#FFFFFF',
        'secondary-white': '#D9D9D9'
      },
      backgroundImage:{
        backImage: "url('./public/img.png')"
      },
      fontFamily : {
        test: ['Space Grotesk']
      }
    },
   
  },
  plugins: [],
}

