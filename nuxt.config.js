module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bgs-test-case',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test case for BGS Group' }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
        rel:"stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
        rel:"stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: [
    // With options
    ['@nuxtjs/vuetify']
  ],
  modules: [
    ['@nuxtjs/axios', { anotherOption: true }],
  ],

  axios: {
    baseURL: 'http://localhost:4000',
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      },
      delete: {},
      get: {},
      head: {},
      post: {},
      put: {},
      patch: {}
    }
  }
}

