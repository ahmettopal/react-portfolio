/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '2560px'
    },
    extend: {
      fontFamily: {
        bungeeShade: ["BungeeShade"],
        sourceCodePro: ["SourceCodePro"]
      },
    },
  },
  plugins: [],
}
