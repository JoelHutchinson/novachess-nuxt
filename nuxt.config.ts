// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  compatibilityDate: "2024-04-03",
  imports: {
    dirs: ["types"],
  },
  nitro: {
    imports: {
      dirs: ["types"],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/puzzle",
      exclude: ["/register"],
      cookieRedirect: false,
    },
  },
});
