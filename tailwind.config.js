/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#333333",
        "placeholder-color": "#BDBDBD",
        darker: "#4F4F4F",
        "footer-color": "#828282",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
