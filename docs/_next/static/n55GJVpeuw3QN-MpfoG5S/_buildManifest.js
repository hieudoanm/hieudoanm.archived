(self.__BUILD_MANIFEST = (function (s, e, a, r) {
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
      numBits: s,
      numHashes: r,
      bitArray: [],
    },
    '/': [
      'static/chunks/ddb80a4a-a17f3e6f10c31493.js',
      e,
      'static/chunks/pages/index-3408a0ec3115ad7e.js',
    ],
    '/404': [e, 'static/chunks/pages/404-91fde565f4c618b9.js'],
    '/500': [e, 'static/chunks/pages/500-9f9e08f576942157.js'],
    '/_error': [e, 'static/chunks/pages/_error-014b8eb651536e88.js'],
    sortedPages: ['/', '/404', '/500', '/_app', '/_error'],
  };
})(0, 'static/chunks/47-091e89f1d34ae62c.js', 0, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
