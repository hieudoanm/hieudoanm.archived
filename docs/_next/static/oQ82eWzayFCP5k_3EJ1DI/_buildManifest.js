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
      numItems: 0,
      errorRate: 1e-4,
      numBits: e,
      numHashes: r,
      bitArray: [],
    },
    '/': [
      'static/chunks/ddb80a4a-16725ec983811a7e.js',
      s,
      'static/chunks/pages/index-3d78d504745e97d9.js',
    ],
    '/404': [s, 'static/chunks/pages/404-a6f9020386ac5dec.js'],
    '/500': [s, 'static/chunks/pages/500-8ac60502eec775f3.js'],
    '/_error': [s, 'static/chunks/pages/_error-e93886aa4ad6e464.js'],
    sortedPages: ['/', '/404', '/500', '/_app', '/_error'],
  };
})(0, 'static/chunks/594-d13fc5ebc556d9a4.js', 0, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
