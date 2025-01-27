(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [421],
  {
    7492: (e, r, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/500',
        function () {
          return s(292);
        },
      ]);
    },
    292: (e, r, s) => {
      'use strict';
      s.r(r), s.d(r, { InternalServerErrorPage: () => c, default: () => l });
      var t = s(5105),
        n = s(4727);
      let c = () =>
          (0, t.jsx)(n.L, { code: 500, title: 'Internal Server Error' }),
        l = c;
    },
    4727: (e, r, s) => {
      'use strict';
      s.d(r, { L: () => i });
      var t = s(5105),
        n = s(832),
        c = s.n(n),
        l = s(9594),
        a = s.n(l);
      let i = (e) => {
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
                    children: (0, t.jsx)(a(), {
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
    e.O(0, [594, 636, 593, 792], () => r(7492)), (_N_E = e.O());
  },
]);
