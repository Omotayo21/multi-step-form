/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src todo list/**/*.{js,ts,jsx,tsx}",
    "./src multi/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    screens :{
      'sm' :'128px',
      'md' :'768px',
      'lg' :'1024px',
      'xl' :'1280px',
    },
    extend: {},
  },
  plugins: [],
}

