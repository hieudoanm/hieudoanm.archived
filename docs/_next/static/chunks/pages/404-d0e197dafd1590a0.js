(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [336],
  {
    604: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return t(3429);
        },
      ]);
    },
    3429: (e, s, t) => {
      'use strict';
      t.r(s), t.d(s, { NotFoundPage: () => r, default: () => c });
      var l = t(5105),
        n = t(4727);
      let r = () => (0, l.jsx)(n.L, { code: 404, title: 'Not Found' }),
        c = r;
    },
    4727: (e, s, t) => {
      'use strict';
      t.d(s, { L: () => i });
      var l = t(5105),
        n = t(832),
        r = t.n(n),
        c = t(9594),
        d = t.n(c);
      let i = (e) => {
        let { code: s = 500, title: t = 'Error' } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r(), {
              children: (0, l.jsxs)('title', { children: ['HIEU DOAN: ', t] }),
            }),
            (0, l.jsx)('div', {
              className: 'flex h-screen w-screen items-center justify-center',
              children: (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-2',
                children: [
                  (0, l.jsx)('h2', { className: 'text-9xl', children: s }),
                  (0, l.jsx)(d(), {
                    href: '/',
                    children: (0, l.jsx)('button', {
                      className: 'w-full rounded-full bg-black py-2 text-white',
                      type: 'button',
                      children: 'Back to Home',
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
    e.O(0, [594, 636, 593, 792], () => s(604)), (_N_E = e.O());
  },
]);
