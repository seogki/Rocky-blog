/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
