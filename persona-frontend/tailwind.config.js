/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
        'edu' : ["Edu AU VIC WA NT Hand", 'cursive'],
        'nunito' : ["Nunito", 'sans-serif']
      },
      animation: {
        tilt: 'tilt 3s linear infinite'
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1.5deg)' },
          '75%': { transform: 'rotate(-1.5deg)' }
        }
      },
    },
  },
  plugins: [],
}

