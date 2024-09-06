/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  safelist: [
    'bg-red-600',
    'bg-green-600',
    'bg-blue-600',
    'bg-cyan-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-yellow-600',
    'bg-sky-600',
    'bg-orange-600',
  ],
  plugins: [],
  
}

