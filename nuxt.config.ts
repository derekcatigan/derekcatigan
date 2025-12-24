import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Poppins: true,
    },
  },

  app: {
    head: {
      title: "Derek Catigan - Software Developer",
      meta: [
        {
          name: "description",
          content:
            "Software Developer and a graduate of Southern Leyte State University with a Bachelor of Science in Information Technology, majoring in Programming. I am most comfortable working with PHP, Laravel, Inertia, and Vue, and I specialize in building clean, minimalist, and user-friendly interfaces backed by scalable and maintainable systems.",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/CatiganProfile.ico" },
        {
          rel: "stylesheet",
          href: "https://cdn.boxicons.com/3.0.6/fonts/basic/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
  },
});