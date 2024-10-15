// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },
  typescript: {
    strict: false
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-purgecss',
    'nuxt-delay-hydration',
    'nuxt-vuefire',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],

  app: {
    head: {
      title: "Alifudin Aziz",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Frontend Developer'
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    }
  },
  site: {
    url: process.env.BASE_SITE_URL,
    name: 'Alifudin Aziz'
  },

  googleFonts: {
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
    families: {
      'Source Code Pro': {
        wght: '200..900',
        ital: '200..700',
      },
      Poppins: true,
    }
  },
  image: {
    dir: 'assets/images',
    domains: [
      'alifudinaziz.com'
    ]
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi']
    }
  },

  css: ['~/assets/scss/glob-styles.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        }
      }
    }
  },

  vuefire: {
    config: {
      apiKey: '',
      authDomain: '',
      projectId: '',
      appId: '',
    },
  },
})