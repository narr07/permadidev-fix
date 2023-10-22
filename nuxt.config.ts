// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@hypernym/nuxt-anime",
    "@nuxt/content",
    "@twicpics/components/nuxt3",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@twicpics/components/nuxt3",
  ],
  anime: {
    composables: true,
  },
  image: {
    twicpics: {
      baseURL: "https://permazix.twic.pics",
    },
  },
  twicpics: {
    domain: "https://permazix.twic.pics",
    anticipation: 0.5,
    step: 50,
  },
  ui: {
    icons: ["ph", "skill-icons"],
  },
  colorMode: {
    preference: "dark",
  },
  css: ["~/assets/css/fonts.css"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      "Schibsted Grotesk": {
        wght: [400, 500, 600, 700, 800, 900],
        ital: [400, 500, 600, 700, 800, 900],
      },
      Geologica: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  fontMetrics: {
    fonts: [
      {
        family: "Schibsted Grotesk",
        fallbacks: ["Schibsted Grotesk"],
        fallbackName: "Schibsted Grotesk",
        root: "assets",
      },
      {
        family: "Geologica",
        fallbacks: ["Geologica"],
        fallbackName: "Geologica",
        root: "assets",
      },
    ],
  },
});
