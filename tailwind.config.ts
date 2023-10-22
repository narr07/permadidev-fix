import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        permadi: {
          DEFAULT: "#ABD1C6",
          50: "#EDF5F3",
          100: "#E0EEEA",
          200: "#C5DFD8",
          300: "#ABD1C6",
          400: "#87BDAD",
          500: "#63A995",
          600: "#4B8977",
          700: "#376557",
          800: "#234038",
          900: "#0F1C18",
          950: "#050A09",
        },
        merah: {
          DEFAULT: "#E16162",
          50: "#FEFCFB",
          100: "#FBEDEA",
          200: "#F5CCC8",
          300: "#EEAAA6",
          400: "#E88683",
          500: "#E16162",
          600: "#D83239",
          700: "#B0212D",
          800: "#811925",
          900: "#52101A",
          950: "#3A0B13",
        },
        kuning: {
          DEFAULT: "#F9BC60",
          50: "#FEF6EA",
          100: "#FDEED6",
          200: "#FCDDAF",
          300: "#FACD87",
          400: "#F9BC60",
          500: "#F7A52A",
          600: "#E08A08",
          700: "#AA6906",
          800: "#744804",
          900: "#3E2602",
          950: "#231601",
        },
      },
      fontFamily: {
        body: ["Schibsted Grotesk ", "sans-serif"],
        title: ["Geologica", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./storyblok/**/*.{vue,js}",
    "./content/**/*.md",
  ],
};