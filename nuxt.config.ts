// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    GoogleClientId: "", // can be overridden by NUXT_GOOGLE_CLIENT_ID environment variable
    GoogleClientSecret: "", // can be overridden by NUXT_GOOGLE_CLIENT_SECRET environment variable
    RedirectUri: "", // can be overridden by NUXT_REDIRECT_URI environment variable
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  image: {
    dir: "assets/images",
  },
});
