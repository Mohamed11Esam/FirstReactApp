/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      main: "#1ABC9C",
      sec: "#2C3E50",
      third: "#1A252F",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
