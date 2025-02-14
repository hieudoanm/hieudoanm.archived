(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [421],
  {
    7473: (e, r, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/500',
        function () {
          return s(1343);
        },
      ]);
    },
    1343: (e, r, s) => {
      'use strict';
      s.r(r), s.d(r, { InternalServerErrorPage: () => n, default: () => c });
      var t = s(5105),
        l = s(3535);
      let n = () =>
          (0, t.jsx)(l.L, { code: 500, title: 'Internal Server Error' }),
        c = n;
    },
    3535: (e, r, s) => {
      'use strict';
      s.d(r, { L: () => i });
      var t = s(5105),
        l = s(1517),
        n = s.n(l),
        c = s(3047),
        a = s.n(c);
      let i = (e) => {
        let { code: r = 500, title: s = 'Error' } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n(), {
              children: (0, t.jsxs)('title', { children: ['HIEU DOAN: ', s] }),
            }),
            (0, t.jsx)('div', {
              className: 'flex h-screen w-screen items-center justify-center',
              children: (0, t.jsxs)('div', {
                className: 'flex flex-col gap-y-2',
                children: [
                  (0, t.jsx)('h2', { className: 'text-9xl', children: r }),
                  (0, t.jsx)(a(), {
                    href: '/',
                    children: (0, t.jsx)('button', {
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
    var r = (r) => e((e.s = r));
    e.O(0, [47, 636, 593, 792], () => r(7473)), (_N_E = e.O());
  },
]);
