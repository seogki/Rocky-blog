const { spacing } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,'mdx}"],
  // content: ["./src/components/*.{js,ts,jsx,tsx,mdx}"],
  // content: ["./src/app/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            //...
            "h1,h2,h3,h4": {
              "scroll-margin-top": spacing[32]
            }
          }
        }
      })
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  darkMode: ["class"],

  plugins: [require("@tailwindcss/typography")]
};
