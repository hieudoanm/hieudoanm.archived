(self.__BUILD_MANIFEST = (function (e, s, r, t) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    __routerFilterStatic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: 0,
      numHashes: t,
      bitArray: [],
    },
    __routerFilterDynamic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: e,
      numHashes: t,
      bitArray: [],
    },
    '/': [
      'static/chunks/ddb80a4a-4f7547cc221dff31.js',
      s,
      'static/chunks/pages/index-a967a994af35d07d.js',
    ],
    '/404': [s, 'static/chunks/pages/404-d0e197dafd1590a0.js'],
    '/500': [s, 'static/chunks/pages/500-c05220ffe2acaea6.js'],
    '/_error': [s, 'static/chunks/pages/_error-d8703b516fb812a5.js'],
    sortedPages: ['/', '/404', '/500', '/_app', '/_error'],
  };
})(0, 'static/chunks/594-d13fc5ebc556d9a4.js', 0, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
