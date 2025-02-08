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
      'static/chunks/ddb80a4a-f2359eaa1a3139b6.js',
      s,
      'static/chunks/pages/index-bf9c62199eadc1d3.js',
    ],
    '/404': [s, 'static/chunks/pages/404-4b2bc0d0f3bcf541.js'],
    '/500': [s, 'static/chunks/pages/500-41c54e9f9697bfbc.js'],
    '/_error': [s, 'static/chunks/pages/_error-8fca3f262a6627ec.js'],
    sortedPages: ['/', '/404', '/500', '/_app', '/_error'],
  };
})(0, 'static/chunks/368-e1de5905b701242e.js', 0, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
