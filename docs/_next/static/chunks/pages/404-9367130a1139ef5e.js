(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [336],
  {
    6776: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return t(6889);
        },
      ]);
    },
    6889: (e, s, t) => {
      'use strict';
      t.r(s), t.d(s, { NotFoundPage: () => c, default: () => l });
      var n = t(5105),
        r = t(6673);
      let c = () => (0, n.jsx)(r.L, { code: 404, title: 'Not Found' }),
        l = c;
    },
    6673: (e, s, t) => {
      'use strict';
      t.d(s, { L: () => a });
      var n = t(5105),
        r = t(1028),
        c = t.n(r),
        l = t(2190),
        i = t.n(l);
      let a = (e) => {
        let { code: s = 500, title: t = 'Error' } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(c(), {
              children: (0, n.jsxs)('title', { children: ['HIEU: ', t] }),
            }),
            (0, n.jsx)('div', {
              className: 'flex h-screen w-screen items-center justify-center',
              children: (0, n.jsxs)('div', {
                className: 'py-8 text-center',
                children: [
                  (0, n.jsx)('h2', { className: 'mb-4 text-9xl', children: s }),
                  (0, n.jsx)('p', {
                    className: 'mb-4 text-2xl uppercase',
                    children: t,
                  }),
                  (0, n.jsx)('p', {
                    children: (0, n.jsx)(i(), {
                      href: '/',
                      children: (0, n.jsx)('button', {
                        className: 'btn',
                        type: 'button',
                        children: 'Back to Home',
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [190, 636, 593, 792], () => s(6776)), (_N_E = e.O());
  },
]);
