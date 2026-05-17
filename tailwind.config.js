/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        float: "float 4s ease-in-out infinite",
      },
    },
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
