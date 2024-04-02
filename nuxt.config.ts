// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          charset: "utf-8",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          name: "title",
          content: "Atiquzzaman Soikat | Freelance Senior Full Stack Developer",
        },
        {
          name: "description",
          content:
            "As a full-stack developer, I will work as part of a team to implement new features, as well as make modifications and fix bugs in existing code. Get a quote today!",
        },
        {
          name: "keywords",
          content:
            "Shopify expert, full-stack website developer, WordPress CMS expert",
        },
        {
          property: "og:title",
          content: "Atiquzzaman Soikat | Freelance Senior Full Stack Developer",
        },
        {
          property: "og:url",
          content: "https://soikat.dev/",
        },
        {
          property: "og:image",
          content: "https://soikat.dev/img/OG-image.png",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "en_GB",
        },
        {
          property: "og:description",
          content:
            "As a full-stack developer, I will work as part of a team to implement new features, as well as make modifications and fix bugs in existing code. Get a quote today!",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/public/favicon.ico",
          type: "image/x-icon",
        },
        {
          rel: "icon",
          href: "/public/favicon.ico",
          type: "image/x-icon",
        },
      ],
      script: [
        { src: "/js/bootstrap.smin.js" },
        { src: "/js/isotope.pkgd.min.js" },
        { src: "/js/script.js" },
        { src: "https://kit.fontawesome.com/6908033352.js" },
      ],
    },
  },
  css: [
    "~/assets/css/bootstrap.css",
    "~/assets/vendors/linericon/style.css",
    "~/assets/vendors/owl-carousel/owl.carousel.min.css",
    "~/assets/css/magnific-popup.css",
    "~/assets/vendors/nice-select/css/nice-select.css",
    "~/assets/css/style.css",
  ],
});
