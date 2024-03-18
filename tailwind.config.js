/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "rgba(0,0,0,0.5)",
      },
      scale: {
        175: "1.75",
        180: "1.80",
        200: "2.00",
        220: "2.20",
        250: "2.50",
      },
    },
  },
  plugins: [],
};
