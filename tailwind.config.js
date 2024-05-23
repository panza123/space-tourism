/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home':"url('/src/assets/home/big.jpg')",  // Ensure this path is correct relative to your output CSS
        'homes':"url('/src/assets/home/small.jpg')",  // Ensure this path is correct relative to your output CSS
        'homephone':"url('/src/assets/home/phone.jpg')",  // Ensure this path is correct relative to your output CSS
        'star':"url('/src/assets/destination/star.jpg')",  // Ensure this path is correct relative to your output CSS
        'tech':"url('/src/assets/technology/tech.jpg')",  // Ensure this path is correct relative to your output CSS
        'crew':"url('/src/assets/crew/crew.jpg')",  // Ensure this path is correct relative to your output CSS
      },
      colors: {
        'white-alpha-16': '#ffffff16',
      },
    },
  },
  plugins: [],
}
