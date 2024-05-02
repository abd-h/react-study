/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sx: {
          max: "575px",
        },
        sm: {
          mx: "645px",
        },
        lg: {
          max: "845px",
        },
        xlg: {
          min: "900px",
        },
      },
      gridTemplateColumns: {
        meals: 'repeat(auto-fit, minmax(16rem, 1fr)) '
      }
    },
  },
  plugins: [],
};

