/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      128: "32rem",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
