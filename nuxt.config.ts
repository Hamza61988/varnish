// https://nuxt.com/docs/api/configuration/nuxt-configg
export default defineNuxtConfig({
  compatibilityDate: "2025-11-04",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    preset: "vercel",
    sourceMap: false,
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Varnish",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "alternate icon", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/icons/Company logo.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200;300;400;500;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  alias: {
    "@": ".",
  },
});
