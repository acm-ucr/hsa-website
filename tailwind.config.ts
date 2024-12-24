/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hsa: {
          "tan-100": "#FBF3F0",
          "tan-200": "#F4DCD2",
          "green-100": "#3B6C46",
          "red-100": "#B31A25",
          "pink-100": "#FFF0F0",
          "pink-200": "#FD5B67",
          "yellow-100": "#E0BC71",
          "blue-100": "#1B3BA4",
          "gray-100": "#EFEFEF",
          "gray-200": "#AFAFAF",
          "gray-300": "#424242",
        },
      },
    },
  },
  plugins: [],
};
