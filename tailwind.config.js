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
          50:  "#F5EFEF",
          100: "#E8DADA",
          200: "#D2B8B8",
          300: "#BC9696",
          400: "#A67474",
          500: "#8A5858",
          600: "#6E4444",
          700: "#523030",
          800: "#3A1F1F",
          900: "#241212",
          950: "#160A0A",
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
