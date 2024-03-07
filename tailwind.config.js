/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('/src/assets/images/image 18 (1).png')",
      },
    
      colors: {
        primaryRed: '#D02A06',
        lightGray: '#8691A6',
        primaryGray: '#F0F0F0',
        primaryYellow: '#FFDF01',
        grayBg: '#F3F3F3',
        borderColor: '#8691A6'
      },
      fontFamily: {
        inter: ["Inter", "san-serif"]
			},
    },
  },
  plugins: [],
}