export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: { 
    apiUrl:
      // 배포되었을 때과 개발할 때의 api url 입니다.
      process.env.NODE_ENV === 'production'
        ? 'https://www.ddhouse.co.kr'
        : 'http://127.0.0.1:8020'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '디디하우스',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    // html 파일에 직접 임베드될 순수 js파일들은 아래에 지정해줍니다.
    script: [
      { src: '/js/inobounce.js' },
      { src: '/js/methods.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/main.js',
    '~/plugins/mixins/common.js',
    '~/plugins/mixins/ajax/index.js',
    '~/plugins/mixins/ajax/sample.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  bootstrapVue: {
    bootstrapCss: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
