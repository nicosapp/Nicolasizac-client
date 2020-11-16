import colors from 'vuetify/es5/util/colors'
import { getRoutes } from './helpers/sitemap'
const env = require('dotenv').config()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Niz',
    title: 'Niz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Freelance fullstack Front-end/Back-end developper',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: process.env.CLIENT_URL },
      { hid: 'og:title', name: 'og:title', content: 'Nicolas Izac' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Nicolas Izac' },
      { hid: 'og:locale', name: 'og:locale', content: 'fr' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${process.env.CLIENT_URL}/icon.png`,
      },
      // {
      //   hid: 'google-site-verification',
      //   name: 'google-site-verification',
      //   content: process.env.GOOGLE_SITE_VERIFICATION_TOKEN,
      // },
      { name: 'msapplication-TileColor', content: '#22c1c3' },
      { name: 'theme-color', content: '#fff' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axiosRedirection',
    '~/plugins/notifier',
    '~/plugins/dialog',
    '~/plugins/alert',
    '~/plugins/markdown',
    '~/plugins/aos',
    { src: '~/plugins/google-analytics.js', mode: 'client' },
  ],

  env: env.parsed,

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      'nuxt-i18n',
      {
        defaultLocale: 'fr',
        strategy: 'no_prefix',
        locales: [
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
          },
          {
            name: 'Français',
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr-FR.js',
          },
        ],
        lazy: true,
        langDir: 'locales/',
      },
    ],
  ],

  // PWA module configuration
  pwa: {
    icon: {
      source: './static/icon.png',
    },
    manifest: {
      name: '',
      short_name: '',
      lang: 'fr',
      display: 'standalone',
      background_color: '#fff',
    },
  },
  // Auth module configuration
  auth: {
    redirect: {
      login: false,
      home: false,
      logout: '/auth/signin',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
          },
          logout: {
            url: '/logout',
            method: 'post',
          },
          user: {
            url: '/user',
            method: 'get',
            propertyName: 'data',
          },
        },
        tokenRequired: false,
        tokenType: false,
      },
    },
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    credentials: true,
    baseURL: env.parsed.API_URL,
  },

  // Sitemap module configuration
  sitemap: {
    path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    hostname: process.env.CLIENT_URL, // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [
      // Les pages qu'on a pas trop envie de voir atterrir sur Google.
      '/login',
      '/admin/**',
    ],
    routes() {
      // Nous allons utiliser une fonction personnalisée pour charger nos routes dynamiques dans le sitemap.
      return getRoutes()
    },
  },
  // Sitemap module configuration
  robots: {
    Disallow: ['/login', '/admin'],
    Sitemap: `${process.env.CLIENT_URL}/sitemap.xml`,
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        dark: {
          primary: '#22c1c3',
          accent: '#a2a2a2',
          secondary: '#d1af38',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          bg: '#21222e',
          'bg-second': '#303144',
          'body-color': '#FFFFFF',
          'icon-active': '#a2a2a2',
          'icon-inactive': '#ffffff8a',
        },
        light: {
          primary: '#22c1c3',
          secondary: '#d1af38',
          accent: colors.grey.lighten2,
          bg: '#FFFFFF',
          'bg-second': '#F5F5F5',
          'body-color': '#000000de',
          'icon-active': '#7d7d7d',
          'icon-inactive': '#c7c7c7',
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
