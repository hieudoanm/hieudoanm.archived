(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [731],
  {
    2755: (e, r, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return s(7183);
        },
      ]);
    },
    7183: (e, r, s) => {
      'use strict';
      s.r(r), s.d(r, { ErrorPage: () => n, default: () => c });
      var t = s(5105),
        l = s(3535);
      let n = () => (0, t.jsx)(l.L, { code: 500, title: 'Error' }),
        c = n;
    },
    3535: (e, r, s) => {
      'use strict';
      s.d(r, { L: () => a });
      var t = s(5105),
        l = s(1517),
        n = s.n(l),
        c = s(3047),
        i = s.n(c);
      let a = (e) => {
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
                  (0, t.jsx)(i(), {
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
    e.O(0, [47, 636, 593, 792], () => r(2755)), (_N_E = e.O());
  },
]);
