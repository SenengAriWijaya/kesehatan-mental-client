// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        lightwhite: "#F7FAF9",
        lightbrown: "#E2D1BD",
        lightturquoise: "#B1BDB8",
        darkturquoise: "#678478",
        darkgrey: "#3E4642",
        darkorange: "#CD5B3C",
        marron: "#B5472C",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
