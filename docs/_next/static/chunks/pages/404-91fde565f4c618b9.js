(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [336],
  {
    9361: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return t(8382);
        },
      ]);
    },
    8382: (e, s, t) => {
      'use strict';
      t.r(s), t.d(s, { NotFoundPage: () => r, default: () => c });
      var l = t(5105),
        n = t(3535);
      let r = () => (0, l.jsx)(n.L, { code: 404, title: 'Not Found' }),
        c = r;
    },
    3535: (e, s, t) => {
      'use strict';
      t.d(s, { L: () => i });
      var l = t(5105),
        n = t(1517),
        r = t.n(n),
        c = t(3047),
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
    e.O(0, [47, 636, 593, 792], () => s(9361)), (_N_E = e.O());
  },
]);
