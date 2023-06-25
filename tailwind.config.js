/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: { max: "768px" },
      sm: { min: "768px" },
      md: { min: "1024px" },
      lg: { min: "1440px" },
      xl: { min: "2560px" },
    },
  },
  plugins: [],
};
