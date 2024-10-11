/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(199.78deg, #4C1FA1 0.88%, #795CD0 100%)',
        'side-nav-gradient': 'linear-gradient(260.46deg, #421196 0%, #795CD0 100%)',
        'progress-gradient': 'linear-gradient(180deg, #421196 0%, #795CD0 100%)'
      },
    },
  },
  plugins: [],
}