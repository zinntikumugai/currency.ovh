importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.64c26cd.js",
    "revision": "89b23ac636096fdec3a0922f27243947"
  },
  {
    "url": "/_nuxt/commons/app.93ca13a.js",
    "revision": "5466c8338d746a60ec603cc5ecf39e40"
  },
  {
    "url": "/_nuxt/pages/index.3a701ac.js",
    "revision": "1c0949f15916fa1830c1ed4fc978a1e1"
  },
  {
    "url": "/_nuxt/pages/policy.4c89767.js",
    "revision": "035e39e08333908dcbc011e4607c6d47"
  },
  {
    "url": "/_nuxt/runtime.6bf5805.js",
    "revision": "cc83cef9eef566bf86881c24fefd45a5"
  },
  {
    "url": "/_nuxt/vendors~app.523fb43.js",
    "revision": "9a4b9f3d6a97abb5678dac14a6feba70"
  }
], {
  "cacheId": "currency.ovh",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
