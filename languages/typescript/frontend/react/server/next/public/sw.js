if (!self.define) {
  let e,
    s = {};
  const t = (t, a) => (
    (t = new URL(t + '.js', a).href),
    s[t] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = t), (e.onload = s), document.head.appendChild(e);
        } else (e = t), importScripts(t), s();
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let i = {};
    const r = (e) => t(e, c),
      l = { module: { uri: c }, exports: i, require: r };
    s[c] = Promise.all(a.map((e) => l[e] || r(e))).then((e) => (n(...e), i));
  };
}
define(['./workbox-588899ac'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/nextjs-template//_next/static/chunks/229.e2af736d503f1927.js',
          revision: 'e2af736d503f1927',
        },
        {
          url: '/nextjs-template//_next/static/chunks/235-5c15f6339f93be1e.js',
          revision: '5c15f6339f93be1e',
        },
        {
          url: '/nextjs-template//_next/static/chunks/324-27466e5793ce11fa.js',
          revision: '27466e5793ce11fa',
        },
        {
          url: '/nextjs-template//_next/static/chunks/400-46020140adfd0721.js',
          revision: '46020140adfd0721',
        },
        {
          url: '/nextjs-template//_next/static/chunks/635-eff190eaa060b6b5.js',
          revision: 'eff190eaa060b6b5',
        },
        {
          url: '/nextjs-template//_next/static/chunks/675-5f8dec1317213296.js',
          revision: '5f8dec1317213296',
        },
        {
          url: '/nextjs-template//_next/static/chunks/6c44d60f.ec2b84e302e5e49f.js',
          revision: 'ec2b84e302e5e49f',
        },
        {
          url: '/nextjs-template//_next/static/chunks/704-167667b36b07e1a4.js',
          revision: '167667b36b07e1a4',
        },
        {
          url: '/nextjs-template//_next/static/chunks/708-1a8fcee5cd971766.js',
          revision: '1a8fcee5cd971766',
        },
        {
          url: '/nextjs-template//_next/static/chunks/72-8e59699ac69fb343.js',
          revision: '8e59699ac69fb343',
        },
        {
          url: '/nextjs-template//_next/static/chunks/framework-2c79e2a64abdb08b.js',
          revision: '2c79e2a64abdb08b',
        },
        {
          url: '/nextjs-template//_next/static/chunks/main-ef460aa77dd0f460.js',
          revision: 'ef460aa77dd0f460',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/404-ccee8cfb0b613c60.js',
          revision: 'ccee8cfb0b613c60',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/500-bd1d07ec497a20ce.js',
          revision: 'bd1d07ec497a20ce',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/_app-b764e95581acccb1.js',
          revision: 'b764e95581acccb1',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/_error-54de1933a164a1ff.js',
          revision: '54de1933a164a1ff',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/apps/calendar-e2dbfd1a371633f5.js',
          revision: 'e2dbfd1a371633f5',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/apps/chart-7b4460254b6d1a6e.js',
          revision: '7b4460254b6d1a6e',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/apps/table-376e1ce819014012.js',
          revision: '376e1ce819014012',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/auth/sign-in-a78056c0f1134999.js',
          revision: 'a78056c0f1134999',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/auth/sign-up-551fac8f3272aa77.js',
          revision: '551fac8f3272aa77',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/index-3076a5d04340736f.js',
          revision: '3076a5d04340736f',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/password/forget-37ddd9ac49a7937b.js',
          revision: '37ddd9ac49a7937b',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/password/reset-fb3babd5132f7291.js',
          revision: 'fb3babd5132f7291',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/user/profile-17d9e1cb910c0108.js',
          revision: '17d9e1cb910c0108',
        },
        {
          url: '/nextjs-template//_next/static/chunks/pages/user/settings-926d99b3fce7d5cd.js',
          revision: '926d99b3fce7d5cd',
        },
        {
          url: '/nextjs-template//_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/nextjs-template//_next/static/chunks/webpack-8d4a9d90bd53f0a4.js',
          revision: '8d4a9d90bd53f0a4',
        },
        {
          url: '/nextjs-template//_next/static/css/2d7c39ae438cbe06.css',
          revision: '2d7c39ae438cbe06',
        },
        {
          url: '/nextjs-template//_next/static/media/solid.1a17d133.svg',
          revision: '217fc83ff2e177a2e9b09793b96d9d86',
        },
        {
          url: '/nextjs-template//_next/static/wL5WxleDj-mHSisedb4KR/_buildManifest.js',
          revision: 'd9d5a72d7ebae03d181f85f25c67a0f0',
        },
        {
          url: '/nextjs-template//_next/static/wL5WxleDj-mHSisedb4KR/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/nextjs-template/apple-touch-icon.png',
          revision: '7937902f0d03eab4361567de894d318e',
        },
        {
          url: '/nextjs-template/favicon-16x16.png',
          revision: '8693d4efcc5c1964643c5bad4495fed1',
        },
        {
          url: '/nextjs-template/favicon-32x32.png',
          revision: '61036d61b353e05fc0a3dc1f616e54ca',
        },
        {
          url: '/nextjs-template/favicon.ico',
          revision: 'c30c7d42707a47a3f4591831641e50dc',
        },
        {
          url: '/nextjs-template/manifest.json',
          revision: 'e628b05ec199019600514d3048aa23f0',
        },
        {
          url: '/nextjs-template/next.svg',
          revision: '8e061864f388b47f33a1c3780831193e',
        },
        {
          url: '/nextjs-template/robots.txt',
          revision: '3e042940d36d3b7142e5d790c68f4a39',
        },
        {
          url: '/nextjs-template/sitemap.xml',
          revision: '87cc10741326b8db7c900261716c3549',
        },
        {
          url: '/nextjs-template/thirteen.svg',
          revision: '53f96b8290673ef9d2895908e69b2f92',
        },
        {
          url: '/nextjs-template/vercel.svg',
          revision: '61c6b19abff40ea7acd577be818f3976',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/nextjs-template',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: t,
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
        ],
      }),
      'GET'
    );
});
