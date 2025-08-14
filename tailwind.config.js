/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ecf1f4",
        "main-blue": "#4f6d90",
        "light-gray": "#8b99a8",
        "dark-gray": "#4f5962",
        "light-blue": "#a3bcca",
        "light-blue-2": "#9db1cc",
        "dark-blue": "#404c62",
        beige: "#aca4ae",
        "main-blue-bright": "#2c547c",
      },
    },
  },
  plugins: [],
};
