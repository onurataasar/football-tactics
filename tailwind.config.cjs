/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "football-field": "url('/src/assets/football-field.webp')",
        back: "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
};
