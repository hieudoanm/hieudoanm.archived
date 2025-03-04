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
      numItems: e,
      errorRate: 1e-4,
      numBits: e,
      numHashes: t,
      bitArray: [],
    },
    '/': [
      'static/chunks/0f6558c2-7c2460cfb80da9a5.js',
      s,
      'static/chunks/pages/index-8c67b17ebdb11713.js',
    ],
    '/404': [s, 'static/chunks/pages/404-32ff09b6a4cb8d1e.js'],
    '/500': [s, 'static/chunks/pages/500-c0dd24f9f81bd334.js'],
    '/_error': [s, 'static/chunks/pages/_error-09d7e4d887e47241.js'],
    sortedPages: ['/', '/404', '/500', '/_app', '/_error'],
  };
})(0, 'static/chunks/473-07ced624899c9c84.js', 1e-4, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
