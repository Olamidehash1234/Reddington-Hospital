/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        imageHover: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        bounce: 'bounce 0.7s infinite',
        imageHover: 'imageHover 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
