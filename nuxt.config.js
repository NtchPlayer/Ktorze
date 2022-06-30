export default {
  env: {
    apiUrl: process.env.API_URL,
    baseSite: process.env.BASE_SITE,
    googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Balise360%s',
    meta: [{
      hid: 'robots',
      name: 'robots',
      content: 'index, follow'
    }, {
      name: 'keywords',
      hid: 'keywords',
      content: 'Randonnée, rando pédestre, itinéraires randonnées pédestres, site randonnée, circuit de randonnée, carte randonnée, GPS randonnée'
    }, {
      name: 'apple-mobile-web-app-title',
      hid: 'apple-mobile-web-app-title',
      content: 'Balise360'
    }, {
      hid: 'og:image:secure_url',
      name: 'og:image:secure_url',
      property: `${process.env.BASE_SITE}/open-graph.jpg`
    }, {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      property: 'Logo Balise 360'
    }, {
      hid: 'og:local',
      name: 'og:local',
      property: 'fr_FR'
    }, {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: process.env.BASE_SITE
    }, {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Balise360'
    }, {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.'
    }, {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: `${process.env.BASE_SITE}/twitter_card.png`
    }],
    link: [{
      rel: 'icon',
      type: 'image/png',
      href: '/icon.png',
      size: '512x512'
    }]
  },

  server: {
    port: 8080 // default: 3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/style/reset.css',
    '@/style/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'Balise360',
      description: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.',
      author: 'Balise360 DevTeam',
      lang: 'fr',
      appleStatusBarStyle: 'black-translucent',
      mobileAppIOS: true,
      theme_color: '#658672',
      ogHost: process.env.BASE_SITE,
      ogImage: {
        path: `${process.env.BASE_SITE}/open-graph.jpg`,
        width: '1200',
        height: '630',
        type: 'image/jpg'
      },
      twitterCard: 'summary_large_image',
      twitterSite: '@balise360.fr',
      twitterCreator: '@Balise360 DevTeam'
    },
    manifest: {
      name: 'Balise360',
      short_name: 'Balise360',
      description: '',
      dir: 'ltr',
      orientation: 'any',
      start_url: '/',
      id: '/',
      categories: ['travel', 'sports', 'utilities'],
      background_color: '#f2f1f1'
    },
    icon: {
      purpose: 'any'
    }
  },

  gtm: {
    autoInit: false,
    publicRuntimeConfig: {
      gtm: {
        id: process.env.GOOGLE_TAG_MANAGER_ID
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
