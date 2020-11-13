import colors from 'vuetify/es5/util/colors'
const env = require('dotenv').config()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Niz',
    title: 'Niz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'Freelance developper Fullstack',
        content: '',
      },
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
  ],

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
      name: 'MyVoc',
      short_name: 'MyVoc',
      lang: 'en',
      display: 'fullscreen',
      background_color: '#03A678',
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

  env: env.parsed,

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
