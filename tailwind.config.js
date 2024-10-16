/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 40s linear infinite', // Aqui, a duração é 3 segundos
      },
    },
  },
  plugins: [],
}

