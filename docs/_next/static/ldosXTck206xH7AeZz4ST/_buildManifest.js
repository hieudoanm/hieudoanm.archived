(self.__BUILD_MANIFEST = (function (e, s, r, a) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    __routerFilterStatic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: 0,
      numHashes: a,
      bitArray: [],
    },
    __routerFilterDynamic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: e,
      numHashes: a,
      bitArray: [],
    },
    '/': [
      'static/chunks/ddb80a4a-58e9b75c826439ab.js',
      s,
      'static/chunks/pages/index-20f93f5b7205381c.js',
    ],
    '/404': [s, 'static/chunks/pages/404-9367130a1139ef5e.js'],
    '/500': [s, 'static/chunks/pages/500-a2c068d45ac08a55.js'],
    '/_error': [s, 'static/chunks/pages/_error-c4406f7b6ad5eb7d.js'],
    sortedPages: ['/', '/404', '/500', '/_app', '/_error'],
  };
})(0, 'static/chunks/190-89509cb1a2626c04.js', 0, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
