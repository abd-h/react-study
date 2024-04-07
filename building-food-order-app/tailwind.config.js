/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: {
          'max': '740'
        }
      }
    },
  },
  plugins: [],
};

