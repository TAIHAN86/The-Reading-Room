// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Ensure dark mode is enabled via class strategy
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Specify the themes you want to use
  },
}
