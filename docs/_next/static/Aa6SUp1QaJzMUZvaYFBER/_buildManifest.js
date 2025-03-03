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
      'static/chunks/ddb80a4a-9b05506324efbad8.js',
      s,
      'static/chunks/pages/index-d6950be2ef97152d.js',
    ],
    '/404': [s, 'static/chunks/pages/404-91fde565f4c618b9.js'],
    '/500': [s, 'static/chunks/pages/500-9f9e08f576942157.js'],
    '/_error': [s, 'static/chunks/pages/_error-014b8eb651536e88.js'],
    sortedPages: ['/', '/404', '/500', '/_app', '/_error'],
  };
})(0, 'static/chunks/47-091e89f1d34ae62c.js', 0, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
