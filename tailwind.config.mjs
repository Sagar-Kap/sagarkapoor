/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      vsm: "300px",
    },
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        brand: {
          1: "#12F7D6",
          2: "#98FAEC",
        },
        grey: "#43454D",
        html: "#E54F26",
        css: "#0C73B8",
        js: "#E7A020",
        react: "#28A9E0",
        bg: {
          1: "#292F36",
          2: "#1A1E23",
        },
      },
    },
  },
  plugins: [],
};
