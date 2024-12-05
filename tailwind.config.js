/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  "./public/index.html",
  theme: {
    extend: {
      colors: {
        textlogin: "#4682B4", // Define the custom color here
      },
    },
  },
  plugins: [],
};
