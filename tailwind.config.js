/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#F7F7F7",
          100: "#EBEBEB",
          200: "#D4D4D4",
          300: "#ABABAB",
          400: "#888888",
          500: "#666666",
          600: "#4F4F4F",
          700: "#3A3A3A",
          800: "#272727",
          900: "#171717",
          950: "#0D0D0D",
        },
        accent: {
          50:  "#FAF5E8",
          100: "#F5EBD0",
          200: "#EBD59F",
          300: "#DFBC6E",
          400: "#D4A33D",
          500: "#C48B1A",
          600: "#A37215",
          700: "#815B10",
          800: "#5F420B",
          900: "#3D2A07",
          950: "#271B04",
        },
      },
    },
  },
  plugins: [],
};
