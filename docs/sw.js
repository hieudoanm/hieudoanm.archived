if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let r = {};
    const t = (e) => n(e, c),
      d = { module: { uri: c }, exports: r, require: t };
    s[c] = Promise.all(a.map((e) => d[e] || t(e))).then((e) => (i(...e), r));
  };
}
define(['./workbox-e9849328'], function (e) {
  'use strict';
  importScripts('fallback-fZdZjX4MCV9TDmqAwl_Rv.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/dynamic-css-manifest.json',
          revision: 'd751713988987e9331980363e24189ce',
        },
        {
          url: '/_next/static/chunks/594-d13fc5ebc556d9a4.js',
          revision: 'd13fc5ebc556d9a4',
        },
        {
          url: '/_next/static/chunks/ddb80a4a-469d031dce0c80b0.js',
          revision: '469d031dce0c80b0',
        },
        {
          url: '/_next/static/chunks/framework-249c5167381ef5cb.js',
          revision: '249c5167381ef5cb',
        },
        {
          url: '/_next/static/chunks/main-2db50ced7e6cd7b5.js',
          revision: '2db50ced7e6cd7b5',
        },
        {
          url: '/_next/static/chunks/pages/404-d0e197dafd1590a0.js',
          revision: 'd0e197dafd1590a0',
        },
        {
          url: '/_next/static/chunks/pages/500-c05220ffe2acaea6.js',
          revision: 'c05220ffe2acaea6',
        },
        {
          url: '/_next/static/chunks/pages/_app-ab4ce7f4a0757724.js',
          revision: 'ab4ce7f4a0757724',
        },
        {
          url: '/_next/static/chunks/pages/_error-d8703b516fb812a5.js',
          revision: 'd8703b516fb812a5',
        },
        {
          url: '/_next/static/chunks/pages/index-55a711cf5bb48a66.js',
          revision: '55a711cf5bb48a66',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-8cac0b4b405cede1.js',
          revision: '8cac0b4b405cede1',
        },
        {
          url: '/_next/static/css/9936a178f52da285.css',
          revision: '9936a178f52da285',
        },
        {
          url: '/_next/static/fZdZjX4MCV9TDmqAwl_Rv/_buildManifest.js',
          revision: 'f09bf59e57ca75a9b6b6f5fdddb60a41',
        },
        {
          url: '/_next/static/fZdZjX4MCV9TDmqAwl_Rv/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/media/05d30fccf6dfb4ed-s.woff2',
          revision: 'f44737ff64388df273b8277a256e2dae',
        },
        {
          url: '/_next/static/media/12d86e8d7e1c2769-s.p.woff2',
          revision: '365576734a1d6fcf0ba8ce8ee218c9e7',
        },
        {
          url: '/_next/static/media/5536c2b71f31f4c7-s.woff2',
          revision: 'a249fc31bd37ca2fed2511e9175a4df7',
        },
        {
          url: '/_next/static/media/69f639318a288687-s.woff2',
          revision: 'f743aa03b62d95151d2738aba962f693',
        },
        {
          url: '/_next/static/media/8ea6d73be4df1015-s.woff2',
          revision: '853efe04b7a3633d95dcb66ebdc24e9b',
        },
        {
          url: '/_next/static/media/f2fa6d7398e61d46-s.woff2',
          revision: '9100886c15016aaff47cb7fbfb203398',
        },
        { url: '/favicon.ico', revision: 'e2cff4502779c8302cd4b493f40fd8d6' },
        {
          url: '/icons/png/128x128.png',
          revision: '7fcc6ffa7d40fb20bb7e7e210875910c',
        },
        {
          url: '/icons/png/16x16.png',
          revision: '99efc3bea7572f5b6a3b73b872cd87c6',
        },
        {
          url: '/icons/png/256x256.png',
          revision: '12836d0e11fe30da77f74fed7c0edab8',
        },
        {
          url: '/icons/png/32x32.png',
          revision: '789cae03e08f00e5d37f5cd413248340',
        },
        {
          url: '/icons/png/512x512.png',
          revision: 'fdb624ac309283b77dc8283beb137f6f',
        },
        {
          url: '/icons/png/64x64.png',
          revision: '0b5d6293590c4a51398058068a7c722b',
        },
        {
          url: '/icons/svg/fx.svg',
          revision: '70f34181df01659308b7b98f2b5d88dd',
        },
        {
          url: '/icons/svg/next.svg',
          revision: '8e061864f388b47f33a1c3780831193e',
        },
        { url: '/manifest.json', revision: '868e1e81e8337255b2ce6560fce58a28' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/robots.txt', revision: '3e042940d36d3b7142e5d790c68f4a39' },
        { url: '/sitemap.xml', revision: '87cc10741326b8db7c900261716c3549' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    );
});
