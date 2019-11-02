const pkg = require('./package')
let domain = "currency.ovh"
const DATAENV = {
  baseurl: process.env.NODE_ENV !== "development" ? `https://${domain}/` : "http://localhost:5000/",
  baseName: 'Currency.ovh' || process.env.npm_package_name,
  baseDesc: '' || process.env.npm_package_description,
  baseOgp: 'lib/img/ogp' || process.env.BASE_OGP,
  baseDir: '/' || process.env.BASE_DIR
}

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: DATAENV.baseName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:site_name', property: 'og:site_name', content: DATAENV.baseName },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: DATAENV.baseurl },
      { hid: 'og:title', property: 'og:title', content: DATAENV.baseName },
      { hid: 'og:description', property: 'og:description', content: DATAENV.baseDesc },
      { hid: 'og:image', property: 'og:image', content: `${DATAENV.baseurl}icon.png` },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@CurrencyOvh' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-9365736857722008',
      pageLevelAds: true
    }],
    'nuxt-fontawesome',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-PNQZHVS' }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
    ],
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://currency.ovh",
    gzip: true,
    generate: true
  }
}
