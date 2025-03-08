(self.__BUILD_MANIFEST = (function (e, s, a, r) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    __routerFilterStatic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: 0,
      numHashes: r,
      bitArray: [],
    },
    __routerFilterDynamic: {
      numItems: e,
      errorRate: 1e-4,
      numBits: e,
      numHashes: r,
      bitArray: [],
    },
    '/': [
      'static/chunks/0f6558c2-017f430d15ea6171.js',
      s,
      'static/chunks/pages/index-df2a4f20272b64b8.js',
    ],
    '/404': [s, 'static/chunks/pages/404-22f3f64fcda3cf36.js'],
    '/500': [s, 'static/chunks/pages/500-1f614512887ffb3f.js'],
    '/_error': [s, 'static/chunks/pages/_error-6edd6ff36ef749fa.js'],
    sortedPages: ['/', '/404', '/500', '/_app', '/_error'],
  };
})(0, 'static/chunks/370-14ecb614f90d7f6b.js', 1e-4, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
