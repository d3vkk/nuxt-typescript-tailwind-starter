// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/robots"],
  css: ["@/assets/css/index.css"],
  components: ["~/views/landing", "~/views", "~/components"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
