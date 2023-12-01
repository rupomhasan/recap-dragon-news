/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: "#706F6F",
        Dark01: "#f3f3f3",
        Dark02: "#403f3f",
        unique: "#d72050",
        unique1: "#d72000",
      },
      backdropInvert: {
        "news-bg": "url ('/src/assets/bg.png')",
        newsbg2: "url ('src/assets/bg1.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
