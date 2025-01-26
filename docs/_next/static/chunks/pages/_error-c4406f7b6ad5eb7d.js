(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [731],
  {
    8778: (e, r, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return s(2774);
        },
      ]);
    },
    2774: (e, r, s) => {
      'use strict';
      s.r(r), s.d(r, { ErrorPage: () => c, default: () => l });
      var t = s(5105),
        n = s(6673);
      let c = () => (0, t.jsx)(n.L, { code: 500, title: 'Error' }),
        l = c;
    },
    6673: (e, r, s) => {
      'use strict';
      s.d(r, { L: () => a });
      var t = s(5105),
        n = s(1028),
        c = s.n(n),
        l = s(2190),
        i = s.n(l);
      let a = (e) => {
        let { code: r = 500, title: s = 'Error' } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(c(), {
              children: (0, t.jsxs)('title', { children: ['HIEU: ', s] }),
            }),
            (0, t.jsx)('div', {
              className: 'flex h-screen w-screen items-center justify-center',
              children: (0, t.jsxs)('div', {
                className: 'py-8 text-center',
                children: [
                  (0, t.jsx)('h2', { className: 'mb-4 text-9xl', children: r }),
                  (0, t.jsx)('p', {
                    className: 'mb-4 text-2xl uppercase',
                    children: s,
                  }),
                  (0, t.jsx)('p', {
                    children: (0, t.jsx)(i(), {
                      href: '/',
                      children: (0, t.jsx)('button', {
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
    var r = (r) => e((e.s = r));
    e.O(0, [190, 636, 593, 792], () => r(8778)), (_N_E = e.O());
  },
]);
