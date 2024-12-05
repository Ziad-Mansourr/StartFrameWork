const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx , html}" ,flowbite.content()],
    darkMode : "class",
    
  theme: {
    extend: {},
  },
  plugins: [require('daisyui') , flowbite.plugin(),],
}

