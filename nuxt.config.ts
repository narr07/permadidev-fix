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
    "@nuxthq/studio",
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
        fallbacks: ["Inter"],
        fallbackName: "Inter",
        root: "assets",
      },
    ],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      // ignore: [
      //   "/__pinceau_tokens_config.json",
      //   "/__pinceau_tokens_schema.json",
      // ],
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    "/galeri": { prerender: true },
    // Product page generated on-demand, revalidates in background
    "/articles/**": { swr: 360 },
    // Blog post generated on-demand once until next deploy
    "/api/**": { cors: true },
    // Redirects legacy urls
  },
});
