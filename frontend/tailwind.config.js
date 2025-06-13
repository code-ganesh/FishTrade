// client/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'sea-blue': '#0077B6',
        'sky-blue': '#00B4D8',
        'sandy-beige': '#F0EAD6',
        'boat-wood': '#8B4513',
        'fish-orange': '#FF7F50',
        'foam-white': '#F8F8F8',
        'dark-ocean': '#004A7F', // A darker blue for deeper parts/accents
        'light-sand': '#FFFADD', // Lighter, warmer beige
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Crete Round', 'serif'],
        'heading': ['Poppins', 'sans-serif'], // Added for headings
      },
      backgroundImage: {
        'ocean-waves': "url('/src/assets/images/waves.svg')",
        'fish-pattern': "url('/src/assets/images/fish-pattern.png')",
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'wave': {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '100% 50%' },
        },
        'swim': {
            '0%, 100%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(20px)' },
        },
        'bubble': {
            '0%': { transform: 'scale(0) translateY(0)', opacity: 0 },
            '50%': { transform: 'scale(1) translateY(-20px)', opacity: 1 },
            '100%': { transform: 'scale(0) translateY(-40px)', opacity: 0 },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wave': 'wave 20s linear infinite',
        'swim': 'swim 4s ease-in-out infinite',
        'bubble-slow': 'bubble 4s ease-out infinite',
        'bubble-medium': 'bubble 3s ease-out infinite',
        'bubble-fast': 'bubble 2s ease-out infinite',
      }
    },
  },
  plugins: [],
}