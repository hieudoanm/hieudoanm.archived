(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    5704: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 });
      let {
          Decimal: n,
          objectEnumValues: i,
          makeStrictEnum: s,
          Public: a,
          getRuntime: o,
          skip: u,
        } = r(6277),
        l = {};
      (t.Prisma = l),
        (t.$Enums = {}),
        (l.prismaVersion = {
          client: '6.3.0',
          engine: 'acc0b9dd43eb689cbd20c9470515d719db10d0b0',
        }),
        (l.PrismaClientKnownRequestError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.PrismaClientUnknownRequestError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.PrismaClientRustPanicError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.PrismaClientInitializationError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.PrismaClientValidationError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.Decimal = n),
        (l.sql = () => {
          let e = o().prettyName;
          throw Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.empty = () => {
          let e = o().prettyName;
          throw Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.join = () => {
          let e = o().prettyName;
          throw Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.raw = () => {
          let e = o().prettyName;
          throw Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.validator = a.validator),
        (l.getExtensionContext = () => {
          let e = o().prettyName;
          throw Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.defineExtension = () => {
          let e = o().prettyName;
          throw Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.DbNull = i.instances.DbNull),
        (l.JsonNull = i.instances.JsonNull),
        (l.AnyNull = i.instances.AnyNull),
        (l.NullTypes = {
          DbNull: i.classes.DbNull,
          JsonNull: i.classes.JsonNull,
          AnyNull: i.classes.AnyNull,
        }),
        (t.Prisma.TransactionIsolationLevel = s({
          ReadUncommitted: 'ReadUncommitted',
          ReadCommitted: 'ReadCommitted',
          RepeatableRead: 'RepeatableRead',
          Serializable: 'Serializable',
        })),
        (t.Prisma.PlayerScalarFieldEnum = {
          id: 'id',
          username: 'username',
          avatar: 'avatar',
          name: 'name',
          title: 'title',
          country: 'country',
          countryCode: 'countryCode',
          status: 'status',
          league: 'league',
          url: 'url',
          twitchUrl: 'twitchUrl',
          isStreamer: 'isStreamer',
          verified: 'verified',
          lastOnline: 'lastOnline',
          joined: 'joined',
          rapidRatingBest: 'rapidRatingBest',
          rapidRatingLast: 'rapidRatingLast',
          rapidRatingDeviation: 'rapidRatingDeviation',
          rapidRecordWin: 'rapidRecordWin',
          rapidRecordDraw: 'rapidRecordDraw',
          rapidRecordLoss: 'rapidRecordLoss',
          blitzRatingBest: 'blitzRatingBest',
          blitzRatingLast: 'blitzRatingLast',
          blitzRatingDeviation: 'blitzRatingDeviation',
          blitzRecordWin: 'blitzRecordWin',
          blitzRecordDraw: 'blitzRecordDraw',
          blitzRecordLoss: 'blitzRecordLoss',
          bulletRatingBest: 'bulletRatingBest',
          bulletRatingLast: 'bulletRatingLast',
          bulletRatingDeviation: 'bulletRatingDeviation',
          bulletRecordWin: 'bulletRecordWin',
          bulletRecordDraw: 'bulletRecordDraw',
          bulletRecordLoss: 'bulletRecordLoss',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.GameScalarFieldEnum = {
          uuid: 'uuid',
          url: 'url',
          pgn: 'pgn',
          timeClass: 'timeClass',
          timeControl: 'timeControl',
          endTime: 'endTime',
          rated: 'rated',
          initialSetup: 'initialSetup',
          fen: 'fen',
          tcn: 'tcn',
          rules: 'rules',
          whiteAccuracy: 'whiteAccuracy',
          whiteRating: 'whiteRating',
          whiteResult: 'whiteResult',
          whiteUsername: 'whiteUsername',
          whiteKing: 'whiteKing',
          whiteQueen: 'whiteQueen',
          whiteRook: 'whiteRook',
          whiteBishop: 'whiteBishop',
          whiteKnight: 'whiteKnight',
          whitePawn: 'whitePawn',
          whiteCastling: 'whiteCastling',
          blackAccuracy: 'blackAccuracy',
          blackRating: 'blackRating',
          blackResult: 'blackResult',
          blackUsername: 'blackUsername',
          blackKing: 'blackKing',
          blackQueen: 'blackQueen',
          blackRook: 'blackRook',
          blackBishop: 'blackBishop',
          blackKnight: 'blackKnight',
          blackPawn: 'blackPawn',
          blackCastling: 'blackCastling',
          opening: 'opening',
          openingName: 'openingName',
          endPhrase: 'endPhrase',
          termination: 'termination',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.OpeningScalarFieldEnum = {
          eco: 'eco',
          name: 'name',
          fen: 'fen',
          pgn: 'pgn',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.CountryScalarFieldEnum = {
          cca2: 'cca2',
          cca3: 'cca3',
          name: 'name',
          common: 'common',
          official: 'official',
          flag: 'flag',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.SortOrder = { asc: 'asc', desc: 'desc' }),
        (t.Prisma.QueryMode = {
          default: 'default',
          insensitive: 'insensitive',
        }),
        (t.Title = t.$Enums.Title =
          {
            GM: 'GM',
            IM: 'IM',
            FM: 'FM',
            CM: 'CM',
            NM: 'NM',
            WGM: 'WGM',
            WIM: 'WIM',
            WFM: 'WFM',
            WCM: 'WCM',
            WNM: 'WNM',
            AGM: 'AGM',
            AIM: 'AIM',
            AFM: 'AFM',
            ACM: 'ACM',
          }),
        (t.TimeClass = t.$Enums.TimeClass =
          {
            daily: 'daily',
            classical: 'classical',
            rapid: 'rapid',
            blitz: 'blitz',
            bullet: 'bullet',
          }),
        (t.Variant = t.$Enums.Variant =
          {
            bughouse: 'bughouse',
            chess: 'chess',
            chess960: 'chess960',
            crazyhouse: 'crazyhouse',
            kingofthehill: 'kingofthehill',
            oddschess: 'oddschess',
            threecheck: 'threecheck',
          }),
        (t.Result = t.$Enums.Result =
          {
            win: 'win',
            fiftymove: 'fiftymove',
            agreed: 'agreed',
            insufficient: 'insufficient',
            repetition: 'repetition',
            stalemate: 'stalemate',
            timevsinsufficient: 'timevsinsufficient',
            checkmated: 'checkmated',
            resigned: 'resigned',
            timeout: 'timeout',
            abandoned: 'abandoned',
            bughousepartnerlose: 'bughousepartnerlose',
            threecheck: 'threecheck',
            kingofthehill: 'kingofthehill',
          }),
        (t.Phrase = t.$Enums.Phrase =
          { opening: 'opening', middlegame: 'middlegame', endgame: 'endgame' }),
        (t.Prisma.ModelName = {
          Player: 'Player',
          Game: 'Game',
          Opening: 'Opening',
          Country: 'Country',
        });
      class c {
        constructor() {
          return new Proxy(this, {
            get(e, t) {
              let r = o();
              throw Error(
                (r.isEdge
                  ? `PrismaClient is not configured to run in ${r.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`
                  : 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' +
                    r.prettyName +
                    '`).') +
                  `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`
              );
            },
          });
        }
      }
      (t.PrismaClient = c), Object.assign(t, l);
    },
    4850: (e, t, r) => {
      let n = r(5704);
      e.exports = n;
    },
    6277: (e) => {
      'use strict';
      var t = Object.defineProperty,
        r = Object.getOwnPropertyDescriptor,
        n = Object.getOwnPropertyNames,
        i = Object.prototype.hasOwnProperty,
        s = (e, r) => {
          for (var n in r) t(e, n, { get: r[n], enumerable: !0 });
        },
        a = {};
      s(a, {
        Decimal: () => e0,
        Public: () => o,
        getRuntime: () => _,
        makeStrictEnum: () => b,
        objectEnumValues: () => g,
      }),
        (e.exports = ((e, s, a, o) => {
          if ((s && 'object' == typeof s) || 'function' == typeof s)
            for (let u of n(s))
              i.call(e, u) ||
                u === a ||
                t(e, u, {
                  get: () => s[u],
                  enumerable: !(o = r(s, u)) || o.enumerable,
                });
          return e;
        })(t({}, '__esModule', { value: !0 }), a));
      var o = {};
      function u(...e) {
        return (e) => e;
      }
      s(o, { validator: () => u });
      var l = Symbol(),
        c = new WeakMap(),
        h = class {
          constructor(e) {
            e === l
              ? c.set(this, 'Prisma.'.concat(this._getName()))
              : c.set(
                  this,
                  'new Prisma.'
                    .concat(this._getNamespace(), '.')
                    .concat(this._getName(), '()')
                );
          }
          _getName() {
            return this.constructor.name;
          }
          toString() {
            return c.get(this);
          }
        },
        d = class extends h {
          _getNamespace() {
            return 'NullTypes';
          }
        },
        f = class extends d {};
      y(f, 'DbNull');
      var p = class extends d {};
      y(p, 'JsonNull');
      var m = class extends d {};
      y(m, 'AnyNull');
      var g = {
        classes: { DbNull: f, JsonNull: p, AnyNull: m },
        instances: { DbNull: new f(l), JsonNull: new p(l), AnyNull: new m(l) },
      };
      function y(e, t) {
        Object.defineProperty(e, 'name', { value: t, configurable: !0 });
      }
      var v = new Set([
        'toJSON',
        '$$typeof',
        'asymmetricMatch',
        Symbol.iterator,
        Symbol.toStringTag,
        Symbol.isConcatSpreadable,
        Symbol.toPrimitive,
      ]);
      function b(e) {
        return new Proxy(e, {
          get(e, t) {
            if (t in e) return e[t];
            if (!v.has(t))
              throw TypeError('Invalid enum value: '.concat(String(t)));
          },
        });
      }
      var w = {
        node: 'Node.js',
        workerd: 'Cloudflare Workers',
        deno: 'Deno and Deno Deploy',
        netlify: 'Netlify Edge Functions',
        'edge-light':
          'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)',
      };
      function _() {
        var e, t, r;
        let n =
          'object' == typeof Netlify
            ? 'netlify'
            : 'string' == typeof EdgeRuntime
              ? 'edge-light'
              : (null == (e = globalThis.navigator) ? void 0 : e.userAgent) ===
                  'Cloudflare-Workers'
                ? 'workerd'
                : globalThis.Deno
                  ? 'deno'
                  : globalThis.__lagon__
                    ? 'lagon'
                    : (null ==
                        (r =
                          null == (t = globalThis.process) ? void 0 : t.release)
                          ? void 0
                          : r.name) === 'node'
                      ? 'node'
                      : globalThis.Bun
                        ? 'bun'
                        : globalThis.fastly
                          ? 'fastly'
                          : 'unknown';
        return {
          id: n,
          prettyName: w[n] || n,
          isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(n),
        };
      }
      var E,
        S,
        O = '0123456789abcdef',
        R =
          '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
        C =
          '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
        x = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        N = !0,
        k = '[DecimalError] ',
        A = k + 'Invalid argument: ',
        T = k + 'Precision limit exceeded',
        P = k + 'crypto unavailable',
        I = '[object Decimal]',
        D = Math.floor,
        M = Math.pow,
        j = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        q = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        U = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        F = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        L = R.length - 1,
        Q = C.length - 1,
        B = { toStringTag: I };
      function Z(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          s = '',
          a = e[0];
        if (i > 0) {
          for (s += a, t = 1; t < i; t++)
            (r = 7 - (n = e[t] + '').length) && (s += ee(r)), (s += n);
          (r = 7 - (n = (a = e[t]) + '').length) && (s += ee(r));
        } else if (0 === a) return '0';
        for (; a % 10 == 0; ) a /= 10;
        return s + a;
      }
      function z(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(A + e);
      }
      function $(e, t, r, n) {
        var i, s, a, o;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (s = M(10, 7 - t)),
          (o = e[i] % s | 0),
          null == n
            ? t < 3
              ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                (a =
                  (r < 4 && 99999 == o) ||
                  (r > 3 && 49999 == o) ||
                  5e4 == o ||
                  0 == o))
              : (a =
                  (((r < 4 && o + 1 == s) || (r > 3 && o + 1 == s / 2)) &&
                    ((e[i + 1] / s / 100) | 0) == M(10, t - 2) - 1) ||
                  ((o == s / 2 || 0 == o) && ((e[i + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t
                  ? (o = (o / 1e3) | 0)
                  : 1 == t
                    ? (o = (o / 100) | 0)
                    : 2 == t && (o = (o / 10) | 0),
                (a = ((n || r < 4) && 9999 == o) || (!n && r > 3 && 4999 == o)))
              : (a =
                  (((n || r < 4) && o + 1 == s) ||
                    (!n && r > 3 && o + 1 == s / 2)) &&
                  ((e[i + 1] / s / 1e3) | 0) == M(10, t - 3) - 1),
          a
        );
      }
      function H(e, t, r) {
        for (var n, i, s = [0], a = 0, o = e.length; a < o; ) {
          for (i = s.length; i--; ) s[i] *= t;
          for (s[0] += O.indexOf(e.charAt(a++)), n = 0; n < s.length; n++)
            s[n] > r - 1 &&
              (void 0 === s[n + 1] && (s[n + 1] = 0),
              (s[n + 1] += (s[n] / r) | 0),
              (s[n] %= r));
        }
        return s.reverse();
      }
      (B.absoluteValue = B.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), K(e);
        }),
        (B.ceil = function () {
          return K(new this.constructor(this), this.e + 1, 2);
        }),
        (B.clampedTo = B.clamp =
          function (e, t) {
            var r = this.constructor;
            if (((e = new r(e)), (t = new r(t)), !e.s || !t.s))
              return new r(NaN);
            if (e.gt(t)) throw Error(A + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new r(this);
          }),
        (B.comparedTo = B.cmp =
          function (e) {
            var t,
              r,
              n,
              i,
              s = this.d,
              a = (e = new this.constructor(e)).d,
              o = this.s,
              u = e.s;
            if (!s || !a)
              return o && u
                ? o !== u
                  ? o
                  : s === a
                    ? 0
                    : !s ^ (o < 0)
                      ? 1
                      : -1
                : NaN;
            if (!s[0] || !a[0]) return s[0] ? o : a[0] ? -u : 0;
            if (o !== u) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (
              n = s.length, i = a.length, t = 0, r = n < i ? n : i;
              t < r;
              ++t
            )
              if (s[t] !== a[t]) return (s[t] > a[t]) ^ (o < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (o < 0) ? 1 : -1;
          }),
        (B.cosine = B.cos =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.d
              ? r.d[0]
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r, n, i;
                    if (t.isZero()) return t;
                    (n = t.d.length) < 32
                      ? (i = (1 / el(4, (r = Math.ceil(n / 3)))).toString())
                      : ((r = 16), (i = '2.3283064365386962890625e-10')),
                      (e.precision += r),
                      (t = eu(e, 1, t.times(i), new e(1)));
                    for (var s = r; s--; ) {
                      var a = t.times(t);
                      t = a.times(a).minus(a).times(8).plus(1);
                    }
                    return (e.precision -= r), t;
                  })(n, ec(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  K(2 == S || 3 == S ? r.neg() : r, e, t, !0))
                : new n(1)
              : new n(NaN);
          }),
        (B.cubeRoot = B.cbrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l,
              c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
              N = !1,
                (s = this.s * M(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0
                  ? (n = new c(s.toString()))
                  : ((r = Z(this.d)),
                    (s = ((e = this.e) - r.length + 1) % 3) &&
                      (r += 1 == s || -2 == s ? '0' : '00'),
                    (s = M(r, 1 / 3)),
                    (e = D((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((n = new c(
                      (r =
                        s == 1 / 0
                          ? '5e' + e
                          : (r = s.toExponential()).slice(
                              0,
                              r.indexOf('e') + 1
                            ) + e)
                    )).s = this.s)),
                a = (e = c.precision) + 3;
              ;

            )
              if (
                ((n = W(
                  (l = (u = (o = n).times(o).times(o)).plus(this))
                    .plus(this)
                    .times(o),
                  l.plus(u),
                  a + 2,
                  1
                )),
                Z(o.d).slice(0, a) === (r = Z(n.d)).slice(0, a))
              ) {
                if (
                  '9999' != (r = r.slice(a - 3, a + 1)) &&
                  (i || '4999' != r)
                ) {
                  (+r && (+r.slice(1) || '5' != r.charAt(0))) ||
                    (K(n, e + 1, 1), (t = !n.times(n).times(n).eq(this)));
                  break;
                }
                if (!i && (K(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                  n = o;
                  break;
                }
                (a += 4), (i = 1);
              }
            return (N = !0), K(n, e, c.rounding, t);
          }),
        (B.decimalPlaces = B.dp =
          function () {
            var e,
              t = this.d,
              r = NaN;
            if (t) {
              if (((r = ((e = t.length - 1) - D(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) r--;
              r < 0 && (r = 0);
            }
            return r;
          }),
        (B.dividedBy = B.div =
          function (e) {
            return W(this, new this.constructor(e));
          }),
        (B.dividedToIntegerBy = B.divToInt =
          function (e) {
            var t = this.constructor;
            return K(W(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (B.equals = B.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (B.floor = function () {
          return K(new this.constructor(this), this.e + 1, 3);
        }),
        (B.greaterThan = B.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (B.greaterThanOrEqualTo = B.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (B.hyperbolicCosine = B.cosh =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s = this,
              a = s.constructor,
              o = new a(1);
            if (!s.isFinite()) return new a(s.s ? 1 / 0 : NaN);
            if (s.isZero()) return o;
            (r = a.precision),
              (n = a.rounding),
              (a.precision = r + Math.max(s.e, s.sd()) + 4),
              (a.rounding = 1),
              (i = s.d.length) < 32
                ? (t = (1 / el(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = '2.3283064365386962890625e-10')),
              (s = eu(a, 1, s.times(t), new a(1), !0));
            for (var u, l = e, c = new a(8); l--; )
              (u = s.times(s)), (s = o.minus(u.times(c.minus(u.times(c)))));
            return K(s, (a.precision = r), (a.rounding = n), !0);
          }),
        (B.hyperbolicSine = B.sinh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            if (!i.isFinite() || i.isZero()) return new s(i);
            if (
              ((t = s.precision),
              (r = s.rounding),
              (s.precision = t + Math.max(i.e, i.sd()) + 4),
              (s.rounding = 1),
              (n = i.d.length) < 3)
            )
              i = eu(s, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e),
                (i = eu(s, 2, (i = i.times(1 / el(5, e))), i, !0));
              for (var a, o = new s(5), u = new s(16), l = new s(20); e--; )
                (a = i.times(i)),
                  (i = i.times(o.plus(a.times(u.times(a).plus(l)))));
            }
            return (s.precision = t), (s.rounding = r), K(i, t, r, !0);
          }),
        (B.hyperbolicTangent = B.tanh =
          function () {
            var e,
              t,
              r = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new r(this)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 7),
                  (r.rounding = 1),
                  W(
                    this.sinh(),
                    this.cosh(),
                    (r.precision = e),
                    (r.rounding = t)
                  ))
              : new r(this.s);
          }),
        (B.inverseCosine = B.acos =
          function () {
            var e,
              t = this,
              r = t.constructor,
              n = t.abs().cmp(1),
              i = r.precision,
              s = r.rounding;
            return -1 !== n
              ? 0 === n
                ? t.isNeg()
                  ? Y(r, i, s)
                  : new r(0)
                : new r(NaN)
              : t.isZero()
                ? Y(r, i + 4, s).times(0.5)
                : ((r.precision = i + 6),
                  (r.rounding = 1),
                  (t = t.asin()),
                  (e = Y(r, i + 4, s).times(0.5)),
                  (r.precision = i),
                  (r.rounding = s),
                  e.minus(t));
          }),
        (B.inverseHyperbolicCosine = B.acosh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.lte(1)
              ? new n(r.eq(1) ? 0 : NaN)
              : r.isFinite()
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
                  (n.rounding = 1),
                  (N = !1),
                  (r = r.times(r).minus(1).sqrt().plus(r)),
                  (N = !0),
                  (n.precision = e),
                  (n.rounding = t),
                  r.ln())
                : new n(r);
          }),
        (B.inverseHyperbolicSine = B.asinh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return !r.isFinite() || r.isZero()
              ? new n(r)
              : ((e = n.precision),
                (t = n.rounding),
                (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
                (n.rounding = 1),
                (N = !1),
                (r = r.times(r).plus(1).sqrt().plus(r)),
                (N = !0),
                (n.precision = e),
                (n.rounding = t),
                r.ln());
          }),
        (B.inverseHyperbolicTangent = B.atanh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                : ((e = s.precision),
                  (t = s.rounding),
                  Math.max((n = i.sd()), e) < -(2 * i.e) - 1
                    ? K(new s(i), e, t, !0)
                    : ((s.precision = r = n - i.e),
                      (i = W(i.plus(1), new s(1).minus(i), r + e, 1)),
                      (s.precision = e + 4),
                      (s.rounding = 1),
                      (i = i.ln()),
                      (s.precision = e),
                      (s.rounding = t),
                      i.times(0.5)))
              : new s(NaN);
          }),
        (B.inverseSine = B.asin =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            return i.isZero()
              ? new s(i)
              : ((t = i.abs().cmp(1)),
                (r = s.precision),
                (n = s.rounding),
                -1 !== t
                  ? 0 === t
                    ? (((e = Y(s, r + 4, n).times(0.5)).s = i.s), e)
                    : new s(NaN)
                  : ((s.precision = r + 6),
                    (s.rounding = 1),
                    (i = i
                      .div(new s(1).minus(i.times(i)).sqrt().plus(1))
                      .atan()),
                    (s.precision = r),
                    (s.rounding = n),
                    i.times(2)));
          }),
        (B.inverseTangent = B.atan =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l = this,
              c = l.constructor,
              h = c.precision,
              d = c.rounding;
            if (l.isFinite()) {
              if (l.isZero()) return new c(l);
              if (l.abs().eq(1) && h + 4 <= Q)
                return ((a = Y(c, h + 4, d).times(0.25)).s = l.s), a;
            } else {
              if (!l.s) return new c(NaN);
              if (h + 4 <= Q)
                return ((a = Y(c, h + 4, d).times(0.5)).s = l.s), a;
            }
            for (
              c.precision = o = h + 10,
                c.rounding = 1,
                e = r = Math.min(28, (o / 7 + 2) | 0);
              e;
              --e
            )
              l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (
              N = !1,
                t = Math.ceil(o / 7),
                n = 1,
                u = l.times(l),
                a = new c(l),
                i = l;
              -1 !== e;

            )
              if (
                ((i = i.times(u)),
                (s = a.minus(i.div((n += 2)))),
                (i = i.times(u)),
                void 0 !== (a = s.plus(i.div((n += 2)))).d[t])
              )
                for (e = t; a.d[e] === s.d[e] && e--; );
            return (
              r && (a = a.times(2 << (r - 1))),
              (N = !0),
              K(a, (c.precision = h), (c.rounding = d), !0)
            );
          }),
        (B.isFinite = function () {
          return !!this.d;
        }),
        (B.isInteger = B.isInt =
          function () {
            return !!this.d && D(this.e / 7) > this.d.length - 2;
          }),
        (B.isNaN = function () {
          return !this.s;
        }),
        (B.isNegative = B.isNeg =
          function () {
            return this.s < 0;
          }),
        (B.isPositive = B.isPos =
          function () {
            return this.s > 0;
          }),
        (B.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (B.lessThan = B.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (B.lessThanOrEqualTo = B.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (B.logarithm = B.log =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u = this.constructor,
              l = u.precision,
              c = u.rounding;
            if (null == e) (e = new u(10)), (t = !0);
            else {
              if (((r = (e = new u(e)).d), e.s < 0 || !r || !r[0] || e.eq(1)))
                return new u(NaN);
              t = e.eq(10);
            }
            if (((r = this.d), this.s < 0 || !r || !r[0] || this.eq(1)))
              return new u(
                r && !r[0] ? -1 / 0 : 1 != this.s ? NaN : r ? 0 : 1 / 0
              );
            if (t) {
              if (r.length > 1) i = !0;
              else {
                for (n = r[0]; n % 10 == 0; ) n /= 10;
                i = 1 !== n;
              }
            }
            if (
              ((N = !1),
              $(
                (o = W(
                  es(this, (a = l + 5)),
                  t ? J(u, a + 10) : es(e, a),
                  a,
                  1
                )).d,
                (n = l),
                c
              ))
            )
              do
                if (
                  ((a += 10),
                  (o = W(es(this, a), t ? J(u, a + 10) : es(e, a), a, 1)),
                  !i)
                ) {
                  +Z(o.d).slice(n + 1, n + 15) + 1 == 1e14 &&
                    (o = K(o, l + 1, 0));
                  break;
                }
              while ($(o.d, (n += 10), c));
            return (N = !0), K(o, l, c);
          }),
        (B.minus = B.sub =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l,
              c,
              h,
              d,
              f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new f(e.d || this.s !== e.s ? this : NaN))
                  : (e = new f(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((l = this.d),
              (d = e.d),
              (o = f.precision),
              (u = f.rounding),
              !l[0] || !d[0])
            ) {
              if (d[0]) e.s = -e.s;
              else {
                if (!l[0]) return new f(3 === u ? -0 : 0);
                e = new f(this);
              }
              return N ? K(e, o, u) : e;
            }
            if (
              ((r = D(e.e / 7)),
              (c = D(this.e / 7)),
              (l = l.slice()),
              (s = c - r))
            ) {
              for (
                (h = s < 0)
                  ? ((t = l), (s = -s), (a = d.length))
                  : ((t = d), (r = c), (a = l.length)),
                  s > (n = Math.max(Math.ceil(o / 7), a) + 2) &&
                    ((s = n), (t.length = 1)),
                  t.reverse(),
                  n = s;
                n--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (h = (n = l.length) < (a = d.length)) && (a = n), n = 0;
                n < a;
                n++
              )
                if (l[n] != d[n]) {
                  h = l[n] < d[n];
                  break;
                }
              s = 0;
            }
            for (
              h && ((t = l), (l = d), (d = t), (e.s = -e.s)),
                a = l.length,
                n = d.length - a;
              n > 0;
              --n
            )
              l[a++] = 0;
            for (n = d.length; n > s; ) {
              if (l[--n] < d[n]) {
                for (i = n; i && 0 === l[--i]; ) l[i] = 1e7 - 1;
                --l[i], (l[n] += 1e7);
              }
              l[n] -= d[n];
            }
            for (; 0 === l[--a]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --r;
            return l[0]
              ? ((e.d = l), (e.e = G(l, r)), N ? K(e, o, u) : e)
              : new f(3 === u ? -0 : 0);
          }),
        (B.modulo = B.mod =
          function (e) {
            var t,
              r = this.constructor;
            return (
              (e = new r(e)),
              this.d && e.s && (!e.d || e.d[0])
                ? e.d && (!this.d || this.d[0])
                  ? ((N = !1),
                    9 == r.modulo
                      ? ((t = W(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                      : (t = W(this, e, 0, r.modulo, 1)),
                    (t = t.times(e)),
                    (N = !0),
                    this.minus(t))
                  : K(new r(this), r.precision, r.rounding)
                : new r(NaN)
            );
          }),
        (B.naturalExponential = B.exp =
          function () {
            return ei(this);
          }),
        (B.naturalLogarithm = B.ln =
          function () {
            return es(this);
          }),
        (B.negated = B.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), K(e);
          }),
        (B.plus = B.add =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l,
              c,
              h = this.constructor;
            if (((e = new h(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new h(e.d || this.s === e.s ? this : NaN))
                  : (e = new h(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((l = this.d),
              (c = e.d),
              (o = h.precision),
              (u = h.rounding),
              !l[0] || !c[0])
            )
              return c[0] || (e = new h(this)), N ? K(e, o, u) : e;
            if (
              ((s = D(this.e / 7)),
              (n = D(e.e / 7)),
              (l = l.slice()),
              (i = s - n))
            ) {
              for (
                i < 0
                  ? ((r = l), (i = -i), (a = c.length))
                  : ((r = c), (n = s), (a = l.length)),
                  i > (a = (s = Math.ceil(o / 7)) > a ? s + 1 : a + 1) &&
                    ((i = a), (r.length = 1)),
                  r.reverse();
                i--;

              )
                r.push(0);
              r.reverse();
            }
            for (
              (a = l.length) - (i = c.length) < 0 &&
                ((i = a), (r = c), (c = l), (l = r)),
                t = 0;
              i;

            )
              (t = ((l[--i] = l[i] + c[i] + t) / 1e7) | 0), (l[i] %= 1e7);
            for (t && (l.unshift(t), ++n), a = l.length; 0 == l[--a]; ) l.pop();
            return (e.d = l), (e.e = G(l, n)), N ? K(e, o, u) : e;
          }),
        (B.precision = B.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(A + e);
            return (
              this.d
                ? ((t = X(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = NaN),
              t
            );
          }),
        (B.round = function () {
          var e = this.constructor;
          return K(new e(this), this.e + 1, e.rounding);
        }),
        (B.sine = B.sin =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r,
                      n = t.d.length;
                    if (n < 3) return t.isZero() ? t : eu(e, 2, t, t);
                    (r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r),
                      (t = eu(e, 2, (t = t.times(1 / el(5, r))), t));
                    for (
                      var i, s = new e(5), a = new e(16), o = new e(20);
                      r--;

                    )
                      (i = t.times(t)),
                        (t = t.times(s.plus(i.times(a.times(i).minus(o)))));
                    return t;
                  })(n, ec(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  K(S > 2 ? r.neg() : r, e, t, !0))
              : new n(NaN);
          }),
        (B.squareRoot = B.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              a = this.d,
              o = this.e,
              u = this.s,
              l = this.constructor;
            if (1 !== u || !a || !a[0])
              return new l(
                !u || (u < 0 && (!a || a[0])) ? NaN : a ? this : 1 / 0
              );
            for (
              N = !1,
                0 == (u = Math.sqrt(+this)) || u == 1 / 0
                  ? (((t = Z(a)).length + o) % 2 == 0 && (t += '0'),
                    (u = Math.sqrt(t)),
                    (o = D((o + 1) / 2) - (o < 0 || o % 2)),
                    (n = new l(
                      (t =
                        u == 1 / 0
                          ? '5e' + o
                          : (t = u.toExponential()).slice(
                              0,
                              t.indexOf('e') + 1
                            ) + o)
                    )))
                  : (n = new l(u.toString())),
                r = (o = l.precision) + 3;
              ;

            )
              if (
                ((n = (s = n).plus(W(this, s, r + 2, 1)).times(0.5)),
                Z(s.d).slice(0, r) === (t = Z(n.d)).slice(0, r))
              ) {
                if (
                  '9999' != (t = t.slice(r - 3, r + 1)) &&
                  (i || '4999' != t)
                ) {
                  (+t && (+t.slice(1) || '5' != t.charAt(0))) ||
                    (K(n, o + 1, 1), (e = !n.times(n).eq(this)));
                  break;
                }
                if (!i && (K(s, o + 1, 0), s.times(s).eq(this))) {
                  n = s;
                  break;
                }
                (r += 4), (i = 1);
              }
            return (N = !0), K(n, o, l.rounding, e);
          }),
        (B.tangent = B.tan =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 10),
                  (n.rounding = 1),
                  ((r = r.sin()).s = 1),
                  (r = W(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
                  (n.precision = e),
                  (n.rounding = t),
                  K(2 == S || 4 == S ? r.neg() : r, e, t, !0))
              : new n(NaN);
          }),
        (B.times = B.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l,
              c = this.constructor,
              h = this.d,
              d = (e = new c(e)).d;
            if (((e.s *= this.s), !h || !h[0] || !d || !d[0]))
              return new c(
                e.s && (!h || h[0] || d) && (!d || d[0] || h)
                  ? h && d
                    ? 0 * e.s
                    : e.s / 0
                  : NaN
              );
            for (
              r = D(this.e / 7) + D(e.e / 7),
                (u = h.length) < (l = d.length) &&
                  ((s = h), (h = d), (d = s), (a = u), (u = l), (l = a)),
                s = [],
                n = a = u + l;
              n--;

            )
              s.push(0);
            for (n = l; --n >= 0; ) {
              for (t = 0, i = u + n; i > n; )
                (o = s[i] + d[n] * h[i - n - 1] + t),
                  (s[i--] = o % 1e7 | 0),
                  (t = (o / 1e7) | 0);
              s[i] = (s[i] + t) % 1e7 | 0;
            }
            for (; !s[--a]; ) s.pop();
            return (
              t ? ++r : s.shift(),
              (e.d = s),
              (e.e = G(s, r)),
              N ? K(e, c.precision, c.rounding) : e
            );
          }),
        (B.toBinary = function (e, t) {
          return eh(this, 2, e, t);
        }),
        (B.toDecimalPlaces = B.toDP =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return (
              (r = new n(r)),
              void 0 === e
                ? r
                : (z(e, 0, 1e9),
                  void 0 === t ? (t = n.rounding) : z(t, 0, 8),
                  K(r, e + r.e + 1, t))
            );
          }),
        (B.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = V(n, !0))
              : (z(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : z(t, 0, 8),
                (r = V((n = K(new i(n), e + 1, t)), !0, e + 1))),
            n.isNeg() && !n.isZero() ? '-' + r : r
          );
        }),
        (B.toFixed = function (e, t) {
          var r,
            n,
            i = this.constructor;
          return (
            void 0 === e
              ? (r = V(this))
              : (z(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : z(t, 0, 8),
                (r = V(
                  (n = K(new i(this), e + this.e + 1, t)),
                  !1,
                  e + n.e + 1
                ))),
            this.isNeg() && !this.isZero() ? '-' + r : r
          );
        }),
        (B.toFraction = function (e) {
          var t,
            r,
            n,
            i,
            s,
            a,
            o,
            u,
            l,
            c,
            h,
            d,
            f = this.d,
            p = this.constructor;
          if (!f) return new p(this);
          if (
            ((l = r = new p(1)),
            (n = u = new p(0)),
            (a = (s = (t = new p(n)).e = X(f) - this.e - 1) % 7),
            (t.d[0] = M(10, a < 0 ? 7 + a : a)),
            null == e)
          )
            e = s > 0 ? t : l;
          else {
            if (!(o = new p(e)).isInt() || o.lt(l)) throw Error(A + o);
            e = o.gt(t) ? (s > 0 ? t : l) : o;
          }
          for (
            N = !1,
              o = new p(Z(f)),
              c = p.precision,
              p.precision = s = 14 * f.length;
            (h = W(o, t, 0, 1, 1)), 1 != (i = r.plus(h.times(n))).cmp(e);

          )
            (r = n),
              (n = i),
              (i = l),
              (l = u.plus(h.times(i))),
              (u = i),
              (i = t),
              (t = o.minus(h.times(i))),
              (o = i);
          return (
            (i = W(e.minus(r), n, 0, 1, 1)),
            (u = u.plus(i.times(l))),
            (r = r.plus(i.times(n))),
            (u.s = l.s = this.s),
            (d =
              1 >
              W(l, n, s, 1)
                .minus(this)
                .abs()
                .cmp(W(u, r, s, 1).minus(this).abs())
                ? [l, n]
                : [u, r]),
            (p.precision = c),
            (N = !0),
            d
          );
        }),
        (B.toHexadecimal = B.toHex =
          function (e, t) {
            return eh(this, 16, e, t);
          }),
        (B.toNearest = function (e, t) {
          var r = this,
            n = r.constructor;
          if (((r = new n(r)), null == e)) {
            if (!r.d) return r;
            (e = new n(1)), (t = n.rounding);
          } else {
            if (
              ((e = new n(e)),
              void 0 === t ? (t = n.rounding) : z(t, 0, 8),
              !r.d)
            )
              return e.s ? r : e;
            if (!e.d) return e.s && (e.s = r.s), e;
          }
          return (
            e.d[0]
              ? ((N = !1), (r = W(r, e, 0, t, 1).times(e)), (N = !0), K(r))
              : ((e.s = r.s), (r = e)),
            r
          );
        }),
        (B.toNumber = function () {
          return +this;
        }),
        (B.toOctal = function (e, t) {
          return eh(this, 8, e, t);
        }),
        (B.toPower = B.pow =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o = this,
              u = o.constructor,
              l = +(e = new u(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new u(M(+o, l));
            if ((o = new u(o)).eq(1)) return o;
            if (((n = u.precision), (s = u.rounding), e.eq(1)))
              return K(o, n, s);
            if (
              (t = D(e.e / 7)) >= e.d.length - 1 &&
              (r = l < 0 ? -l : l) <= 0x1fffffffffffff
            )
              return (
                (i = et(u, o, r, n)), e.s < 0 ? new u(1).div(i) : K(i, n, s)
              );
            if ((a = o.s) < 0) {
              if (t < e.d.length - 1) return new u(NaN);
              if (
                (1 & e.d[t] || (a = 1),
                0 == o.e && 1 == o.d[0] && 1 == o.d.length)
              )
                return (o.s = a), o;
            }
            return (t =
              0 != (r = M(+o, l)) && isFinite(r)
                ? new u(r + '').e
                : D(l * (Math.log('0.' + Z(o.d)) / Math.LN10 + o.e + 1))) >
              u.maxE + 1 || t < u.minE - 1
              ? new u(t > 0 ? a / 0 : 0)
              : ((N = !1),
                (u.rounding = o.s = 1),
                (r = Math.min(12, (t + '').length)),
                (i = ei(e.times(es(o, n + r)), n)).d &&
                  $((i = K(i, n + 5, 1)).d, n, s) &&
                  ((t = n + 10),
                  +Z((i = K(ei(e.times(es(o, t + r)), t), t + 5, 1)).d).slice(
                    n + 1,
                    n + 15
                  ) +
                    1 ==
                    1e14 && (i = K(i, n + 1, 0))),
                (i.s = a),
                (N = !0),
                (u.rounding = s),
                K(i, n, s));
          }),
        (B.toPrecision = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = V(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
              : (z(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : z(t, 0, 8),
                (r = V(
                  (n = K(new i(n), e, t)),
                  e <= n.e || n.e <= i.toExpNeg,
                  e
                ))),
            n.isNeg() && !n.isZero() ? '-' + r : r
          );
        }),
        (B.toSignificantDigits = B.toSD =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (z(e, 1, 1e9), void 0 === t ? (t = r.rounding) : z(t, 0, 8)),
              K(new r(this), e, t)
            );
          }),
        (B.toString = function () {
          var e = this.constructor,
            t = V(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? '-' + t : t;
        }),
        (B.truncated = B.trunc =
          function () {
            return K(new this.constructor(this), this.e + 1, 1);
          }),
        (B.valueOf = B.toJSON =
          function () {
            var e = this.constructor,
              t = V(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? '-' + t : t;
          });
      var W = (function () {
        function e(e, t, r) {
          var n,
            i = 0,
            s = e.length;
          for (e = e.slice(); s--; )
            (n = e[s] * t + i), (e[s] = n % r | 0), (i = (n / r) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, r, n) {
          var i, s;
          if (r != n) s = r > n ? 1 : -1;
          else
            for (i = s = 0; i < r; i++)
              if (e[i] != t[i]) {
                s = e[i] > t[i] ? 1 : -1;
                break;
              }
          return s;
        }
        function r(e, t, r, n) {
          for (var i = 0; r--; )
            (e[r] -= i),
              (i = e[r] < t[r] ? 1 : 0),
              (e[r] = i * n + e[r] - t[r]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (n, i, s, a, o, u) {
          var l,
            c,
            h,
            d,
            f,
            p,
            m,
            g,
            y,
            v,
            b,
            w,
            _,
            S,
            O,
            R,
            C,
            x,
            N,
            k,
            A = n.constructor,
            T = n.s == i.s ? 1 : -1,
            P = n.d,
            I = i.d;
          if (!P || !P[0] || !I || !I[0])
            return new A(
              n.s && i.s && (P ? !I || P[0] != I[0] : I)
                ? (P && 0 == P[0]) || !I
                  ? 0 * T
                  : T / 0
                : NaN
            );
          for (
            u
              ? ((f = 1), (c = n.e - i.e))
              : ((u = 1e7), (f = 7), (c = D(n.e / f) - D(i.e / f))),
              N = I.length,
              C = P.length,
              v = (y = new A(T)).d = [],
              h = 0;
            I[h] == (P[h] || 0);
            h++
          );
          if (
            (I[h] > (P[h] || 0) && c--,
            null == s
              ? ((S = s = A.precision), (a = A.rounding))
              : (S = o ? s + (n.e - i.e) + 1 : s),
            S < 0)
          )
            v.push(1), (p = !0);
          else {
            if (((S = (S / f + 2) | 0), (h = 0), 1 == N)) {
              for (d = 0, I = I[0], S++; (h < C || d) && S--; h++)
                (O = d * u + (P[h] || 0)),
                  (v[h] = (O / I) | 0),
                  (d = O % I | 0);
              p = d || h < C;
            } else {
              for (
                (d = (u / (I[0] + 1)) | 0) > 1 &&
                  ((I = e(I, d, u)),
                  (P = e(P, d, u)),
                  (N = I.length),
                  (C = P.length)),
                  R = N,
                  w = (b = P.slice(0, N)).length;
                w < N;

              )
                b[w++] = 0;
              (k = I.slice()).unshift(0), (x = I[0]), I[1] >= u / 2 && ++x;
              do
                (d = 0),
                  (l = t(I, b, N, w)) < 0
                    ? ((_ = b[0]),
                      N != w && (_ = _ * u + (b[1] || 0)),
                      (d = (_ / x) | 0) > 1
                        ? (d >= u && (d = u - 1),
                          (g = (m = e(I, d, u)).length),
                          (w = b.length),
                          1 == (l = t(m, b, g, w)) &&
                            (d--, r(m, N < g ? k : I, g, u)))
                        : (0 == d && (l = d = 1), (m = I.slice())),
                      (g = m.length) < w && m.unshift(0),
                      r(b, m, w, u),
                      -1 == l &&
                        ((w = b.length),
                        (l = t(I, b, N, w)) < 1 &&
                          (d++, r(b, N < w ? k : I, w, u))),
                      (w = b.length))
                    : 0 === l && (d++, (b = [0])),
                  (v[h++] = d),
                  l && b[0] ? (b[w++] = P[R] || 0) : ((b = [P[R]]), (w = 1));
              while ((R++ < C || void 0 !== b[0]) && S--);
              p = void 0 !== b[0];
            }
            v[0] || v.shift();
          }
          if (1 == f) (y.e = c), (E = p);
          else {
            for (h = 1, d = v[0]; d >= 10; d /= 10) h++;
            (y.e = h + c * f - 1), K(y, o ? s + y.e + 1 : s, a, p);
          }
          return y;
        };
      })();
      function K(e, t, r, n) {
        var i,
          s,
          a,
          o,
          u,
          l,
          c,
          h,
          d,
          f = e.constructor;
        e: if (null != t) {
          if (!(h = e.d)) return e;
          for (i = 1, o = h[0]; o >= 10; o /= 10) i++;
          if ((s = t - i) < 0)
            (s += 7),
              (a = t),
              (u = ((c = h[(d = 0)]) / M(10, i - a - 1)) % 10 | 0);
          else if ((d = Math.ceil((s + 1) / 7)) >= (o = h.length)) {
            if (n) {
              for (; o++ <= d; ) h.push(0);
              (c = u = 0), (i = 1), (s %= 7), (a = s - 7 + 1);
            } else break e;
          } else {
            for (c = o = h[d], i = 1; o >= 10; o /= 10) i++;
            (s %= 7),
              (u = (a = s - 7 + i) < 0 ? 0 : (c / M(10, i - a - 1)) % 10 | 0);
          }
          if (
            ((n =
              n ||
              t < 0 ||
              void 0 !== h[d + 1] ||
              (a < 0 ? c : c % M(10, i - a - 1))),
            (l =
              r < 4
                ? (u || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : u > 5 ||
                  (5 == u &&
                    (4 == r ||
                      n ||
                      (6 == r &&
                        (s > 0 ? (a > 0 ? c / M(10, i - a) : 0) : h[d - 1]) %
                          10 &
                          1) ||
                      r == (e.s < 0 ? 8 : 7)))),
            t < 1 || !h[0])
          )
            return (
              (h.length = 0),
              l
                ? ((t -= e.e + 1),
                  (h[0] = M(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (h[0] = e.e = 0),
              e
            );
          if (
            (0 == s
              ? ((h.length = d), (o = 1), d--)
              : ((h.length = d + 1),
                (o = M(10, 7 - s)),
                (h[d] = a > 0 ? ((c / M(10, i - a)) % M(10, a) | 0) * o : 0)),
            l)
          )
            for (;;)
              if (0 == d) {
                for (s = 1, a = h[0]; a >= 10; a /= 10) s++;
                for (a = h[0] += o, o = 1; a >= 10; a /= 10) o++;
                s != o && (e.e++, 1e7 == h[0] && (h[0] = 1));
                break;
              } else {
                if (((h[d] += o), 1e7 != h[d])) break;
                (h[d--] = 0), (o = 1);
              }
          for (s = h.length; 0 === h[--s]; ) h.pop();
        }
        return (
          N &&
            (e.e > f.maxE
              ? ((e.d = null), (e.e = NaN))
              : e.e < f.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function V(e, t, r) {
        if (!e.isFinite()) return ea(e);
        var n,
          i = e.e,
          s = Z(e.d),
          a = s.length;
        return (
          t
            ? (r && (n = r - a) > 0
                ? (s = s.charAt(0) + '.' + s.slice(1) + ee(n))
                : a > 1 && (s = s.charAt(0) + '.' + s.slice(1)),
              (s = s + (e.e < 0 ? 'e' : 'e+') + e.e))
            : i < 0
              ? ((s = '0.' + ee(-i - 1) + s),
                r && (n = r - a) > 0 && (s += ee(n)))
              : i >= a
                ? ((s += ee(i + 1 - a)),
                  r && (n = r - i - 1) > 0 && (s = s + '.' + ee(n)))
                : ((n = i + 1) < a && (s = s.slice(0, n) + '.' + s.slice(n)),
                  r &&
                    (n = r - a) > 0 &&
                    (i + 1 === a && (s += '.'), (s += ee(n)))),
          s
        );
      }
      function G(e, t) {
        var r = e[0];
        for (t *= 7; r >= 10; r /= 10) t++;
        return t;
      }
      function J(e, t, r) {
        if (t > L) throw ((N = !0), r && (e.precision = r), Error(T));
        return K(new e(R), t, 1, !0);
      }
      function Y(e, t, r) {
        if (t > Q) throw Error(T);
        return K(new e(C), t, r, !0);
      }
      function X(e) {
        var t = e.length - 1,
          r = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) r--;
          for (t = e[0]; t >= 10; t /= 10) r++;
        }
        return r;
      }
      function ee(e) {
        for (var t = ''; e--; ) t += '0';
        return t;
      }
      function et(e, t, r, n) {
        var i,
          s = new e(1),
          a = Math.ceil(n / 7 + 4);
        for (N = !1; ; ) {
          if (
            (r % 2 && ed((s = s.times(t)).d, a) && (i = !0),
            0 === (r = D(r / 2)))
          ) {
            (r = s.d.length - 1), i && 0 === s.d[r] && ++s.d[r];
            break;
          }
          ed((t = t.times(t)).d, a);
        }
        return (N = !0), s;
      }
      function er(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function en(e, t, r) {
        for (var n, i = new e(t[0]), s = 0; ++s < t.length; )
          if ((n = new e(t[s])).s) i[r](n) && (i = n);
          else {
            i = n;
            break;
          }
        return i;
      }
      function ei(e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          u,
          l = 0,
          c = 0,
          h = 0,
          d = e.constructor,
          f = d.rounding,
          p = d.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new d(
            e.d
              ? e.d[0]
                ? e.s < 0
                  ? 0
                  : 1 / 0
                : 1
              : e.s
                ? e.s < 0
                  ? 0
                  : e
                : NaN
          );
        for (
          null == t ? ((N = !1), (u = p)) : (u = t), o = new d(0.03125);
          e.e > -2;

        )
          (e = e.times(o)), (h += 5);
        for (
          u += n = ((Math.log(M(2, h)) / Math.LN10) * 2 + 5) | 0,
            r = s = a = new d(1),
            d.precision = u;
          ;

        ) {
          if (
            ((s = K(s.times(e), u, 1)),
            (r = r.times(++c)),
            Z((o = a.plus(W(s, r, u, 1))).d).slice(0, u) === Z(a.d).slice(0, u))
          ) {
            for (i = h; i--; ) a = K(a.times(a), u, 1);
            if (null != t) return (d.precision = p), a;
            if (!(l < 3 && $(a.d, u - n, f, l)))
              return K(a, (d.precision = p), f, (N = !0));
            (d.precision = u += 10), (r = s = o = new d(1)), (c = 0), l++;
          }
          a = o;
        }
      }
      function es(e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          u,
          l,
          c,
          h,
          d,
          f = 1,
          p = e,
          m = p.d,
          g = p.constructor,
          y = g.rounding,
          v = g.precision;
        if (p.s < 0 || !m || !m[0] || (!p.e && 1 == m[0] && 1 == m.length))
          return new g(m && !m[0] ? -1 / 0 : 1 != p.s ? NaN : m ? 0 : p);
        if (
          (null == t ? ((N = !1), (c = v)) : (c = t),
          (g.precision = c += 10),
          (n = (r = Z(m)).charAt(0)),
          !(15e14 > Math.abs((s = p.e))))
        )
          return (
            (l = J(g, c + 2, v).times(s + '')),
            (p = es(new g(n + '.' + r.slice(1)), c - 10).plus(l)),
            (g.precision = v),
            null == t ? K(p, v, y, (N = !0)) : p
          );
        for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
          (n = (r = Z((p = p.times(e)).d)).charAt(0)), f++;
        for (
          s = p.e,
            n > 1
              ? ((p = new g('0.' + r)), s++)
              : (p = new g(n + '.' + r.slice(1))),
            h = p,
            u = a = p = W(p.minus(1), p.plus(1), c, 1),
            d = K(p.times(p), c, 1),
            i = 3;
          ;

        ) {
          if (
            ((a = K(a.times(d), c, 1)),
            Z((l = u.plus(W(a, new g(i), c, 1))).d).slice(0, c) ===
              Z(u.d).slice(0, c))
          ) {
            if (
              ((u = u.times(2)),
              0 !== s && (u = u.plus(J(g, c + 2, v).times(s + ''))),
              (u = W(u, new g(f), c, 1)),
              null != t)
            )
              return (g.precision = v), u;
            if (!$(u.d, c - 10, y, o))
              return K(u, (g.precision = v), y, (N = !0));
            (g.precision = c += 10),
              (l = a = p = W(h.minus(1), h.plus(1), c, 1)),
              (d = K(p.times(p), c, 1)),
              (i = o = 1);
          }
          (u = l), (i += 2);
        }
      }
      function ea(e) {
        return String((e.s * e.s) / 0);
      }
      function eo(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +t.slice(n + 1)),
                (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);
          n++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = r = r - n - 1),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; )
              e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += '0';
          e.d.push(+t),
            N &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function eu(e, t, r, n, i) {
        var s,
          a,
          o,
          u,
          l = e.precision,
          c = Math.ceil(l / 7);
        for (N = !1, u = r.times(r), o = new e(n); ; ) {
          if (
            ((a = W(o.times(u), new e(t++ * t++), l, 1)),
            (o = i ? n.plus(a) : n.minus(a)),
            (n = W(a.times(u), new e(t++ * t++), l, 1)),
            void 0 !== (a = o.plus(n)).d[c])
          ) {
            for (s = c; a.d[s] === o.d[s] && s--; );
            if (-1 == s) break;
          }
          (s = o), (o = n), (n = a), (a = s);
        }
        return (N = !0), (a.d.length = c + 1), a;
      }
      function el(e, t) {
        for (var r = e; --t; ) r *= e;
        return r;
      }
      function ec(e, t) {
        var r,
          n = t.s < 0,
          i = Y(e, e.precision, 1),
          s = i.times(0.5);
        if ((t = t.abs()).lte(s)) return (S = n ? 4 : 1), t;
        if ((r = t.divToInt(i)).isZero()) S = n ? 3 : 2;
        else {
          if ((t = t.minus(r.times(i))).lte(s))
            return (S = er(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
          S = er(r) ? (n ? 1 : 4) : n ? 3 : 2;
        }
        return t.minus(i).abs();
      }
      function eh(e, t, r, n) {
        var i,
          s,
          a,
          o,
          u,
          l,
          c,
          h,
          d,
          f = e.constructor,
          p = void 0 !== r;
        if (
          (p
            ? (z(r, 1, 1e9), void 0 === n ? (n = f.rounding) : z(n, 0, 8))
            : ((r = f.precision), (n = f.rounding)),
          e.isFinite())
        ) {
          for (
            a = (c = V(e)).indexOf('.'),
              p
                ? ((i = 2),
                  16 == t ? (r = 4 * r - 3) : 8 == t && (r = 3 * r - 2))
                : (i = t),
              a >= 0 &&
                ((c = c.replace('.', '')),
                ((d = new f(1)).e = c.length - a),
                (d.d = H(V(d), 10, i)),
                (d.e = d.d.length)),
              s = u = (h = H(c, 10, i)).length;
            0 == h[--u];

          )
            h.pop();
          if (h[0]) {
            if (
              (a < 0
                ? s--
                : (((e = new f(e)).d = h),
                  (e.e = s),
                  (h = (e = W(e, d, r, n, 0, i)).d),
                  (s = e.e),
                  (l = E)),
              (a = h[r]),
              (o = i / 2),
              (l = l || void 0 !== h[r + 1]),
              (l =
                n < 4
                  ? (void 0 !== a || l) && (0 === n || n === (e.s < 0 ? 3 : 2))
                  : a > o ||
                    (a === o &&
                      (4 === n ||
                        l ||
                        (6 === n && 1 & h[r - 1]) ||
                        n === (e.s < 0 ? 8 : 7)))),
              (h.length = r),
              l)
            )
              for (; ++h[--r] > i - 1; ) (h[r] = 0), r || (++s, h.unshift(1));
            for (u = h.length; !h[u - 1]; --u);
            for (a = 0, c = ''; a < u; a++) c += O.charAt(h[a]);
            if (p) {
              if (u > 1) {
                if (16 == t || 8 == t) {
                  for (a = 16 == t ? 4 : 3, --u; u % a; u++) c += '0';
                  for (u = (h = H(c, i, t)).length; !h[u - 1]; --u);
                  for (a = 1, c = '1.'; a < u; a++) c += O.charAt(h[a]);
                } else c = c.charAt(0) + '.' + c.slice(1);
              }
              c = c + (s < 0 ? 'p' : 'p+') + s;
            } else if (s < 0) {
              for (; ++s; ) c = '0' + c;
              c = '0.' + c;
            } else if (++s > u) for (s -= u; s--; ) c += '0';
            else s < u && (c = c.slice(0, s) + '.' + c.slice(s));
          } else c = p ? '0p+0' : '0';
          c = (16 == t ? '0x' : 2 == t ? '0b' : 8 == t ? '0o' : '') + c;
        } else c = ea(e);
        return e.s < 0 ? '-' + c : c;
      }
      function ed(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function ef(e) {
        return new this(e).abs();
      }
      function ep(e) {
        return new this(e).acos();
      }
      function em(e) {
        return new this(e).acosh();
      }
      function eg(e, t) {
        return new this(e).plus(t);
      }
      function ey(e) {
        return new this(e).asin();
      }
      function ev(e) {
        return new this(e).asinh();
      }
      function eb(e) {
        return new this(e).atan();
      }
      function ew(e) {
        return new this(e).atanh();
      }
      function e_(e, t) {
        (e = new this(e)), (t = new this(t));
        var r,
          n = this.precision,
          i = this.rounding,
          s = n + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((r = t.s < 0 ? Y(this, n, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                  ? ((r = Y(this, s, 1).times(0.5)).s = e.s)
                  : t.s < 0
                    ? ((this.precision = s),
                      (this.rounding = 1),
                      (r = this.atan(W(e, t, s, 1))),
                      (t = Y(this, s, 1)),
                      (this.precision = n),
                      (this.rounding = i),
                      (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                    : (r = this.atan(W(e, t, s, 1)))
              : ((r = Y(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (r = new this(NaN)),
          r
        );
      }
      function eE(e) {
        return new this(e).cbrt();
      }
      function eS(e) {
        return K((e = new this(e)), e.e + 1, 2);
      }
      function eO(e, t, r) {
        return new this(e).clamp(t, r);
      }
      function eR(e) {
        if (!e || 'object' != typeof e) throw Error(k + 'Object expected');
        var t,
          r,
          n,
          i = !0 === e.defaults,
          s = [
            'precision',
            1,
            1e9,
            'rounding',
            0,
            8,
            'toExpNeg',
            -9e15,
            0,
            'toExpPos',
            0,
            9e15,
            'maxE',
            0,
            9e15,
            'minE',
            -9e15,
            0,
            'modulo',
            0,
            9,
          ];
        for (t = 0; t < s.length; t += 3)
          if (((r = s[t]), i && (this[r] = x[r]), void 0 !== (n = e[r]))) {
            if (D(n) === n && n >= s[t + 1] && n <= s[t + 2]) this[r] = n;
            else throw Error(A + r + ': ' + n);
          }
        if (((r = 'crypto'), i && (this[r] = x[r]), void 0 !== (n = e[r]))) {
          if (!0 === n || !1 === n || 0 === n || 1 === n) {
            if (n) {
              if (
                'u' > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[r] = !0;
              else throw Error(P);
            } else this[r] = !1;
          } else throw Error(A + r + ': ' + n);
        }
        return this;
      }
      function eC(e) {
        return new this(e).cos();
      }
      function ex(e) {
        return new this(e).cosh();
      }
      function eN(e, t) {
        return new this(e).div(t);
      }
      function ek(e) {
        return new this(e).exp();
      }
      function eA(e) {
        return K((e = new this(e)), e.e + 1, 3);
      }
      function eT() {
        var e,
          t,
          r = new this(0);
        for (N = !1, e = 0; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            r.d && (r = r.plus(t.times(t)));
          else {
            if (t.s) return (N = !0), new this(1 / 0);
            r = t;
          }
        return (N = !0), r.sqrt();
      }
      function eP(e) {
        return e instanceof eX || (e && e.toStringTag === I) || !1;
      }
      function eI(e) {
        return new this(e).ln();
      }
      function eD(e, t) {
        return new this(e).log(t);
      }
      function eM(e) {
        return new this(e).log(2);
      }
      function ej(e) {
        return new this(e).log(10);
      }
      function eq() {
        return en(this, arguments, 'lt');
      }
      function eU() {
        return en(this, arguments, 'gt');
      }
      function eF(e, t) {
        return new this(e).mod(t);
      }
      function eL(e, t) {
        return new this(e).mul(t);
      }
      function eQ(e, t) {
        return new this(e).pow(t);
      }
      function eB(e) {
        var t,
          r,
          n,
          i,
          s = 0,
          a = new this(1),
          o = [];
        if (
          (void 0 === e ? (e = this.precision) : z(e, 1, 1e9),
          (n = Math.ceil(e / 7)),
          this.crypto)
        ) {
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); s < n; )
              (i = t[s]) >= 429e7
                ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (o[s++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((n *= 4)); s < n; )
              (i =
                t[s] +
                (t[s + 1] << 8) +
                (t[s + 2] << 16) +
                ((127 & t[s + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, s)
                : (o.push(i % 1e7), (s += 4));
            s = n / 4;
          } else throw Error(P);
        } else for (; s < n; ) o[s++] = (1e7 * Math.random()) | 0;
        for (
          n = o[--s],
            e %= 7,
            n && e && ((i = M(10, 7 - e)), (o[s] = ((n / i) | 0) * i));
          0 === o[s];
          s--
        )
          o.pop();
        if (s < 0) (r = 0), (o = [0]);
        else {
          for (r = -1; 0 === o[0]; r -= 7) o.shift();
          for (n = 1, i = o[0]; i >= 10; i /= 10) n++;
          n < 7 && (r -= 7 - n);
        }
        return (a.e = r), (a.d = o), a;
      }
      function eZ(e) {
        return K((e = new this(e)), e.e + 1, this.rounding);
      }
      function ez(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
      }
      function e$(e) {
        return new this(e).sin();
      }
      function eH(e) {
        return new this(e).sinh();
      }
      function eW(e) {
        return new this(e).sqrt();
      }
      function eK(e, t) {
        return new this(e).sub(t);
      }
      function eV() {
        var e = 0,
          t = arguments,
          r = new this(t[0]);
        for (N = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
        return (N = !0), K(r, this.precision, this.rounding);
      }
      function eG(e) {
        return new this(e).tan();
      }
      function eJ(e) {
        return new this(e).tanh();
      }
      function eY(e) {
        return K((e = new this(e)), e.e + 1, 1);
      }
      (B[Symbol.for('nodejs.util.inspect.custom')] = B.toString),
        (B[Symbol.toStringTag] = 'Decimal');
      var eX = (B.constructor = (function e(t) {
        var r, n, i;
        function s(e) {
          var t, r, n;
          if (!(this instanceof s)) return new s(e);
          if (((this.constructor = s), eP(e))) {
            (this.s = e.s),
              N
                ? !e.d || e.e > s.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : e.e < s.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ('number' == (n = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, r = e; r >= 10; r /= 10) t++;
              N
                ? t > s.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : t < s.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = NaN), (this.e = NaN), (this.d = null);
              return;
            }
            return eo(this, e.toString());
          }
          if ('string' !== n) throw Error(A + e);
          return (
            45 === (r = e.charCodeAt(0))
              ? ((e = e.slice(1)), (this.s = -1))
              : (43 === r && (e = e.slice(1)), (this.s = 1)),
            F.test(e)
              ? eo(this, e)
              : (function (e, t) {
                  var r, n, i, s, a, o, u, l, c;
                  if (t.indexOf('_') > -1) {
                    if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), F.test(t)))
                      return eo(e, t);
                  } else if ('Infinity' === t || 'NaN' === t)
                    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                  if (q.test(t)) (r = 16), (t = t.toLowerCase());
                  else if (j.test(t)) r = 2;
                  else if (U.test(t)) r = 8;
                  else throw Error(A + t);
                  for (
                    (s = t.search(/p/i)) > 0
                      ? ((u = +t.slice(s + 1)), (t = t.substring(2, s)))
                      : (t = t.slice(2)),
                      a = (s = t.indexOf('.')) >= 0,
                      n = e.constructor,
                      a &&
                        ((s = (o = (t = t.replace('.', '')).length) - s),
                        (i = et(n, new n(r), s, 2 * s))),
                      s = c = (l = H(t, r, 1e7)).length - 1;
                    0 === l[s];
                    --s
                  )
                    l.pop();
                  return s < 0
                    ? new n(0 * e.s)
                    : ((e.e = G(l, c)),
                      (e.d = l),
                      (N = !1),
                      a && (e = W(e, i, 4 * o)),
                      u &&
                        (e = e.times(
                          54 > Math.abs(u) ? M(2, u) : eX.pow(2, u)
                        )),
                      (N = !0),
                      e);
                })(this, e)
          );
        }
        if (
          ((s.prototype = B),
          (s.ROUND_UP = 0),
          (s.ROUND_DOWN = 1),
          (s.ROUND_CEIL = 2),
          (s.ROUND_FLOOR = 3),
          (s.ROUND_HALF_UP = 4),
          (s.ROUND_HALF_DOWN = 5),
          (s.ROUND_HALF_EVEN = 6),
          (s.ROUND_HALF_CEIL = 7),
          (s.ROUND_HALF_FLOOR = 8),
          (s.EUCLID = 9),
          (s.config = s.set = eR),
          (s.clone = e),
          (s.isDecimal = eP),
          (s.abs = ef),
          (s.acos = ep),
          (s.acosh = em),
          (s.add = eg),
          (s.asin = ey),
          (s.asinh = ev),
          (s.atan = eb),
          (s.atanh = ew),
          (s.atan2 = e_),
          (s.cbrt = eE),
          (s.ceil = eS),
          (s.clamp = eO),
          (s.cos = eC),
          (s.cosh = ex),
          (s.div = eN),
          (s.exp = ek),
          (s.floor = eA),
          (s.hypot = eT),
          (s.ln = eI),
          (s.log = eD),
          (s.log10 = ej),
          (s.log2 = eM),
          (s.max = eq),
          (s.min = eU),
          (s.mod = eF),
          (s.mul = eL),
          (s.pow = eQ),
          (s.random = eB),
          (s.round = eZ),
          (s.sign = ez),
          (s.sin = e$),
          (s.sinh = eH),
          (s.sqrt = eW),
          (s.sub = eK),
          (s.sum = eV),
          (s.tan = eG),
          (s.tanh = eJ),
          (s.trunc = eY),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            i = [
              'precision',
              'rounding',
              'toExpNeg',
              'toExpPos',
              'maxE',
              'minE',
              'modulo',
              'crypto',
            ],
              r = 0;
            r < i.length;

          )
            t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
        return s.config(t), s;
      })(x));
      (R = new eX(R)), (C = new eX(C));
      var e0 = eX;
    },
    5350: (e, t) => {
      'use strict';
      (t.byteLength = function (e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            s = u(e),
            a = s[0],
            o = s[1],
            l = new i(((a + o) * 3) / 4 - o),
            c = 0,
            h = o > 0 ? a - 4 : a;
          for (r = 0; r < h; r += 4)
            (t =
              (n[e.charCodeAt(r)] << 18) |
              (n[e.charCodeAt(r + 1)] << 12) |
              (n[e.charCodeAt(r + 2)] << 6) |
              n[e.charCodeAt(r + 3)]),
              (l[c++] = (t >> 16) & 255),
              (l[c++] = (t >> 8) & 255),
              (l[c++] = 255 & t);
          return (
            2 === o &&
              ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
              (l[c++] = 255 & t)),
            1 === o &&
              ((t =
                (n[e.charCodeAt(r)] << 10) |
                (n[e.charCodeAt(r + 1)] << 4) |
                (n[e.charCodeAt(r + 2)] >> 2)),
              (l[c++] = (t >> 8) & 255),
              (l[c++] = 255 & t)),
            l
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, n = e.length, i = n % 3, s = [], a = 0, o = n - i;
            a < o;
            a += 16383
          )
            s.push(
              (function (e, t, n) {
                for (var i, s = [], a = t; a < n; a += 3)
                  s.push(
                    r[
                      ((i =
                        ((e[a] << 16) & 0xff0000) +
                        ((e[a + 1] << 8) & 65280) +
                        (255 & e[a + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return s.join('');
              })(e, a, a + 16383 > o ? o : a + 16383)
            );
          return (
            1 === i
              ? s.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + '==')
              : 2 === i &&
                s.push(
                  r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                    r[(t >> 4) & 63] +
                    r[(t << 2) & 63] +
                    '='
                ),
            s.join('')
          );
        });
      for (
        var r = [],
          n = [],
          i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          s =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          a = 0,
          o = s.length;
        a < o;
        ++a
      )
        (r[a] = s[a]), (n[s.charCodeAt(a)] = a);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw Error('Invalid string. Length must be a multiple of 4');
        var r = e.indexOf('=');
        -1 === r && (r = t);
        var n = r === t ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63);
    },
    2796: (e, t, r) => {
      'use strict';
      var n = r(5350),
        i = r(7947),
        s =
          'function' == typeof Symbol && 'function' == typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null;
      function a(e) {
        if (e > 0x7fffffff)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        var t = new Uint8Array(e);
        return Object.setPrototypeOf(t, o.prototype), t;
      }
      function o(e, t, r) {
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return c(e);
        }
        return u(e, t, r);
      }
      function u(e, t, r) {
        if ('string' == typeof e)
          return (function (e, t) {
            if (
              (('string' != typeof t || '' === t) && (t = 'utf8'),
              !o.isEncoding(t))
            )
              throw TypeError('Unknown encoding: ' + t);
            var r = 0 | p(e, t),
              n = a(r),
              i = n.write(e, t);
            return i !== r && (n = n.slice(0, i)), n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (k(e, Uint8Array)) {
              var t = new Uint8Array(e);
              return d(t.buffer, t.byteOffset, t.byteLength);
            }
            return h(e);
          })(e);
        if (null == e)
          throw TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof e
          );
        if (
          k(e, ArrayBuffer) ||
          (e && k(e.buffer, ArrayBuffer)) ||
          ('undefined' != typeof SharedArrayBuffer &&
            (k(e, SharedArrayBuffer) || (e && k(e.buffer, SharedArrayBuffer))))
        )
          return d(e, t, r);
        if ('number' == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        var n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return o.from(n, t, r);
        var i = (function (e) {
          if (o.isBuffer(e)) {
            var t,
              r = 0 | f(e.length),
              n = a(r);
            return 0 === n.length || e.copy(n, 0, 0, r), n;
          }
          return void 0 !== e.length
            ? 'number' != typeof e.length || (t = e.length) != t
              ? a(0)
              : h(e)
            : 'Buffer' === e.type && Array.isArray(e.data)
              ? h(e.data)
              : void 0;
        })(e);
        if (i) return i;
        if (
          'undefined' != typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' == typeof e[Symbol.toPrimitive]
        )
          return o.from(e[Symbol.toPrimitive]('string'), t, r);
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof e
        );
      }
      function l(e) {
        if ('number' != typeof e)
          throw TypeError('"size" argument must be of type number');
        if (e < 0)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
      }
      function c(e) {
        return l(e), a(e < 0 ? 0 : 0 | f(e));
      }
      function h(e) {
        for (
          var t = e.length < 0 ? 0 : 0 | f(e.length), r = a(t), n = 0;
          n < t;
          n += 1
        )
          r[n] = 255 & e[n];
        return r;
      }
      function d(e, t, r) {
        var n;
        if (t < 0 || e.byteLength < t)
          throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                  ? new Uint8Array(e, t)
                  : new Uint8Array(e, t, r)),
            o.prototype
          ),
          n
        );
      }
      function f(e) {
        if (e >= 0x7fffffff)
          throw RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes'
          );
        return 0 | e;
      }
      function p(e, t) {
        if (o.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || k(e, ArrayBuffer)) return e.byteLength;
        if ('string' != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        var r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        for (var i = !1; ; )
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r;
            case 'utf8':
            case 'utf-8':
              return C(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return x(e).length;
            default:
              if (i) return n ? -1 : C(e).length;
              (t = ('' + t).toLowerCase()), (i = !0);
          }
      }
      function m(e, t, r) {
        var i,
          s,
          a = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (t >>>= 0)))
        )
          return '';
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return (function (e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = '', s = t; s < r; ++s) i += A[e[s]];
                return i;
              })(this, t, r);
            case 'utf8':
            case 'utf-8':
              return b(this, t, r);
            case 'ascii':
              return (function (e, t, r) {
                var n = '';
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i)
                  n += String.fromCharCode(127 & e[i]);
                return n;
              })(this, t, r);
            case 'latin1':
            case 'binary':
              return (function (e, t, r) {
                var n = '';
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n;
              })(this, t, r);
            case 'base64':
              return (
                (i = t),
                (s = r),
                0 === i && s === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(i, s))
              );
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return (function (e, t, r) {
                for (
                  var n = e.slice(t, r), i = '', s = 0;
                  s < n.length - 1;
                  s += 2
                )
                  i += String.fromCharCode(n[s] + 256 * n[s + 1]);
                return i;
              })(this, t, r);
            default:
              if (a) throw TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (a = !0);
          }
      }
      function g(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function y(e, t, r, n, i) {
        var s;
        if (0 === e.length) return -1;
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 0x7fffffff
              ? (r = 0x7fffffff)
              : r < -0x80000000 && (r = -0x80000000),
          (s = r = +r) != s && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (('string' == typeof t && (t = o.from(t, n)), o.isBuffer(t)))
          return 0 === t.length ? -1 : v(e, t, r, n, i);
        if ('number' == typeof t)
          return ((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(e, t, r)
              : Uint8Array.prototype.lastIndexOf.call(e, t, r)
            : v(e, [t], r, n, i);
        throw TypeError('val must be string, number or Buffer');
      }
      function v(e, t, r, n, i) {
        var s,
          a = 1,
          o = e.length,
          u = t.length;
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (o /= 2), (u /= 2), (r /= 2);
        }
        function l(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (i) {
          var c = -1;
          for (s = r; s < o; s++)
            if (l(e, s) === l(t, -1 === c ? 0 : s - c)) {
              if ((-1 === c && (c = s), s - c + 1 === u)) return c * a;
            } else -1 !== c && (s -= s - c), (c = -1);
        } else
          for (r + u > o && (r = o - u), s = r; s >= 0; s--) {
            for (var h = !0, d = 0; d < u; d++)
              if (l(e, s + d) !== l(t, d)) {
                h = !1;
                break;
              }
            if (h) return s;
          }
        return -1;
      }
      function b(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], i = t; i < r; ) {
          var s,
            a,
            o,
            u,
            l = e[i],
            c = null,
            h = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
          if (i + h <= r)
            switch (h) {
              case 1:
                l < 128 && (c = l);
                break;
              case 2:
                (192 & (s = e[i + 1])) == 128 &&
                  (u = ((31 & l) << 6) | (63 & s)) > 127 &&
                  (c = u);
                break;
              case 3:
                (s = e[i + 1]),
                  (a = e[i + 2]),
                  (192 & s) == 128 &&
                    (192 & a) == 128 &&
                    (u = ((15 & l) << 12) | ((63 & s) << 6) | (63 & a)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (c = u);
                break;
              case 4:
                (s = e[i + 1]),
                  (a = e[i + 2]),
                  (o = e[i + 3]),
                  (192 & s) == 128 &&
                    (192 & a) == 128 &&
                    (192 & o) == 128 &&
                    (u =
                      ((15 & l) << 18) |
                      ((63 & s) << 12) |
                      ((63 & a) << 6) |
                      (63 & o)) > 65535 &&
                    u < 1114112 &&
                    (c = u);
            }
          null === c
            ? ((c = 65533), (h = 1))
            : c > 65535 &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (i += h);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          for (var r = '', n = 0; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function w(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
        if (e + t > r)
          throw RangeError('Trying to access beyond buffer length');
      }
      function _(e, t, r, n, i, s) {
        if (!o.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < s)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw RangeError('Index out of range');
      }
      function E(e, t, r, n, i, s) {
        if (r + n > e.length || r < 0) throw RangeError('Index out of range');
      }
      function S(e, t, r, n, s) {
        return (
          (t = +t),
          (r >>>= 0),
          s || E(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function O(e, t, r, n, s) {
        return (
          (t = +t),
          (r >>>= 0),
          s || E(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (t.hp = o),
        (t.IS = 50),
        (o.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        o.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(o.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (o.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(o.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (o.isBuffer(this)) return this.byteOffset;
          },
        }),
        (o.poolSize = 8192),
        (o.from = function (e, t, r) {
          return u(e, t, r);
        }),
        Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(o, Uint8Array),
        (o.alloc = function (e, t, r) {
          return (l(e), e <= 0)
            ? a(e)
            : void 0 !== t
              ? 'string' == typeof r
                ? a(e).fill(t, r)
                : a(e).fill(t)
              : a(e);
        }),
        (o.allocUnsafe = function (e) {
          return c(e);
        }),
        (o.allocUnsafeSlow = function (e) {
          return c(e);
        }),
        (o.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== o.prototype;
        }),
        (o.compare = function (e, t) {
          if (
            (k(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)),
            k(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)),
            !o.isBuffer(e) || !o.isBuffer(t))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, i = 0, s = Math.min(r, n);
            i < s;
            ++i
          )
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (o.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (o.concat = function (e, t) {
          if (!Array.isArray(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return o.alloc(0);
          if (void 0 === t)
            for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
          var r,
            n = o.allocUnsafe(t),
            i = 0;
          for (r = 0; r < e.length; ++r) {
            var s = e[r];
            if (k(s, Uint8Array))
              i + s.length > n.length
                ? o.from(s).copy(n, i)
                : Uint8Array.prototype.set.call(n, s, i);
            else if (o.isBuffer(s)) s.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += s.length;
          }
          return n;
        }),
        (o.byteLength = p),
        (o.prototype._isBuffer = !0),
        (o.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw RangeError('Buffer size must be a multiple of 16-bits');
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (o.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw RangeError('Buffer size must be a multiple of 32-bits');
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (o.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw RangeError('Buffer size must be a multiple of 64-bits');
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (o.prototype.toString = function () {
          var e = this.length;
          return 0 === e
            ? ''
            : 0 == arguments.length
              ? b(this, 0, e)
              : m.apply(this, arguments);
        }),
        (o.prototype.toLocaleString = o.prototype.toString),
        (o.prototype.equals = function (e) {
          if (!o.isBuffer(e)) throw TypeError('Argument must be a Buffer');
          return this === e || 0 === o.compare(this, e);
        }),
        (o.prototype.inspect = function () {
          var e = '',
            r = t.IS;
          return (
            (e = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (e += ' ... '),
            '<Buffer ' + e + '>'
          );
        }),
        s && (o.prototype[s] = o.prototype.inspect),
        (o.prototype.compare = function (e, t, r, n, i) {
          if (
            (k(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)),
            !o.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
          )
            throw RangeError('out of range index');
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e))
            return 0;
          for (
            var s = i - n,
              a = r - t,
              u = Math.min(s, a),
              l = this.slice(n, i),
              c = e.slice(t, r),
              h = 0;
            h < u;
            ++h
          )
            if (l[h] !== c[h]) {
              (s = l[h]), (a = c[h]);
              break;
            }
          return s < a ? -1 : a < s ? 1 : 0;
        }),
        (o.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (o.prototype.indexOf = function (e, t, r) {
          return y(this, e, t, r, !0);
        }),
        (o.prototype.lastIndexOf = function (e, t, r) {
          return y(this, e, t, r, !1);
        }),
        (o.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0);
          else if (void 0 === r && 'string' == typeof t)
            (n = t), (r = this.length), (t = 0);
          else if (isFinite(t))
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0));
          else
            throw Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            );
          var i,
            s,
            a,
            o,
            u,
            l,
            c,
            h,
            d = this.length - t;
          if (
            ((void 0 === r || r > d) && (r = d),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw RangeError('Attempt to write outside buffer bounds');
          n || (n = 'utf8');
          for (var f = !1; ; )
            switch (n) {
              case 'hex':
                return (function (e, t, r, n) {
                  r = Number(r) || 0;
                  var i = e.length - r;
                  n ? (n = Number(n)) > i && (n = i) : (n = i);
                  var s = t.length;
                  n > s / 2 && (n = s / 2);
                  for (var a = 0; a < n; ++a) {
                    var o = parseInt(t.substr(2 * a, 2), 16);
                    if (o != o) break;
                    e[r + a] = o;
                  }
                  return a;
                })(this, e, t, r);
              case 'utf8':
              case 'utf-8':
                return (i = t), (s = r), N(C(e, this.length - i), this, i, s);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return (
                  (a = t),
                  (o = r),
                  N(
                    (function (e) {
                      for (var t = [], r = 0; r < e.length; ++r)
                        t.push(255 & e.charCodeAt(r));
                      return t;
                    })(e),
                    this,
                    a,
                    o
                  )
                );
              case 'base64':
                return (u = t), (l = r), N(x(e), this, u, l);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return (
                  (c = t),
                  (h = r),
                  N(
                    (function (e, t) {
                      for (
                        var r, n, i = [], s = 0;
                        s < e.length && !((t -= 2) < 0);
                        ++s
                      )
                        (n = (r = e.charCodeAt(s)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(e, this.length - c),
                    this,
                    c,
                    h
                  )
                );
              default:
                if (f) throw TypeError('Unknown encoding: ' + n);
                (n = ('' + n).toLowerCase()), (f = !0);
            }
        }),
        (o.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (o.prototype.slice = function (e, t) {
          var r = this.length;
          (e = ~~e),
            (t = void 0 === t ? r : ~~t),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
          var n = this.subarray(e, t);
          return Object.setPrototypeOf(n, o.prototype), n;
        }),
        (o.prototype.readUintLE = o.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
              n += this[e + s] * i;
            return n;
          }),
        (o.prototype.readUintBE = o.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
              n += this[e + --t] * i;
            return n;
          }),
        (o.prototype.readUint8 = o.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || w(e, 1, this.length), this[e];
          }),
        (o.prototype.readUint16LE = o.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (o.prototype.readUint16BE = o.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (o.prototype.readUint32LE = o.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                0x1000000 * this[e + 3]
            );
          }),
        (o.prototype.readUint32BE = o.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 4, this.length),
              0x1000000 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (o.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
          for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
            n += this[e + s] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (o.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
          for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256); )
            s += this[e + --n] * i;
          return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s;
        }),
        (o.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0), t || w(e, 1, this.length), 128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (o.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || w(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (o.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || w(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (o.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || w(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (o.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || w(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (o.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 4, this.length), i.read(this, e, !0, 23, 4)
          );
        }),
        (o.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 4, this.length), i.read(this, e, !1, 23, 4)
          );
        }),
        (o.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 8, this.length), i.read(this, e, !0, 52, 8)
          );
        }),
        (o.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 8, this.length), i.read(this, e, !1, 52, 8)
          );
        }),
        (o.prototype.writeUintLE = o.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              var i = Math.pow(2, 8 * r) - 1;
              _(this, e, t, r, i, 0);
            }
            var s = 1,
              a = 0;
            for (this[t] = 255 & e; ++a < r && (s *= 256); )
              this[t + a] = (e / s) & 255;
            return t + r;
          }),
        (o.prototype.writeUintBE = o.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              var i = Math.pow(2, 8 * r) - 1;
              _(this, e, t, r, i, 0);
            }
            var s = r - 1,
              a = 1;
            for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
              this[t + s] = (e / a) & 255;
            return t + r;
          }),
        (o.prototype.writeUint8 = o.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 4, 0xffffffff, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 4, 0xffffffff, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (o.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            _(this, e, t, r, i - 1, -i);
          }
          var s = 0,
            a = 1,
            o = 0;
          for (this[t] = 255 & e; ++s < r && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1),
              (this[t + s] = (((e / a) >> 0) - o) & 255);
          return t + r;
        }),
        (o.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            _(this, e, t, r, i - 1, -i);
          }
          var s = r - 1,
            a = 1,
            o = 0;
          for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1),
              (this[t + s] = (((e / a) >> 0) - o) & 255);
          return t + r;
        }),
        (o.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (o.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (o.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (o.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 4, 0x7fffffff, -0x80000000),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (o.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 4, 0x7fffffff, -0x80000000),
            e < 0 && (e = 0xffffffff + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (o.prototype.writeFloatLE = function (e, t, r) {
          return S(this, e, t, !0, r);
        }),
        (o.prototype.writeFloatBE = function (e, t, r) {
          return S(this, e, t, !1, r);
        }),
        (o.prototype.writeDoubleLE = function (e, t, r) {
          return O(this, e, t, !0, r);
        }),
        (o.prototype.writeDoubleBE = function (e, t, r) {
          return O(this, e, t, !1, r);
        }),
        (o.prototype.copy = function (e, t, r, n) {
          if (!o.isBuffer(e)) throw TypeError('argument should be a Buffer');
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0) throw RangeError('targetStart out of bounds');
          if (r < 0 || r >= this.length) throw RangeError('Index out of range');
          if (n < 0) throw RangeError('sourceEnd out of bounds');
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          var i = n - r;
          return (
            this === e && 'function' == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            i
          );
        }),
        (o.prototype.fill = function (e, t, r, n) {
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' != typeof n)
            )
              throw TypeError('encoding must be a string');
            if ('string' == typeof n && !o.isEncoding(n))
              throw TypeError('Unknown encoding: ' + n);
            if (1 === e.length) {
              var i,
                s = e.charCodeAt(0);
              (('utf8' === n && s < 128) || 'latin1' === n) && (e = s);
            }
          } else
            'number' == typeof e
              ? (e &= 255)
              : 'boolean' == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw RangeError('Out of range index');
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            'number' == typeof e)
          )
            for (i = t; i < r; ++i) this[i] = e;
          else {
            var a = o.isBuffer(e) ? e : o.from(e, n),
              u = a.length;
            if (0 === u)
              throw TypeError(
                'The value "' + e + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - t; ++i) this[i + t] = a[i % u];
          }
          return this;
        });
      var R = /[^+/0-9A-Za-z-_]/g;
      function C(e, t) {
        t = t || 1 / 0;
        for (var r, n = e.length, i = null, s = [], a = 0; a < n; ++a) {
          if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || a + 1 === n) {
                (t -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && s.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (t -= 3) > -1 && s.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            s.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            s.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            s.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error('Invalid code point');
        }
        return s;
      }
      function x(e) {
        return n.toByteArray(
          (function (e) {
            if ((e = (e = e.split('=')[0]).trim().replace(R, '')).length < 2)
              return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          })(e)
        );
      }
      function N(e, t, r, n) {
        for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      function k(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      var A = (function () {
        for (var e = '0123456789abcdef', t = Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
        return t;
      })();
    },
    7947: (e, t) => {
      (t.read = function (e, t, r, n, i) {
        var s,
          a,
          o = 8 * i - n - 1,
          u = (1 << o) - 1,
          l = u >> 1,
          c = -7,
          h = r ? i - 1 : 0,
          d = r ? -1 : 1,
          f = e[t + h];
        for (
          h += d, s = f & ((1 << -c) - 1), f >>= -c, c += o;
          c > 0;
          s = 256 * s + e[t + h], h += d, c -= 8
        );
        for (
          a = s & ((1 << -c) - 1), s >>= -c, c += n;
          c > 0;
          a = 256 * a + e[t + h], h += d, c -= 8
        );
        if (0 === s) s = 1 - l;
        else {
          if (s === u) return a ? NaN : (1 / 0) * (f ? -1 : 1);
          (a += Math.pow(2, n)), (s -= l);
        }
        return (f ? -1 : 1) * a * Math.pow(2, s - n);
      }),
        (t.write = function (e, t, r, n, i, s) {
          var a,
            o,
            u,
            l = 8 * s - i - 1,
            c = (1 << l) - 1,
            h = c >> 1,
            d = 23 === i ? 5960464477539062e-23 : 0,
            f = n ? 0 : s - 1,
            p = n ? 1 : -1,
            m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((o = isNaN(t) ? 1 : 0), (a = c))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                a + h >= 1 ? (t += d / u) : (t += d * Math.pow(2, 1 - h)),
                t * u >= 2 && (a++, (u /= 2)),
                a + h >= c
                  ? ((o = 0), (a = c))
                  : a + h >= 1
                    ? ((o = (t * u - 1) * Math.pow(2, i)), (a += h))
                    : ((o = t * Math.pow(2, h - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            e[r + f] = 255 & o, f += p, o /= 256, i -= 8
          );
          for (
            a = (a << i) | o, l += i;
            l > 0;
            e[r + f] = 255 & a, f += p, a /= 256, l -= 8
          );
          e[r + f - p] |= 128 * m;
        });
    },
    8080: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(2618);
        },
      ]);
    },
    2618: (e, t, r) => {
      'use strict';
      let n, i;
      r.r(t), r.d(t, { default: () => aR });
      var s,
        a,
        o,
        u,
        l,
        c,
        h,
        d,
        f,
        p,
        m,
        g,
        y = {};
      r.r(y),
        r.d(y, {
          hasBrowserEnv: () => nh,
          hasStandardBrowserEnv: () => nf,
          hasStandardBrowserWebWorkerEnv: () => np,
          navigator: () => nd,
          origin: () => nm,
        });
      var v = r(5105);
      r(1657);
      var b = r(1757),
        w = r.n(b);
      function _(e) {
        let t = {
          subscribe(t) {
            let r = null,
              n = !1,
              i = !1,
              s = !1;
            function a() {
              if (null === r) {
                s = !0;
                return;
              }
              !i &&
                ((i = !0), 'function' == typeof r ? r() : r && r.unsubscribe());
            }
            return (
              (r = e({
                next(e) {
                  n || t.next?.(e);
                },
                error(e) {
                  n || ((n = !0), t.error?.(e), a());
                },
                complete() {
                  n || ((n = !0), t.complete?.(), a());
                },
              })),
              s && a(),
              { unsubscribe: a }
            );
          },
          pipe: (...e) => e.reduce(E, t),
        };
        return t;
      }
      function E(e, t) {
        return t(e);
      }
      Symbol();
      let S = () => {},
        O = (e) => {
          Object.freeze && Object.freeze(e);
        },
        R = (e) =>
          (function e(t, r, n) {
            let i = r.join('.');
            return (
              n[i] ??
                (n[i] = new Proxy(S, {
                  get(i, s) {
                    if ('string' == typeof s && 'then' !== s)
                      return e(t, [...r, s], n);
                  },
                  apply(e, n, i) {
                    let s = r[r.length - 1],
                      a = { args: i, path: r };
                    return (
                      'call' === s
                        ? (a = {
                            args: i.length >= 2 ? [i[1]] : [],
                            path: r.slice(0, -1),
                          })
                        : 'apply' === s &&
                          (a = {
                            args: i.length >= 2 ? i[1] : [],
                            path: r.slice(0, -1),
                          }),
                      O(a.args),
                      O(a.path),
                      t(a)
                    );
                  },
                })),
              n[i]
            );
          })(e, [], Object.create(null)),
        C = (e) =>
          new Proxy(S, {
            get(t, r) {
              if ('string' == typeof r && 'then' !== r) return e(r);
            },
          }),
        x = {
          INTERNAL_SERVER_ERROR: -32603,
          BAD_GATEWAY: -32603,
          SERVICE_UNAVAILABLE: -32603,
          GATEWAY_TIMEOUT: -32603,
        },
        N = Symbol();
      function k(e, ...t) {
        let r = Object.assign(Object.create(null), e);
        for (let e of t)
          for (let t in e) {
            if (t in r && r[t] !== e[t]) throw Error(`Duplicate key ${t}`);
            r[t] = e[t];
          }
        return r;
      }
      function A(e) {
        return !!e && !Array.isArray(e) && 'object' == typeof e;
      }
      function T(e) {
        return Object.assign(Object.create(null), e);
      }
      let P = 'function' == typeof Symbol && !!Symbol.asyncIterator;
      function I(e) {
        return P && A(e) && Symbol.asyncIterator in e;
      }
      function D(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class M extends Error {}
      function j(e) {
        if (e instanceof q || (e instanceof Error && 'TRPCError' === e.name))
          return e;
        let t = new q({ code: 'INTERNAL_SERVER_ERROR', cause: e });
        return e instanceof Error && e.stack && (t.stack = e.stack), t;
      }
      class q extends Error {
        constructor(e) {
          let t = (function (e) {
            if (e instanceof Error) return e;
            let t = typeof e;
            if ('undefined' !== t && 'function' !== t && null !== e) {
              if ('object' !== t) return Error(String(e));
              if (A(e)) {
                let t = new M();
                for (let r in e) t[r] = e[r];
                return t;
              }
            }
          })(e.cause);
          super(e.message ?? t?.message ?? e.code, { cause: t }),
            D(this, 'cause', void 0),
            D(this, 'code', void 0),
            (this.code = e.code),
            (this.name = 'TRPCError'),
            this.cause || (this.cause = t);
        }
      }
      new WeakMap(),
        Symbol.toStringTag,
        (u = Symbol).dispose ?? (u.dispose = Symbol()),
        (l = Symbol).asyncDispose ?? (l.asyncDispose = Symbol()),
        Symbol();
      Symbol(), Symbol('ping');
      let U = {
        input: { serialize: (e) => e, deserialize: (e) => e },
        output: { serialize: (e) => e, deserialize: (e) => e },
      };
      class F extends Error {
        constructor() {
          super('Unable to transform response from server');
        }
      }
      let L = ({ shape: e }) => e,
        Q = 'middlewareMarker';
      class B extends Error {
        constructor(e) {
          super(e[0]?.message),
            (function (e, t, r) {
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r);
            })(this, 'issues', void 0),
            (this.name = 'SchemaError'),
            (this.issues = e);
        }
      }
      function Z(e) {
        if ('function' == typeof e && 'function' == typeof e.assert)
          return e.assert.bind(e);
        if ('function' == typeof e) return e;
        if ('function' == typeof e.parseAsync) return e.parseAsync.bind(e);
        if ('function' == typeof e.parse) return e.parse.bind(e);
        if ('function' == typeof e.validateSync) return e.validateSync.bind(e);
        if ('function' == typeof e.create) return e.create.bind(e);
        if ('function' == typeof e.assert) return (t) => (e.assert(t), t);
        if ('~standard' in e)
          return async (t) => {
            let r = await e['~standard'].validate(t);
            if (r.issues) throw new B(r.issues);
            return r.value;
          };
        throw Error('Could not find a validator fn');
      }
      function z(e, t) {
        let { middlewares: r = [], inputs: n, meta: i, ...s } = t;
        return $({
          ...k(e, s),
          inputs: [...e.inputs, ...(n ?? [])],
          middlewares: [...e.middlewares, ...r],
          meta: e.meta && i ? { ...e.meta, ...i } : (i ?? e.meta),
        });
      }
      function $(e = {}) {
        let t = { procedure: !0, inputs: [], middlewares: [], ...e };
        return {
          _def: t,
          input(e) {
            let r = Z(e);
            return z(t, {
              inputs: [e],
              middlewares: [
                (function (e) {
                  let t = async function (t) {
                    let r;
                    let n = await t.getRawInput();
                    try {
                      r = await e(n);
                    } catch (e) {
                      throw new q({ code: 'BAD_REQUEST', cause: e });
                    }
                    let i = A(t.input) && A(r) ? { ...t.input, ...r } : r;
                    return t.next({ input: i });
                  };
                  return (t._type = 'input'), t;
                })(r),
              ],
            });
          },
          output(e) {
            let r = Z(e);
            return z(t, {
              output: e,
              middlewares: [
                (function (e) {
                  let t = async function ({ next: t }) {
                    let r = await t();
                    if (!r.ok) return r;
                    try {
                      let t = await e(r.data);
                      return { ...r, data: t };
                    } catch (e) {
                      throw new q({
                        message: 'Output validation failed',
                        code: 'INTERNAL_SERVER_ERROR',
                        cause: e,
                      });
                    }
                  };
                  return (t._type = 'output'), t;
                })(r),
              ],
            });
          },
          meta: (e) => z(t, { meta: e }),
          use: (e) =>
            z(t, { middlewares: '_middlewares' in e ? e._middlewares : [e] }),
          unstable_concat: (e) => z(t, e._def),
          query: (e) => H({ ...t, type: 'query' }, e),
          mutation: (e) => H({ ...t, type: 'mutation' }, e),
          subscription: (e) => H({ ...t, type: 'subscription' }, e),
          experimental_caller: (e) => z(t, { caller: e }),
        };
      }
      function H(e, t) {
        let r = z(e, {
            resolver: t,
            middlewares: [
              async function (e) {
                return { marker: Q, ok: !0, data: await t(e), ctx: e.ctx };
              },
            ],
          }),
          n = {
            ...r._def,
            type: e.type,
            experimental_caller: !!r._def.caller,
            meta: r._def.meta,
            $types: null,
          },
          i = (function (e) {
            async function t(t) {
              if (!t || !('getRawInput' in t)) throw Error(W);
              let r = await K(0, e, t);
              if (!r)
                throw new q({
                  code: 'INTERNAL_SERVER_ERROR',
                  message:
                    'No result from middlewares - did you forget to `return next()`?',
                });
              if (!r.ok) throw r.error;
              return r.data;
            }
            return (t._def = e), t;
          })(r._def),
          s = r._def.caller;
        if (!s) return i;
        let a = async (...e) => await s({ args: e, invoke: i, _def: n });
        return (a._def = n), a;
      }
      let W = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
      async function K(e, t, r) {
        try {
          let n = t.middlewares[e];
          return await n({
            ...r,
            meta: t.meta,
            input: r.input,
            next: (n) =>
              K(e + 1, t, {
                ...r,
                ctx: n?.ctx ? { ...r.ctx, ...n.ctx } : r.ctx,
                input: n && 'input' in n ? n.input : r.input,
                getRawInput: n?.getRawInput ?? r.getRawInput,
              }),
          });
        } catch (e) {
          return { ok: !1, error: j(e), marker: Q };
        }
      }
      let V =
          'undefined' == typeof window ||
          'Deno' in window ||
          globalThis.process?.env?.NODE_ENV === 'test' ||
          !!globalThis.process?.env?.JEST_WORKER_ID ||
          !!globalThis.process?.env?.VITEST_WORKER_ID,
        G = {
          _ctx: null,
          _errorShape: null,
          _meta: null,
          queries: {},
          mutations: {},
          subscriptions: {},
          errorFormatter: L,
          transformer: U,
        },
        J = ['then', 'call', 'apply'];
      function Y(e) {
        return function (t) {
          let r = new Set(Object.keys(t).filter((e) => J.includes(e)));
          if (r.size > 0)
            throw Error(
              'Reserved words used in `router({})` call: ' +
                Array.from(r).join(', ')
            );
          let n = T({}),
            i = (function e(t, r = []) {
              let i = T({});
              for (let [s, a] of Object.entries(t ?? {})) {
                if (a._def && 'router' in a._def) {
                  i[s] = e(a._def.record, [...r, s]);
                  continue;
                }
                if (!X(a)) {
                  i[s] = e(a, [...r, s]);
                  continue;
                }
                let t = [...r, s].join('.');
                if (n[t]) throw Error(`Duplicate key: ${t}`);
                (n[t] = a), (i[s] = a);
              }
              return i;
            })(t),
            s = { _config: e, router: !0, procedures: n, ...G, record: i };
          return { ...i, _def: s, createCaller: ee()({ _def: s }) };
        };
      }
      function X(e) {
        return 'function' == typeof e;
      }
      function ee() {
        return function (e) {
          let t = e._def;
          return function (e, r) {
            return R(async ({ path: n, args: i }) => {
              let s;
              let a = n.join('.');
              if (1 === n.length && '_def' === n[0]) return t;
              let o = t.procedures[a];
              try {
                return (
                  (s = 'function' == typeof e ? await Promise.resolve(e()) : e),
                  await o({
                    path: a,
                    getRawInput: async () => i[0],
                    ctx: s,
                    type: o._def.type,
                    signal: r?.signal,
                  })
                );
              } catch (e) {
                throw (
                  (r?.onError?.({
                    ctx: s,
                    error: j(e),
                    input: i[0],
                    path: a,
                    type: o._def.type,
                  }),
                  e)
                );
              }
            });
          };
        };
      }
      function et(...e) {
        let t = k({}, ...e.map((e) => e._def.record));
        return Y({
          errorFormatter: e.reduce((e, t) => {
            if (
              t._def._config.errorFormatter &&
              t._def._config.errorFormatter !== L
            ) {
              if (e !== L && e !== t._def._config.errorFormatter)
                throw Error('You seem to have several error formatters');
              return t._def._config.errorFormatter;
            }
            return e;
          }, L),
          transformer: e.reduce((e, t) => {
            if (
              t._def._config.transformer &&
              t._def._config.transformer !== U
            ) {
              if (e !== U && e !== t._def._config.transformer)
                throw Error('You seem to have several transformers');
              return t._def._config.transformer;
            }
            return e;
          }, U),
          isDev: e.every((e) => e._def._config.isDev),
          allowOutsideOfServer: e.every(
            (e) => e._def._config.allowOutsideOfServer
          ),
          isServer: e.every((e) => e._def._config.isServer),
          $types: e[0]?._def._config.$types,
        })(t);
      }
      class er {
        context() {
          return new er();
        }
        meta() {
          return new er();
        }
        create(e) {
          var t;
          let r = {
            ...e,
            transformer:
              'input' in (t = e?.transformer ?? U)
                ? t
                : { input: t, output: t },
            isDev:
              e?.isDev ?? globalThis.process?.env.NODE_ENV !== 'production',
            allowOutsideOfServer: e?.allowOutsideOfServer ?? !1,
            errorFormatter: e?.errorFormatter ?? L,
            isServer: e?.isServer ?? V,
            $types: null,
          };
          if (!(e?.isServer ?? V) && e?.allowOutsideOfServer !== !0)
            throw Error(
              "You're trying to use @trpc/server in a non-server environment. This is not supported by default."
            );
          return {
            _config: r,
            procedure: $({ meta: e?.defaultMeta }),
            middleware: function (e) {
              return (function e(t) {
                return {
                  _middlewares: t,
                  unstable_pipe: (r) =>
                    e([...t, ...('_middlewares' in r ? r._middlewares : [r])]),
                };
              })([e]);
            },
            router: Y(r),
            mergeRouters: et,
            createCallerFactory: ee(),
          };
        }
      }
      let en = new er();
      function ei(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class es extends Error {
        static from(e, t = {}) {
          return e instanceof es ||
            (e instanceof Error && 'TRPCClientError' === e.name)
            ? (t.meta && (e.meta = { ...e.meta, ...t.meta }), e)
            : A(e) &&
                A(e.error) &&
                'number' == typeof e.error.code &&
                'string' == typeof e.error.message
              ? new es(e.error.message, { ...t, result: e })
              : new es(
                  'string' == typeof e
                    ? e
                    : A(e) && 'string' == typeof e.message
                      ? e.message
                      : 'Unknown error',
                  { ...t, cause: e }
                );
        }
        constructor(e, t) {
          let r = t?.cause;
          super(e, { cause: r }),
            ei(this, 'cause', void 0),
            ei(this, 'shape', void 0),
            ei(this, 'data', void 0),
            ei(this, 'meta', void 0),
            (this.meta = t?.meta),
            (this.cause = r),
            (this.shape = t?.result?.error),
            (this.data = t?.result?.error.data),
            (this.name = 'TRPCClientError'),
            Object.setPrototypeOf(this, es.prototype);
        }
      }
      function ea(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class eo {
        $request(e) {
          var t;
          return ((t = {
            links: this.links,
            op: { ...e, context: e.context ?? {}, id: ++this.requestId },
          }),
          _((e) =>
            (function e(r = 0, n = t.op) {
              let i = t.links[r];
              if (!i)
                throw Error(
                  'No more links to execute - did you forget to add an ending link?'
                );
              return i({ op: n, next: (t) => e(r + 1, t) });
            })().subscribe(e)
          )).pipe((e) => {
            let t = 0,
              r = null,
              n = [];
            return _(
              (i) => (
                t++,
                n.push(i),
                r ||
                  (r = e.subscribe({
                    next(e) {
                      for (let t of n) t.next?.(e);
                    },
                    error(e) {
                      for (let t of n) t.error?.(e);
                    },
                    complete() {
                      for (let e of n) e.complete?.();
                    },
                  })),
                {
                  unsubscribe() {
                    t--,
                      (function () {
                        if (0 === t && r) {
                          let e = r;
                          (r = null), e.unsubscribe();
                        }
                      })();
                    let e = n.findIndex((e) => e === i);
                    e > -1 && n.splice(e, 1);
                  },
                }
              )
            );
          });
        }
        async requestAsPromise(e) {
          try {
            let t = this.$request(e);
            return (
              await (function (e) {
                let t = new AbortController();
                return new Promise((r, n) => {
                  let i = !1;
                  function s() {
                    i || ((i = !0), a.unsubscribe());
                  }
                  t.signal.addEventListener('abort', () => {
                    n(t.signal.reason);
                  });
                  let a = e.subscribe({
                    next(e) {
                      (i = !0), r(e), s();
                    },
                    error(e) {
                      n(e);
                    },
                    complete() {
                      t.abort(), s();
                    },
                  });
                });
              })(t)
            ).result.data;
          } catch (e) {
            throw es.from(e);
          }
        }
        query(e, t, r) {
          return this.requestAsPromise({
            type: 'query',
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        mutation(e, t, r) {
          return this.requestAsPromise({
            type: 'mutation',
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        subscription(e, t, r) {
          return this.$request({
            type: 'subscription',
            path: e,
            input: t,
            context: r.context,
            signal: r.signal,
          }).subscribe({
            next(e) {
              switch (e.result.type) {
                case 'state':
                  r.onConnectionStateChange?.(e.result);
                  break;
                case 'started':
                  r.onStarted?.({ context: e.context });
                  break;
                case 'stopped':
                  r.onStopped?.();
                  break;
                case 'data':
                case void 0:
                  r.onData?.(e.result.data);
              }
            },
            error(e) {
              r.onError?.(e);
            },
            complete() {
              r.onComplete?.();
            },
          });
        }
        constructor(e) {
          ea(this, 'links', void 0),
            ea(this, 'runtime', void 0),
            ea(this, 'requestId', void 0),
            (this.requestId = 0),
            (this.runtime = {}),
            (this.links = e.links.map((e) => e(this.runtime)));
        }
      }
      let eu = {
          query: 'query',
          mutate: 'mutation',
          subscribe: 'subscription',
        },
        el = (e) => eu[e];
      function ec(e) {
        let t = R(({ path: t, args: r }) => {
          let n = [...t],
            i = el(n.pop()),
            s = n.join('.');
          return e[i](s, ...r);
        });
        return C((r) =>
          e.hasOwnProperty(r) ? e[r] : '__untypedClient' === r ? e : t[r]
        );
      }
      function eh(e) {
        return ec(new eo(e));
      }
      function ed(e) {
        return e.__untypedClient;
      }
      let ef = () => {
        throw Error(
          'Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new'
        );
      };
      function ep(e) {
        let t = null,
          r = null,
          n = () => {
            clearTimeout(r), (r = null), (t = null);
          };
        function i() {
          let r = (function (t) {
            let r = [[]],
              n = 0;
            for (;;) {
              let i = t[n];
              if (!i) break;
              let s = r[r.length - 1];
              if (i.aborted) {
                i.reject?.(Error('Aborted')), n++;
                continue;
              }
              if (e.validate(s.concat(i).map((e) => e.key))) {
                s.push(i), n++;
                continue;
              }
              if (0 === s.length) {
                i.reject?.(Error('Input is too big for a single dispatch')),
                  n++;
                continue;
              }
              r.push([]);
            }
            return r;
          })(t);
          for (let t of (n(), r)) {
            if (!t.length) continue;
            let r = { items: t };
            for (let e of t) e.batch = r;
            e.fetch(r.items.map((e) => e.key))
              .then(async (e) => {
                for (let t of (await Promise.all(
                  e.map(async (e, t) => {
                    let n = r.items[t];
                    try {
                      let t = await Promise.resolve(e);
                      n.resolve?.(t);
                    } catch (e) {
                      n.reject?.(e);
                    }
                    (n.batch = null), (n.reject = null), (n.resolve = null);
                  })
                ),
                r.items))
                  t.reject?.(Error('Missing result')), (t.batch = null);
              })
              .catch((e) => {
                for (let t of r.items) t.reject?.(e), (t.batch = null);
              });
          }
        }
        return {
          load: function (e) {
            let n = {
                aborted: !1,
                key: e,
                batch: null,
                resolve: ef,
                reject: ef,
              },
              s = new Promise((e, r) => {
                (n.reject = r), (n.resolve = e), t || (t = []), t.push(n);
              });
            return r || (r = setTimeout(i)), s;
          },
        };
      }
      let em = (e) => 'function' == typeof e;
      function eg(e) {
        return e
          ? 'input' in e
            ? e
            : { input: e, output: e }
          : {
              input: { serialize: (e) => e, deserialize: (e) => e },
              output: { serialize: (e) => e, deserialize: (e) => e },
            };
      }
      let ey = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
      function ev(e) {
        return 'input' in e
          ? e.transformer.input.serialize(e.input)
          : (function (e) {
              let t = {};
              for (let r = 0; r < e.length; r++) {
                let n = e[r];
                t[r] = n;
              }
              return t;
            })(e.inputs.map((t) => e.transformer.input.serialize(t)));
      }
      let eb = (e) => {
          let t = e.url.split('?'),
            r = t[0].replace(/\/$/, '') + '/' + e.path,
            n = [];
          if (
            (t[1] && n.push(t[1]),
            'inputs' in e && n.push('batch=1'),
            'query' === e.type || 'subscription' === e.type)
          ) {
            let t = ev(e);
            void 0 !== t &&
              'POST' !== e.methodOverride &&
              n.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
          }
          return n.length && (r += '?' + n.join('&')), r;
        },
        ew = (e) => {
          if ('query' === e.type && 'POST' !== e.methodOverride) return;
          let t = ev(e);
          return void 0 !== t ? JSON.stringify(t) : void 0;
        },
        e_ = (e) =>
          eR({
            ...e,
            contentTypeHeader: 'application/json',
            getUrl: eb,
            getBody: ew,
          });
      class eE extends Error {
        constructor() {
          let e = 'AbortError';
          super(e), (this.name = e), (this.message = e);
        }
      }
      let eS = (e) => {
        if (e?.aborted) {
          if ((e.throwIfAborted?.(), 'undefined' != typeof DOMException))
            throw new DOMException('AbortError', 'AbortError');
          throw new eE();
        }
      };
      async function eO(e) {
        eS(e.signal);
        let t = e.getUrl(e),
          r = e.getBody(e),
          { type: n } = e,
          i = await (async () => {
            let t = await e.headers();
            return Symbol.iterator in t ? Object.fromEntries(t) : t;
          })(),
          s = {
            ...(e.contentTypeHeader
              ? { 'content-type': e.contentTypeHeader }
              : {}),
            ...(e.trpcAcceptHeader
              ? { 'trpc-accept': e.trpcAcceptHeader }
              : void 0),
            ...i,
          };
        return (function (e) {
          if (e) return e;
          if ('undefined' != typeof window && em(window.fetch))
            return window.fetch;
          if ('undefined' != typeof globalThis && em(globalThis.fetch))
            return globalThis.fetch;
          throw Error('No fetch implementation found');
        })(e.fetch)(t, {
          method: e.methodOverride ?? ey[n],
          signal: e.signal,
          body: r,
          headers: s,
        });
      }
      async function eR(e) {
        let t = {},
          r = await eO(e);
        t.response = r;
        let n = await r.json();
        return (t.responseJSON = n), { json: n, meta: t };
      }
      class eC extends Error {
        constructor(e) {
          super(e?.message ?? 'WebSocket closed', { cause: e?.cause }),
            (this.name = 'TRPCWebSocketClosedError'),
            Object.setPrototypeOf(this, eC.prototype);
        }
      }
      x.BAD_GATEWAY,
        x.SERVICE_UNAVAILABLE,
        x.GATEWAY_TIMEOUT,
        x.INTERNAL_SERVER_ERROR;
      var ex = r(8101),
        eN = ex.createContext(void 0),
        ek = (e) => {
          let t = ex.useContext(eN);
          if (e) return e;
          if (!t)
            throw Error(
              'No QueryClient set, use QueryClientProvider to set one'
            );
          return t;
        },
        eA = ({ client: e, children: t }) => (
          ex.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          ),
          (0, v.jsx)(eN.Provider, { value: e, children: t })
        );
      function eT(e) {
        return e;
      }
      function eP(e) {
        return e.state.isPaused;
      }
      function eI(e) {
        return 'success' === e.state.status;
      }
      function eD(e, t, r) {
        if ('object' != typeof t || null === t) return;
        let n = e.getMutationCache(),
          i = e.getQueryCache(),
          s =
            r?.defaultOptions?.deserializeData ??
            e.getDefaultOptions().hydrate?.deserializeData ??
            eT,
          a = t.mutations || [],
          o = t.queries || [];
        a.forEach(({ state: t, ...i }) => {
          n.build(
            e,
            {
              ...e.getDefaultOptions().hydrate?.mutations,
              ...r?.defaultOptions?.mutations,
              ...i,
            },
            t
          );
        }),
          o.forEach(
            ({ queryKey: t, state: n, queryHash: a, meta: o, promise: u }) => {
              let l = i.get(a),
                c = void 0 === n.data ? n.data : s(n.data);
              if (l) {
                if (l.state.dataUpdatedAt < n.dataUpdatedAt) {
                  let { fetchStatus: e, ...t } = n;
                  l.setState({ ...t, data: c });
                }
              } else
                l = i.build(
                  e,
                  {
                    ...e.getDefaultOptions().hydrate?.queries,
                    ...r?.defaultOptions?.queries,
                    queryKey: t,
                    queryHash: a,
                    meta: o,
                  },
                  { ...n, data: c, fetchStatus: 'idle' }
                );
              if (u) {
                let e = Promise.resolve(u).then(s);
                l.fetch(void 0, { initialPromise: e });
              }
            }
          );
      }
      var eM = ({ children: e, options: t = {}, state: r, queryClient: n }) => {
        let i = ek(n),
          [s, a] = ex.useState(),
          o = ex.useRef(t);
        return (
          (o.current = t),
          ex.useMemo(() => {
            if (r) {
              if ('object' != typeof r) return;
              let e = i.getQueryCache(),
                t = r.queries || [],
                n = [],
                u = [];
              for (let r of t) {
                let t = e.get(r.queryHash);
                if (t) {
                  let e = r.state.dataUpdatedAt > t.state.dataUpdatedAt,
                    n = s?.find((e) => e.queryHash === r.queryHash);
                  e &&
                    (!n || r.state.dataUpdatedAt > n.state.dataUpdatedAt) &&
                    u.push(r);
                } else n.push(r);
              }
              n.length > 0 && eD(i, { queries: n }, o.current),
                u.length > 0 && a((e) => (e ? [...e, ...u] : u));
            }
          }, [i, s, r]),
          ex.useEffect(() => {
            s && (eD(i, { queries: s }, o.current), a(void 0));
          }, [i, s]),
          e
        );
      };
      let ej = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
        eq = ex.createContext?.(null);
      var eU = 'undefined' == typeof window || 'Deno' in globalThis;
      function eF() {}
      function eL(e) {
        return 'number' == typeof e && e >= 0 && e !== 1 / 0;
      }
      function eQ(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function eB(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function eZ(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function ez(e, t) {
        let {
          type: r = 'all',
          exact: n,
          fetchStatus: i,
          predicate: s,
          queryKey: a,
          stale: o,
        } = e;
        if (a) {
          if (n) {
            if (t.queryHash !== eH(a, t.options)) return !1;
          } else if (!eK(t.queryKey, a)) return !1;
        }
        if ('all' !== r) {
          let e = t.isActive();
          if (('active' === r && !e) || ('inactive' === r && e)) return !1;
        }
        return (
          ('boolean' != typeof o || t.isStale() === o) &&
          (!i || i === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function e$(e, t) {
        let { exact: r, status: n, predicate: i, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (eW(t.options.mutationKey) !== eW(s)) return !1;
          } else if (!eK(t.options.mutationKey, s)) return !1;
        }
        return (!n || t.state.status === n) && (!i || !!i(t));
      }
      function eH(e, t) {
        return (t?.queryKeyHashFn || eW)(e);
      }
      function eW(e) {
        return JSON.stringify(e, (e, t) =>
          eY(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function eK(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            'object' == typeof e &&
            'object' == typeof t &&
            !Object.keys(t).some((r) => !eK(e[r], t[r])))
        );
      }
      function eV(e, t) {
        if (e === t) return e;
        let r = eJ(e) && eJ(t);
        if (r || (eY(e) && eY(t))) {
          let n = r ? e : Object.keys(e),
            i = n.length,
            s = r ? t : Object.keys(t),
            a = s.length,
            o = r ? [] : {},
            u = 0;
          for (let i = 0; i < a; i++) {
            let a = r ? i : s[i];
            ((!r && n.includes(a)) || r) && void 0 === e[a] && void 0 === t[a]
              ? ((o[a] = void 0), u++)
              : ((o[a] = eV(e[a], t[a])),
                o[a] === e[a] && void 0 !== e[a] && u++);
          }
          return i === a && u === i ? e : o;
        }
        return t;
      }
      function eG(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function eJ(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function eY(e) {
        if (!eX(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return (
          !!(eX(r) && r.hasOwnProperty('isPrototypeOf')) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function eX(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      function e0(e, t, r) {
        return 'function' == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
            ? eV(e, t)
            : t;
      }
      function e1(e, t, r = 0) {
        let n = [...e, t];
        return r && n.length > r ? n.slice(1) : n;
      }
      function e2(e, t, r = 0) {
        let n = [t, ...e];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var e5 = Symbol();
      function e4(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== e5
            ? e.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function e6(e, t, r) {
        let n = e.flatMap((e) => e.split('.'));
        if (!t && (!r || 'any' === r)) return n.length ? [n] : [];
        if ('infinite' === r && A(t) && ('direction' in t || 'cursor' in t)) {
          let { cursor: e, direction: r, ...i } = t;
          return [n, { input: i, type: 'infinite' }];
        }
        return [
          n,
          {
            ...(void 0 !== t && t !== e5 && { input: t }),
            ...(r && 'any' !== r && { type: r }),
          },
        ];
      }
      function e3(e) {
        return e6(e, void 0, 'any');
      }
      let e8 = (e) => {
        switch (e) {
          case 'queryOptions':
          case 'fetch':
          case 'ensureData':
          case 'prefetch':
          case 'getData':
          case 'setData':
          case 'setQueriesData':
            return 'query';
          case 'infiniteQueryOptions':
          case 'fetchInfinite':
          case 'prefetchInfinite':
          case 'getInfiniteData':
          case 'setInfiniteData':
            return 'infinite';
          case 'setMutationDefaults':
          case 'getMutationDefaults':
          case 'isMutating':
          case 'cancel':
          case 'invalidate':
          case 'refetch':
          case 'reset':
            return 'any';
        }
      };
      function e9(e) {
        let t = e instanceof eo ? e : ed(e);
        return R((e) => {
          let r = e.path,
            n = r.join('.'),
            [i, s] = e.args;
          return {
            queryKey: e6(r, i, 'query'),
            queryFn: () => t.query(n, i, s?.trpc),
            ...s,
          };
        });
      }
      var e7 = class {
          constructor() {
            (this.listeners = new Set()),
              (this.subscribe = this.subscribe.bind(this));
          }
          subscribe(e) {
            return (
              this.listeners.add(e),
              this.onSubscribe(),
              () => {
                this.listeners.delete(e), this.onUnsubscribe();
              }
            );
          }
          hasListeners() {
            return this.listeners.size > 0;
          }
          onSubscribe() {}
          onUnsubscribe() {}
        },
        te = new (class extends e7 {
          #e;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!eU && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener('visibilitychange', t, !1),
                    () => {
                      window.removeEventListener('visibilitychange', t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#r = e),
              this.#t?.(),
              (this.#t = e((e) => {
                'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#e !== e && ((this.#e = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return 'boolean' == typeof this.#e
              ? this.#e
              : globalThis.document?.visibilityState !== 'hidden';
          }
        })(),
        tt = (function () {
          let e = [],
            t = 0,
            r = (e) => {
              e();
            },
            n = (e) => {
              e();
            },
            i = (e) => setTimeout(e, 0),
            s = (n) => {
              t
                ? e.push(n)
                : i(() => {
                    r(n);
                  });
            },
            a = () => {
              let t = e;
              (e = []),
                t.length &&
                  i(() => {
                    n(() => {
                      t.forEach((e) => {
                        r(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let r;
              t++;
              try {
                r = e();
              } finally {
                --t || a();
              }
              return r;
            },
            batchCalls:
              (e) =>
              (...t) => {
                s(() => {
                  e(...t);
                });
              },
            schedule: s,
            setNotifyFunction: (e) => {
              r = e;
            },
            setBatchNotifyFunction: (e) => {
              n = e;
            },
            setScheduler: (e) => {
              i = e;
            },
          };
        })(),
        tr = new (class extends e7 {
          #n = !0;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!eU && window.addEventListener) {
                  let t = () => e(!0),
                    r = () => e(!1);
                  return (
                    window.addEventListener('online', t, !1),
                    window.addEventListener('offline', r, !1),
                    () => {
                      window.removeEventListener('online', t),
                        window.removeEventListener('offline', r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#r = e),
              this.#t?.(),
              (this.#t = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#n !== e &&
              ((this.#n = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#n;
          }
        })();
      function tn() {
        let e, t;
        let r = new Promise((r, n) => {
          (e = r), (t = n);
        });
        function n(e) {
          Object.assign(r, e), delete r.resolve, delete r.reject;
        }
        return (
          (r.status = 'pending'),
          r.catch(() => {}),
          (r.resolve = (t) => {
            n({ status: 'fulfilled', value: t }), e(t);
          }),
          (r.reject = (e) => {
            n({ status: 'rejected', reason: e }), t(e);
          }),
          r
        );
      }
      function ti(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function ts(e) {
        return (e ?? 'online') !== 'online' || tr.isOnline();
      }
      var ta = class extends Error {
        constructor(e) {
          super('CancelledError'),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function to(e) {
        return e instanceof ta;
      }
      function tu(e) {
        let t,
          r = !1,
          n = 0,
          i = !1,
          s = tn(),
          a = () =>
            te.isFocused() &&
            ('always' === e.networkMode || tr.isOnline()) &&
            e.canRun(),
          o = () => ts(e.networkMode) && e.canRun(),
          u = (r) => {
            i || ((i = !0), e.onSuccess?.(r), t?.(), s.resolve(r));
          },
          l = (r) => {
            i || ((i = !0), e.onError?.(r), t?.(), s.reject(r));
          },
          c = () =>
            new Promise((r) => {
              (t = (e) => {
                (i || a()) && r(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), i || e.onContinue?.();
            }),
          h = () => {
            let t;
            if (i) return;
            let s = 0 === n ? e.initialPromise : void 0;
            try {
              t = s ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(u)
              .catch((t) => {
                if (i) return;
                let s = e.retry ?? (eU ? 0 : 3),
                  o = e.retryDelay ?? ti,
                  u = 'function' == typeof o ? o(n, t) : o,
                  d =
                    !0 === s ||
                    ('number' == typeof s && n < s) ||
                    ('function' == typeof s && s(n, t));
                if (r || !d) {
                  l(t);
                  return;
                }
                n++,
                  e.onFail?.(n, t),
                  new Promise((e) => {
                    setTimeout(e, u);
                  })
                    .then(() => (a() ? void 0 : c()))
                    .then(() => {
                      r ? l(t) : h();
                    });
              });
          };
        return {
          promise: s,
          cancel: (t) => {
            i || (l(new ta(t)), e.abort?.());
          },
          continue: () => (t?.(), s),
          cancelRetry: () => {
            r = !0;
          },
          continueRetry: () => {
            r = !1;
          },
          canStart: o,
          start: () => (o() ? h() : c().then(h), s),
        };
      }
      var tl = class {
          #i;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              eL(this.gcTime) &&
                (this.#i = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (eU ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#i && (clearTimeout(this.#i), (this.#i = void 0));
          }
        },
        tc = class extends tl {
          #s;
          #a;
          #o;
          #u;
          #l;
          #c;
          #h;
          constructor(e) {
            super(),
              (this.#h = !1),
              (this.#c = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#u = e.client),
              (this.#o = this.#u.getQueryCache()),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#s = (function (e) {
                let t =
                    'function' == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== t,
                  n = r
                    ? 'function' == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? (n ?? Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? 'success' : 'pending',
                  fetchStatus: 'idle',
                };
              })(this.options)),
              (this.state = e.state ?? this.#s),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#l?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#c, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              'idle' !== this.state.fetchStatus ||
              this.#o.remove(this);
          }
          setData(e, t) {
            let r = e0(this.state.data, e, this.options);
            return (
              this.#d({
                data: r,
                type: 'success',
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              r
            );
          }
          setState(e, t) {
            this.#d({ type: 'setState', state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#l?.promise;
            return (
              this.#l?.cancel(e), t ? t.then(eF).catch(eF) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#s);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== eZ(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === e5 ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !eQ(this.state.dataUpdatedAt, e)
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#l?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#l?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#o.notify({
                type: 'observerAdded',
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#l &&
                  (this.#h
                    ? this.#l.cancel({ revert: !0 })
                    : this.#l.cancelRetry()),
                this.scheduleGc()),
              this.#o.notify({
                type: 'observerRemoved',
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#d({ type: 'invalidate' });
          }
          fetch(e, t) {
            if ('idle' !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#l) return this.#l.continueRetry(), this.#l.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let r = new AbortController(),
              n = (e) => {
                Object.defineProperty(e, 'signal', {
                  enumerable: !0,
                  get: () => ((this.#h = !0), r.signal),
                });
              },
              i = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#u,
                state: this.state,
                fetchFn: () => {
                  let e = e4(this.options, t),
                    r = {
                      client: this.#u,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                  return (n(r), (this.#h = !1), this.options.persister)
                    ? this.options.persister(e, r, this)
                    : e(r);
                },
              };
            n(i),
              this.options.behavior?.onFetch(i, this),
              (this.#a = this.state),
              ('idle' === this.state.fetchStatus ||
                this.state.fetchMeta !== i.fetchOptions?.meta) &&
                this.#d({ type: 'fetch', meta: i.fetchOptions?.meta });
            let s = (e) => {
              (to(e) && e.silent) || this.#d({ type: 'error', error: e }),
                to(e) ||
                  (this.#o.config.onError?.(e, this),
                  this.#o.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#l = tu({
                initialPromise: t?.initialPromise,
                fn: i.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (e) => {
                  if (void 0 === e) {
                    s(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(e);
                  } catch (e) {
                    s(e);
                    return;
                  }
                  this.#o.config.onSuccess?.(e, this),
                    this.#o.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: s,
                onFail: (e, t) => {
                  this.#d({ type: 'failed', failureCount: e, error: t });
                },
                onPause: () => {
                  this.#d({ type: 'pause' });
                },
                onContinue: () => {
                  this.#d({ type: 'continue' });
                },
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: () => !0,
              })),
              this.#l.start()
            );
          }
          #d(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case 'failed':
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case 'pause':
                  return { ...t, fetchStatus: 'paused' };
                case 'continue':
                  return { ...t, fetchStatus: 'fetching' };
                case 'fetch':
                  return {
                    ...t,
                    ...th(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case 'success':
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: 'success',
                    ...(!e.manual && {
                      fetchStatus: 'idle',
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case 'error':
                  let r = e.error;
                  if (to(r) && r.revert && this.#a)
                    return { ...this.#a, fetchStatus: 'idle' };
                  return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: 'idle',
                    status: 'error',
                  };
                case 'invalidate':
                  return { ...t, isInvalidated: !0 };
                case 'setState':
                  return { ...t, ...e.state };
              }
            })(this.state)),
              tt.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#o.notify({ query: this, type: 'updated', action: e });
              });
          }
        };
      function th(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: ts(t.networkMode) ? 'fetching' : 'paused',
          ...(void 0 === e && { error: null, status: 'pending' }),
        };
      }
      var td = class extends e7 {
        constructor(e, t) {
          super(),
            (this.options = t),
            (this.#u = e),
            (this.#f = null),
            (this.#p = tn()),
            this.options.experimental_prefetchInRender ||
              this.#p.reject(
                Error(
                  'experimental_prefetchInRender feature flag is not enabled'
                )
              ),
            this.bindMethods(),
            this.setOptions(t);
        }
        #u;
        #m = void 0;
        #g = void 0;
        #y = void 0;
        #v;
        #b;
        #p;
        #f;
        #w;
        #_;
        #E;
        #S;
        #O;
        #R;
        #C = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#m.addObserver(this),
            tf(this.#m, this.options) ? this.#x() : this.updateResult(),
            this.#N());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return tp(this.#m, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return tp(this.#m, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          (this.listeners = new Set()),
            this.#k(),
            this.#A(),
            this.#m.removeObserver(this);
        }
        setOptions(e, t) {
          let r = this.options,
            n = this.#m;
          if (
            ((this.options = this.#u.defaultQueryOptions(e)),
            void 0 !== this.options.enabled &&
              'boolean' != typeof this.options.enabled &&
              'function' != typeof this.options.enabled &&
              'boolean' != typeof eZ(this.options.enabled, this.#m))
          )
            throw Error(
              'Expected enabled to be a boolean or a callback that returns a boolean'
            );
          this.#T(),
            this.#m.setOptions(this.options),
            r._defaulted &&
              !eG(this.options, r) &&
              this.#u
                .getQueryCache()
                .notify({
                  type: 'observerOptionsUpdated',
                  query: this.#m,
                  observer: this,
                });
          let i = this.hasListeners();
          i && tm(this.#m, n, this.options, r) && this.#x(),
            this.updateResult(t),
            i &&
              (this.#m !== n ||
                eZ(this.options.enabled, this.#m) !== eZ(r.enabled, this.#m) ||
                eB(this.options.staleTime, this.#m) !==
                  eB(r.staleTime, this.#m)) &&
              this.#P();
          let s = this.#I();
          i &&
            (this.#m !== n ||
              eZ(this.options.enabled, this.#m) !== eZ(r.enabled, this.#m) ||
              s !== this.#R) &&
            this.#D(s);
        }
        getOptimisticResult(e) {
          let t = this.#u.getQueryCache().build(this.#u, e),
            r = this.createResult(t, e);
          return (
            eG(this.getCurrentResult(), r) ||
              ((this.#y = r),
              (this.#b = this.options),
              (this.#v = this.#m.state)),
            r
          );
        }
        getCurrentResult() {
          return this.#y;
        }
        trackResult(e, t) {
          let r = {};
          return (
            Object.keys(e).forEach((n) => {
              Object.defineProperty(r, n, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackProp(n), t?.(n), e[n]),
              });
            }),
            r
          );
        }
        trackProp(e) {
          this.#C.add(e);
        }
        getCurrentQuery() {
          return this.#m;
        }
        refetch({ ...e } = {}) {
          return this.fetch({ ...e });
        }
        fetchOptimistic(e) {
          let t = this.#u.defaultQueryOptions(e),
            r = this.#u.getQueryCache().build(this.#u, t);
          return r.fetch().then(() => this.createResult(r, t));
        }
        fetch(e) {
          return this.#x({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#y)
          );
        }
        #x(e) {
          this.#T();
          let t = this.#m.fetch(this.options, e);
          return e?.throwOnError || (t = t.catch(eF)), t;
        }
        #P() {
          this.#k();
          let e = eB(this.options.staleTime, this.#m);
          if (eU || this.#y.isStale || !eL(e)) return;
          let t = eQ(this.#y.dataUpdatedAt, e);
          this.#S = setTimeout(() => {
            this.#y.isStale || this.updateResult();
          }, t + 1);
        }
        #I() {
          return (
            ('function' == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#m)
              : this.options.refetchInterval) ?? !1
          );
        }
        #D(e) {
          this.#A(),
            (this.#R = e),
            !eU &&
              !1 !== eZ(this.options.enabled, this.#m) &&
              eL(this.#R) &&
              0 !== this.#R &&
              (this.#O = setInterval(() => {
                (this.options.refetchIntervalInBackground || te.isFocused()) &&
                  this.#x();
              }, this.#R));
        }
        #N() {
          this.#P(), this.#D(this.#I());
        }
        #k() {
          this.#S && (clearTimeout(this.#S), (this.#S = void 0));
        }
        #A() {
          this.#O && (clearInterval(this.#O), (this.#O = void 0));
        }
        createResult(e, t) {
          let r;
          let n = this.#m,
            i = this.options,
            s = this.#y,
            a = this.#v,
            o = this.#b,
            u = e !== n ? e.state : this.#g,
            { state: l } = e,
            c = { ...l },
            h = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              s = !r && tf(e, t),
              a = r && tm(e, n, t, i);
            (s || a) && (c = { ...c, ...th(l.data, e.options) }),
              'isRestoring' === t._optimisticResults &&
                (c.fetchStatus = 'idle');
          }
          let { error: d, errorUpdatedAt: f, status: p } = c;
          if (t.select && void 0 !== c.data) {
            if (s && c.data === a?.data && t.select === this.#w) r = this.#_;
            else
              try {
                (this.#w = t.select),
                  (r = t.select(c.data)),
                  (r = e0(s?.data, r, t)),
                  (this.#_ = r),
                  (this.#f = null);
              } catch (e) {
                this.#f = e;
              }
          } else r = c.data;
          if (void 0 !== t.placeholderData && void 0 === r && 'pending' === p) {
            let e;
            if (
              s?.isPlaceholderData &&
              t.placeholderData === o?.placeholderData
            )
              e = s.data;
            else if (
              ((e =
                'function' == typeof t.placeholderData
                  ? t.placeholderData(this.#E?.state.data, this.#E)
                  : t.placeholderData),
              t.select && void 0 !== e)
            )
              try {
                (e = t.select(e)), (this.#f = null);
              } catch (e) {
                this.#f = e;
              }
            void 0 !== e &&
              ((p = 'success'), (r = e0(s?.data, e, t)), (h = !0));
          }
          this.#f &&
            ((d = this.#f), (r = this.#_), (f = Date.now()), (p = 'error'));
          let m = 'fetching' === c.fetchStatus,
            g = 'pending' === p,
            y = 'error' === p,
            v = g && m,
            b = void 0 !== r,
            w = {
              status: p,
              fetchStatus: c.fetchStatus,
              isPending: g,
              isSuccess: 'success' === p,
              isError: y,
              isInitialLoading: v,
              isLoading: v,
              data: r,
              dataUpdatedAt: c.dataUpdatedAt,
              error: d,
              errorUpdatedAt: f,
              failureCount: c.fetchFailureCount,
              failureReason: c.fetchFailureReason,
              errorUpdateCount: c.errorUpdateCount,
              isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
              isFetchedAfterMount:
                c.dataUpdateCount > u.dataUpdateCount ||
                c.errorUpdateCount > u.errorUpdateCount,
              isFetching: m,
              isRefetching: m && !g,
              isLoadingError: y && !b,
              isPaused: 'paused' === c.fetchStatus,
              isPlaceholderData: h,
              isRefetchError: y && b,
              isStale: tg(e, t),
              refetch: this.refetch,
              promise: this.#p,
            };
          if (this.options.experimental_prefetchInRender) {
            let t = (e) => {
                'error' === w.status
                  ? e.reject(w.error)
                  : void 0 !== w.data && e.resolve(w.data);
              },
              r = () => {
                t((this.#p = w.promise = tn()));
              },
              i = this.#p;
            switch (i.status) {
              case 'pending':
                e.queryHash === n.queryHash && t(i);
                break;
              case 'fulfilled':
                ('error' === w.status || w.data !== i.value) && r();
                break;
              case 'rejected':
                ('error' !== w.status || w.error !== i.reason) && r();
            }
          }
          return w;
        }
        updateResult(e) {
          let t = this.#y,
            r = this.createResult(this.#m, this.options);
          if (
            ((this.#v = this.#m.state),
            (this.#b = this.options),
            void 0 !== this.#v.data && (this.#E = this.#m),
            eG(r, t))
          )
            return;
          this.#y = r;
          let n = {};
          e?.listeners !== !1 &&
            (() => {
              if (!t) return !0;
              let { notifyOnChangeProps: e } = this.options,
                r = 'function' == typeof e ? e() : e;
              if ('all' === r || (!r && !this.#C.size)) return !0;
              let n = new Set(r ?? this.#C);
              return (
                this.options.throwOnError && n.add('error'),
                Object.keys(this.#y).some(
                  (e) => this.#y[e] !== t[e] && n.has(e)
                )
              );
            })() &&
            (n.listeners = !0),
            this.#M({ ...n, ...e });
        }
        #T() {
          let e = this.#u.getQueryCache().build(this.#u, this.options);
          if (e === this.#m) return;
          let t = this.#m;
          (this.#m = e),
            (this.#g = e.state),
            this.hasListeners() &&
              (t?.removeObserver(this), e.addObserver(this));
        }
        onQueryUpdate() {
          this.updateResult(), this.hasListeners() && this.#N();
        }
        #M(e) {
          tt.batch(() => {
            e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#y);
              }),
              this.#u
                .getQueryCache()
                .notify({ query: this.#m, type: 'observerResultsUpdated' });
          });
        }
      };
      function tf(e, t) {
        return (
          (!1 !== eZ(t.enabled, e) &&
            void 0 === e.state.data &&
            !('error' === e.state.status && !1 === t.retryOnMount)) ||
          (void 0 !== e.state.data && tp(e, t, t.refetchOnMount))
        );
      }
      function tp(e, t, r) {
        if (!1 !== eZ(t.enabled, e)) {
          let n = 'function' == typeof r ? r(e) : r;
          return 'always' === n || (!1 !== n && tg(e, t));
        }
        return !1;
      }
      function tm(e, t, r, n) {
        return (
          (e !== t || !1 === eZ(n.enabled, e)) &&
          (!r.suspense || 'error' !== e.state.status) &&
          tg(e, r)
        );
      }
      function tg(e, t) {
        return !1 !== eZ(t.enabled, e) && e.isStaleByTime(eB(t.staleTime, e));
      }
      var ty = ex.createContext(
          (function () {
            let e = !1;
            return {
              clearReset: () => {
                e = !1;
              },
              reset: () => {
                e = !0;
              },
              isReset: () => e,
            };
          })()
        ),
        tv = () => ex.useContext(ty);
      function tb(e, t) {
        return 'function' == typeof e ? e(...t) : !!e;
      }
      function tw() {}
      var t_ = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        tE = (e) => {
          ex.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        tS = ({
          result: e,
          errorResetBoundary: t,
          throwOnError: r,
          query: n,
          suspense: i,
        }) =>
          e.isError &&
          !t.isReset() &&
          !e.isFetching &&
          n &&
          ((i && void 0 === e.data) || tb(r, [e.error, n])),
        tO = ex.createContext(!1),
        tR = () => ex.useContext(tO);
      tO.Provider;
      var tC = (e, t) => void 0 === t.state.data,
        tx = (e) => {
          let t = e.staleTime;
          e.suspense &&
            ((e.staleTime =
              'function' == typeof t
                ? (...e) => Math.max(t(...e), 1e3)
                : Math.max(t ?? 1e3, 1e3)),
            'number' == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        tN = (e, t) => e.isLoading && e.isFetching && !t,
        tk = (e, t) => e?.suspense && t.isPending,
        tA = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          });
      function tT(e, t, r) {
        let n = ek(r),
          i = tR(),
          s = tv(),
          a = n.defaultQueryOptions(e);
        n.getDefaultOptions().queries?._experimental_beforeQuery?.(a),
          (a._optimisticResults = i ? 'isRestoring' : 'optimistic'),
          tx(a),
          t_(a, s),
          tE(s);
        let o = !n.getQueryCache().get(a.queryHash),
          [u] = ex.useState(() => new t(n, a)),
          l = u.getOptimisticResult(a),
          c = !i && !1 !== e.subscribed;
        if (
          (ex.useSyncExternalStore(
            ex.useCallback(
              (e) => {
                let t = c ? u.subscribe(tt.batchCalls(e)) : tw;
                return u.updateResult(), t;
              },
              [u, c]
            ),
            () => u.getCurrentResult(),
            () => u.getCurrentResult()
          ),
          ex.useEffect(() => {
            u.setOptions(a, { listeners: !1 });
          }, [a, u]),
          tk(a, l))
        )
          throw tA(a, u, s);
        if (
          tS({
            result: l,
            errorResetBoundary: s,
            throwOnError: a.throwOnError,
            query: n.getQueryCache().get(a.queryHash),
            suspense: a.suspense,
          })
        )
          throw l.error;
        if (
          (n.getDefaultOptions().queries?._experimental_afterQuery?.(a, l),
          a.experimental_prefetchInRender && !eU && tN(l, i))
        ) {
          let e = o ? tA(a, u, s) : n.getQueryCache().get(a.queryHash)?.promise;
          e?.catch(tw).finally(() => {
            u.updateResult();
          });
        }
        return a.notifyOnChangeProps ? l : u.trackResult(l);
      }
      var tP = class extends tl {
        #j;
        #q;
        #l;
        constructor(e) {
          super(),
            (this.mutationId = e.mutationId),
            (this.#q = e.mutationCache),
            (this.#j = []),
            (this.state = e.state || tI()),
            this.setOptions(e.options),
            this.scheduleGc();
        }
        setOptions(e) {
          (this.options = e), this.updateGcTime(this.options.gcTime);
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(e) {
          this.#j.includes(e) ||
            (this.#j.push(e),
            this.clearGcTimeout(),
            this.#q.notify({
              type: 'observerAdded',
              mutation: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          (this.#j = this.#j.filter((t) => t !== e)),
            this.scheduleGc(),
            this.#q.notify({
              type: 'observerRemoved',
              mutation: this,
              observer: e,
            });
        }
        optionalRemove() {
          this.#j.length ||
            ('pending' === this.state.status
              ? this.scheduleGc()
              : this.#q.remove(this));
        }
        continue() {
          return this.#l?.continue() ?? this.execute(this.state.variables);
        }
        async execute(e) {
          this.#l = tu({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e)
                : Promise.reject(Error('No mutationFn found')),
            onFail: (e, t) => {
              this.#d({ type: 'failed', failureCount: e, error: t });
            },
            onPause: () => {
              this.#d({ type: 'pause' });
            },
            onContinue: () => {
              this.#d({ type: 'continue' });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#q.canRun(this),
          });
          let t = 'pending' === this.state.status,
            r = !this.#l.canStart();
          try {
            if (!t) {
              this.#d({ type: 'pending', variables: e, isPaused: r }),
                await this.#q.config.onMutate?.(e, this);
              let t = await this.options.onMutate?.(e);
              t !== this.state.context &&
                this.#d({
                  type: 'pending',
                  context: t,
                  variables: e,
                  isPaused: r,
                });
            }
            let n = await this.#l.start();
            return (
              await this.#q.config.onSuccess?.(n, e, this.state.context, this),
              await this.options.onSuccess?.(n, e, this.state.context),
              await this.#q.config.onSettled?.(
                n,
                null,
                this.state.variables,
                this.state.context,
                this
              ),
              await this.options.onSettled?.(n, null, e, this.state.context),
              this.#d({ type: 'success', data: n }),
              n
            );
          } catch (t) {
            try {
              throw (
                (await this.#q.config.onError?.(t, e, this.state.context, this),
                await this.options.onError?.(t, e, this.state.context),
                await this.#q.config.onSettled?.(
                  void 0,
                  t,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(
                  void 0,
                  t,
                  e,
                  this.state.context
                ),
                t)
              );
            } finally {
              this.#d({ type: 'error', error: t });
            }
          } finally {
            this.#q.runNext(this);
          }
        }
        #d(e) {
          (this.state = ((t) => {
            switch (e.type) {
              case 'failed':
                return {
                  ...t,
                  failureCount: e.failureCount,
                  failureReason: e.error,
                };
              case 'pause':
                return { ...t, isPaused: !0 };
              case 'continue':
                return { ...t, isPaused: !1 };
              case 'pending':
                return {
                  ...t,
                  context: e.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: e.isPaused,
                  status: 'pending',
                  variables: e.variables,
                  submittedAt: Date.now(),
                };
              case 'success':
                return {
                  ...t,
                  data: e.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: 'success',
                  isPaused: !1,
                };
              case 'error':
                return {
                  ...t,
                  data: void 0,
                  error: e.error,
                  failureCount: t.failureCount + 1,
                  failureReason: e.error,
                  isPaused: !1,
                  status: 'error',
                };
            }
          })(this.state)),
            tt.batch(() => {
              this.#j.forEach((t) => {
                t.onMutationUpdate(e);
              }),
                this.#q.notify({ mutation: this, type: 'updated', action: e });
            });
        }
      };
      function tI() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: 'idle',
          variables: void 0,
          submittedAt: 0,
        };
      }
      var tD = class extends e7 {
        #u;
        #y = void 0;
        #U;
        #F;
        constructor(e, t) {
          super(),
            (this.#u = e),
            this.setOptions(t),
            this.bindMethods(),
            this.#L();
        }
        bindMethods() {
          (this.mutate = this.mutate.bind(this)),
            (this.reset = this.reset.bind(this));
        }
        setOptions(e) {
          let t = this.options;
          (this.options = this.#u.defaultMutationOptions(e)),
            eG(this.options, t) ||
              this.#u
                .getMutationCache()
                .notify({
                  type: 'observerOptionsUpdated',
                  mutation: this.#U,
                  observer: this,
                }),
            t?.mutationKey &&
            this.options.mutationKey &&
            eW(t.mutationKey) !== eW(this.options.mutationKey)
              ? this.reset()
              : this.#U?.state.status === 'pending' &&
                this.#U.setOptions(this.options);
        }
        onUnsubscribe() {
          this.hasListeners() || this.#U?.removeObserver(this);
        }
        onMutationUpdate(e) {
          this.#L(), this.#M(e);
        }
        getCurrentResult() {
          return this.#y;
        }
        reset() {
          this.#U?.removeObserver(this),
            (this.#U = void 0),
            this.#L(),
            this.#M();
        }
        mutate(e, t) {
          return (
            (this.#F = t),
            this.#U?.removeObserver(this),
            (this.#U = this.#u.getMutationCache().build(this.#u, this.options)),
            this.#U.addObserver(this),
            this.#U.execute(e)
          );
        }
        #L() {
          let e = this.#U?.state ?? tI();
          this.#y = {
            ...e,
            isPending: 'pending' === e.status,
            isSuccess: 'success' === e.status,
            isError: 'error' === e.status,
            isIdle: 'idle' === e.status,
            mutate: this.mutate,
            reset: this.reset,
          };
        }
        #M(e) {
          tt.batch(() => {
            if (this.#F && this.hasListeners()) {
              let t = this.#y.variables,
                r = this.#y.context;
              e?.type === 'success'
                ? (this.#F.onSuccess?.(e.data, t, r),
                  this.#F.onSettled?.(e.data, null, t, r))
                : e?.type === 'error' &&
                  (this.#F.onError?.(e.error, t, r),
                  this.#F.onSettled?.(void 0, e.error, t, r));
            }
            this.listeners.forEach((e) => {
              e(this.#y);
            });
          });
        }
      };
      function tM(e) {
        return {
          onFetch: (t, r) => {
            let n = t.options,
              i = t.fetchOptions?.meta?.fetchMore?.direction,
              s = t.state.data?.pages || [],
              a = t.state.data?.pageParams || [],
              o = { pages: [], pageParams: [] },
              u = 0,
              l = async () => {
                let r = !1,
                  l = (e) => {
                    Object.defineProperty(e, 'signal', {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (r = !0)
                          : t.signal.addEventListener('abort', () => {
                              r = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  c = e4(t.options, t.fetchOptions),
                  h = async (e, n, i) => {
                    if (r) return Promise.reject();
                    if (null == n && e.pages.length) return Promise.resolve(e);
                    let s = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: n,
                      direction: i ? 'backward' : 'forward',
                      meta: t.options.meta,
                    };
                    l(s);
                    let a = await c(s),
                      { maxPages: o } = t.options,
                      u = i ? e2 : e1;
                    return {
                      pages: u(e.pages, a, o),
                      pageParams: u(e.pageParams, n, o),
                    };
                  };
                if (i && s.length) {
                  let e = 'backward' === i,
                    t = { pages: s, pageParams: a },
                    r = (e ? tq : tj)(n, t);
                  o = await h(t, r, e);
                } else {
                  let t = e ?? s.length;
                  do {
                    let e = 0 === u ? (a[0] ?? n.initialPageParam) : tj(n, o);
                    if (u > 0 && null == e) break;
                    (o = await h(o, e)), u++;
                  } while (u < t);
                }
                return o;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    l,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    r
                  ))
              : (t.fetchFn = l);
          },
        };
      }
      function tj(e, { pages: t, pageParams: r }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
      }
      function tq(e, { pages: t, pageParams: r }) {
        return t.length > 0
          ? e.getPreviousPageParam?.(t[0], t, r[0], r)
          : void 0;
      }
      var tU = class extends td {
        constructor(e, t) {
          super(e, t);
        }
        bindMethods() {
          super.bindMethods(),
            (this.fetchNextPage = this.fetchNextPage.bind(this)),
            (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
        }
        setOptions(e, t) {
          super.setOptions({ ...e, behavior: tM() }, t);
        }
        getOptimisticResult(e) {
          return (e.behavior = tM()), super.getOptimisticResult(e);
        }
        fetchNextPage(e) {
          return this.fetch({
            ...e,
            meta: { fetchMore: { direction: 'forward' } },
          });
        }
        fetchPreviousPage(e) {
          return this.fetch({
            ...e,
            meta: { fetchMore: { direction: 'backward' } },
          });
        }
        createResult(e, t) {
          var r, n;
          let { state: i } = e,
            s = super.createResult(e, t),
            {
              isFetching: a,
              isRefetching: o,
              isError: u,
              isRefetchError: l,
            } = s,
            c = i.fetchMeta?.fetchMore?.direction,
            h = u && 'forward' === c,
            d = a && 'forward' === c,
            f = u && 'backward' === c,
            p = a && 'backward' === c;
          return {
            ...s,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: !!(r = i.data) && null != tj(t, r),
            hasPreviousPage:
              !!(n = i.data) && !!t.getPreviousPageParam && null != tq(t, n),
            isFetchNextPageError: h,
            isFetchingNextPage: d,
            isFetchPreviousPageError: f,
            isFetchingPreviousPage: p,
            isRefetchError: l && !h && !f,
            isRefetching: o && !d && !p,
          };
        }
      };
      function tF(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var tL = class extends e7 {
        #u;
        #Q;
        #B;
        #Z;
        #j;
        #z;
        #$;
        #H;
        constructor(e, t, r) {
          super(),
            (this.#u = e),
            (this.#Z = r),
            (this.#B = []),
            (this.#j = []),
            (this.#Q = []),
            this.setQueries(t);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            this.#j.forEach((e) => {
              e.subscribe((t) => {
                this.#W(e, t);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            this.#j.forEach((e) => {
              e.destroy();
            });
        }
        setQueries(e, t, r) {
          (this.#B = e),
            (this.#Z = t),
            tt.batch(() => {
              let e = this.#j,
                t = this.#K(this.#B);
              t.forEach((e) =>
                e.observer.setOptions(e.defaultedQueryOptions, r)
              );
              let n = t.map((e) => e.observer),
                i = n.map((e) => e.getCurrentResult()),
                s = n.some((t, r) => t !== e[r]);
              (e.length !== n.length || s) &&
                ((this.#j = n),
                (this.#Q = i),
                this.hasListeners() &&
                  (tF(e, n).forEach((e) => {
                    e.destroy();
                  }),
                  tF(n, e).forEach((e) => {
                    e.subscribe((t) => {
                      this.#W(e, t);
                    });
                  }),
                  this.#M()));
            });
        }
        getCurrentResult() {
          return this.#Q;
        }
        getQueries() {
          return this.#j.map((e) => e.getCurrentQuery());
        }
        getObservers() {
          return this.#j;
        }
        getOptimisticResult(e, t) {
          let r = this.#K(e).map((e) =>
            e.observer.getOptimisticResult(e.defaultedQueryOptions)
          );
          return [r, (e) => this.#V(e ?? r, t), () => this.#G(r, e)];
        }
        #G(e, t) {
          let r = this.#K(t);
          return r.map((t, n) => {
            let i = e[n];
            return t.defaultedQueryOptions.notifyOnChangeProps
              ? i
              : t.observer.trackResult(i, (e) => {
                  r.forEach((t) => {
                    t.observer.trackProp(e);
                  });
                });
          });
        }
        #V(e, t) {
          return t
            ? ((this.#z && this.#Q === this.#H && t === this.#$) ||
                ((this.#$ = t),
                (this.#H = this.#Q),
                (this.#z = eV(this.#z, t(e)))),
              this.#z)
            : e;
        }
        #K(e) {
          let t = new Map(this.#j.map((e) => [e.options.queryHash, e])),
            r = [];
          return (
            e.forEach((e) => {
              let n = this.#u.defaultQueryOptions(e),
                i = t.get(n.queryHash);
              i
                ? r.push({ defaultedQueryOptions: n, observer: i })
                : r.push({
                    defaultedQueryOptions: n,
                    observer: new td(this.#u, n),
                  });
            }),
            r
          );
        }
        #W(e, t) {
          let r = this.#j.indexOf(e);
          -1 !== r &&
            ((this.#Q = (function (e, t, r) {
              let n = e.slice(0);
              return (n[t] = r), n;
            })(this.#Q, r, t)),
            this.#M());
        }
        #M() {
          this.hasListeners() &&
            this.#z !== this.#V(this.#G(this.#Q, this.#B), this.#Z?.combine) &&
            tt.batch(() => {
              this.listeners.forEach((e) => {
                e(this.#Q);
              });
            });
        }
      };
      function tQ({ queries: e, ...t }, r) {
        let n = ek(r),
          i = tR(),
          s = tv(),
          a = ex.useMemo(
            () =>
              e.map((e) => {
                let t = n.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = i ? 'isRestoring' : 'optimistic'), t
                );
              }),
            [e, n, i]
          );
        a.forEach((e) => {
          tx(e), t_(e, s);
        }),
          tE(s);
        let [o] = ex.useState(() => new tL(n, a, t)),
          [u, l, c] = o.getOptimisticResult(a, t.combine),
          h = !i && !1 !== t.subscribed;
        ex.useSyncExternalStore(
          ex.useCallback(
            (e) => (h ? o.subscribe(tt.batchCalls(e)) : tw),
            [o, h]
          ),
          () => o.getCurrentResult(),
          () => o.getCurrentResult()
        ),
          ex.useEffect(() => {
            o.setQueries(a, t, { listeners: !1 });
          }, [a, t, o]);
        let d = u.some((e, t) => tk(a[t], e))
          ? u.flatMap((e, t) => {
              let r = a[t];
              if (r) {
                let t = new td(n, r);
                if (tk(r, e)) return tA(r, t, s);
                tN(e, i) && tA(r, t, s);
              }
              return [];
            })
          : [];
        if (d.length > 0) throw Promise.all(d);
        let f = u.find((e, t) => {
          let r = a[t];
          return (
            r &&
            tS({
              result: e,
              errorResetBoundary: s,
              throwOnError: r.throwOnError,
              query: n.getQueryCache().get(r.queryHash),
              suspense: a[t]?.suspense,
            })
          );
        });
        if (f?.error) throw f.error;
        return l(c());
      }
      function tB(e, t, r) {
        let n = e[0],
          i = e[1]?.input;
        return (
          r &&
            (i = {
              ...(i ?? {}),
              ...(r.pageParam ? { cursor: r.pageParam } : {}),
              direction: r.direction,
            }),
          [n.join('.'), i, t?.trpc]
        );
      }
      function tZ(e) {
        return { path: e.path.join('.') };
      }
      function tz(e) {
        let t = tZ(e);
        return ex.useMemo(() => t, [t]);
      }
      async function t$(e, t, r) {
        let n = t.getQueryCache().build(t, { queryKey: r });
        n.setState({ data: [], status: 'success' });
        let i = [];
        for await (let t of e) i.push(t), n.setState({ data: [...i] });
        return i;
      }
      let tH = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
      function tW(e) {
        let t = e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
          r = e?.context ?? eq;
        function n() {
          let e = ex.useContext(r);
          if (!e)
            throw Error(
              'Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?'
            );
          return e;
        }
        function i(e, t) {
          let { queryClient: r, ssrState: i } = n();
          return i &&
            'mounted' !== i &&
            r.getQueryCache().find({ queryKey: e })?.state.status === 'error'
            ? { retryOnMount: !1, ...t }
            : t;
        }
        return {
          Provider: (e) => {
            let { abortOnUnmount: t = !1, queryClient: n, ssrContext: i } = e,
              [s, a] = ex.useState(e.ssrState ?? !1),
              o = e.client instanceof eo ? e.client : ed(e.client),
              u = ex.useMemo(
                () =>
                  (function (e) {
                    let { client: t, queryClient: r } = e,
                      n = t instanceof eo ? t : ed(t);
                    return {
                      infiniteQueryOptions: (e, t, r) => {
                        let i = t[1]?.input === e5,
                          s = async (e) => {
                            let i = {
                              ...r,
                              trpc: {
                                ...r?.trpc,
                                ...(r?.trpc?.abortOnUnmount
                                  ? { signal: e.signal }
                                  : { signal: null }),
                              },
                            };
                            return await n.query(
                              ...tB(t, i, {
                                direction: e.direction,
                                pageParam: e.pageParam,
                              })
                            );
                          };
                        return Object.assign(
                          {
                            ...r,
                            initialData: r?.initialData,
                            queryKey: t,
                            queryFn: i ? e5 : s,
                            initialPageParam: r?.initialCursor ?? null,
                          },
                          { trpc: tZ({ path: e }) }
                        );
                      },
                      queryOptions: (e, t, i) => {
                        let s = t[1]?.input === e5,
                          a = async (e) => {
                            let s = {
                                ...i,
                                trpc: {
                                  ...i?.trpc,
                                  ...(i?.trpc?.abortOnUnmount
                                    ? { signal: e.signal }
                                    : { signal: null }),
                                },
                              },
                              a = await n.query(...tB(t, s));
                            return I(a) ? t$(a, r, t) : a;
                          };
                        return Object.assign(
                          {
                            ...i,
                            initialData: i?.initialData,
                            queryKey: t,
                            queryFn: s ? e5 : a,
                          },
                          { trpc: tZ({ path: e }) }
                        );
                      },
                      fetchQuery: (e, t) =>
                        r.fetchQuery({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...tB(e, t)),
                        }),
                      fetchInfiniteQuery: (e, t) =>
                        r.fetchInfiniteQuery({
                          ...t,
                          queryKey: e,
                          queryFn: ({ pageParam: r, direction: i }) =>
                            n.query(
                              ...tB(e, t, { pageParam: r, direction: i })
                            ),
                          initialPageParam: t?.initialCursor ?? null,
                        }),
                      prefetchQuery: (e, t) =>
                        r.prefetchQuery({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...tB(e, t)),
                        }),
                      prefetchInfiniteQuery: (e, t) =>
                        r.prefetchInfiniteQuery({
                          ...t,
                          queryKey: e,
                          queryFn: ({ pageParam: r, direction: i }) =>
                            n.query(
                              ...tB(e, t, { pageParam: r, direction: i })
                            ),
                          initialPageParam: t?.initialCursor ?? null,
                        }),
                      ensureQueryData: (e, t) =>
                        r.ensureQueryData({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...tB(e, t)),
                        }),
                      invalidateQueries: (e, t, n) =>
                        r.invalidateQueries({ ...t, queryKey: e }, n),
                      resetQueries: (e, t, n) =>
                        r.resetQueries({ ...t, queryKey: e }, n),
                      refetchQueries: (e, t, n) =>
                        r.refetchQueries({ ...t, queryKey: e }, n),
                      cancelQuery: (e, t) =>
                        r.cancelQueries({ queryKey: e }, t),
                      setQueryData: (e, t, n) => r.setQueryData(e, t, n),
                      setQueriesData: (e, t, n, i) =>
                        r.setQueriesData({ ...t, queryKey: e }, n, i),
                      getQueryData: (e) => r.getQueryData(e),
                      setInfiniteQueryData: (e, t, n) =>
                        r.setQueryData(e, t, n),
                      getInfiniteQueryData: (e) => r.getQueryData(e),
                      setMutationDefaults: (t, i) => {
                        let s = t[0];
                        return r.setMutationDefaults(
                          t,
                          'function' == typeof i
                            ? i({
                                canonicalMutationFn: (t) =>
                                  n.mutation(...tB([s, { input: t }], e)),
                              })
                            : i
                        );
                      },
                      getMutationDefaults: (e) => r.getMutationDefaults(e),
                      isMutating: (e) => r.isMutating({ ...e, exact: !0 }),
                    };
                  })({ client: o, queryClient: n }),
                [o, n]
              ),
              l = ex.useMemo(
                () => ({
                  abortOnUnmount: t,
                  queryClient: n,
                  client: o,
                  ssrContext: i ?? null,
                  ssrState: s,
                  ...u,
                }),
                [t, o, u, n, i, s]
              );
            return (
              ex.useEffect(() => {
                a((e) => !!e && 'mounted');
              }, []),
              ex.createElement(r.Provider, { value: l }, e.children)
            );
          },
          createClient: eh,
          useContext: n,
          useUtils: n,
          useQuery: function (t, r, s) {
            let {
                abortOnUnmount: a,
                client: o,
                ssrState: u,
                queryClient: l,
                prefetchQuery: c,
              } = n(),
              h = e6(t, r, 'query'),
              d = l.getQueryDefaults(h),
              f = r === e5;
            'undefined' != typeof window ||
              'prepass' !== u ||
              s?.trpc?.ssr === !1 ||
              (s?.enabled ?? d?.enabled) === !1 ||
              f ||
              l.getQueryCache().find({ queryKey: h }) ||
              c(h, s);
            let p = i(h, { ...d, ...s }),
              m = s?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? a,
              g = tT(
                {
                  ...p,
                  queryKey: h,
                  queryFn: f
                    ? r
                    : async (e) => {
                        let t = {
                            ...p,
                            trpc: {
                              ...p?.trpc,
                              ...(m ? { signal: e.signal } : { signal: null }),
                            },
                          },
                          r = await o.query(...tB(h, t));
                        return I(r) ? t$(r, l, h) : r;
                      },
                },
                td,
                l
              );
            return (g.trpc = tz({ path: t })), g;
          },
          usePrefetchQuery: function (t, r, i) {
            let s = n(),
              a = e6(t, r, 'query'),
              o = r === e5,
              u =
                i?.trpc?.abortOnUnmount ??
                e?.abortOnUnmount ??
                s.abortOnUnmount;
            !(function (e, t) {
              let r = ek(void 0);
              r.getQueryState(e.queryKey) || r.prefetchQuery(e);
            })({
              ...i,
              queryKey: a,
              queryFn: o
                ? r
                : (e) => {
                    let t = {
                      trpc: { ...i?.trpc, ...(u ? { signal: e.signal } : {}) },
                    };
                    return s.client.query(...tB(a, t));
                  },
            });
          },
          useSuspenseQuery: function (t, r, i) {
            var s, a;
            let o = n(),
              u = e6(t, r, 'query'),
              l =
                i?.trpc?.abortOnUnmount ??
                e?.abortOnUnmount ??
                o.abortOnUnmount,
              c =
                ((s = {
                  ...i,
                  queryKey: u,
                  queryFn: (e) => {
                    let t = {
                      ...i,
                      trpc: {
                        ...i?.trpc,
                        ...(l ? { signal: e.signal } : { signal: null }),
                      },
                    };
                    return o.client.query(...tB(u, t));
                  },
                }),
                (a = o.queryClient),
                tT(
                  {
                    ...s,
                    enabled: !0,
                    suspense: !0,
                    throwOnError: tC,
                    placeholderData: void 0,
                  },
                  td,
                  a
                ));
            return (c.trpc = tz({ path: t })), [c.data, c];
          },
          useQueries: (e, t) => {
            let {
                ssrState: r,
                queryClient: i,
                prefetchQuery: s,
                client: a,
              } = n(),
              o = e(e9(a));
            if ('undefined' == typeof window && 'prepass' === r)
              for (let e of o)
                e.trpc?.ssr === !1 ||
                  i.getQueryCache().find({ queryKey: e.queryKey }) ||
                  s(e.queryKey, e);
            return tQ(
              {
                queries: o.map((e) => ({ ...e, queryKey: e.queryKey })),
                combine: t?.combine,
              },
              i
            );
          },
          useSuspenseQueries: (e) => {
            var t;
            let { queryClient: r, client: i } = n(),
              s = tQ(
                {
                  ...(t = {
                    queries: e(e9(i)).map((e) => ({
                      ...e,
                      queryFn: e.queryFn,
                      queryKey: e.queryKey,
                    })),
                  }),
                  queries: t.queries.map((e) => ({
                    ...e,
                    suspense: !0,
                    throwOnError: tC,
                    enabled: !0,
                    placeholderData: void 0,
                  })),
                },
                r
              );
            return [s.map((e) => e.data), s];
          },
          useMutation: function (e, r) {
            let { client: i, queryClient: s } = n(),
              a = e3(e),
              o = s.defaultMutationOptions(s.getMutationDefaults(a)),
              u = (function (e, t) {
                let r = ek(t),
                  [n] = ex.useState(() => new tD(r, e));
                ex.useEffect(() => {
                  n.setOptions(e);
                }, [n, e]);
                let i = ex.useSyncExternalStore(
                    ex.useCallback((e) => n.subscribe(tt.batchCalls(e)), [n]),
                    () => n.getCurrentResult(),
                    () => n.getCurrentResult()
                  ),
                  s = ex.useCallback(
                    (e, t) => {
                      n.mutate(e, t).catch(tw);
                    },
                    [n]
                  );
                if (i.error && tb(n.options.throwOnError, [i.error]))
                  throw i.error;
                return { ...i, mutate: s, mutateAsync: i.mutate };
              })(
                {
                  ...r,
                  mutationKey: a,
                  mutationFn: (t) => i.mutation(...tB([e, { input: t }], r)),
                  onSuccess: (...e) =>
                    t({
                      originalFn: () =>
                        r?.onSuccess?.(...e) ?? o?.onSuccess?.(...e),
                      queryClient: s,
                      meta: r?.meta ?? o?.meta ?? {},
                    }),
                },
                s
              );
            return (u.trpc = tz({ path: e })), u;
          },
          useSubscription: function (e, t, r) {
            let i = r?.enabled ?? t !== e5,
              s = eW(e6(e, t, 'any')),
              { client: a } = n(),
              o = ex.useRef(r);
            o.current = r;
            let u = ex.useRef(new Set([])),
              l = ex.useCallback((e) => {
                u.current.add(e);
              }, []),
              c = ex.useRef(null),
              h = ex.useCallback(() => {
                if ((c.current?.(), g(d), !i)) return;
                let r = !1,
                  n = a.subscription(e.join('.'), t ?? void 0, {
                    onStarted: () => {
                      r ||
                        (o.current.onStarted?.(),
                        g((e) => ({ ...e, status: 'pending', error: null })));
                    },
                    onData: (e) => {
                      r ||
                        (o.current.onData?.(e),
                        g((t) => ({
                          ...t,
                          status: 'pending',
                          data: e,
                          error: null,
                        })));
                    },
                    onError: (e) => {
                      r ||
                        (o.current.onError?.(e),
                        g((t) => ({ ...t, status: 'error', error: e })));
                    },
                    onConnectionStateChange: (e) => {
                      let t = { status: e.state, error: e.error };
                      g((e) => ({ ...e, ...t }));
                    },
                  });
                c.current = () => {
                  (r = !0), n.unsubscribe();
                };
              }, [s, i]),
              d = ex.useCallback(
                () =>
                  i
                    ? {
                        data: void 0,
                        error: null,
                        status: 'connecting',
                        reset: h,
                      }
                    : { data: void 0, error: null, status: 'idle', reset: h },
                [i, h]
              ),
              f = ex.useRef(d()),
              [p, m] = ex.useState(tH(f.current, l));
            p.reset = h;
            let g = ex.useCallback(
              (e) => {
                let t = f.current,
                  r = (f.current = e(t)),
                  n = !1;
                for (let e of u.current)
                  if (t[e] !== r[e]) {
                    n = !0;
                    break;
                  }
                n && m(tH(r, l));
              },
              [l]
            );
            return (
              ex.useEffect(() => {
                if (i)
                  return (
                    h(),
                    () => {
                      c.current?.();
                    }
                  );
              }, [h, i]),
              p
            );
          },
          useInfiniteQuery: function (e, t, r) {
            let {
                client: s,
                ssrState: a,
                prefetchInfiniteQuery: o,
                queryClient: u,
                abortOnUnmount: l,
              } = n(),
              c = e6(e, t, 'infinite'),
              h = u.getQueryDefaults(c),
              d = t === e5;
            'undefined' != typeof window ||
              'prepass' !== a ||
              r?.trpc?.ssr === !1 ||
              (r?.enabled ?? h?.enabled) === !1 ||
              d ||
              u.getQueryCache().find({ queryKey: c }) ||
              o(c, { ...h, ...r });
            let f = i(c, { ...h, ...r }),
              p = r?.trpc?.abortOnUnmount ?? l,
              m = tT(
                {
                  ...f,
                  initialPageParam: r.initialCursor ?? null,
                  persister: r.persister,
                  queryKey: c,
                  queryFn: d
                    ? t
                    : (e) => {
                        let t = {
                          ...f,
                          trpc: {
                            ...f?.trpc,
                            ...(p ? { signal: e.signal } : { signal: null }),
                          },
                        };
                        return s.query(
                          ...tB(c, t, {
                            pageParam: e.pageParam ?? r.initialCursor,
                            direction: e.direction,
                          })
                        );
                      },
                },
                tU,
                u
              );
            return (m.trpc = tz({ path: e })), m;
          },
          usePrefetchInfiniteQuery: function (e, t, r) {
            let s = n(),
              a = e6(e, t, 'infinite'),
              o = s.queryClient.getQueryDefaults(a),
              u = t === e5,
              l = i(a, { ...o, ...r }),
              c = r?.trpc?.abortOnUnmount ?? s.abortOnUnmount;
            !(function (e, t) {
              let r = ek(void 0);
              r.getQueryState(e.queryKey) || r.prefetchInfiniteQuery(e);
            })({
              ...r,
              initialPageParam: r.initialCursor ?? null,
              queryKey: a,
              queryFn: u
                ? t
                : (e) => {
                    let t = {
                      ...l,
                      trpc: { ...l?.trpc, ...(c ? { signal: e.signal } : {}) },
                    };
                    return s.client.query(
                      ...tB(a, t, {
                        pageParam: e.pageParam ?? r.initialCursor,
                        direction: e.direction,
                      })
                    );
                  },
            });
          },
          useSuspenseInfiniteQuery: function (e, t, r) {
            var s, a;
            let o = n(),
              u = e6(e, t, 'infinite'),
              l = o.queryClient.getQueryDefaults(u),
              c = i(u, { ...l, ...r }),
              h = r?.trpc?.abortOnUnmount ?? o.abortOnUnmount,
              d =
                ((s = {
                  ...r,
                  initialPageParam: r.initialCursor ?? null,
                  queryKey: u,
                  queryFn: (e) => {
                    let t = {
                      ...c,
                      trpc: { ...c?.trpc, ...(h ? { signal: e.signal } : {}) },
                    };
                    return o.client.query(
                      ...tB(u, t, {
                        pageParam: e.pageParam ?? r.initialCursor,
                        direction: e.direction,
                      })
                    );
                  },
                }),
                (a = o.queryClient),
                tT(
                  { ...s, enabled: !0, suspense: !0, throwOnError: tC },
                  tU,
                  a
                ));
            return (d.trpc = tz({ path: e })), [d.data, d];
          },
        };
      }
      var tK = class extends e7 {
          constructor(e = {}) {
            super(), (this.config = e), (this.#B = new Map());
          }
          #B;
          build(e, t, r) {
            let n = t.queryKey,
              i = t.queryHash ?? eH(n, t),
              s = this.get(i);
            return (
              s ||
                ((s = new tc({
                  client: e,
                  queryKey: n,
                  queryHash: i,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(n),
                })),
                this.add(s)),
              s
            );
          }
          add(e) {
            this.#B.has(e.queryHash) ||
              (this.#B.set(e.queryHash, e),
              this.notify({ type: 'added', query: e }));
          }
          remove(e) {
            let t = this.#B.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#B.delete(e.queryHash),
              this.notify({ type: 'removed', query: e }));
          }
          clear() {
            tt.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#B.get(e);
          }
          getAll() {
            return [...this.#B.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => ez(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter((t) => ez(e, t)) : t;
          }
          notify(e) {
            tt.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            tt.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            tt.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        tV = class extends e7 {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#J = new Set()),
              (this.#Y = new Map()),
              (this.#X = 0);
          }
          #J;
          #Y;
          #X;
          build(e, t, r) {
            let n = new tP({
              mutationCache: this,
              mutationId: ++this.#X,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(n), n;
          }
          add(e) {
            this.#J.add(e);
            let t = tG(e);
            if ('string' == typeof t) {
              let r = this.#Y.get(t);
              r ? r.push(e) : this.#Y.set(t, [e]);
            }
            this.notify({ type: 'added', mutation: e });
          }
          remove(e) {
            if (this.#J.delete(e)) {
              let t = tG(e);
              if ('string' == typeof t) {
                let r = this.#Y.get(t);
                if (r) {
                  if (r.length > 1) {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1);
                  } else r[0] === e && this.#Y.delete(t);
                }
              }
            }
            this.notify({ type: 'removed', mutation: e });
          }
          canRun(e) {
            let t = tG(e);
            if ('string' != typeof t) return !0;
            {
              let r = this.#Y.get(t),
                n = r?.find((e) => 'pending' === e.state.status);
              return !n || n === e;
            }
          }
          runNext(e) {
            let t = tG(e);
            if ('string' != typeof t) return Promise.resolve();
            {
              let r = this.#Y.get(t)?.find((t) => t !== e && t.state.isPaused);
              return r?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            tt.batch(() => {
              this.#J.forEach((e) => {
                this.notify({ type: 'removed', mutation: e });
              }),
                this.#J.clear(),
                this.#Y.clear();
            });
          }
          getAll() {
            return Array.from(this.#J);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => e$(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => e$(e, t));
          }
          notify(e) {
            tt.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return tt.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(eF)))
            );
          }
        };
      function tG(e) {
        return e.options.scope?.id;
      }
      var tJ = class {
        #ee;
        #q;
        #c;
        #et;
        #er;
        #en;
        #ei;
        #es;
        constructor(e = {}) {
          (this.#ee = e.queryCache || new tK()),
            (this.#q = e.mutationCache || new tV()),
            (this.#c = e.defaultOptions || {}),
            (this.#et = new Map()),
            (this.#er = new Map()),
            (this.#en = 0);
        }
        mount() {
          this.#en++,
            1 === this.#en &&
              ((this.#ei = te.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#ee.onFocus());
              })),
              (this.#es = tr.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#ee.onOnline());
              })));
        }
        unmount() {
          this.#en--,
            0 === this.#en &&
              (this.#ei?.(),
              (this.#ei = void 0),
              this.#es?.(),
              (this.#es = void 0));
        }
        isFetching(e) {
          return this.#ee.findAll({ ...e, fetchStatus: 'fetching' }).length;
        }
        isMutating(e) {
          return this.#q.findAll({ ...e, status: 'pending' }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#ee.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            r = this.#ee.build(this, t),
            n = r.state.data;
          return void 0 === n
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                r.isStaleByTime(eB(t.staleTime, r)) &&
                this.prefetchQuery(t),
              Promise.resolve(n));
        }
        getQueriesData(e) {
          return this.#ee
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, r) {
          let n = this.defaultQueryOptions({ queryKey: e }),
            i = this.#ee.get(n.queryHash),
            s = i?.state.data,
            a = 'function' == typeof t ? t(s) : t;
          if (void 0 !== a)
            return this.#ee.build(this, n).setData(a, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return tt.batch(() =>
            this.#ee
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#ee.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#ee;
          tt.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let r = this.#ee,
            n = { type: 'active', ...e };
          return tt.batch(
            () => (
              r.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(n, t)
            )
          );
        }
        cancelQueries(e, t = {}) {
          let r = { revert: !0, ...t };
          return Promise.all(
            tt.batch(() => this.#ee.findAll(e).map((e) => e.cancel(r)))
          )
            .then(eF)
            .catch(eF);
        }
        invalidateQueries(e, t = {}) {
          return tt.batch(() => {
            if (
              (this.#ee.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              e?.refetchType === 'none')
            )
              return Promise.resolve();
            let r = { ...e, type: e?.refetchType ?? e?.type ?? 'active' };
            return this.refetchQueries(r, t);
          });
        }
        refetchQueries(e, t = {}) {
          let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            tt.batch(() =>
              this.#ee
                .findAll(e)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  let t = e.fetch(void 0, r);
                  return (
                    r.throwOnError || (t = t.catch(eF)),
                    'paused' === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(eF);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let r = this.#ee.build(this, t);
          return r.isStaleByTime(eB(t.staleTime, r))
            ? r.fetch(t)
            : Promise.resolve(r.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(eF).catch(eF);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = tM(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(eF).catch(eF);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = tM(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return tr.isOnline()
            ? this.#q.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#ee;
        }
        getMutationCache() {
          return this.#q;
        }
        getDefaultOptions() {
          return this.#c;
        }
        setDefaultOptions(e) {
          this.#c = e;
        }
        setQueryDefaults(e, t) {
          this.#et.set(eW(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#et.values()],
            r = {};
          return (
            t.forEach((t) => {
              eK(e, t.queryKey) && Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        setMutationDefaults(e, t) {
          this.#er.set(eW(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#er.values()],
            r = {};
          return (
            t.forEach((t) => {
              eK(e, t.mutationKey) && (r = { ...r, ...t.defaultOptions });
            }),
            r
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#c.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = eH(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = 'always' !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
            t.queryFn === e5 && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#c.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#ee.clear(), this.#q.clear();
        }
      };
      let tY = (e) => e.queryClient ?? new tJ(e.queryClientConfig);
      var tX = r(4850);
      let t0 =
          null !== (c = r(2836).env.LANGUAGES_API) && void 0 !== c
            ? c
            : 'http://localhost:8080',
        t1 = [tX.Result.win],
        t2 = [
          tX.Result.fiftymove,
          tX.Result.agreed,
          tX.Result.insufficient,
          tX.Result.repetition,
          tX.Result.stalemate,
          tX.Result.timevsinsufficient,
        ],
        t5 = [
          tX.Result.checkmated,
          tX.Result.resigned,
          tX.Result.timeout,
          tX.Result.abandoned,
        ],
        t4 = new Set();
      t4.add('sunday'),
        t4.add('monday'),
        t4.add('tuesday'),
        t4.add('wednesday'),
        t4.add('thursday'),
        t4.add('friday'),
        t4.add('saturday');
      let t6 = new Set();
      t6.add('night'),
        t6.add('morning'),
        t6.add('afternoon'),
        t6.add('evening');
      let t3 = new tX.PrismaClient(),
        t8 = () => (void 0 !== t3 ? t3 : (t3 = new tX.PrismaClient()));
      BigInt.prototype.toJSON = function () {
        let e = Number.parseInt(this.toString());
        return null != e ? e : this.toString();
      };
      let t9 = (e) => {
          let {
              username: t = '',
              results: r = [],
              accuracy: n = !1,
              variant: i = tX.Variant.chess,
              timeClass: s = tX.TimeClass.blitz,
              rated: a = !0,
              endPhrase: o = !1,
            } = e,
            u = '';
          if (r.length > 0) {
            let e = r.map((e) => "'".concat(e, "'")).join(',');
            u = 'TEXT(CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_result" ELSE g."black_result" END) in ('
              )
              .concat(e, ')');
          }
          let l =
              t.length > 0
                ? '(g."white_username"=\''
                    .concat(t, '\' OR g."black_username"=\'')
                    .concat(t, "')")
                : '',
            c = [
              o ? 'g."end_phrase" IS NOT NULL' : '',
              s ? 'g."time_class" = \''.concat(s, "'") : '',
              n ? 'g."white_accuracy" != 0 AND g."black_accuracy" != 0' : '',
              l,
              u,
              a ? 'g."rated" = true' : '',
              i ? 'g."rules" = \''.concat(i, "'") : '',
            ];
          return 'WHERE '.concat(c.filter((e) => '' !== e).join(' AND '));
        },
        t7 = function () {
          let {
            username: e = '',
            results: t = [],
            timeClass: r = tX.TimeClass.blitz,
            variant: n = tX.Variant.chess,
            rated: i = !0,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(t.length > 0
              ? {
                  OR: [
                    { whiteUsername: e, whiteResult: { in: t } },
                    { blackUsername: e, blackResult: { in: t } },
                  ],
                }
              : { OR: [{ whiteUsername: e }, { blackUsername: e }] }),
            rated: i,
            rules: n,
            timeClass: r,
          };
        },
        re = (e) =>
          'AVG(CASE WHEN g."white_username" = \''.concat(
            e,
            '\' THEN g."white_accuracy" ELSE g."black_accuracy" END) as "average"'
          ),
        rt = (e) => {
          let {
              name: t = 'query',
              sqlFunction: r = 'count',
              column: n = '',
              accuracy: i = !1,
              username: s = '',
              variant: a = tX.Variant.chess,
              timeClass: o = tX.TimeClass.blitz,
              results: u = [],
              rated: l = !0,
              endPhrase: c = !1,
            } = e,
            h = re(s),
            d = [
              'count' === r ? 'COUNT(*) as "count"' : h,
              n.length > 0
                ? ''.concat(
                    {
                      year: 'extract(year from g."end_time")::int',
                      dayOfWeek: 'extract(dow from g."end_time")',
                      timeOfDay:
                        'floor(extract(hour from g."end_time") / 6.0)::int',
                      result: 'CASE WHEN g."white_username" = \''.concat(
                        s,
                        '\' THEN g."white_result" ELSE g."black_result" END'
                      ),
                      opponent:
                        'floor((CASE WHEN g."white_username" = \''.concat(
                          s,
                          '\' THEN g."black_rating" ELSE g."white_rating" END) / 100)'
                        ),
                      endPhrase: 'g."end_phrase"',
                    }[n],
                    ' as "column"'
                  )
                : '',
            ]
              .filter((e) => '' !== e)
              .join(', '),
            f = t9({
              accuracy: i,
              username: s,
              results: u,
              variant: a,
              timeClass: o,
              rated: l,
              endPhrase: c,
            }),
            p = n.length > 0 ? 'GROUP BY "column"' : '',
            m = n.length > 0 ? 'ORDER BY "column"' : '',
            g = ''
              .concat('SELECT '.concat(d), ' ')
              .concat('FROM chess."game" as g', ' ')
              .concat(f, ' ')
              .concat(p, ' ')
              .concat(m)
              .trim();
          return tX.Prisma.raw(g);
        },
        rr = (e) => {
          let {
              username: t,
              side: r,
              limit: n = 10,
              variant: i = 'chess',
              timeClass: s = 'blitz',
            } = e,
            a = t1.map((e) => "'".concat(e, "'")).join(','),
            o = t2.map((e) => "'".concat(e, "'")).join(','),
            u = t5.map((e) => "'".concat(e, "'")).join(','),
            l =
              'SELECT g."opening",\ng."opening_name",\nCOUNT(*) as total,\nSUM(CASE WHEN g."'
                .concat(r, '_result" IN (')
                .concat(a, ') THEN 1 ELSE 0 END) as win,\nSUM(CASE WHEN g."')
                .concat(r, '_result" IN (')
                .concat(o, ') THEN 1 ELSE 0 END) as draw,\nSUM(CASE WHEN g."')
                .concat(r, '_result" IN (')
                .concat(
                  u,
                  ') THEN 1 ELSE 0 END) as loss\nFROM chess."game" as g\nWHERE g."opening" <> \'\'\nAND g."rated" = true\nAND g."rules" = \''
                )
                .concat(i, '\'\nAND g."time_class" = \'')
                .concat(s, '\'\nAND g."')
                .concat(r, '_username" = \'')
                .concat(
                  t,
                  '\'\nGROUP BY g."opening", g."opening_name"\nORDER BY total DESC\nLIMIT 10;'
                );
          return tX.Prisma.raw(l);
        },
        rn = (e) => {
          let { username: t, variant: r = 'chess', timeClass: n = 'blitz' } = e,
            i = 'SELECT\nSUM(CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_pawn" ELSE g."black_pawn" END) as pawn,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_knight" ELSE g."black_knight" END) as knight,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_bishop" ELSE g."black_bishop" END) as bishop,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_rook" ELSE g."black_rook" END) as rook,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_queen" ELSE g."black_queen" END) as queen,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_king" ELSE g."black_king" END) as king\nFROM chess."game" as g\nWHERE (g."white_username" = \''
              )
              .concat(t, '\' OR g."black_username" = \'')
              .concat(t, '\')\nAND g."rated" = true\nAND g."rules" = \'')
              .concat(r, '\'\nAND g."time_class" = \'')
              .concat(n, "';");
          return tX.Prisma.raw(i);
        },
        ri = (e, t, r) => (n, i) => {
          let s = n.map((e) => "'".concat(e, "'")).join(',');
          return 'SUM(CASE WHEN\n  (CASE WHEN c."white_username" = \''
            .concat(
              e,
              '\' THEN c."white_castling" ELSE c."black_castling" END) = \''
            )
            .concat(t, '\' AND\n  (CASE WHEN c."white_username" = \'')
            .concat(
              e,
              '\' THEN c."black_castling" ELSE c."white_castling" END) = \''
            )
            .concat(r, '\' AND\n  (CASE WHEN c."white_username" = \'')
            .concat(
              e,
              '\' THEN c."white_result" ELSE c."black_result" END) IN ('
            )
            .concat(s, ') THEN 1 ELSE 0 END\n) as ')
            .concat(i);
        },
        rs = (e) => {
          let { username: t, variant: r = 'chess', timeClass: n = 'blitz' } = e,
            i = ri(t, 'short', 'short'),
            s = i(t1, 'short_short_win'),
            a = i(t2, 'short_short_draw'),
            o = i(t5, 'short_short_loss'),
            u = ri(t, 'short', 'long'),
            l = u(t1, 'short_long_win'),
            c = u(t2, 'short_long_draw'),
            h = u(t5, 'short_long_loss'),
            d = ri(t, 'short', ''),
            f = d(t1, 'short_none_win'),
            p = d(t2, 'short_none_draw'),
            m = d(t5, 'short_none_loss'),
            g = ri(t, 'long', 'short'),
            y = g(t1, 'long_short_win'),
            v = g(t2, 'long_short_draw'),
            b = g(t5, 'long_short_loss'),
            w = ri(t, 'long', 'long'),
            _ = w(t1, 'long_long_win'),
            E = w(t2, 'long_long_draw'),
            S = w(t5, 'long_long_loss'),
            O = ri(t, 'long', ''),
            R = O(t1, 'long_none_win'),
            C = O(t2, 'long_none_draw'),
            x = O(t5, 'long_none_loss'),
            N = ri(t, '', 'short'),
            k = N(t1, 'none_short_win'),
            A = N(t2, 'none_short_draw'),
            T = N(t5, 'none_short_loss'),
            P = ri(t, '', 'long'),
            I = P(t1, 'none_long_win'),
            D = P(t2, 'none_long_draw'),
            M = P(t5, 'none_long_loss'),
            j = ri(t, '', ''),
            q = j(t1, 'none_none_win'),
            U = j(t2, 'none_none_draw'),
            F = j(t5, 'none_none_loss'),
            L = 'SELECT\n'
              .concat(s, ', ')
              .concat(a, ', ')
              .concat(o, ', ')
              .concat(l, ', ')
              .concat(c, ', ')
              .concat(h, ', ')
              .concat(f, ', ')
              .concat(p, ', ')
              .concat(m, ',\n')
              .concat(y, ', ')
              .concat(v, ', ')
              .concat(b, ', ')
              .concat(_, ', ')
              .concat(E, ', ')
              .concat(S, ', ')
              .concat(R, ', ')
              .concat(C, ', ')
              .concat(x, ',\n')
              .concat(k, ', ')
              .concat(A, ', ')
              .concat(T, ', ')
              .concat(I, ', ')
              .concat(D, ', ')
              .concat(M, ', ')
              .concat(q, ', ')
              .concat(U, ', ')
              .concat(
                F,
                '\nFROM chess."game" as c\nWHERE (c."white_username" = \''
              )
              .concat(t, '\' OR c."black_username" = \'')
              .concat(t, '\')\nAND c."rated" = true\nAND c."rules" = \'')
              .concat(r, '\'\nAND c."time_class" = \'')
              .concat(n, "';");
          return tX.Prisma.raw(L);
        },
        ra = (e) => {
          let { username: t, variant: r = 'chess', timeClass: n = 'blitz' } = e,
            i = t1.map((e) => "'".concat(e, "'")).join(','),
            s = t2.map((e) => "'".concat(e, "'")).join(','),
            a = t5.map((e) => "'".concat(e, "'")).join(','),
            o =
              'SELECT\nc."flag",\np."country_code" as code,\nc."name",\nCOUNT(p."country_code") as total,\nSUM(CASE WHEN (CASE WHEN g."white_username" = \''
                .concat(
                  t,
                  '\' THEN g."white_result" ELSE g."black_result" END) IN ('
                )
                .concat(
                  i,
                  ') THEN 1 ELSE 0 END) as win,\nSUM(CASE WHEN (CASE WHEN g."white_username" = \''
                )
                .concat(
                  t,
                  '\' THEN g."white_result" ELSE g."black_result" END) IN ('
                )
                .concat(
                  s,
                  ') THEN 1 ELSE 0 END) as draw,\nSUM(CASE WHEN (CASE WHEN g."white_username" = \''
                )
                .concat(
                  t,
                  '\' THEN g."white_result" ELSE g."black_result" END) IN ('
                )
                .concat(
                  a,
                  ') THEN 1 ELSE 0 END) as loss\nFROM chess."game" as g\nJOIN chess."player" as p\nON (CASE g."white_username" WHEN \''
                )
                .concat(
                  t,
                  '\' THEN g."black_username" ELSE g."white_username" END) = p."username"\nJOIN chess."country" as c\nON c."cca2" = p."country_code"\nWHERE (g."white_username" = \''
                )
                .concat(t, '\' OR g."black_username" = \'')
                .concat(t, '\')\nAND g."rated" = true\nAND g."rules" = \'')
                .concat(r, '\'\nAND g."time_class" = \'')
                .concat(
                  n,
                  '\'\nGROUP BY c."flag", p."country_code", c."name"\nORDER BY total DESC;'
                );
          return tX.Prisma.raw(o);
        },
        ro = (e) => {
          let {
              username: t = '',
              limit: r = 100,
              variant: n = tX.Variant.chess,
              timeClass: i = tX.TimeClass.blitz,
              rated: s = !0,
            } = e,
            a = t1.map((e) => "'".concat(e, "'")).join(','),
            o = t2.map((e) => "'".concat(e, "'")).join(','),
            u = t5.map((e) => "'".concat(e, "'")).join(','),
            l = '(CASE WHEN g."white_username" = \''.concat(
              t,
              '\' THEN g."black_username" ELSE g."white_username" END) as "opponent"'
            ),
            c = 'COUNT(1) FILTER (WHERE (CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_result" ELSE g."black_result" END) in ('
              )
              .concat(a, ')) as "win"'),
            h = 'COUNT(1) FILTER (WHERE (CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_result" ELSE g."black_result" END) in ('
              )
              .concat(o, ')) as "draw"'),
            d = 'COUNT(1) FILTER (WHERE (CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_result" ELSE g."black_result" END) in ('
              )
              .concat(u, ')) as "loss"'),
            f = 'SELECT '
              .concat(l, ', ')
              .concat('COUNT(*) as "games"', ', ')
              .concat(c, ', ')
              .concat(h, ', ')
              .concat(d),
            p = t9({ username: t, variant: n, timeClass: i, rated: s }),
            m = ''
              .concat(f, ' ')
              .concat('FROM chess."game" as g', ' ')
              .concat(p, ' ')
              .concat('GROUP BY "opponent"', ' ')
              .concat('ORDER BY "games" DESC', ' ')
              .concat('LIMIT '.concat(r), ';');
          return tX.Prisma.raw(m);
        },
        ru = async (e) => {
          let {
            username: t,
            variant: r = tX.Variant.chess,
            timeClass: n = tX.TimeClass.blitz,
            rated: i = !0,
          } = e;
          try {
            let e = t8(),
              {
                avatar: s,
                title: a,
                name: o,
              } = await e.player.findFirstOrThrow({ where: { username: t } }),
              u = { username: t, timeClass: n, variant: r, rated: i },
              l = rt({
                ...u,
                name: 'averageAccuracyQuery',
                sqlFunction: 'avg',
                accuracy: !0,
              }),
              c = rt({
                ...u,
                name: 'averageAccuracyQueryByWinResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: t1,
              }),
              h = rt({
                ...u,
                name: 'averageAccuracyQueryByDrawResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: t2,
              }),
              d = rt({
                ...u,
                name: 'averageAccuracyQueryByLossResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: t5,
              }),
              f = rt({
                ...u,
                name: 'averageAccuracyQueryByYears',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'year',
              }),
              p = rt({
                ...u,
                name: 'averageAccuracyQueryByTimeOfDay',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'timeOfDay',
              }),
              m = rt({
                ...u,
                name: 'averageAccuracyQueryByDayOfWeek',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'dayOfWeek',
              }),
              g = t7(u),
              y = t7({ ...u, results: t1 }),
              v = t7({ ...u, results: t2 }),
              b = t7({ ...u, results: t5 }),
              w = rt({ ...u, name: 'gamesQueryByYear', column: 'year' }),
              _ = rt({
                ...u,
                name: 'gamesQueryByTimeOfDay',
                column: 'timeOfDay',
              }),
              E = rt({
                ...u,
                name: 'gamesQueryByDayOfWeek',
                column: 'dayOfWeek',
              }),
              S = rr({
                variant: r,
                username: t,
                timeClass: n,
                limit: 10,
                side: 'white',
              }),
              O = rr({
                variant: r,
                username: t,
                timeClass: n,
                limit: 10,
                side: 'black',
              }),
              R = rn({ variant: r, username: t, timeClass: n }),
              C = rs({ variant: r, username: t, timeClass: n }),
              x = ra({ variant: r, username: t, timeClass: n }),
              N = ro({ ...u, limit: 100 }),
              k = rt({
                ...u,
                name: 'winResultsQuery',
                column: 'result',
                results: t1,
              }),
              A = rt({
                ...u,
                name: 'drawResultsQuery',
                column: 'result',
                results: t2,
              }),
              T = rt({
                ...u,
                name: 'lossResultsQuery',
                column: 'result',
                results: t5,
              }),
              P = rt({
                ...u,
                name: 'winResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: t1,
              }),
              I = rt({
                ...u,
                name: 'drawResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: t2,
              }),
              D = rt({
                ...u,
                name: 'lossResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: t5,
              }),
              M = rt({
                ...u,
                name: 'winResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: t1,
              }),
              j = rt({
                ...u,
                name: 'drawResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: t2,
              }),
              q = rt({
                ...u,
                name: 'lossResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: t5,
              }),
              U = rt({
                ...u,
                name: 'winResultsQueryByOpponentRating',
                column: 'opponent',
                results: t1,
              }),
              F = rt({
                ...u,
                name: 'drawResultsQueryByOpponentRating',
                column: 'opponent',
                results: t2,
              }),
              L = rt({
                ...u,
                name: 'lossResultsQueryByOpponentRating',
                column: 'opponent',
                results: t5,
              }),
              Q = rt({
                ...u,
                endPhrase: !0,
                name: 'winResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: t1,
              }),
              B = rt({
                ...u,
                endPhrase: !0,
                name: 'drawResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: t2,
              }),
              Z = rt({
                ...u,
                endPhrase: !0,
                name: 'lossResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: t5,
              }),
              [
                [{ average: z = 0 }] = [{ average: 0 }],
                [{ average: $ = 0 }] = [{ average: 0 }],
                [{ average: H = 0 }] = [{ average: 0 }],
                [{ average: W = 0 }] = [{ average: 0 }],
                K = [],
                V = [],
                G = [],
                J = [],
                Y = [],
                [
                  {
                    king: X = 0,
                    queen: ee = 0,
                    rook: et = 0,
                    bishop: er = 0,
                    knight: en = 0,
                    pawn: ei = 0,
                  },
                ] = [
                  { king: 0, queen: 0, rook: 0, bishop: 0, knight: 0, pawn: 0 },
                ],
                [
                  {
                    short_short_win: es = 0,
                    short_short_draw: ea = 0,
                    short_short_loss: eo = 0,
                    short_long_win: eu = 0,
                    short_long_draw: el = 0,
                    short_long_loss: ec = 0,
                    short_none_win: eh = 0,
                    short_none_draw: ed = 0,
                    short_none_loss: ef = 0,
                    long_short_win: ep = 0,
                    long_short_draw: em = 0,
                    long_short_loss: eg = 0,
                    long_long_win: ey = 0,
                    long_long_draw: ev = 0,
                    long_long_loss: eb = 0,
                    long_none_win: ew = 0,
                    long_none_draw: e_ = 0,
                    long_none_loss: eE = 0,
                    none_short_win: eS = 0,
                    none_short_draw: eO = 0,
                    none_short_loss: eR = 0,
                    none_long_win: eC = 0,
                    none_long_draw: ex = 0,
                    none_long_loss: eN = 0,
                    none_none_win: ek = 0,
                    none_none_draw: eA = 0,
                    none_none_loss: eT = 0,
                  },
                ] = [
                  {
                    short_short_win: 0,
                    short_short_draw: 0,
                    short_short_loss: 0,
                    short_long_win: 0,
                    short_long_draw: 0,
                    short_long_loss: 0,
                    short_none_win: 0,
                    short_none_draw: 0,
                    short_none_loss: 0,
                    long_short_win: 0,
                    long_short_draw: 0,
                    long_short_loss: 0,
                    long_long_win: 0,
                    long_long_draw: 0,
                    long_long_loss: 0,
                    long_none_win: 0,
                    long_none_draw: 0,
                    long_none_loss: 0,
                    none_short_win: 0,
                    none_short_draw: 0,
                    none_short_loss: 0,
                    none_long_win: 0,
                    none_long_draw: 0,
                    none_long_loss: 0,
                    none_none_win: 0,
                    none_none_draw: 0,
                    none_none_loss: 0,
                  },
                ],
                eP = [],
                eI = [],
                eD = 0,
                eM = 0,
                ej = 0,
                eq = 0,
                eU = [],
                eF = [],
                eL = [],
                eQ = [],
                eB = [],
                eZ = [],
                ez = [],
                e$ = [],
                eH = [],
                eW = [],
                eK = [],
                eV = [],
                eG = [],
                eJ = [],
                eY = [],
                eX = [],
                e0 = [],
                e1 = [],
              ] = await e.$transaction([
                e.$queryRaw(l),
                e.$queryRaw(c),
                e.$queryRaw(h),
                e.$queryRaw(d),
                e.$queryRaw(f),
                e.$queryRaw(p),
                e.$queryRaw(m),
                e.$queryRaw(S),
                e.$queryRaw(O),
                e.$queryRaw(R),
                e.$queryRaw(C),
                e.$queryRaw(x),
                e.$queryRaw(N),
                e.game.count({ where: g }),
                e.game.count({ where: y }),
                e.game.count({ where: v }),
                e.game.count({ where: b }),
                e.$queryRaw(w),
                e.$queryRaw(_),
                e.$queryRaw(E),
                e.$queryRaw(k),
                e.$queryRaw(A),
                e.$queryRaw(T),
                e.$queryRaw(P),
                e.$queryRaw(I),
                e.$queryRaw(D),
                e.$queryRaw(M),
                e.$queryRaw(j),
                e.$queryRaw(q),
                e.$queryRaw(U),
                e.$queryRaw(F),
                e.$queryRaw(L),
                e.$queryRaw(Q),
                e.$queryRaw(B),
                e.$queryRaw(Z),
              ]),
              e2 = {
                average: z,
                win: $,
                draw: H,
                loss: W,
                periods: K.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, period: r };
                }),
                timeOfDays: V.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, timeOfDay: [...t6][''.concat(r)] };
                }),
                daysOfWeek: G.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, dayOfWeek: [...t4][''.concat(r)] };
                }),
              },
              e5 = eU.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return { games: parseInt(t.toString(), 10), period: r };
              }),
              e4 = eF.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return {
                  games: parseInt(t.toString(), 10),
                  timeOfDay: [...t6][''.concat(r)],
                };
              }),
              e6 = eL.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return {
                  games: parseInt(t.toString(), 10),
                  dayOfWeek: [...t4][''.concat(r)],
                };
              }),
              e3 = ez.map((e) => {
                var t, r;
                let { count: n, column: i } = e,
                  s = [...t6][''.concat(Number.parseInt(i.toString()))],
                  { count: a = 0 } =
                    null !==
                      (t = e$.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== t
                      ? t
                      : { draw: 0 },
                  { count: o = 0 } =
                    null !==
                      (r = eH.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== r
                      ? r
                      : { count: 0 };
                return {
                  timeOfDay: s,
                  win: parseInt(n.toString(), 10),
                  draw: parseInt(a.toString(), 10),
                  loss: parseInt(o.toString(), 10),
                };
              }),
              e8 = eW.map((e) => {
                var t, r;
                let { count: n, column: i } = e,
                  s = [...t4][''.concat(Number.parseInt(i.toString()))],
                  { count: a = 0 } =
                    null !==
                      (t = eK.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== t
                      ? t
                      : { draw: 0 },
                  { count: o = 0 } =
                    null !==
                      (r = eV.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== r
                      ? r
                      : { count: 0 };
                return {
                  dayOfWeek: s,
                  win: parseInt(n.toString(), 10),
                  draw: parseInt(a.toString(), 10),
                  loss: parseInt(o.toString(), 10),
                };
              }),
              e9 = [
                ...new Set(
                  [...eG, ...eJ, ...eY].map((e) => {
                    let { column: t } = e;
                    return t;
                  })
                ),
              ]
                .map((e) => {
                  var t, r, n;
                  let { count: i = 0 } =
                      null !==
                        (t = eG.find((t) => {
                          let { column: r } = t;
                          return r.toString() === e.toString();
                        })) && void 0 !== t
                        ? t
                        : { count: 0 },
                    { count: s = 0 } =
                      null !==
                        (r = eJ.find((t) => {
                          let { column: r } = t;
                          return r.toString() === e.toString();
                        })) && void 0 !== r
                        ? r
                        : { count: 0 },
                    { count: a = 0 } =
                      null !==
                        (n = eY.find((t) => {
                          let { column: r } = t;
                          return r.toString() === e.toString();
                        })) && void 0 !== n
                        ? n
                        : { count: 0 };
                  return {
                    rating: 100 * e,
                    win: parseInt(i.toString(), 10),
                    draw: parseInt(s.toString(), 10),
                    loss: parseInt(a.toString(), 10),
                  };
                })
                .sort((e, t) => (e.rating > t.rating ? 1 : -1)),
              e7 = [
                ...new Set(
                  [...eX, ...e0, ...e1].map((e) => {
                    let { column: t } = e;
                    return t;
                  })
                ),
              ].map((e) => {
                var t, r, n;
                let { count: i = 0 } =
                    null !==
                      (t = eX.find((t) => {
                        let { column: r } = t;
                        return r.toString() === e.toString();
                      })) && void 0 !== t
                      ? t
                      : { count: 0 },
                  { count: s = 0 } =
                    null !==
                      (r = e0.find((t) => {
                        let { column: r } = t;
                        return r.toString() === e.toString();
                      })) && void 0 !== r
                      ? r
                      : { count: 0 },
                  { count: a = 0 } =
                    null !==
                      (n = e1.find((t) => {
                        let { column: r } = t;
                        return r.toString() === e.toString();
                      })) && void 0 !== n
                      ? n
                      : { count: 0 };
                return {
                  phrase: e.toString(),
                  win: parseInt(i.toString(), 10),
                  draw: parseInt(s.toString(), 10),
                  loss: parseInt(a.toString(), 10),
                };
              }),
              te = {
                win: eQ.map((e) => {
                  let { column: t, count: r } = e;
                  return {
                    result: t.toString(),
                    count: parseInt(r.toString(), 10),
                  };
                }),
                draw: eB.map((e) => {
                  let { column: t, count: r } = e;
                  return {
                    result: t.toString(),
                    count: parseInt(r.toString(), 10),
                  };
                }),
                loss: eZ.map((e) => {
                  let { column: t, count: r } = e;
                  return {
                    result: t.toString(),
                    count: parseInt(r.toString(), 10),
                  };
                }),
                timeOfDays: e3,
                daysOfWeek: e8,
                opponents: e9,
                endPhrases: e7,
              };
            return (
              await e.$disconnect(),
              {
                username: t,
                avatar: s,
                title: a,
                name: o,
                accuracy: e2,
                results: te,
                games: {
                  total: eD,
                  win: eM,
                  draw: ej,
                  loss: eq,
                  periods: e5,
                  timeOfDays: e4,
                  daysOfWeek: e6,
                },
                openings: {
                  white: J.map((e) => {
                    let {
                      opening: t = '',
                      opening_name: r = '',
                      pgn: n = '',
                      total: i,
                      win: s,
                      draw: a,
                      loss: o,
                    } = e;
                    return {
                      opening: t,
                      opening_name: r,
                      pgn: n,
                      total: parseInt(i.toString(), 10),
                      win: parseInt(s.toString(), 10),
                      draw: parseInt(a.toString(), 10),
                      loss: parseInt(o.toString(), 10),
                    };
                  }),
                  black: Y.map((e) => {
                    let {
                      opening: t = '',
                      opening_name: r = '',
                      pgn: n = '',
                      total: i,
                      win: s,
                      draw: a,
                      loss: o,
                    } = e;
                    return {
                      opening: t,
                      opening_name: r,
                      pgn: n,
                      total: parseInt(i.toString(), 10),
                      win: parseInt(s.toString(), 10),
                      draw: parseInt(a.toString(), 10),
                      loss: parseInt(o.toString(), 10),
                    };
                  }),
                },
                moves: {
                  pieces: {
                    king: parseInt(X.toString(), 10),
                    queen: parseInt(ee.toString(), 10),
                    rook: parseInt(et.toString(), 10),
                    bishop: parseInt(er.toString(), 10),
                    knight: parseInt(en.toString(), 10),
                    pawn: parseInt(ei.toString(), 10),
                  },
                  castling: {
                    short: {
                      short: {
                        win: parseInt(es.toString(), 10),
                        draw: parseInt(ea.toString(), 10),
                        loss: parseInt(eo.toString(), 10),
                      },
                      long: {
                        win: parseInt(eu.toString(), 10),
                        draw: parseInt(el.toString(), 10),
                        loss: parseInt(ec.toString(), 10),
                      },
                      none: {
                        win: parseInt(eh.toString(), 10),
                        draw: parseInt(ed.toString(), 10),
                        loss: parseInt(ef.toString(), 10),
                      },
                    },
                    long: {
                      short: {
                        win: parseInt(ep.toString(), 10),
                        draw: parseInt(em.toString(), 10),
                        loss: parseInt(eg.toString(), 10),
                      },
                      long: {
                        win: parseInt(ey.toString(), 10),
                        draw: parseInt(ev.toString(), 10),
                        loss: parseInt(eb.toString(), 10),
                      },
                      none: {
                        win: parseInt(ew.toString(), 10),
                        draw: parseInt(e_.toString(), 10),
                        loss: parseInt(eE.toString(), 10),
                      },
                    },
                    none: {
                      short: {
                        win: parseInt(eS.toString(), 10),
                        draw: parseInt(eO.toString(), 10),
                        loss: parseInt(eR.toString(), 10),
                      },
                      long: {
                        win: parseInt(eC.toString(), 10),
                        draw: parseInt(ex.toString(), 10),
                        loss: parseInt(eN.toString(), 10),
                      },
                      none: {
                        win: parseInt(ek.toString(), 10),
                        draw: parseInt(eA.toString(), 10),
                        loss: parseInt(eT.toString(), 10),
                      },
                    },
                  },
                },
                geography: eP.map((e) => {
                  let {
                    flag: t = '',
                    code: r = '',
                    name: n = '',
                    total: i,
                    win: s,
                    draw: a,
                    loss: o,
                  } = e;
                  return {
                    flag: t,
                    code: r,
                    name: n,
                    total: parseInt(i.toString(), 10),
                    win: parseInt(s.toString(), 10),
                    draw: parseInt(a.toString(), 10),
                    loss: parseInt(o.toString(), 10),
                  };
                }),
                opponents: eI.map((e) => {
                  let {
                    opponent: t = '',
                    games: r,
                    win: n,
                    draw: i,
                    loss: s,
                  } = e;
                  return {
                    opponent: t,
                    games: parseInt(r.toString(), 10),
                    win: parseInt(n.toString(), 10),
                    draw: parseInt(i.toString(), 10),
                    loss: parseInt(s.toString(), 10),
                  };
                }),
              }
            );
          } catch (e) {
            return { username: t };
          }
        },
        rl = async (e) => {
          let { days: t, title: r, countryCode: n } = e,
            { count: i, overall: s } = await rh({
              days: t,
              title: r,
              countryCode: n,
            }),
            a = await rp({ days: t, title: r, countryCode: n }),
            o = await rf({ days: t, title: r, countryCode: n }),
            u = await rm({ days: t, title: r, countryCode: n });
          return (
            await t3.$disconnect(),
            {
              count: i,
              overall: s,
              distribution: o,
              countries: a,
              leaderboard: u,
            }
          );
        },
        rc = function (e) {
          let { days: t, title: r, countryCode: n } = e,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
          return (
            r && i.push('p."title" = \''.concat(r, "'")),
            n && i.push('p."country_code" = \''.concat(n, "'")),
            t &&
              i.push(
                'p."last_online" > now() - interval \''.concat(t, " days'")
              ),
            0 === i.length ? '' : 'WHERE '.concat(i.join(' AND '))
          );
        },
        rh = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                '-- Descriptive (Count - Average - Max) --\nSELECT COUNT(p."username") AS "count_total", -- Count - Total\nSUM(CASE WHEN p."title" = \'GM\' then 1 else 0 end) AS "count_gm", -- Count - GM\nSUM(CASE WHEN p."title" = \'IM\' then 1 else 0 end) AS "count_im", -- Count - IM\nSUM(CASE WHEN p."title" = \'FM\' then 1 else 0 end) AS "count_fm", -- Count - FM\nSUM(CASE WHEN p."title" = \'CM\' then 1 else 0 end) AS "count_cm", -- Count - CM\nSUM(CASE WHEN p."title" = \'NM\' then 1 else 0 end) AS "count_nm", -- Count - NM\nSUM(CASE WHEN p."title" = \'WGM\' then 1 else 0 end) AS "count_wgm", -- Count - WGM\nSUM(CASE WHEN p."title" = \'WIM\' then 1 else 0 end) AS "count_wim", -- Count - WIM\nSUM(CASE WHEN p."title" = \'WFM\' then 1 else 0 end) AS "count_wfm", -- Count - WFM\nSUM(CASE WHEN p."title" = \'WCM\' then 1 else 0 end) AS "count_wcm", -- Count - WCM\nSUM(CASE WHEN p."title" = \'WNM\' then 1 else 0 end) AS "count_wnm", -- Count - WNM\nCAST(ROUND(AVG(CASE WHEN p."rapid_rating_best" <> 0 THEN p."rapid_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_rapid_rating_best", -- Average\nCAST(ROUND(AVG(CASE WHEN p."blitz_rating_best" <> 0 THEN p."blitz_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_blitz_rating_best", -- Average\nCAST(ROUND(AVG(CASE WHEN p."bullet_rating_best" <> 0 THEN p."bullet_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_bullet_rating_best", -- Average\nMAX(p."rapid_rating_best") AS "max_rapid_rating_best", -- Max\nMAX(p."blitz_rating_best") AS "max_blitz_rating_best", -- Max\nMAX(p."bullet_rating_best") AS "max_bullet_rating_best" -- Max\nFROM chess."player" AS p\n'.concat(
                  rc({ days: t, title: r, countryCode: n }),
                  ';'
                ),
              i = tX.Prisma.raw(e),
              {
                count_total: s = 0,
                count_gm: a = 0,
                count_im: o = 0,
                count_fm: u = 0,
                count_cm: l = 0,
                count_nm: c = 0,
                count_wgm: h = 0,
                count_wim: d = 0,
                count_wfm: f = 0,
                count_wcm: p = 0,
                count_wnm: m = 0,
                average_rapid_rating_best: g = 0,
                average_blitz_rating_best: y = 0,
                average_bullet_rating_best: v = 0,
                max_rapid_rating_best: b = 0,
                max_blitz_rating_best: w = 0,
                max_bullet_rating_best: _ = 0,
              } = (await t3.$queryRaw(i))[0];
            return {
              count: {
                total: s,
                gm: a,
                im: o,
                fm: u,
                cm: l,
                nm: c,
                wgm: h,
                wim: d,
                wfm: f,
                wcm: p,
                wnm: m,
              },
              overall: {
                rapid: { average: g, max: b },
                blitz: { average: y, max: w },
                bullet: { average: v, max: _ },
              },
            };
          } catch (e) {
            return {
              count: {
                total: 0,
                gm: 0,
                im: 0,
                fm: 0,
                cm: 0,
                nm: 0,
                wgm: 0,
                wim: 0,
                wfm: 0,
                wcm: 0,
                wnm: 0,
              },
              rapid: { average: 0, max: 0 },
              blitz: { average: 0, max: 0 },
              bullet: { average: 0, max: 0 },
            };
          }
        },
        rd = async (e) => {
          let { days: t, title: r, countryCode: n, timeClass: i } = e;
          try {
            let e = 'SELECT COUNT(p."username") AS "total", (FLOOR((p."'
                .concat(
                  i,
                  '_rating_last" / 100)) * 100) AS "group" FROM chess."player" AS p '
                )
                .concat(
                  rc({ days: t, title: r, countryCode: n }, [
                    '(FLOOR((p."'.concat(
                      i,
                      '_rating_last" / 100)) * 100) <> 0'
                    ),
                  ]),
                  ' GROUP BY "group" ORDER BY "group";'
                ),
              s = tX.Prisma.raw(e);
            return t3.$queryRaw(s);
          } catch (e) {
            return [];
          }
        },
        rf = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          return {
            rapid: await rd({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'rapid',
            }),
            blitz: await rd({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'blitz',
            }),
            bullet: await rd({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'bullet',
            }),
          };
        },
        rp = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                'SELECT p."country_code", p."country", COUNT(p."username") AS "count" FROM chess."player" AS p '.concat(
                  rc({ days: t, title: r, countryCode: n }),
                  ' GROUP BY p."country_code", p."country"\nORDER BY p."count" DESC;'
                ),
              i = tX.Prisma.raw(e);
            return t3.$queryRaw(i);
          } catch (e) {
            return [];
          }
        },
        rm = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                'SELECT p."title", p."country_code", p."country", p."username", p."name", p."bullet_rating_best", p."blitz_rating_best", p."rapid_rating_best" FROM chess."player" AS p '.concat(
                  rc({ days: t, title: r, countryCode: n }),
                  ' ORDER BY p."blitz_rating_best" DESC, p."bullet_rating_best" DESC, p."rapid_rating_best" DESC LIMIT 100 OFFSET 0 ;'
                ),
              i = tX.Prisma.raw(e);
            return t3.$queryRaw(i);
          } catch (e) {
            return [];
          }
        };
      function rg(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var ry = r(2836);
      let { toString: rv } = Object.prototype,
        { getPrototypeOf: rb } = Object,
        rw = ((e) => (t) => {
          let r = rv.call(t);
          return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        r_ = (e) => ((e = e.toLowerCase()), (t) => rw(t) === e),
        rE = (e) => (t) => typeof t === e,
        { isArray: rS } = Array,
        rO = rE('undefined'),
        rR = r_('ArrayBuffer'),
        rC = rE('string'),
        rx = rE('function'),
        rN = rE('number'),
        rk = (e) => null !== e && 'object' == typeof e,
        rA = (e) => {
          if ('object' !== rw(e)) return !1;
          let t = rb(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        rT = r_('Date'),
        rP = r_('File'),
        rI = r_('Blob'),
        rD = r_('FileList'),
        rM = r_('URLSearchParams'),
        [rj, rq, rU, rF] = [
          'ReadableStream',
          'Request',
          'Response',
          'Headers',
        ].map(r_);
      function rL(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != e) {
          if (('object' != typeof e && (e = [e]), rS(e)))
            for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
          else {
            let i;
            let s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = s.length;
            for (n = 0; n < a; n++) (i = s[n]), t.call(null, e[i], i, e);
          }
        }
      }
      function rQ(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e),
          i = n.length;
        for (; i-- > 0; ) if (t === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let rB =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
                ? window
                : global,
        rZ = (e) => !rO(e) && e !== rB,
        rz = (
          (e) => (t) =>
            e && t instanceof e
        )('undefined' != typeof Uint8Array && rb(Uint8Array)),
        r$ = r_('HTMLFormElement'),
        rH = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        rW = r_('RegExp'),
        rK = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          rL(r, (r, i) => {
            let s;
            !1 !== (s = t(r, i, e)) && (n[i] = s || r);
          }),
            Object.defineProperties(e, n);
        },
        rV = 'abcdefghijklmnopqrstuvwxyz',
        rG = '0123456789',
        rJ = { DIGIT: rG, ALPHA: rV, ALPHA_DIGIT: rV + rV.toUpperCase() + rG },
        rY = r_('AsyncFunction'),
        rX =
          ((s = 'function' == typeof setImmediate),
          (a = rx(rB.postMessage)),
          s
            ? setImmediate
            : a
              ? ((e, t) => (
                  rB.addEventListener(
                    'message',
                    ({ source: r, data: n }) => {
                      r === rB && n === e && t.length && t.shift()();
                    },
                    !1
                  ),
                  (r) => {
                    t.push(r), rB.postMessage(e, '*');
                  }
                ))(`axios@${Math.random()}`, [])
              : (e) => setTimeout(e)),
        r0 =
          'undefined' != typeof queueMicrotask
            ? queueMicrotask.bind(rB)
            : (void 0 !== ry && ry.nextTick) || rX,
        r1 = {
          isArray: rS,
          isArrayBuffer: rR,
          isBuffer: function (e) {
            return (
              null !== e &&
              !rO(e) &&
              null !== e.constructor &&
              !rO(e.constructor) &&
              rx(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (('function' == typeof FormData && e instanceof FormData) ||
                (rx(e.append) &&
                  ('formdata' === (t = rw(e)) ||
                    ('object' === t &&
                      rx(e.toString) &&
                      '[object FormData]' === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && rR(e.buffer);
          },
          isString: rC,
          isNumber: rN,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: rk,
          isPlainObject: rA,
          isReadableStream: rj,
          isRequest: rq,
          isResponse: rU,
          isHeaders: rF,
          isUndefined: rO,
          isDate: rT,
          isFile: rP,
          isBlob: rI,
          isRegExp: rW,
          isFunction: rx,
          isStream: (e) => rk(e) && rx(e.pipe),
          isURLSearchParams: rM,
          isTypedArray: rz,
          isFileList: rD,
          forEach: rL,
          merge: function e() {
            let { caseless: t } = (rZ(this) && this) || {},
              r = {},
              n = (n, i) => {
                let s = (t && rQ(r, i)) || i;
                rA(r[s]) && rA(n)
                  ? (r[s] = e(r[s], n))
                  : rA(n)
                    ? (r[s] = e({}, n))
                    : rS(n)
                      ? (r[s] = n.slice())
                      : (r[s] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && rL(arguments[e], n);
            return r;
          },
          extend: (e, t, r, { allOwnKeys: n } = {}) => (
            rL(
              t,
              (t, n) => {
                r && rx(t) ? (e[n] = rg(t, r)) : (e[n] = t);
              },
              { allOwnKeys: n }
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, r, n) => {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, 'super', { value: t.prototype }),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: (e, t, r, n) => {
            let i, s, a;
            let o = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (s = (i = Object.getOwnPropertyNames(e)).length; s-- > 0; )
                (a = i[s]),
                  (!n || n(a, e, t)) && !o[a] && ((t[a] = e[a]), (o[a] = !0));
              e = !1 !== r && rb(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: rw,
          kindOfTest: r_,
          endsWith: (e, t, r) => {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: (e) => {
            if (!e) return null;
            if (rS(e)) return e;
            let t = e.length;
            if (!rN(t)) return null;
            let r = Array(t);
            for (; t-- > 0; ) r[t] = e[t];
            return r;
          },
          forEachEntry: (e, t) => {
            let r;
            let n = (e && e[Symbol.iterator]).call(e);
            for (; (r = n.next()) && !r.done; ) {
              let n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let r;
            let n = [];
            for (; null !== (r = e.exec(t)); ) n.push(r);
            return n;
          },
          isHTMLForm: r$,
          hasOwnProperty: rH,
          hasOwnProp: rH,
          reduceDescriptors: rK,
          freezeMethods: (e) => {
            rK(e, (t, r) => {
              if (rx(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(r))
                return !1;
              if (rx(e[r])) {
                if (((t.enumerable = !1), 'writable' in t)) {
                  t.writable = !1;
                  return;
                }
                t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  });
              }
            });
          },
          toObjectSet: (e, t) => {
            let r = {};
            return (
              ((e) => {
                e.forEach((e) => {
                  r[e] = !0;
                });
              })(rS(e) ? e : String(e).split(t)),
              r
            );
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
                return t.toUpperCase() + r;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e = +e)) ? e : t,
          findKey: rQ,
          global: rB,
          isContextDefined: rZ,
          ALPHABET: rJ,
          generateString: (e = 16, t = rJ.ALPHA_DIGIT) => {
            let r = '',
              { length: n } = t;
            for (; e--; ) r += t[(Math.random() * n) | 0];
            return r;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              rx(e.append) &&
              'FormData' === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            let t = Array(10),
              r = (e, n) => {
                if (rk(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!('toJSON' in e)) {
                    t[n] = e;
                    let i = rS(e) ? [] : {};
                    return (
                      rL(e, (e, t) => {
                        let s = r(e, n + 1);
                        rO(s) || (i[t] = s);
                      }),
                      (t[n] = void 0),
                      i
                    );
                  }
                }
                return e;
              };
            return r(e, 0);
          },
          isAsyncFn: rY,
          isThenable: (e) => e && (rk(e) || rx(e)) && rx(e.then) && rx(e.catch),
          setImmediate: rX,
          asap: r0,
        };
      function r2(e, t, r, n, i) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = 'AxiosError'),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          i &&
            ((this.response = i), (this.status = i.status ? i.status : null));
      }
      r1.inherits(r2, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: r1.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let r5 = r2.prototype,
        r4 = {};
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED',
        'ERR_NOT_SUPPORT',
        'ERR_INVALID_URL',
      ].forEach((e) => {
        r4[e] = { value: e };
      }),
        Object.defineProperties(r2, r4),
        Object.defineProperty(r5, 'isAxiosError', { value: !0 }),
        (r2.from = (e, t, r, n, i, s) => {
          let a = Object.create(r5);
          return (
            r1.toFlatObject(
              e,
              a,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => 'isAxiosError' !== e
            ),
            r2.call(a, e.message, t, r, n, i),
            (a.cause = e),
            (a.name = e.name),
            s && Object.assign(a, s),
            a
          );
        });
      var r6 = r(2796).hp;
      function r3(e) {
        return r1.isPlainObject(e) || r1.isArray(e);
      }
      function r8(e) {
        return r1.endsWith(e, '[]') ? e.slice(0, -2) : e;
      }
      function r9(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = r8(e)), !r && t ? '[' + e + ']' : e;
              })
              .join(r ? '.' : '')
          : t;
      }
      let r7 = r1.toFlatObject(r1, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        }),
        ne = function (e, t, r) {
          if (!r1.isObject(e)) throw TypeError('target must be an object');
          t = t || new FormData();
          let n = (r = r1.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !r1.isUndefined(t[e]);
              }
            )).metaTokens,
            i = r.visitor || l,
            s = r.dots,
            a = r.indexes,
            o =
              (r.Blob || ('undefined' != typeof Blob && Blob)) &&
              r1.isSpecCompliantForm(t);
          if (!r1.isFunction(i)) throw TypeError('visitor must be a function');
          function u(e) {
            if (null === e) return '';
            if (r1.isDate(e)) return e.toISOString();
            if (!o && r1.isBlob(e))
              throw new r2('Blob is not supported. Use a Buffer instead.');
            return r1.isArrayBuffer(e) || r1.isTypedArray(e)
              ? o && 'function' == typeof Blob
                ? new Blob([e])
                : r6.from(e)
              : e;
          }
          function l(e, r, i) {
            let o = e;
            if (e && !i && 'object' == typeof e) {
              if (r1.endsWith(r, '{}'))
                (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
              else {
                var l;
                if (
                  (r1.isArray(e) && ((l = e), r1.isArray(l) && !l.some(r3))) ||
                  ((r1.isFileList(e) || r1.endsWith(r, '[]')) &&
                    (o = r1.toArray(e)))
                )
                  return (
                    (r = r8(r)),
                    o.forEach(function (e, n) {
                      r1.isUndefined(e) ||
                        null === e ||
                        t.append(
                          !0 === a ? r9([r], n, s) : null === a ? r : r + '[]',
                          u(e)
                        );
                    }),
                    !1
                  );
              }
            }
            return !!r3(e) || (t.append(r9(i, r, s), u(e)), !1);
          }
          let c = [],
            h = Object.assign(r7, {
              defaultVisitor: l,
              convertValue: u,
              isVisitable: r3,
            });
          if (!r1.isObject(e)) throw TypeError('data must be an object');
          return (
            !(function e(r, n) {
              if (!r1.isUndefined(r)) {
                if (-1 !== c.indexOf(r))
                  throw Error('Circular reference detected in ' + n.join('.'));
                c.push(r),
                  r1.forEach(r, function (r, s) {
                    !0 ===
                      (!(r1.isUndefined(r) || null === r) &&
                        i.call(t, r, r1.isString(s) ? s.trim() : s, n, h)) &&
                      e(r, n ? n.concat(s) : [s]);
                  }),
                  c.pop();
              }
            })(e),
            t
          );
        };
      function nt(e) {
        let t = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\0',
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function nr(e, t) {
        (this._pairs = []), e && ne(e, this, t);
      }
      let nn = nr.prototype;
      function ni(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      function ns(e, t, r) {
        let n;
        if (!t) return e;
        let i = (r && r.encode) || ni;
        r1.isFunction(r) && (r = { serialize: r });
        let s = r && r.serialize;
        if (
          (n = s
            ? s(t, r)
            : r1.isURLSearchParams(t)
              ? t.toString()
              : new nr(t, r).toString(i))
        ) {
          let t = e.indexOf('#');
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf('?') ? '?' : '&') + n);
        }
        return e;
      }
      (nn.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (nn.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, nt);
              }
            : nt;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + '=' + t(e[1]);
            }, '')
            .join('&');
        });
      class na {
        constructor() {
          this.handlers = [];
        }
        use(e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          r1.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      }
      let no = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        nu = 'undefined' != typeof URLSearchParams ? URLSearchParams : nr,
        nl = 'undefined' != typeof FormData ? FormData : null,
        nc = 'undefined' != typeof Blob ? Blob : null,
        nh = 'undefined' != typeof window && 'undefined' != typeof document,
        nd = ('object' == typeof navigator && navigator) || void 0,
        nf =
          nh &&
          (!nd ||
            0 > ['ReactNative', 'NativeScript', 'NS'].indexOf(nd.product)),
        np =
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          'function' == typeof self.importScripts,
        nm = (nh && window.location.href) || 'http://localhost',
        ng = {
          ...y,
          isBrowser: !0,
          classes: { URLSearchParams: nu, FormData: nl, Blob: nc },
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        },
        ny = function (e) {
          if (r1.isFormData(e) && r1.isFunction(e.entries)) {
            let t = {};
            return (
              r1.forEachEntry(e, (e, r) => {
                !(function e(t, r, n, i) {
                  let s = t[i++];
                  if ('__proto__' === s) return !0;
                  let a = Number.isFinite(+s),
                    o = i >= t.length;
                  return (
                    ((s = !s && r1.isArray(n) ? n.length : s), o)
                      ? r1.hasOwnProp(n, s)
                        ? (n[s] = [n[s], r])
                        : (n[s] = r)
                      : ((n[s] && r1.isObject(n[s])) || (n[s] = []),
                        e(t, r, n[s], i) &&
                          r1.isArray(n[s]) &&
                          (n[s] = (function (e) {
                            let t, r;
                            let n = {},
                              i = Object.keys(e),
                              s = i.length;
                            for (t = 0; t < s; t++) n[(r = i[t])] = e[r];
                            return n;
                          })(n[s]))),
                    !a
                  );
                })(
                  r1
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ('[]' === e[0] ? '' : e[1] || e[0])),
                  r,
                  t,
                  0
                );
              }),
              t
            );
          }
          return null;
        },
        nv = {
          transitional: no,
          adapter: ['xhr', 'http', 'fetch'],
          transformRequest: [
            function (e, t) {
              let r;
              let n = t.getContentType() || '',
                i = n.indexOf('application/json') > -1,
                s = r1.isObject(e);
              if (
                (s && r1.isHTMLForm(e) && (e = new FormData(e)),
                r1.isFormData(e))
              )
                return i ? JSON.stringify(ny(e)) : e;
              if (
                r1.isArrayBuffer(e) ||
                r1.isBuffer(e) ||
                r1.isStream(e) ||
                r1.isFile(e) ||
                r1.isBlob(e) ||
                r1.isReadableStream(e)
              )
                return e;
              if (r1.isArrayBufferView(e)) return e.buffer;
              if (r1.isURLSearchParams(e))
                return (
                  t.setContentType(
                    'application/x-www-form-urlencoded;charset=utf-8',
                    !1
                  ),
                  e.toString()
                );
              if (s) {
                if (n.indexOf('application/x-www-form-urlencoded') > -1) {
                  var a, o;
                  return ((a = e),
                  (o = this.formSerializer),
                  ne(
                    a,
                    new ng.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return ng.isNode && r1.isBuffer(e)
                            ? (this.append(t, e.toString('base64')), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      o
                    )
                  )).toString();
                }
                if (
                  (r = r1.isFileList(e)) ||
                  n.indexOf('multipart/form-data') > -1
                ) {
                  let t = this.env && this.env.FormData;
                  return ne(
                    r ? { 'files[]': e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              return s || i
                ? (t.setContentType('application/json', !1),
                  (function (e, t, r) {
                    if (r1.isString(e))
                      try {
                        return (0, JSON.parse)(e), r1.trim(e);
                      } catch (e) {
                        if ('SyntaxError' !== e.name) throw e;
                      }
                    return (0, JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              let t = this.transitional || nv.transitional,
                r = t && t.forcedJSONParsing,
                n = 'json' === this.responseType;
              if (r1.isResponse(e) || r1.isReadableStream(e)) return e;
              if (e && r1.isString(e) && ((r && !this.responseType) || n)) {
                let r = t && t.silentJSONParsing;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (!r && n) {
                    if ('SyntaxError' === e.name)
                      throw r2.from(
                        e,
                        r2.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: ng.classes.FormData, Blob: ng.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': void 0,
            },
          },
        };
      r1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
        nv.headers[e] = {};
      });
      let nb = r1.toObjectSet([
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ]),
        nw = (e) => {
          let t, r, n;
          let i = {};
          return (
            e &&
              e.split('\n').forEach(function (e) {
                (n = e.indexOf(':')),
                  (t = e.substring(0, n).trim().toLowerCase()),
                  (r = e.substring(n + 1).trim()),
                  !t ||
                    (i[t] && nb[t]) ||
                    ('set-cookie' === t
                      ? i[t]
                        ? i[t].push(r)
                        : (i[t] = [r])
                      : (i[t] = i[t] ? i[t] + ', ' + r : r));
              }),
            i
          );
        },
        n_ = Symbol('internals');
      function nE(e) {
        return e && String(e).trim().toLowerCase();
      }
      function nS(e) {
        return !1 === e || null == e
          ? e
          : r1.isArray(e)
            ? e.map(nS)
            : String(e);
      }
      let nO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function nR(e, t, r, n, i) {
        if (r1.isFunction(n)) return n.call(this, t, r);
        if ((i && (t = r), r1.isString(t))) {
          if (r1.isString(n)) return -1 !== t.indexOf(n);
          if (r1.isRegExp(n)) return n.test(t);
        }
      }
      class nC {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function i(e, t, r) {
            let i = nE(t);
            if (!i) throw Error('header name must be a non-empty string');
            let s = r1.findKey(n, i);
            (s &&
              void 0 !== n[s] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[s])) ||
              (n[s || t] = nS(e));
          }
          let s = (e, t) => r1.forEach(e, (e, r) => i(e, r, t));
          if (r1.isPlainObject(e) || e instanceof this.constructor) s(e, t);
          else if (r1.isString(e) && (e = e.trim()) && !nO(e)) s(nw(e), t);
          else if (r1.isHeaders(e)) for (let [t, n] of e.entries()) i(n, t, r);
          else null != e && i(t, e, r);
          return this;
        }
        get(e, t) {
          if ((e = nE(e))) {
            let r = r1.findKey(this, e);
            if (r) {
              let e = this[r];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  let t;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (t = n.exec(e)); ) r[t[1]] = t[2];
                  return r;
                })(e);
              if (r1.isFunction(t)) return t.call(this, e, r);
              if (r1.isRegExp(t)) return t.exec(e);
              throw TypeError('parser must be boolean|regexp|function');
            }
          }
        }
        has(e, t) {
          if ((e = nE(e))) {
            let r = r1.findKey(this, e);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!t || nR(this, this[r], r, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function i(e) {
            if ((e = nE(e))) {
              let i = r1.findKey(r, e);
              i && (!t || nR(r, r[i], i, t)) && (delete r[i], (n = !0));
            }
          }
          return r1.isArray(e) ? e.forEach(i) : i(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let i = t[r];
            (!e || nR(this, this[i], i, e, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            r1.forEach(this, (n, i) => {
              let s = r1.findKey(r, i);
              if (s) {
                (t[s] = nS(n)), delete t[i];
                return;
              }
              let a = e
                ? i
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, r) => t.toUpperCase() + r
                    )
                : String(i).trim();
              a !== i && delete t[i], (t[a] = nS(n)), (r[a] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            r1.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (t[n] = e && r1.isArray(r) ? r.join(', ') : r);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ': ' + t)
            .join('\n');
        }
        get [Symbol.toStringTag]() {
          return 'AxiosHeaders';
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let r = new this(e);
          return t.forEach((e) => r.set(e)), r;
        }
        static accessor(e) {
          let t = (this[n_] = this[n_] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(e) {
            let n = nE(e);
            t[n] ||
              (!(function (e, t) {
                let r = r1.toCamelCase(' ' + t);
                ['get', 'set', 'has'].forEach((n) => {
                  Object.defineProperty(e, n + r, {
                    value: function (e, r, i) {
                      return this[n].call(this, t, e, r, i);
                    },
                    configurable: !0,
                  });
                });
              })(r, e),
              (t[n] = !0));
          }
          return r1.isArray(e) ? e.forEach(n) : n(e), this;
        }
      }
      function nx(e, t) {
        let r = this || nv,
          n = t || r,
          i = nC.from(n.headers),
          s = n.data;
        return (
          r1.forEach(e, function (e) {
            s = e.call(r, s, i.normalize(), t ? t.status : void 0);
          }),
          i.normalize(),
          s
        );
      }
      function nN(e) {
        return !!(e && e.__CANCEL__);
      }
      function nk(e, t, r) {
        r2.call(this, null == e ? 'canceled' : e, r2.ERR_CANCELED, t, r),
          (this.name = 'CanceledError');
      }
      function nA(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? e(r)
          : t(
              new r2(
                'Request failed with status code ' + r.status,
                [r2.ERR_BAD_REQUEST, r2.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r
              )
            );
      }
      nC.accessor([
        'Content-Type',
        'Content-Length',
        'Accept',
        'Accept-Encoding',
        'User-Agent',
        'Authorization',
      ]),
        r1.reduceDescriptors(nC.prototype, ({ value: e }, t) => {
          let r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[r] = e;
            },
          };
        }),
        r1.freezeMethods(nC),
        r1.inherits(nk, r2, { __CANCEL__: !0 });
      let nT = function (e, t) {
          let r;
          let n = Array((e = e || 10)),
            i = Array(e),
            s = 0,
            a = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (o) {
              let u = Date.now(),
                l = i[a];
              r || (r = u), (n[s] = o), (i[s] = u);
              let c = a,
                h = 0;
              for (; c !== s; ) (h += n[c++]), (c %= e);
              if (((s = (s + 1) % e) === a && (a = (a + 1) % e), u - r < t))
                return;
              let d = l && u - l;
              return d ? Math.round((1e3 * h) / d) : void 0;
            }
          );
        },
        nP = function (e, t) {
          let r,
            n,
            i = 0,
            s = 1e3 / t,
            a = (t, s = Date.now()) => {
              (i = s),
                (r = null),
                n && (clearTimeout(n), (n = null)),
                e.apply(null, t);
            };
          return [
            (...e) => {
              let t = Date.now(),
                o = t - i;
              o >= s
                ? a(e, t)
                : ((r = e),
                  n ||
                    (n = setTimeout(() => {
                      (n = null), a(r);
                    }, s - o)));
            },
            () => r && a(r),
          ];
        },
        nI = (e, t, r = 3) => {
          let n = 0,
            i = nT(50, 250);
          return nP((r) => {
            let s = r.loaded,
              a = r.lengthComputable ? r.total : void 0,
              o = s - n,
              u = i(o);
            (n = s),
              e({
                loaded: s,
                total: a,
                progress: a ? s / a : void 0,
                bytes: o,
                rate: u || void 0,
                estimated: u && a && s <= a ? (a - s) / u : void 0,
                event: r,
                lengthComputable: null != a,
                [t ? 'download' : 'upload']: !0,
              });
          }, r);
        },
        nD = (e, t) => {
          let r = null != e;
          return [
            (n) => t[0]({ lengthComputable: r, total: e, loaded: n }),
            t[1],
          ];
        },
        nM =
          (e) =>
          (...t) =>
            r1.asap(() => e(...t)),
        nj = ng.hasStandardBrowserEnv
          ? ((e, t) => (r) => (
              (r = new URL(r, ng.origin)),
              e.protocol === r.protocol &&
                e.host === r.host &&
                (t || e.port === r.port)
            ))(
              new URL(ng.origin),
              ng.navigator && /(msie|trident)/i.test(ng.navigator.userAgent)
            )
          : () => !0,
        nq = ng.hasStandardBrowserEnv
          ? {
              write(e, t, r, n, i, s) {
                let a = [e + '=' + encodeURIComponent(t)];
                r1.isNumber(r) &&
                  a.push('expires=' + new Date(r).toGMTString()),
                  r1.isString(n) && a.push('path=' + n),
                  r1.isString(i) && a.push('domain=' + i),
                  !0 === s && a.push('secure'),
                  (document.cookie = a.join('; '));
              },
              read(e) {
                let t = document.cookie.match(
                  RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function nU(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? t
            ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '')
            : e
          : t;
      }
      let nF = (e) => (e instanceof nC ? { ...e } : e);
      function nL(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r, n) {
          return r1.isPlainObject(e) && r1.isPlainObject(t)
            ? r1.merge.call({ caseless: n }, e, t)
            : r1.isPlainObject(t)
              ? r1.merge({}, t)
              : r1.isArray(t)
                ? t.slice()
                : t;
        }
        function i(e, t, r, i) {
          return r1.isUndefined(t)
            ? r1.isUndefined(e)
              ? void 0
              : n(void 0, e, r, i)
            : n(e, t, r, i);
        }
        function s(e, t) {
          if (!r1.isUndefined(t)) return n(void 0, t);
        }
        function a(e, t) {
          return r1.isUndefined(t)
            ? r1.isUndefined(e)
              ? void 0
              : n(void 0, e)
            : n(void 0, t);
        }
        function o(r, i, s) {
          return s in t ? n(r, i) : s in e ? n(void 0, r) : void 0;
        }
        let u = {
          url: s,
          method: s,
          data: s,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          withXSRFToken: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: o,
          headers: (e, t, r) => i(nF(e), nF(t), r, !0),
        };
        return (
          r1.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let s = u[n] || i,
              a = s(e[n], t[n], n);
            (r1.isUndefined(a) && s !== o) || (r[n] = a);
          }),
          r
        );
      }
      let nQ = (e) => {
          let t;
          let r = nL({}, e),
            {
              data: n,
              withXSRFToken: i,
              xsrfHeaderName: s,
              xsrfCookieName: a,
              headers: o,
              auth: u,
            } = r;
          if (
            ((r.headers = o = nC.from(o)),
            (r.url = ns(nU(r.baseURL, r.url), e.params, e.paramsSerializer)),
            u &&
              o.set(
                'Authorization',
                'Basic ' +
                  btoa(
                    (u.username || '') +
                      ':' +
                      (u.password
                        ? unescape(encodeURIComponent(u.password))
                        : '')
                  )
              ),
            r1.isFormData(n))
          ) {
            if (ng.hasStandardBrowserEnv || ng.hasStandardBrowserWebWorkerEnv)
              o.setContentType(void 0);
            else if (!1 !== (t = o.getContentType())) {
              let [e, ...r] = t
                ? t
                    .split(';')
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              o.setContentType([e || 'multipart/form-data', ...r].join('; '));
            }
          }
          if (
            ng.hasStandardBrowserEnv &&
            (i && r1.isFunction(i) && (i = i(r)), i || (!1 !== i && nj(r.url)))
          ) {
            let e = s && a && nq.read(a);
            e && o.set(s, e);
          }
          return r;
        },
        nB =
          'undefined' != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              let n, i, s, a, o;
              let u = nQ(e),
                l = u.data,
                c = nC.from(u.headers).normalize(),
                {
                  responseType: h,
                  onUploadProgress: d,
                  onDownloadProgress: f,
                } = u;
              function p() {
                a && a(),
                  o && o(),
                  u.cancelToken && u.cancelToken.unsubscribe(n),
                  u.signal && u.signal.removeEventListener('abort', n);
              }
              let m = new XMLHttpRequest();
              function g() {
                if (!m) return;
                let n = nC.from(
                  'getAllResponseHeaders' in m && m.getAllResponseHeaders()
                );
                nA(
                  function (e) {
                    t(e), p();
                  },
                  function (e) {
                    r(e), p();
                  },
                  {
                    data:
                      h && 'text' !== h && 'json' !== h
                        ? m.response
                        : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: n,
                    config: e,
                    request: m,
                  }
                ),
                  (m = null);
              }
              m.open(u.method.toUpperCase(), u.url, !0),
                (m.timeout = u.timeout),
                'onloadend' in m
                  ? (m.onloadend = g)
                  : (m.onreadystatechange = function () {
                      m &&
                        4 === m.readyState &&
                        (0 !== m.status ||
                          (m.responseURL &&
                            0 === m.responseURL.indexOf('file:'))) &&
                        setTimeout(g);
                    }),
                (m.onabort = function () {
                  m &&
                    (r(new r2('Request aborted', r2.ECONNABORTED, e, m)),
                    (m = null));
                }),
                (m.onerror = function () {
                  r(new r2('Network Error', r2.ERR_NETWORK, e, m)), (m = null);
                }),
                (m.ontimeout = function () {
                  let t = u.timeout
                      ? 'timeout of ' + u.timeout + 'ms exceeded'
                      : 'timeout exceeded',
                    n = u.transitional || no;
                  u.timeoutErrorMessage && (t = u.timeoutErrorMessage),
                    r(
                      new r2(
                        t,
                        n.clarifyTimeoutError ? r2.ETIMEDOUT : r2.ECONNABORTED,
                        e,
                        m
                      )
                    ),
                    (m = null);
                }),
                void 0 === l && c.setContentType(null),
                'setRequestHeader' in m &&
                  r1.forEach(c.toJSON(), function (e, t) {
                    m.setRequestHeader(t, e);
                  }),
                r1.isUndefined(u.withCredentials) ||
                  (m.withCredentials = !!u.withCredentials),
                h && 'json' !== h && (m.responseType = u.responseType),
                f && (([s, o] = nI(f, !0)), m.addEventListener('progress', s)),
                d &&
                  m.upload &&
                  (([i, a] = nI(d)),
                  m.upload.addEventListener('progress', i),
                  m.upload.addEventListener('loadend', a)),
                (u.cancelToken || u.signal) &&
                  ((n = (t) => {
                    m &&
                      (r(!t || t.type ? new nk(null, e, m) : t),
                      m.abort(),
                      (m = null));
                  }),
                  u.cancelToken && u.cancelToken.subscribe(n),
                  u.signal &&
                    (u.signal.aborted
                      ? n()
                      : u.signal.addEventListener('abort', n)));
              let y = (function (e) {
                let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || '';
              })(u.url);
              if (y && -1 === ng.protocols.indexOf(y)) {
                r(
                  new r2(
                    'Unsupported protocol ' + y + ':',
                    r2.ERR_BAD_REQUEST,
                    e
                  )
                );
                return;
              }
              m.send(l || null);
            });
          },
        nZ = (e, t) => {
          let { length: r } = (e = e ? e.filter(Boolean) : []);
          if (t || r) {
            let r,
              n = new AbortController(),
              i = function (e) {
                if (!r) {
                  (r = !0), a();
                  let t = e instanceof Error ? e : this.reason;
                  n.abort(
                    t instanceof r2
                      ? t
                      : new nk(t instanceof Error ? t.message : t)
                  );
                }
              },
              s =
                t &&
                setTimeout(() => {
                  (s = null),
                    i(new r2(`timeout ${t} of ms exceeded`, r2.ETIMEDOUT));
                }, t),
              a = () => {
                e &&
                  (s && clearTimeout(s),
                  (s = null),
                  e.forEach((e) => {
                    e.unsubscribe
                      ? e.unsubscribe(i)
                      : e.removeEventListener('abort', i);
                  }),
                  (e = null));
              };
            e.forEach((e) => e.addEventListener('abort', i));
            let { signal: o } = n;
            return (o.unsubscribe = () => r1.asap(a)), o;
          }
        },
        nz = function* (e, t) {
          let r,
            n = e.byteLength;
          if (!t || n < t) {
            yield e;
            return;
          }
          let i = 0;
          for (; i < n; ) (r = i + t), yield e.slice(i, r), (i = r);
        },
        n$ = async function* (e, t) {
          for await (let r of nH(e)) yield* nz(r, t);
        },
        nH = async function* (e) {
          if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
          }
          let t = e.getReader();
          try {
            for (;;) {
              let { done: e, value: r } = await t.read();
              if (e) break;
              yield r;
            }
          } finally {
            await t.cancel();
          }
        },
        nW = (e, t, r, n) => {
          let i;
          let s = n$(e, t),
            a = 0,
            o = (e) => {
              !i && ((i = !0), n && n(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  let { done: t, value: n } = await s.next();
                  if (t) {
                    o(), e.close();
                    return;
                  }
                  let i = n.byteLength;
                  if (r) {
                    let e = (a += i);
                    r(e);
                  }
                  e.enqueue(new Uint8Array(n));
                } catch (e) {
                  throw (o(e), e);
                }
              },
              cancel: (e) => (o(e), s.return()),
            },
            { highWaterMark: 2 }
          );
        },
        nK =
          'function' == typeof fetch &&
          'function' == typeof Request &&
          'function' == typeof Response,
        nV = nK && 'function' == typeof ReadableStream,
        nG =
          nK &&
          ('function' == typeof TextEncoder
            ? ((i = new TextEncoder()), (e) => i.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        nJ = (e, ...t) => {
          try {
            return !!e(...t);
          } catch (e) {
            return !1;
          }
        },
        nY =
          nV &&
          nJ(() => {
            let e = !1,
              t = new Request(ng.origin, {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                  return (e = !0), 'half';
                },
              }).headers.has('Content-Type');
            return e && !t;
          }),
        nX = nV && nJ(() => r1.isReadableStream(new Response('').body)),
        n0 = { stream: nX && ((e) => e.body) };
      nK &&
        ((o = new Response()),
        ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((e) => {
          n0[e] ||
            (n0[e] = r1.isFunction(o[e])
              ? (t) => t[e]()
              : (t, r) => {
                  throw new r2(
                    `Response type '${e}' is not supported`,
                    r2.ERR_NOT_SUPPORT,
                    r
                  );
                });
        }));
      let n1 = async (e) => {
          if (null == e) return 0;
          if (r1.isBlob(e)) return e.size;
          if (r1.isSpecCompliantForm(e)) {
            let t = new Request(ng.origin, { method: 'POST', body: e });
            return (await t.arrayBuffer()).byteLength;
          }
          return r1.isArrayBufferView(e) || r1.isArrayBuffer(e)
            ? e.byteLength
            : (r1.isURLSearchParams(e) && (e += ''), r1.isString(e))
              ? (await nG(e)).byteLength
              : void 0;
        },
        n2 = async (e, t) => {
          let r = r1.toFiniteNumber(e.getContentLength());
          return null == r ? n1(t) : r;
        },
        n5 = {
          http: null,
          xhr: nB,
          fetch:
            nK &&
            (async (e) => {
              let t,
                r,
                {
                  url: n,
                  method: i,
                  data: s,
                  signal: a,
                  cancelToken: o,
                  timeout: u,
                  onDownloadProgress: l,
                  onUploadProgress: c,
                  responseType: h,
                  headers: d,
                  withCredentials: f = 'same-origin',
                  fetchOptions: p,
                } = nQ(e);
              h = h ? (h + '').toLowerCase() : 'text';
              let m = nZ([a, o && o.toAbortSignal()], u),
                g =
                  m &&
                  m.unsubscribe &&
                  (() => {
                    m.unsubscribe();
                  });
              try {
                if (
                  c &&
                  nY &&
                  'get' !== i &&
                  'head' !== i &&
                  0 !== (r = await n2(d, s))
                ) {
                  let e,
                    t = new Request(n, {
                      method: 'POST',
                      body: s,
                      duplex: 'half',
                    });
                  if (
                    (r1.isFormData(s) &&
                      (e = t.headers.get('content-type')) &&
                      d.setContentType(e),
                    t.body)
                  ) {
                    let [e, n] = nD(r, nI(nM(c)));
                    s = nW(t.body, 65536, e, n);
                  }
                }
                r1.isString(f) || (f = f ? 'include' : 'omit');
                let a = 'credentials' in Request.prototype;
                t = new Request(n, {
                  ...p,
                  signal: m,
                  method: i.toUpperCase(),
                  headers: d.normalize().toJSON(),
                  body: s,
                  duplex: 'half',
                  credentials: a ? f : void 0,
                });
                let o = await fetch(t),
                  u = nX && ('stream' === h || 'response' === h);
                if (nX && (l || (u && g))) {
                  let e = {};
                  ['status', 'statusText', 'headers'].forEach((t) => {
                    e[t] = o[t];
                  });
                  let t = r1.toFiniteNumber(o.headers.get('content-length')),
                    [r, n] = (l && nD(t, nI(nM(l), !0))) || [];
                  o = new Response(
                    nW(o.body, 65536, r, () => {
                      n && n(), g && g();
                    }),
                    e
                  );
                }
                h = h || 'text';
                let y = await n0[r1.findKey(n0, h) || 'text'](o, e);
                return (
                  !u && g && g(),
                  await new Promise((r, n) => {
                    nA(r, n, {
                      data: y,
                      headers: nC.from(o.headers),
                      status: o.status,
                      statusText: o.statusText,
                      config: e,
                      request: t,
                    });
                  })
                );
              } catch (r) {
                if (
                  (g && g(),
                  r && 'TypeError' === r.name && /fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new r2('Network Error', r2.ERR_NETWORK, e, t),
                    { cause: r.cause || r }
                  );
                throw r2.from(r, r && r.code, e, t);
              }
            }),
        };
      r1.forEach(n5, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, 'name', { value: t });
          } catch (e) {}
          Object.defineProperty(e, 'adapterName', { value: t });
        }
      });
      let n4 = (e) => `- ${e}`,
        n6 = (e) => r1.isFunction(e) || null === e || !1 === e,
        n3 = {
          getAdapter: (e) => {
            let t, r;
            let { length: n } = (e = r1.isArray(e) ? e : [e]),
              i = {};
            for (let s = 0; s < n; s++) {
              let n;
              if (
                ((r = t = e[s]),
                !n6(t) && void 0 === (r = n5[(n = String(t)).toLowerCase()]))
              )
                throw new r2(`Unknown adapter '${n}'`);
              if (r) break;
              i[n || '#' + s] = r;
            }
            if (!r) {
              let e = Object.entries(i).map(
                ([e, t]) =>
                  `adapter ${e} ` +
                  (!1 === t
                    ? 'is not supported by the environment'
                    : 'is not available in the build')
              );
              throw new r2(
                'There is no suitable adapter to dispatch the request ' +
                  (n
                    ? e.length > 1
                      ? 'since :\n' + e.map(n4).join('\n')
                      : ' ' + n4(e[0])
                    : 'as no adapter specified'),
                'ERR_NOT_SUPPORT'
              );
            }
            return r;
          },
        };
      function n8(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new nk(null, e);
      }
      function n9(e) {
        return (
          n8(e),
          (e.headers = nC.from(e.headers)),
          (e.data = nx.call(e, e.transformRequest)),
          -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
          n3
            .getAdapter(e.adapter || nv.adapter)(e)
            .then(
              function (t) {
                return (
                  n8(e),
                  (t.data = nx.call(e, e.transformResponse, t)),
                  (t.headers = nC.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  !nN(t) &&
                    (n8(e),
                    t &&
                      t.response &&
                      ((t.response.data = nx.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = nC.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
        );
      }
      let n7 = '1.7.9',
        ie = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
        (e, t) => {
          ie[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
          };
        }
      );
      let it = {};
      (ie.transitional = function (e, t, r) {
        function n(e, t) {
          return (
            '[Axios v' +
            n7 +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? '. ' + r : '')
          );
        }
        return (r, i, s) => {
          if (!1 === e)
            throw new r2(
              n(i, ' has been removed' + (t ? ' in ' + t : '')),
              r2.ERR_DEPRECATED
            );
          return (
            t &&
              !it[i] &&
              ((it[i] = !0),
              console.warn(
                n(
                  i,
                  ' has been deprecated since v' +
                    t +
                    ' and will be removed in the near future'
                )
              )),
            !e || e(r, i, s)
          );
        };
      }),
        (ie.spelling = function (e) {
          return (t, r) => (
            console.warn(`${r} is likely a misspelling of ${e}`), !0
          );
        });
      let ir = {
          assertOptions: function (e, t, r) {
            if ('object' != typeof e)
              throw new r2(
                'options must be an object',
                r2.ERR_BAD_OPTION_VALUE
              );
            let n = Object.keys(e),
              i = n.length;
            for (; i-- > 0; ) {
              let s = n[i],
                a = t[s];
              if (a) {
                let t = e[s],
                  r = void 0 === t || a(t, s, e);
                if (!0 !== r)
                  throw new r2(
                    'option ' + s + ' must be ' + r,
                    r2.ERR_BAD_OPTION_VALUE
                  );
                continue;
              }
              if (!0 !== r)
                throw new r2('Unknown option ' + s, r2.ERR_BAD_OPTION);
            }
          },
          validators: ie,
        },
        ii = ir.validators;
      class is {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new na(), response: new na() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (e) {
            if (e instanceof Error) {
              let t = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(t)
                : (t = Error());
              let r = t.stack ? t.stack.replace(/^.+\n/, '') : '';
              try {
                e.stack
                  ? r &&
                    !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, '')) &&
                    (e.stack += '\n' + r)
                  : (e.stack = r);
              } catch (e) {}
            }
            throw e;
          }
        }
        _request(e, t) {
          let r, n;
          'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {});
          let {
            transitional: i,
            paramsSerializer: s,
            headers: a,
          } = (t = nL(this.defaults, t));
          void 0 !== i &&
            ir.assertOptions(
              i,
              {
                silentJSONParsing: ii.transitional(ii.boolean),
                forcedJSONParsing: ii.transitional(ii.boolean),
                clarifyTimeoutError: ii.transitional(ii.boolean),
              },
              !1
            ),
            null != s &&
              (r1.isFunction(s)
                ? (t.paramsSerializer = { serialize: s })
                : ir.assertOptions(
                    s,
                    { encode: ii.function, serialize: ii.function },
                    !0
                  )),
            ir.assertOptions(
              t,
              {
                baseUrl: ii.spelling('baseURL'),
                withXsrfToken: ii.spelling('withXSRFToken'),
              },
              !0
            ),
            (t.method = (
              t.method ||
              this.defaults.method ||
              'get'
            ).toLowerCase());
          let o = a && r1.merge(a.common, a[t.method]);
          a &&
            r1.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = nC.concat(o, a));
          let u = [],
            l = !0;
          this.interceptors.request.forEach(function (e) {
            ('function' != typeof e.runWhen || !1 !== e.runWhen(t)) &&
              ((l = l && e.synchronous), u.unshift(e.fulfilled, e.rejected));
          });
          let c = [];
          this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          });
          let h = 0;
          if (!l) {
            let e = [n9.bind(this), void 0];
            for (
              e.unshift.apply(e, u),
                e.push.apply(e, c),
                n = e.length,
                r = Promise.resolve(t);
              h < n;

            )
              r = r.then(e[h++], e[h++]);
            return r;
          }
          n = u.length;
          let d = t;
          for (h = 0; h < n; ) {
            let e = u[h++],
              t = u[h++];
            try {
              d = e(d);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            r = n9.call(this, d);
          } catch (e) {
            return Promise.reject(e);
          }
          for (h = 0, n = c.length; h < n; ) r = r.then(c[h++], c[h++]);
          return r;
        }
        getUri(e) {
          return ns(
            nU((e = nL(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      r1.forEach(['delete', 'get', 'head', 'options'], function (e) {
        is.prototype[e] = function (t, r) {
          return this.request(
            nL(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
        r1.forEach(['post', 'put', 'patch'], function (e) {
          function t(t) {
            return function (r, n, i) {
              return this.request(
                nL(i || {}, {
                  method: e,
                  headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (is.prototype[e] = t()), (is.prototype[e + 'Form'] = t(!0));
        });
      class ia {
        constructor(e) {
          let t;
          if ('function' != typeof e)
            throw TypeError('executor must be a function.');
          this.promise = new Promise(function (e) {
            t = e;
          });
          let r = this;
          this.promise.then((e) => {
            if (!r._listeners) return;
            let t = r._listeners.length;
            for (; t-- > 0; ) r._listeners[t](e);
            r._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              let n = new Promise((e) => {
                r.subscribe(e), (t = e);
              }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e, n, i) {
              r.reason || ((r.reason = new nk(e, n, i)), t(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          let e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          return {
            token: new ia(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      let io = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(io).forEach(([e, t]) => {
        io[t] = e;
      });
      let iu = (function e(t) {
        let r = new is(t),
          n = rg(is.prototype.request, r);
        return (
          r1.extend(n, is.prototype, r, { allOwnKeys: !0 }),
          r1.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(nL(t, r));
          }),
          n
        );
      })(nv);
      (iu.Axios = is),
        (iu.CanceledError = nk),
        (iu.CancelToken = ia),
        (iu.isCancel = nN),
        (iu.VERSION = n7),
        (iu.toFormData = ne),
        (iu.AxiosError = r2),
        (iu.Cancel = iu.CanceledError),
        (iu.all = function (e) {
          return Promise.all(e);
        }),
        (iu.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (iu.isAxiosError = function (e) {
          return r1.isObject(e) && !0 === e.isAxiosError;
        }),
        (iu.mergeConfig = nL),
        (iu.AxiosHeaders = nC),
        (iu.formToJSON = (e) => ny(r1.isHTMLForm(e) ? new FormData(e) : e)),
        (iu.getAdapter = n3.getAdapter),
        (iu.HttpStatusCode = io),
        (iu.default = iu);
      let {
        Axios: il,
        AxiosError: ic,
        CanceledError: ih,
        isCancel: id,
        CancelToken: ip,
        VERSION: im,
        all: ig,
        Cancel: iy,
        isAxiosError: iv,
        spread: ib,
        toFormData: iw,
        AxiosHeaders: i_,
        HttpStatusCode: iE,
        formToJSON: iS,
        getAdapter: iO,
        mergeConfig: iR,
      } = iu;
      !(function (e) {
        (e.assertEqual = (e) => e),
          (e.assertIs = function (e) {}),
          (e.assertNever = function (e) {
            throw Error();
          }),
          (e.arrayToEnum = (e) => {
            let t = {};
            for (let r of e) t[r] = r;
            return t;
          }),
          (e.getValidEnumValues = (t) => {
            let r = e.objectKeys(t).filter((e) => 'number' != typeof t[t[e]]),
              n = {};
            for (let e of r) n[e] = t[e];
            return e.objectValues(n);
          }),
          (e.objectValues = (t) =>
            e.objectKeys(t).map(function (e) {
              return t[e];
            })),
          (e.objectKeys =
            'function' == typeof Object.keys
              ? (e) => Object.keys(e)
              : (e) => {
                  let t = [];
                  for (let r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                  return t;
                }),
          (e.find = (e, t) => {
            for (let r of e) if (t(r)) return r;
          }),
          (e.isInteger =
            'function' == typeof Number.isInteger
              ? (e) => Number.isInteger(e)
              : (e) =>
                  'number' == typeof e && isFinite(e) && Math.floor(e) === e),
          (e.joinValues = function (e, t = ' | ') {
            return e.map((e) => ('string' == typeof e ? `'${e}'` : e)).join(t);
          }),
          (e.jsonStringifyReplacer = (e, t) =>
            'bigint' == typeof t ? t.toString() : t);
      })(h || (h = {})),
        ((d || (d = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let iC = h.arrayToEnum([
          'string',
          'nan',
          'number',
          'integer',
          'float',
          'boolean',
          'date',
          'bigint',
          'symbol',
          'function',
          'undefined',
          'null',
          'array',
          'object',
          'unknown',
          'promise',
          'void',
          'never',
          'map',
          'set',
        ]),
        ix = (e) => {
          switch (typeof e) {
            case 'undefined':
              return iC.undefined;
            case 'string':
              return iC.string;
            case 'number':
              return isNaN(e) ? iC.nan : iC.number;
            case 'boolean':
              return iC.boolean;
            case 'function':
              return iC.function;
            case 'bigint':
              return iC.bigint;
            case 'symbol':
              return iC.symbol;
            case 'object':
              if (Array.isArray(e)) return iC.array;
              if (null === e) return iC.null;
              if (
                e.then &&
                'function' == typeof e.then &&
                e.catch &&
                'function' == typeof e.catch
              )
                return iC.promise;
              if ('undefined' != typeof Map && e instanceof Map) return iC.map;
              if ('undefined' != typeof Set && e instanceof Set) return iC.set;
              if ('undefined' != typeof Date && e instanceof Date)
                return iC.date;
              return iC.object;
            default:
              return iC.unknown;
          }
        },
        iN = h.arrayToEnum([
          'invalid_type',
          'invalid_literal',
          'custom',
          'invalid_union',
          'invalid_union_discriminator',
          'invalid_enum_value',
          'unrecognized_keys',
          'invalid_arguments',
          'invalid_return_type',
          'invalid_date',
          'invalid_string',
          'too_small',
          'too_big',
          'invalid_intersection_types',
          'not_multiple_of',
          'not_finite',
        ]);
      class ik extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e);
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            r = { _errors: [] },
            n = (e) => {
              for (let i of e.issues)
                if ('invalid_union' === i.code) i.unionErrors.map(n);
                else if ('invalid_return_type' === i.code) n(i.returnTypeError);
                else if ('invalid_arguments' === i.code) n(i.argumentsError);
                else if (0 === i.path.length) r._errors.push(t(i));
                else {
                  let e = r,
                    n = 0;
                  for (; n < i.path.length; ) {
                    let r = i.path[n];
                    n === i.path.length - 1
                      ? ((e[r] = e[r] || { _errors: [] }),
                        e[r]._errors.push(t(i)))
                      : (e[r] = e[r] || { _errors: [] }),
                      (e = e[r]),
                      n++;
                  }
                }
            };
          return n(this), r;
        }
        static assert(e) {
          if (!(e instanceof ik)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, h.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            r = [];
          for (let n of this.issues)
            n.path.length > 0
              ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n)))
              : r.push(e(n));
          return { formErrors: r, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      ik.create = (e) => new ik(e);
      let iA = (e, t) => {
          let r;
          switch (e.code) {
            case iN.invalid_type:
              r =
                e.received === iC.undefined
                  ? 'Required'
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case iN.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(e.expected, h.jsonStringifyReplacer)}`;
              break;
            case iN.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${h.joinValues(e.keys, ', ')}`;
              break;
            case iN.invalid_union:
              r = 'Invalid input';
              break;
            case iN.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${h.joinValues(e.options)}`;
              break;
            case iN.invalid_enum_value:
              r = `Invalid enum value. Expected ${h.joinValues(e.options)}, received '${e.received}'`;
              break;
            case iN.invalid_arguments:
              r = 'Invalid function arguments';
              break;
            case iN.invalid_return_type:
              r = 'Invalid function return type';
              break;
            case iN.invalid_date:
              r = 'Invalid date';
              break;
            case iN.invalid_string:
              'object' == typeof e.validation
                ? 'includes' in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    'number' == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : 'startsWith' in e.validation
                    ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                    : 'endsWith' in e.validation
                      ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                      : h.assertNever(e.validation)
                : (r =
                    'regex' !== e.validation
                      ? `Invalid ${e.validation}`
                      : 'Invalid');
              break;
            case iN.too_small:
              r =
                'array' === e.type
                  ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`
                  : 'string' === e.type
                    ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`
                    : 'number' === e.type
                      ? `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`
                      : 'date' === e.type
                        ? `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`
                        : 'Invalid input';
              break;
            case iN.too_big:
              r =
                'array' === e.type
                  ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`
                  : 'string' === e.type
                    ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`
                    : 'number' === e.type
                      ? `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                      : 'bigint' === e.type
                        ? `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                        : 'date' === e.type
                          ? `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`
                          : 'Invalid input';
              break;
            case iN.custom:
              r = 'Invalid input';
              break;
            case iN.invalid_intersection_types:
              r = 'Intersection results could not be merged';
              break;
            case iN.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case iN.not_finite:
              r = 'Number must be finite';
              break;
            default:
              (r = t.defaultError), h.assertNever(e);
          }
          return { message: r };
        },
        iT = iA;
      function iP() {
        return iT;
      }
      let iI = (e) => {
        let { data: t, path: r, errorMaps: n, issueData: i } = e,
          s = [...r, ...(i.path || [])],
          a = { ...i, path: s };
        if (void 0 !== i.message) return { ...i, path: s, message: i.message };
        let o = '';
        for (let e of n
          .filter((e) => !!e)
          .slice()
          .reverse())
          o = e(a, { data: t, defaultError: o }).message;
        return { ...i, path: s, message: o };
      };
      function iD(e, t) {
        let r = iP(),
          n = iI({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              r,
              r === iA ? void 0 : iA,
            ].filter((e) => !!e),
          });
        e.common.issues.push(n);
      }
      class iM {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          'valid' === this.value && (this.value = 'dirty');
        }
        abort() {
          'aborted' !== this.value && (this.value = 'aborted');
        }
        static mergeArray(e, t) {
          let r = [];
          for (let n of t) {
            if ('aborted' === n.status) return ij;
            'dirty' === n.status && e.dirty(), r.push(n.value);
          }
          return { status: e.value, value: r };
        }
        static async mergeObjectAsync(e, t) {
          let r = [];
          for (let e of t) {
            let t = await e.key,
              n = await e.value;
            r.push({ key: t, value: n });
          }
          return iM.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          let r = {};
          for (let n of t) {
            let { key: t, value: i } = n;
            if ('aborted' === t.status || 'aborted' === i.status) return ij;
            'dirty' === t.status && e.dirty(),
              'dirty' === i.status && e.dirty(),
              '__proto__' !== t.value &&
                (void 0 !== i.value || n.alwaysSet) &&
                (r[t.value] = i.value);
          }
          return { status: e.value, value: r };
        }
      }
      let ij = Object.freeze({ status: 'aborted' }),
        iq = (e) => ({ status: 'dirty', value: e }),
        iU = (e) => ({ status: 'valid', value: e }),
        iF = (e) => 'aborted' === e.status,
        iL = (e) => 'dirty' === e.status,
        iQ = (e) => 'valid' === e.status,
        iB = (e) => 'undefined' != typeof Promise && e instanceof Promise;
      function iZ(e, t, r, n) {
        if ('a' === r && !n)
          throw TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            'Cannot read private member from an object whose class did not declare it'
          );
        return 'm' === r ? n : 'a' === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function iz(e, t, r, n, i) {
        if ('m' === n) throw TypeError('Private method is not writable');
        if ('a' === n && !i)
          throw TypeError('Private accessor was defined without a setter');
        if ('function' == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            'Cannot write private member to an object whose class did not declare it'
          );
        return 'a' === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
      }
      'function' == typeof SuppressedError && SuppressedError,
        (function (e) {
          (e.errToObj = (e) =>
            'string' == typeof e ? { message: e } : e || {}),
            (e.toString = (e) =>
              'string' == typeof e ? e : null == e ? void 0 : e.message);
        })(f || (f = {}));
      class i$ {
        constructor(e, t, r, n) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = r),
            (this._key = n);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let iH = (e, t) => {
        if (iQ(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new ik(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function iW(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: r,
          required_error: n,
          description: i,
        } = e;
        if (t && (r || n))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return t
          ? { errorMap: t, description: i }
          : {
              errorMap: (t, i) => {
                var s, a;
                let { message: o } = e;
                return 'invalid_enum_value' === t.code
                  ? { message: null != o ? o : i.defaultError }
                  : void 0 === i.data
                    ? {
                        message:
                          null !== (s = null != o ? o : n) && void 0 !== s
                            ? s
                            : i.defaultError,
                      }
                    : 'invalid_type' !== t.code
                      ? { message: i.defaultError }
                      : {
                          message:
                            null !== (a = null != o ? o : r) && void 0 !== a
                              ? a
                              : i.defaultError,
                        };
              },
              description: i,
            };
      }
      class iK {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return ix(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: ix(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new iM(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: ix(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (iB(t)) throw Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let r = this.safeParse(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(e, t) {
          var r;
          let n = {
              common: {
                issues: [],
                async:
                  null !== (r = null == t ? void 0 : t.async) &&
                  void 0 !== r &&
                  r,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: ix(e),
            },
            i = this._parseSync({ data: e, path: n.path, parent: n });
          return iH(n, i);
        }
        '~validate'(e) {
          var t, r;
          let n = {
            common: { issues: [], async: !!this['~standard'].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: ix(e),
          };
          if (!this['~standard'].async)
            try {
              let t = this._parseSync({ data: e, path: [], parent: n });
              return iQ(t) ? { value: t.value } : { issues: n.common.issues };
            } catch (e) {
              (null ===
                (r =
                  null === (t = null == e ? void 0 : e.message) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) || void 0 === r
                ? void 0
                : r.includes('encountered')) && (this['~standard'].async = !0),
                (n.common = { issues: [], async: !0 });
            }
          return this._parseAsync({ data: e, path: [], parent: n }).then((e) =>
            iQ(e) ? { value: e.value } : { issues: n.common.issues }
          );
        }
        async parseAsync(e, t) {
          let r = await this.safeParseAsync(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(e, t) {
          let r = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: ix(e),
            },
            n = this._parse({ data: e, path: r.path, parent: r });
          return iH(r, await (iB(n) ? n : Promise.resolve(n)));
        }
        refine(e, t) {
          let r = (e) =>
            'string' == typeof t || void 0 === t
              ? { message: t }
              : 'function' == typeof t
                ? t(e)
                : t;
          return this._refinement((t, n) => {
            let i = e(t),
              s = () => n.addIssue({ code: iN.custom, ...r(t) });
            return 'undefined' != typeof Promise && i instanceof Promise
              ? i.then((e) => !!e || (s(), !1))
              : !!i || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (r, n) =>
              !!e(r) || (n.addIssue('function' == typeof t ? t(r, n) : t), !1)
          );
        }
        _refinement(e) {
          return new sP({
            schema: this,
            typeName: g.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this)),
            (this['~standard'] = {
              version: 1,
              vendor: 'zod',
              validate: (e) => this['~validate'](e),
            });
        }
        optional() {
          return sI.create(this, this._def);
        }
        nullable() {
          return sD.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return sm.create(this);
        }
        promise() {
          return sT.create(this, this._def);
        }
        or(e) {
          return sy.create([this, e], this._def);
        }
        and(e) {
          return sw.create(this, e, this._def);
        }
        transform(e) {
          return new sP({
            ...iW(this._def),
            schema: this,
            typeName: g.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          return new sM({
            ...iW(this._def),
            innerType: this,
            defaultValue: 'function' == typeof e ? e : () => e,
            typeName: g.ZodDefault,
          });
        }
        brand() {
          return new sF({
            typeName: g.ZodBranded,
            type: this,
            ...iW(this._def),
          });
        }
        catch(e) {
          return new sj({
            ...iW(this._def),
            innerType: this,
            catchValue: 'function' == typeof e ? e : () => e,
            typeName: g.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return sL.create(this, e);
        }
        readonly() {
          return sQ.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let iV = /^c[^\s-]{8,}$/i,
        iG = /^[0-9a-z]+$/,
        iJ = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        iY =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        iX = /^[a-z0-9_-]{21}$/i,
        i0 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        i1 =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        i2 =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        i5 =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        i4 =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        i6 =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        i3 =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        i8 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        i9 =
          /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        i7 =
          '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
        se = RegExp(`^${i7}$`);
      function st(e) {
        let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
        return (
          e.precision
            ? (t = `${t}\\.\\d{${e.precision}}`)
            : null == e.precision && (t = `${t}(\\.\\d+)?`),
          t
        );
      }
      function sr(e) {
        let t = `${i7}T${st(e)}`,
          r = [];
        return (
          r.push(e.local ? 'Z?' : 'Z'),
          e.offset && r.push('([+-]\\d{2}:?\\d{2})'),
          (t = `${t}(${r.join('|')})`),
          RegExp(`^${t}$`)
        );
      }
      class sn extends iK {
        _parse(e) {
          var t, r, i, s;
          let a;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== iC.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.string,
                received: t.parsedType,
              }),
              ij
            );
          }
          let o = new iM();
          for (let u of this._def.checks)
            if ('min' === u.kind)
              e.data.length < u.value &&
                (iD((a = this._getOrReturnCtx(e, a)), {
                  code: iN.too_small,
                  minimum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ('max' === u.kind)
              e.data.length > u.value &&
                (iD((a = this._getOrReturnCtx(e, a)), {
                  code: iN.too_big,
                  maximum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ('length' === u.kind) {
              let t = e.data.length > u.value,
                r = e.data.length < u.value;
              (t || r) &&
                ((a = this._getOrReturnCtx(e, a)),
                t
                  ? iD(a, {
                      code: iN.too_big,
                      maximum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    })
                  : r &&
                    iD(a, {
                      code: iN.too_small,
                      minimum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    }),
                o.dirty());
            } else if ('email' === u.kind)
              i2.test(e.data) ||
                (iD((a = this._getOrReturnCtx(e, a)), {
                  validation: 'email',
                  code: iN.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('emoji' === u.kind)
              n ||
                (n = RegExp(
                  '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
                  'u'
                )),
                n.test(e.data) ||
                  (iD((a = this._getOrReturnCtx(e, a)), {
                    validation: 'emoji',
                    code: iN.invalid_string,
                    message: u.message,
                  }),
                  o.dirty());
            else if ('uuid' === u.kind)
              iY.test(e.data) ||
                (iD((a = this._getOrReturnCtx(e, a)), {
                  validation: 'uuid',
                  code: iN.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('nanoid' === u.kind)
              iX.test(e.data) ||
                (iD((a = this._getOrReturnCtx(e, a)), {
                  validation: 'nanoid',
                  code: iN.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('cuid' === u.kind)
              iV.test(e.data) ||
                (iD((a = this._getOrReturnCtx(e, a)), {
                  validation: 'cuid',
                  code: iN.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('cuid2' === u.kind)
              iG.test(e.data) ||
                (iD((a = this._getOrReturnCtx(e, a)), {
                  validation: 'cuid2',
                  code: iN.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('ulid' === u.kind)
              iJ.test(e.data) ||
                (iD((a = this._getOrReturnCtx(e, a)), {
                  validation: 'ulid',
                  code: iN.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('url' === u.kind)
              try {
                new URL(e.data);
              } catch (t) {
                iD((a = this._getOrReturnCtx(e, a)), {
                  validation: 'url',
                  code: iN.invalid_string,
                  message: u.message,
                }),
                  o.dirty();
              }
            else
              'regex' === u.kind
                ? ((u.regex.lastIndex = 0),
                  u.regex.test(e.data) ||
                    (iD((a = this._getOrReturnCtx(e, a)), {
                      validation: 'regex',
                      code: iN.invalid_string,
                      message: u.message,
                    }),
                    o.dirty()))
                : 'trim' === u.kind
                  ? (e.data = e.data.trim())
                  : 'includes' === u.kind
                    ? e.data.includes(u.value, u.position) ||
                      (iD((a = this._getOrReturnCtx(e, a)), {
                        code: iN.invalid_string,
                        validation: { includes: u.value, position: u.position },
                        message: u.message,
                      }),
                      o.dirty())
                    : 'toLowerCase' === u.kind
                      ? (e.data = e.data.toLowerCase())
                      : 'toUpperCase' === u.kind
                        ? (e.data = e.data.toUpperCase())
                        : 'startsWith' === u.kind
                          ? e.data.startsWith(u.value) ||
                            (iD((a = this._getOrReturnCtx(e, a)), {
                              code: iN.invalid_string,
                              validation: { startsWith: u.value },
                              message: u.message,
                            }),
                            o.dirty())
                          : 'endsWith' === u.kind
                            ? e.data.endsWith(u.value) ||
                              (iD((a = this._getOrReturnCtx(e, a)), {
                                code: iN.invalid_string,
                                validation: { endsWith: u.value },
                                message: u.message,
                              }),
                              o.dirty())
                            : 'datetime' === u.kind
                              ? sr(u).test(e.data) ||
                                (iD((a = this._getOrReturnCtx(e, a)), {
                                  code: iN.invalid_string,
                                  validation: 'datetime',
                                  message: u.message,
                                }),
                                o.dirty())
                              : 'date' === u.kind
                                ? se.test(e.data) ||
                                  (iD((a = this._getOrReturnCtx(e, a)), {
                                    code: iN.invalid_string,
                                    validation: 'date',
                                    message: u.message,
                                  }),
                                  o.dirty())
                                : 'time' === u.kind
                                  ? RegExp(`^${st(u)}$`).test(e.data) ||
                                    (iD((a = this._getOrReturnCtx(e, a)), {
                                      code: iN.invalid_string,
                                      validation: 'time',
                                      message: u.message,
                                    }),
                                    o.dirty())
                                  : 'duration' === u.kind
                                    ? i1.test(e.data) ||
                                      (iD((a = this._getOrReturnCtx(e, a)), {
                                        validation: 'duration',
                                        code: iN.invalid_string,
                                        message: u.message,
                                      }),
                                      o.dirty())
                                    : 'ip' === u.kind
                                      ? ((t = e.data),
                                        (('v4' === (r = u.version) || !r) &&
                                          i5.test(t)) ||
                                          (('v6' === r || !r) && i6.test(t)) ||
                                          (iD(
                                            (a = this._getOrReturnCtx(e, a)),
                                            {
                                              validation: 'ip',
                                              code: iN.invalid_string,
                                              message: u.message,
                                            }
                                          ),
                                          o.dirty()))
                                      : 'jwt' === u.kind
                                        ? !(function (e, t) {
                                            if (!i0.test(e)) return !1;
                                            try {
                                              let [r] = e.split('.'),
                                                n = r
                                                  .replace(/-/g, '+')
                                                  .replace(/_/g, '/')
                                                  .padEnd(
                                                    r.length +
                                                      ((4 - (r.length % 4)) %
                                                        4),
                                                    '='
                                                  ),
                                                i = JSON.parse(atob(n));
                                              if (
                                                'object' != typeof i ||
                                                null === i ||
                                                !i.typ ||
                                                !i.alg ||
                                                (t && i.alg !== t)
                                              )
                                                return !1;
                                              return !0;
                                            } catch (e) {
                                              return !1;
                                            }
                                          })(e.data, u.alg) &&
                                          (iD(
                                            (a = this._getOrReturnCtx(e, a)),
                                            {
                                              validation: 'jwt',
                                              code: iN.invalid_string,
                                              message: u.message,
                                            }
                                          ),
                                          o.dirty())
                                        : 'cidr' === u.kind
                                          ? ((i = e.data),
                                            (('v4' === (s = u.version) || !s) &&
                                              i4.test(i)) ||
                                              (('v6' === s || !s) &&
                                                i3.test(i)) ||
                                              (iD(
                                                (a = this._getOrReturnCtx(
                                                  e,
                                                  a
                                                )),
                                                {
                                                  validation: 'cidr',
                                                  code: iN.invalid_string,
                                                  message: u.message,
                                                }
                                              ),
                                              o.dirty()))
                                          : 'base64' === u.kind
                                            ? i8.test(e.data) ||
                                              (iD(
                                                (a = this._getOrReturnCtx(
                                                  e,
                                                  a
                                                )),
                                                {
                                                  validation: 'base64',
                                                  code: iN.invalid_string,
                                                  message: u.message,
                                                }
                                              ),
                                              o.dirty())
                                            : 'base64url' === u.kind
                                              ? i9.test(e.data) ||
                                                (iD(
                                                  (a = this._getOrReturnCtx(
                                                    e,
                                                    a
                                                  )),
                                                  {
                                                    validation: 'base64url',
                                                    code: iN.invalid_string,
                                                    message: u.message,
                                                  }
                                                ),
                                                o.dirty())
                                              : h.assertNever(u);
          return { status: o.value, value: e.data };
        }
        _regex(e, t, r) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: iN.invalid_string,
            ...f.errToObj(r),
          });
        }
        _addCheck(e) {
          return new sn({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...f.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...f.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...f.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...f.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: 'nanoid', ...f.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...f.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...f.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...f.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: 'base64', ...f.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: 'base64url', ...f.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: 'jwt', ...f.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...f.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: 'cidr', ...f.errToObj(e) });
        }
        datetime(e) {
          var t, r;
          return 'string' == typeof e
            ? this._addCheck({
                kind: 'datetime',
                precision: null,
                offset: !1,
                local: !1,
                message: e,
              })
            : this._addCheck({
                kind: 'datetime',
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                      ? void 0
                      : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                local:
                  null !== (r = null == e ? void 0 : e.local) &&
                  void 0 !== r &&
                  r,
                ...f.errToObj(null == e ? void 0 : e.message),
              });
        }
        date(e) {
          return this._addCheck({ kind: 'date', message: e });
        }
        time(e) {
          return 'string' == typeof e
            ? this._addCheck({ kind: 'time', precision: null, message: e })
            : this._addCheck({
                kind: 'time',
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                      ? void 0
                      : e.precision,
                ...f.errToObj(null == e ? void 0 : e.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: 'duration', ...f.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...f.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: null == t ? void 0 : t.position,
            ...f.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: 'startsWith',
            value: e,
            ...f.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: 'endsWith',
            value: e,
            ...f.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...f.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...f.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: 'length', value: e, ...f.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, f.errToObj(e));
        }
        trim() {
          return new sn({
            ...this._def,
            checks: [...this._def.checks, { kind: 'trim' }],
          });
        }
        toLowerCase() {
          return new sn({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toLowerCase' }],
          });
        }
        toUpperCase() {
          return new sn({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toUpperCase' }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => 'datetime' === e.kind);
        }
        get isDate() {
          return !!this._def.checks.find((e) => 'date' === e.kind);
        }
        get isTime() {
          return !!this._def.checks.find((e) => 'time' === e.kind);
        }
        get isDuration() {
          return !!this._def.checks.find((e) => 'duration' === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => 'email' === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => 'url' === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => 'emoji' === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => 'uuid' === e.kind);
        }
        get isNANOID() {
          return !!this._def.checks.find((e) => 'nanoid' === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => 'cuid' === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => 'cuid2' === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => 'ulid' === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => 'ip' === e.kind);
        }
        get isCIDR() {
          return !!this._def.checks.find((e) => 'cidr' === e.kind);
        }
        get isBase64() {
          return !!this._def.checks.find((e) => 'base64' === e.kind);
        }
        get isBase64url() {
          return !!this._def.checks.find((e) => 'base64url' === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      sn.create = (e) => {
        var t;
        return new sn({
          checks: [],
          typeName: g.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...iW(e),
        });
      };
      class si extends iK {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== iC.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.number,
                received: t.parsedType,
              }),
              ij
            );
          }
          let r = new iM();
          for (let n of this._def.checks)
            'int' === n.kind
              ? h.isInteger(e.data) ||
                (iD((t = this._getOrReturnCtx(e, t)), {
                  code: iN.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: n.message,
                }),
                r.dirty())
              : 'min' === n.kind
                ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                  (iD((t = this._getOrReturnCtx(e, t)), {
                    code: iN.too_small,
                    minimum: n.value,
                    type: 'number',
                    inclusive: n.inclusive,
                    exact: !1,
                    message: n.message,
                  }),
                  r.dirty())
                : 'max' === n.kind
                  ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                    (iD((t = this._getOrReturnCtx(e, t)), {
                      code: iN.too_big,
                      maximum: n.value,
                      type: 'number',
                      inclusive: n.inclusive,
                      exact: !1,
                      message: n.message,
                    }),
                    r.dirty())
                  : 'multipleOf' === n.kind
                    ? 0 !==
                        (function (e, t) {
                          let r = (e.toString().split('.')[1] || '').length,
                            n = (t.toString().split('.')[1] || '').length,
                            i = r > n ? r : n;
                          return (
                            (parseInt(e.toFixed(i).replace('.', '')) %
                              parseInt(t.toFixed(i).replace('.', ''))) /
                            Math.pow(10, i)
                          );
                        })(e.data, n.value) &&
                      (iD((t = this._getOrReturnCtx(e, t)), {
                        code: iN.not_multiple_of,
                        multipleOf: n.value,
                        message: n.message,
                      }),
                      r.dirty())
                    : 'finite' === n.kind
                      ? Number.isFinite(e.data) ||
                        (iD((t = this._getOrReturnCtx(e, t)), {
                          code: iN.not_finite,
                          message: n.message,
                        }),
                        r.dirty())
                      : h.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, f.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, f.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, f.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, f.toString(t));
        }
        setLimit(e, t, r, n) {
          return new si({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: f.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new si({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: f.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !1,
            message: f.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !1,
            message: f.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !0,
            message: f.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !0,
            message: f.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: f.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: f.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: f.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: f.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              'int' === e.kind ||
              ('multipleOf' === e.kind && h.isInteger(e.value))
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let r of this._def.checks) {
            if (
              'finite' === r.kind ||
              'int' === r.kind ||
              'multipleOf' === r.kind
            )
              return !0;
            'min' === r.kind
              ? (null === t || r.value > t) && (t = r.value)
              : 'max' === r.kind &&
                (null === e || r.value < e) &&
                (e = r.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      si.create = (e) =>
        new si({
          checks: [],
          typeName: g.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...iW(e),
        });
      class ss extends iK {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          let t;
          if (this._def.coerce)
            try {
              e.data = BigInt(e.data);
            } catch (t) {
              return this._getInvalidInput(e);
            }
          if (this._getType(e) !== iC.bigint) return this._getInvalidInput(e);
          let r = new iM();
          for (let n of this._def.checks)
            'min' === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (iD((t = this._getOrReturnCtx(e, t)), {
                  code: iN.too_small,
                  type: 'bigint',
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : 'max' === n.kind
                ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                  (iD((t = this._getOrReturnCtx(e, t)), {
                    code: iN.too_big,
                    type: 'bigint',
                    maximum: n.value,
                    inclusive: n.inclusive,
                    message: n.message,
                  }),
                  r.dirty())
                : 'multipleOf' === n.kind
                  ? e.data % n.value !== BigInt(0) &&
                    (iD((t = this._getOrReturnCtx(e, t)), {
                      code: iN.not_multiple_of,
                      multipleOf: n.value,
                      message: n.message,
                    }),
                    r.dirty())
                  : h.assertNever(n);
          return { status: r.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            iD(t, {
              code: iN.invalid_type,
              expected: iC.bigint,
              received: t.parsedType,
            }),
            ij
          );
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, f.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, f.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, f.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, f.toString(t));
        }
        setLimit(e, t, r, n) {
          return new ss({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: f.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new ss({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: f.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: f.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: f.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: f.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: f.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      ss.create = (e) => {
        var t;
        return new ss({
          checks: [],
          typeName: g.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...iW(e),
        });
      };
      class sa extends iK {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== iC.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.boolean,
                received: t.parsedType,
              }),
              ij
            );
          }
          return iU(e.data);
        }
      }
      sa.create = (e) =>
        new sa({
          typeName: g.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...iW(e),
        });
      class so extends iK {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== iC.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.date,
                received: t.parsedType,
              }),
              ij
            );
          }
          if (isNaN(e.data.getTime()))
            return iD(this._getOrReturnCtx(e), { code: iN.invalid_date }), ij;
          let r = new iM();
          for (let n of this._def.checks)
            'min' === n.kind
              ? e.data.getTime() < n.value &&
                (iD((t = this._getOrReturnCtx(e, t)), {
                  code: iN.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: 'date',
                }),
                r.dirty())
              : 'max' === n.kind
                ? e.data.getTime() > n.value &&
                  (iD((t = this._getOrReturnCtx(e, t)), {
                    code: iN.too_big,
                    message: n.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: n.value,
                    type: 'date',
                  }),
                  r.dirty())
                : h.assertNever(n);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new so({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: 'min',
            value: e.getTime(),
            message: f.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: 'max',
            value: e.getTime(),
            message: f.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      so.create = (e) =>
        new so({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: g.ZodDate,
          ...iW(e),
        });
      class su extends iK {
        _parse(e) {
          if (this._getType(e) !== iC.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.symbol,
                received: t.parsedType,
              }),
              ij
            );
          }
          return iU(e.data);
        }
      }
      su.create = (e) => new su({ typeName: g.ZodSymbol, ...iW(e) });
      class sl extends iK {
        _parse(e) {
          if (this._getType(e) !== iC.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.undefined,
                received: t.parsedType,
              }),
              ij
            );
          }
          return iU(e.data);
        }
      }
      sl.create = (e) => new sl({ typeName: g.ZodUndefined, ...iW(e) });
      class sc extends iK {
        _parse(e) {
          if (this._getType(e) !== iC.null) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.null,
                received: t.parsedType,
              }),
              ij
            );
          }
          return iU(e.data);
        }
      }
      sc.create = (e) => new sc({ typeName: g.ZodNull, ...iW(e) });
      class sh extends iK {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return iU(e.data);
        }
      }
      sh.create = (e) => new sh({ typeName: g.ZodAny, ...iW(e) });
      class sd extends iK {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return iU(e.data);
        }
      }
      sd.create = (e) => new sd({ typeName: g.ZodUnknown, ...iW(e) });
      class sf extends iK {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            iD(t, {
              code: iN.invalid_type,
              expected: iC.never,
              received: t.parsedType,
            }),
            ij
          );
        }
      }
      sf.create = (e) => new sf({ typeName: g.ZodNever, ...iW(e) });
      class sp extends iK {
        _parse(e) {
          if (this._getType(e) !== iC.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.void,
                received: t.parsedType,
              }),
              ij
            );
          }
          return iU(e.data);
        }
      }
      sp.create = (e) => new sp({ typeName: g.ZodVoid, ...iW(e) });
      class sm extends iK {
        _parse(e) {
          let { ctx: t, status: r } = this._processInputParams(e),
            n = this._def;
          if (t.parsedType !== iC.array)
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.array,
                received: t.parsedType,
              }),
              ij
            );
          if (null !== n.exactLength) {
            let e = t.data.length > n.exactLength.value,
              i = t.data.length < n.exactLength.value;
            (e || i) &&
              (iD(t, {
                code: e ? iN.too_big : iN.too_small,
                minimum: i ? n.exactLength.value : void 0,
                maximum: e ? n.exactLength.value : void 0,
                type: 'array',
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== n.minLength &&
              t.data.length < n.minLength.value &&
              (iD(t, {
                code: iN.too_small,
                minimum: n.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.minLength.message,
              }),
              r.dirty()),
            null !== n.maxLength &&
              t.data.length > n.maxLength.value &&
              (iD(t, {
                code: iN.too_big,
                maximum: n.maxLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.maxLength.message,
              }),
              r.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, r) =>
                n.type._parseAsync(new i$(t, e, t.path, r))
              )
            ).then((e) => iM.mergeArray(r, e));
          let i = [...t.data].map((e, r) =>
            n.type._parseSync(new i$(t, e, t.path, r))
          );
          return iM.mergeArray(r, i);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new sm({
            ...this._def,
            minLength: { value: e, message: f.toString(t) },
          });
        }
        max(e, t) {
          return new sm({
            ...this._def,
            maxLength: { value: e, message: f.toString(t) },
          });
        }
        length(e, t) {
          return new sm({
            ...this._def,
            exactLength: { value: e, message: f.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      sm.create = (e, t) =>
        new sm({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: g.ZodArray,
          ...iW(t),
        });
      class sg extends iK {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = h.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== iC.object) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.object,
                received: t.parsedType,
              }),
              ij
            );
          }
          let { status: t, ctx: r } = this._processInputParams(e),
            { shape: n, keys: i } = this._getCached(),
            s = [];
          if (
            !(
              this._def.catchall instanceof sf &&
              'strip' === this._def.unknownKeys
            )
          )
            for (let e in r.data) i.includes(e) || s.push(e);
          let a = [];
          for (let e of i) {
            let t = n[e],
              i = r.data[e];
            a.push({
              key: { status: 'valid', value: e },
              value: t._parse(new i$(r, i, r.path, e)),
              alwaysSet: e in r.data,
            });
          }
          if (this._def.catchall instanceof sf) {
            let e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (let e of s)
                a.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: r.data[e] },
                });
            else if ('strict' === e)
              s.length > 0 &&
                (iD(r, { code: iN.unrecognized_keys, keys: s }), t.dirty());
            else if ('strip' === e);
            else
              throw Error(
                'Internal ZodObject error: invalid unknownKeys value.'
              );
          } else {
            let e = this._def.catchall;
            for (let t of s) {
              let n = r.data[t];
              a.push({
                key: { status: 'valid', value: t },
                value: e._parse(new i$(r, n, r.path, t)),
                alwaysSet: t in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of a) {
                    let r = await t.key,
                      n = await t.value;
                    e.push({ key: r, value: n, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => iM.mergeObjectSync(t, e))
            : iM.mergeObjectSync(t, a);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            f.errToObj,
            new sg({
              ...this._def,
              unknownKeys: 'strict',
              ...(void 0 !== e
                ? {
                    errorMap: (t, r) => {
                      var n, i, s, a;
                      let o =
                        null !==
                          (s =
                            null === (i = (n = this._def).errorMap) ||
                            void 0 === i
                              ? void 0
                              : i.call(n, t, r).message) && void 0 !== s
                          ? s
                          : r.defaultError;
                      return 'unrecognized_keys' === t.code
                        ? {
                            message:
                              null !== (a = f.errToObj(e).message) &&
                              void 0 !== a
                                ? a
                                : o,
                          }
                        : { message: o };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new sg({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new sg({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new sg({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new sg({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: g.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new sg({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            h.objectKeys(e).forEach((r) => {
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            }),
            new sg({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            h.objectKeys(this.shape).forEach((r) => {
              e[r] || (t[r] = this.shape[r]);
            }),
            new sg({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof sg) {
              let r = {};
              for (let n in t.shape) {
                let i = t.shape[n];
                r[n] = sI.create(e(i));
              }
              return new sg({ ...t._def, shape: () => r });
            }
            return t instanceof sm
              ? new sm({ ...t._def, type: e(t.element) })
              : t instanceof sI
                ? sI.create(e(t.unwrap()))
                : t instanceof sD
                  ? sD.create(e(t.unwrap()))
                  : t instanceof s_
                    ? s_.create(t.items.map((t) => e(t)))
                    : t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            h.objectKeys(this.shape).forEach((r) => {
              let n = this.shape[r];
              e && !e[r] ? (t[r] = n) : (t[r] = n.optional());
            }),
            new sg({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            h.objectKeys(this.shape).forEach((r) => {
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof sI; ) e = e._def.innerType;
                t[r] = e;
              }
            }),
            new sg({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return sN(h.objectKeys(this.shape));
        }
      }
      (sg.create = (e, t) =>
        new sg({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: sf.create(),
          typeName: g.ZodObject,
          ...iW(t),
        })),
        (sg.strictCreate = (e, t) =>
          new sg({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: sf.create(),
            typeName: g.ZodObject,
            ...iW(t),
          })),
        (sg.lazycreate = (e, t) =>
          new sg({
            shape: e,
            unknownKeys: 'strip',
            catchall: sf.create(),
            typeName: g.ZodObject,
            ...iW(t),
          }));
      class sy extends iK {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = this._def.options;
          if (t.common.async)
            return Promise.all(
              r.map(async (e) => {
                let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r,
                  }),
                  ctx: r,
                };
              })
            ).then(function (e) {
              for (let t of e) if ('valid' === t.result.status) return t.result;
              for (let r of e)
                if ('dirty' === r.result.status)
                  return t.common.issues.push(...r.ctx.common.issues), r.result;
              let r = e.map((e) => new ik(e.ctx.common.issues));
              return iD(t, { code: iN.invalid_union, unionErrors: r }), ij;
            });
          {
            let e;
            let n = [];
            for (let i of r) {
              let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                s = i._parseSync({ data: t.data, path: t.path, parent: r });
              if ('valid' === s.status) return s;
              'dirty' !== s.status || e || (e = { result: s, ctx: r }),
                r.common.issues.length && n.push(r.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let i = n.map((e) => new ik(e));
            return iD(t, { code: iN.invalid_union, unionErrors: i }), ij;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      sy.create = (e, t) =>
        new sy({ options: e, typeName: g.ZodUnion, ...iW(t) });
      let sv = (e) => {
        if (e instanceof sC) return sv(e.schema);
        if (e instanceof sP) return sv(e.innerType());
        if (e instanceof sx) return [e.value];
        if (e instanceof sk) return e.options;
        if (e instanceof sA) return h.objectValues(e.enum);
        if (e instanceof sM) return sv(e._def.innerType);
        if (e instanceof sl) return [void 0];
        else if (e instanceof sc) return [null];
        else if (e instanceof sI) return [void 0, ...sv(e.unwrap())];
        else if (e instanceof sD) return [null, ...sv(e.unwrap())];
        else if (e instanceof sF) return sv(e.unwrap());
        else if (e instanceof sQ) return sv(e.unwrap());
        else if (e instanceof sj) return sv(e._def.innerType);
        else return [];
      };
      class sb extends iK {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== iC.object)
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.object,
                received: t.parsedType,
              }),
              ij
            );
          let r = this.discriminator,
            n = t.data[r],
            i = this.optionsMap.get(n);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (iD(t, {
                code: iN.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              ij);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, r) {
          let n = new Map();
          for (let r of t) {
            let t = sv(r.shape[e]);
            if (!t.length)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (let i of t) {
              if (n.has(i))
                throw Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(i)}`
                );
              n.set(i, r);
            }
          }
          return new sb({
            typeName: g.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ...iW(r),
          });
        }
      }
      class sw extends iK {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = (e, n) => {
              if (iF(e) || iF(n)) return ij;
              let i = (function e(t, r) {
                let n = ix(t),
                  i = ix(r);
                if (t === r) return { valid: !0, data: t };
                if (n === iC.object && i === iC.object) {
                  let n = h.objectKeys(r),
                    i = h.objectKeys(t).filter((e) => -1 !== n.indexOf(e)),
                    s = { ...t, ...r };
                  for (let n of i) {
                    let i = e(t[n], r[n]);
                    if (!i.valid) return { valid: !1 };
                    s[n] = i.data;
                  }
                  return { valid: !0, data: s };
                }
                if (n === iC.array && i === iC.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let n = [];
                  for (let i = 0; i < t.length; i++) {
                    let s = e(t[i], r[i]);
                    if (!s.valid) return { valid: !1 };
                    n.push(s.data);
                  }
                  return { valid: !0, data: n };
                }
                return n === iC.date && i === iC.date && +t == +r
                  ? { valid: !0, data: t }
                  : { valid: !1 };
              })(e.value, n.value);
              return i.valid
                ? ((iL(e) || iL(n)) && t.dirty(),
                  { status: t.value, value: i.data })
                : (iD(r, { code: iN.invalid_intersection_types }), ij);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then(([e, t]) => n(e, t))
            : n(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                })
              );
        }
      }
      sw.create = (e, t, r) =>
        new sw({ left: e, right: t, typeName: g.ZodIntersection, ...iW(r) });
      class s_ extends iK {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== iC.array)
            return (
              iD(r, {
                code: iN.invalid_type,
                expected: iC.array,
                received: r.parsedType,
              }),
              ij
            );
          if (r.data.length < this._def.items.length)
            return (
              iD(r, {
                code: iN.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              ij
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (iD(r, {
              code: iN.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            t.dirty());
          let n = [...r.data]
            .map((e, t) => {
              let n = this._def.items[t] || this._def.rest;
              return n ? n._parse(new i$(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(n).then((e) => iM.mergeArray(t, e))
            : iM.mergeArray(t, n);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new s_({ ...this._def, rest: e });
        }
      }
      s_.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new s_({ items: e, typeName: g.ZodTuple, rest: null, ...iW(t) });
      };
      class sE extends iK {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== iC.object)
            return (
              iD(r, {
                code: iN.invalid_type,
                expected: iC.object,
                received: r.parsedType,
              }),
              ij
            );
          let n = [],
            i = this._def.keyType,
            s = this._def.valueType;
          for (let e in r.data)
            n.push({
              key: i._parse(new i$(r, e, r.path, e)),
              value: s._parse(new i$(r, r.data[e], r.path, e)),
              alwaysSet: e in r.data,
            });
          return r.common.async
            ? iM.mergeObjectAsync(t, n)
            : iM.mergeObjectSync(t, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new sE(
            t instanceof iK
              ? { keyType: e, valueType: t, typeName: g.ZodRecord, ...iW(r) }
              : {
                  keyType: sn.create(),
                  valueType: e,
                  typeName: g.ZodRecord,
                  ...iW(t),
                }
          );
        }
      }
      class sS extends iK {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== iC.map)
            return (
              iD(r, {
                code: iN.invalid_type,
                expected: iC.map,
                received: r.parsedType,
              }),
              ij
            );
          let n = this._def.keyType,
            i = this._def.valueType,
            s = [...r.data.entries()].map(([e, t], s) => ({
              key: n._parse(new i$(r, e, r.path, [s, 'key'])),
              value: i._parse(new i$(r, t, r.path, [s, 'value'])),
            }));
          if (r.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let r of s) {
                let n = await r.key,
                  i = await r.value;
                if ('aborted' === n.status || 'aborted' === i.status) return ij;
                ('dirty' === n.status || 'dirty' === i.status) && t.dirty(),
                  e.set(n.value, i.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let r of s) {
              let n = r.key,
                i = r.value;
              if ('aborted' === n.status || 'aborted' === i.status) return ij;
              ('dirty' === n.status || 'dirty' === i.status) && t.dirty(),
                e.set(n.value, i.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      sS.create = (e, t, r) =>
        new sS({ valueType: t, keyType: e, typeName: g.ZodMap, ...iW(r) });
      class sO extends iK {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== iC.set)
            return (
              iD(r, {
                code: iN.invalid_type,
                expected: iC.set,
                received: r.parsedType,
              }),
              ij
            );
          let n = this._def;
          null !== n.minSize &&
            r.data.size < n.minSize.value &&
            (iD(r, {
              code: iN.too_small,
              minimum: n.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
            t.dirty()),
            null !== n.maxSize &&
              r.data.size > n.maxSize.value &&
              (iD(r, {
                code: iN.too_big,
                maximum: n.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: n.maxSize.message,
              }),
              t.dirty());
          let i = this._def.valueType;
          function s(e) {
            let r = new Set();
            for (let n of e) {
              if ('aborted' === n.status) return ij;
              'dirty' === n.status && t.dirty(), r.add(n.value);
            }
            return { status: t.value, value: r };
          }
          let a = [...r.data.values()].map((e, t) =>
            i._parse(new i$(r, e, r.path, t))
          );
          return r.common.async ? Promise.all(a).then((e) => s(e)) : s(a);
        }
        min(e, t) {
          return new sO({
            ...this._def,
            minSize: { value: e, message: f.toString(t) },
          });
        }
        max(e, t) {
          return new sO({
            ...this._def,
            maxSize: { value: e, message: f.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      sO.create = (e, t) =>
        new sO({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: g.ZodSet,
          ...iW(t),
        });
      class sR extends iK {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== iC.function)
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.function,
                received: t.parsedType,
              }),
              ij
            );
          function r(e, r) {
            return iI({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                iP(),
                iA,
              ].filter((e) => !!e),
              issueData: { code: iN.invalid_arguments, argumentsError: r },
            });
          }
          function n(e, r) {
            return iI({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                iP(),
                iA,
              ].filter((e) => !!e),
              issueData: { code: iN.invalid_return_type, returnTypeError: r },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            s = t.data;
          if (this._def.returns instanceof sT) {
            let e = this;
            return iU(async function (...t) {
              let a = new ik([]),
                o = await e._def.args.parseAsync(t, i).catch((e) => {
                  throw (a.addIssue(r(t, e)), a);
                }),
                u = await Reflect.apply(s, this, o);
              return await e._def.returns._def.type
                .parseAsync(u, i)
                .catch((e) => {
                  throw (a.addIssue(n(u, e)), a);
                });
            });
          }
          {
            let e = this;
            return iU(function (...t) {
              let a = e._def.args.safeParse(t, i);
              if (!a.success) throw new ik([r(t, a.error)]);
              let o = Reflect.apply(s, this, a.data),
                u = e._def.returns.safeParse(o, i);
              if (!u.success) throw new ik([n(o, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new sR({ ...this._def, args: s_.create(e).rest(sd.create()) });
        }
        returns(e) {
          return new sR({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new sR({
            args: e || s_.create([]).rest(sd.create()),
            returns: t || sd.create(),
            typeName: g.ZodFunction,
            ...iW(r),
          });
        }
      }
      class sC extends iK {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      sC.create = (e, t) =>
        new sC({ getter: e, typeName: g.ZodLazy, ...iW(t) });
      class sx extends iK {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                received: t.data,
                code: iN.invalid_literal,
                expected: this._def.value,
              }),
              ij
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function sN(e, t) {
        return new sk({ values: e, typeName: g.ZodEnum, ...iW(t) });
      }
      sx.create = (e, t) =>
        new sx({ value: e, typeName: g.ZodLiteral, ...iW(t) });
      class sk extends iK {
        constructor() {
          super(...arguments), p.set(this, void 0);
        }
        _parse(e) {
          if ('string' != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              iD(t, {
                expected: h.joinValues(r),
                received: t.parsedType,
                code: iN.invalid_type,
              }),
              ij
            );
          }
          if (
            (iZ(this, p, 'f') || iz(this, p, new Set(this._def.values), 'f'),
            !iZ(this, p, 'f').has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              iD(t, {
                received: t.data,
                code: iN.invalid_enum_value,
                options: r,
              }),
              ij
            );
          }
          return iU(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e, t = this._def) {
          return sk.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return sk.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t }
          );
        }
      }
      (p = new WeakMap()), (sk.create = sN);
      class sA extends iK {
        constructor() {
          super(...arguments), m.set(this, void 0);
        }
        _parse(e) {
          let t = h.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== iC.string && r.parsedType !== iC.number) {
            let e = h.objectValues(t);
            return (
              iD(r, {
                expected: h.joinValues(e),
                received: r.parsedType,
                code: iN.invalid_type,
              }),
              ij
            );
          }
          if (
            (iZ(this, m, 'f') ||
              iz(this, m, new Set(h.getValidEnumValues(this._def.values)), 'f'),
            !iZ(this, m, 'f').has(e.data))
          ) {
            let e = h.objectValues(t);
            return (
              iD(r, {
                received: r.data,
                code: iN.invalid_enum_value,
                options: e,
              }),
              ij
            );
          }
          return iU(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      (m = new WeakMap()),
        (sA.create = (e, t) =>
          new sA({ values: e, typeName: g.ZodNativeEnum, ...iW(t) }));
      class sT extends iK {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== iC.promise && !1 === t.common.async
            ? (iD(t, {
                code: iN.invalid_type,
                expected: iC.promise,
                received: t.parsedType,
              }),
              ij)
            : iU(
                (t.parsedType === iC.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  })
                )
              );
        }
      }
      sT.create = (e, t) =>
        new sT({ type: e, typeName: g.ZodPromise, ...iW(t) });
      class sP extends iK {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === g.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = this._def.effect || null,
            i = {
              addIssue: (e) => {
                iD(r, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((i.addIssue = i.addIssue.bind(i)), 'preprocess' === n.type)) {
            let e = n.transform(r.data, i);
            if (r.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ('aborted' === t.value) return ij;
                let n = await this._def.schema._parseAsync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
                return 'aborted' === n.status
                  ? ij
                  : 'dirty' === n.status || 'dirty' === t.value
                    ? iq(n.value)
                    : n;
              });
            {
              if ('aborted' === t.value) return ij;
              let n = this._def.schema._parseSync({
                data: e,
                path: r.path,
                parent: r,
              });
              return 'aborted' === n.status
                ? ij
                : 'dirty' === n.status || 'dirty' === t.value
                  ? iq(n.value)
                  : n;
            }
          }
          if ('refinement' === n.type) {
            let e = (e) => {
              let t = n.refinement(e, i);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
                );
              return e;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((r) =>
                  'aborted' === r.status
                    ? ij
                    : ('dirty' === r.status && t.dirty(),
                      e(r.value).then(() => ({
                        status: t.value,
                        value: r.value,
                      })))
                );
            {
              let n = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return 'aborted' === n.status
                ? ij
                : ('dirty' === n.status && t.dirty(),
                  e(n.value),
                  { status: t.value, value: n.value });
            }
          }
          if ('transform' === n.type) {
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((e) =>
                  iQ(e)
                    ? Promise.resolve(n.transform(e.value, i)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e
                );
            {
              let e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!iQ(e)) return e;
              let s = n.transform(e.value, i);
              if (s instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
                );
              return { status: t.value, value: s };
            }
          }
          h.assertNever(n);
        }
      }
      (sP.create = (e, t, r) =>
        new sP({ schema: e, typeName: g.ZodEffects, effect: t, ...iW(r) })),
        (sP.createWithPreprocess = (e, t, r) =>
          new sP({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: g.ZodEffects,
            ...iW(r),
          }));
      class sI extends iK {
        _parse(e) {
          return this._getType(e) === iC.undefined
            ? iU(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      sI.create = (e, t) =>
        new sI({ innerType: e, typeName: g.ZodOptional, ...iW(t) });
      class sD extends iK {
        _parse(e) {
          return this._getType(e) === iC.null
            ? iU(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      sD.create = (e, t) =>
        new sD({ innerType: e, typeName: g.ZodNullable, ...iW(t) });
      class sM extends iK {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return (
            t.parsedType === iC.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      sM.create = (e, t) =>
        new sM({
          innerType: e,
          typeName: g.ZodDefault,
          defaultValue:
            'function' == typeof t.default ? t.default : () => t.default,
          ...iW(t),
        });
      class sj extends iK {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            n = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return iB(n)
            ? n.then((e) => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new ik(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: 'valid',
                value:
                  'valid' === n.status
                    ? n.value
                    : this._def.catchValue({
                        get error() {
                          return new ik(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      sj.create = (e, t) =>
        new sj({
          innerType: e,
          typeName: g.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...iW(t),
        });
      class sq extends iK {
        _parse(e) {
          if (this._getType(e) !== iC.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              iD(t, {
                code: iN.invalid_type,
                expected: iC.nan,
                received: t.parsedType,
              }),
              ij
            );
          }
          return { status: 'valid', value: e.data };
        }
      }
      sq.create = (e) => new sq({ typeName: g.ZodNaN, ...iW(e) });
      let sU = Symbol('zod_brand');
      class sF extends iK {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class sL extends iK {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return 'aborted' === e.status
                ? ij
                : 'dirty' === e.status
                  ? (t.dirty(), iq(e.value))
                  : this._def.out._parseAsync({
                      data: e.value,
                      path: r.path,
                      parent: r,
                    });
            })();
          {
            let e = this._def.in._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            return 'aborted' === e.status
              ? ij
              : 'dirty' === e.status
                ? (t.dirty(), { status: 'dirty', value: e.value })
                : this._def.out._parseSync({
                    data: e.value,
                    path: r.path,
                    parent: r,
                  });
          }
        }
        static create(e, t) {
          return new sL({ in: e, out: t, typeName: g.ZodPipeline });
        }
      }
      class sQ extends iK {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            r = (e) => (iQ(e) && (e.value = Object.freeze(e.value)), e);
          return iB(t) ? t.then((e) => r(e)) : r(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function sB(e, t = {}, r) {
        return e
          ? sh.create().superRefine((n, i) => {
              var s, a;
              if (!e(n)) {
                let e =
                    'function' == typeof t
                      ? t(n)
                      : 'string' == typeof t
                        ? { message: t }
                        : t,
                  o =
                    null ===
                      (a = null !== (s = e.fatal) && void 0 !== s ? s : r) ||
                    void 0 === a ||
                    a,
                  u = 'string' == typeof e ? { message: e } : e;
                i.addIssue({ code: 'custom', ...u, fatal: o });
              }
            })
          : sh.create();
      }
      sQ.create = (e, t) =>
        new sQ({ innerType: e, typeName: g.ZodReadonly, ...iW(t) });
      let sZ = { object: sg.lazycreate };
      !(function (e) {
        (e.ZodString = 'ZodString'),
          (e.ZodNumber = 'ZodNumber'),
          (e.ZodNaN = 'ZodNaN'),
          (e.ZodBigInt = 'ZodBigInt'),
          (e.ZodBoolean = 'ZodBoolean'),
          (e.ZodDate = 'ZodDate'),
          (e.ZodSymbol = 'ZodSymbol'),
          (e.ZodUndefined = 'ZodUndefined'),
          (e.ZodNull = 'ZodNull'),
          (e.ZodAny = 'ZodAny'),
          (e.ZodUnknown = 'ZodUnknown'),
          (e.ZodNever = 'ZodNever'),
          (e.ZodVoid = 'ZodVoid'),
          (e.ZodArray = 'ZodArray'),
          (e.ZodObject = 'ZodObject'),
          (e.ZodUnion = 'ZodUnion'),
          (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
          (e.ZodIntersection = 'ZodIntersection'),
          (e.ZodTuple = 'ZodTuple'),
          (e.ZodRecord = 'ZodRecord'),
          (e.ZodMap = 'ZodMap'),
          (e.ZodSet = 'ZodSet'),
          (e.ZodFunction = 'ZodFunction'),
          (e.ZodLazy = 'ZodLazy'),
          (e.ZodLiteral = 'ZodLiteral'),
          (e.ZodEnum = 'ZodEnum'),
          (e.ZodEffects = 'ZodEffects'),
          (e.ZodNativeEnum = 'ZodNativeEnum'),
          (e.ZodOptional = 'ZodOptional'),
          (e.ZodNullable = 'ZodNullable'),
          (e.ZodDefault = 'ZodDefault'),
          (e.ZodCatch = 'ZodCatch'),
          (e.ZodPromise = 'ZodPromise'),
          (e.ZodBranded = 'ZodBranded'),
          (e.ZodPipeline = 'ZodPipeline'),
          (e.ZodReadonly = 'ZodReadonly');
      })(g || (g = {}));
      let sz = sn.create,
        s$ = si.create,
        sH = sq.create,
        sW = ss.create,
        sK = sa.create,
        sV = so.create,
        sG = su.create,
        sJ = sl.create,
        sY = sc.create,
        sX = sh.create,
        s0 = sd.create,
        s1 = sf.create,
        s2 = sp.create,
        s5 = sm.create,
        s4 = sg.create,
        s6 = sg.strictCreate,
        s3 = sy.create,
        s8 = sb.create,
        s9 = sw.create,
        s7 = s_.create,
        ae = sE.create,
        at = sS.create,
        ar = sO.create,
        an = sR.create,
        ai = sC.create,
        as = sx.create,
        aa = sk.create,
        ao = sA.create,
        au = sT.create,
        al = sP.create,
        ac = sI.create,
        ah = sD.create,
        ad = sP.createWithPreprocess,
        af = sL.create;
      var ap = Object.freeze({
        __proto__: null,
        defaultErrorMap: iA,
        setErrorMap: function (e) {
          iT = e;
        },
        getErrorMap: iP,
        makeIssue: iI,
        EMPTY_PATH: [],
        addIssueToContext: iD,
        ParseStatus: iM,
        INVALID: ij,
        DIRTY: iq,
        OK: iU,
        isAborted: iF,
        isDirty: iL,
        isValid: iQ,
        isAsync: iB,
        get util() {
          return h;
        },
        get objectUtil() {
          return d;
        },
        ZodParsedType: iC,
        getParsedType: ix,
        ZodType: iK,
        datetimeRegex: sr,
        ZodString: sn,
        ZodNumber: si,
        ZodBigInt: ss,
        ZodBoolean: sa,
        ZodDate: so,
        ZodSymbol: su,
        ZodUndefined: sl,
        ZodNull: sc,
        ZodAny: sh,
        ZodUnknown: sd,
        ZodNever: sf,
        ZodVoid: sp,
        ZodArray: sm,
        ZodObject: sg,
        ZodUnion: sy,
        ZodDiscriminatedUnion: sb,
        ZodIntersection: sw,
        ZodTuple: s_,
        ZodRecord: sE,
        ZodMap: sS,
        ZodSet: sO,
        ZodFunction: sR,
        ZodLazy: sC,
        ZodLiteral: sx,
        ZodEnum: sk,
        ZodNativeEnum: sA,
        ZodPromise: sT,
        ZodEffects: sP,
        ZodTransformer: sP,
        ZodOptional: sI,
        ZodNullable: sD,
        ZodDefault: sM,
        ZodCatch: sj,
        ZodNaN: sq,
        BRAND: sU,
        ZodBranded: sF,
        ZodPipeline: sL,
        ZodReadonly: sQ,
        custom: sB,
        Schema: iK,
        ZodSchema: iK,
        late: sZ,
        get ZodFirstPartyTypeKind() {
          return g;
        },
        coerce: {
          string: (e) => sn.create({ ...e, coerce: !0 }),
          number: (e) => si.create({ ...e, coerce: !0 }),
          boolean: (e) => sa.create({ ...e, coerce: !0 }),
          bigint: (e) => ss.create({ ...e, coerce: !0 }),
          date: (e) => so.create({ ...e, coerce: !0 }),
        },
        any: sX,
        array: s5,
        bigint: sW,
        boolean: sK,
        date: sV,
        discriminatedUnion: s8,
        effect: al,
        enum: aa,
        function: an,
        instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
          sB((t) => t instanceof e, t),
        intersection: s9,
        lazy: ai,
        literal: as,
        map: at,
        nan: sH,
        nativeEnum: ao,
        never: s1,
        null: sY,
        nullable: ah,
        number: s$,
        object: s4,
        oboolean: () => sK().optional(),
        onumber: () => s$().optional(),
        optional: ac,
        ostring: () => sz().optional(),
        pipeline: af,
        preprocess: ad,
        promise: au,
        record: ae,
        set: ar,
        strictObject: s6,
        string: sz,
        symbol: sG,
        transformer: al,
        tuple: s7,
        undefined: sJ,
        union: s3,
        unknown: s0,
        void: s2,
        NEVER: ij,
        ZodIssueCode: iN,
        quotelessJson: (e) =>
          JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
        ZodError: ik,
      });
      let am = en.create({ allowOutsideOfServer: !0 }),
        ag = am.router,
        ay = am.procedure,
        av = {
          0: 'Clear sky',
          1: 'Mainly Clear',
          2: 'Partly Cloudy',
          3: 'Overcast',
          45: 'Fog',
          48: 'Depositing Rime Fog',
          51: 'Light Drizzle',
          53: 'Moderate Drizzle',
          55: 'Dense Intensity Drizzle',
          56: 'Light Freezing Drizzle',
          57: 'Dense Intensity Freezing Drizzle',
          61: 'Slight Rain',
          63: 'Moderate Rain',
          65: 'Heavy Intensity Rain',
          66: 'Light Freezing Rain',
          67: 'Heavy Intensity Freezing Rain',
          71: 'Slight Snow Fall',
          73: 'Moderate Snow Fall',
          75: 'Heavy Intensity Snow Fall',
          77: 'Snow grains',
          80: 'Slight Rain Showers',
          81: 'Moderate Rain Showers',
          82: 'Violent Rain Showers',
          85: 'Slight Snow showers',
          86: 'Heavy Snow Showers',
          95: 'Thunderstorm',
          96: 'Slight Thunderstorm',
          99: 'Heavy Thunderstorm',
        },
        ab = ag({
          chess: {
            titled: ay
              .input(
                ap.object({
                  days: ap.number().int().optional(),
                  title: ap.nativeEnum(tX.Title).optional(),
                  countryCode: ap.string().optional(),
                })
              )
              .query(async (e) => {
                let t = e.input.days,
                  r = e.input.title,
                  n = e.input.countryCode;
                return await rl({ days: t, title: r, countryCode: n });
              }),
            insights: ay
              .input(
                ap.object({
                  username: ap.string(),
                  variant: ap.nativeEnum(tX.Variant),
                  timeClass: ap.nativeEnum(tX.TimeClass),
                })
              )
              .query(async (e) => {
                let t = e.input.timeClass,
                  r = e.input.username,
                  n = e.input.variant;
                return await ru({
                  username: r,
                  variant: n,
                  timeClass: t,
                  rated: !0,
                });
              }),
          },
          countries: ay.query(async () => {
            let { data: e } = await iu.get(
              'https://restcountries.com/v3.1/all'
            );
            return e;
          }),
          languages: ag({
            health: ay.query(async () => {
              try {
                let {
                  data: { status: e },
                } = await iu.get(''.concat(t0, '/health'), {
                  headers: { 'Content-Type': 'application/json' },
                });
                return { status: e };
              } catch (e) {
                return { status: 'ERROR' };
              }
            }),
            predict: ay
              .input(ap.object({ text: ap.string().default('') }))
              .mutation(async (e) => {
                try {
                  let t = e.input.text,
                    {
                      data: { language: r },
                    } = await iu.post(
                      ''.concat(t0, '/predict'),
                      { text: t },
                      { headers: { 'Content-Type': 'application/json' } }
                    );
                  return { language: r };
                } catch (e) {
                  return { language: 'N/A' };
                }
              }),
          }),
          weather: ay
            .input(
              ap.object({
                latitude: ap.number().default(0),
                longitude: ap.number().default(0),
              })
            )
            .query(async (e) => {
              let { latitude: t = 0, longitude: r = 0 } = e.input;
              try {
                var n;
                let e = new URLSearchParams();
                e.set('timezone', 'GMT'),
                  e.set('latitude', t.toString()),
                  e.set('longitude', r.toString()),
                  e.set('current', 'temperature_2m'),
                  e.append('current', 'weather_code');
                let i = 'https://api.open-meteo.com/v1/forecast?'.concat(
                    e.toString()
                  ),
                  { data: s } = await iu.get(i),
                  { current: a } = s,
                  { weather_code: o = 0, temperature_2m: u = 0 } = a;
                return {
                  main: null !== (n = av[o]) && void 0 !== n ? n : 'N/A',
                  temperature: u,
                };
              } catch (e) {
                return { main: '', temperature: 0 };
              }
            }),
          word: ay
            .input(ap.object({ word: ap.string().default('') }))
            .query(async (e) => {
              let { word: t } = e.input;
              try {
                let e = 'https://www.wordsapi.com/mashape/words/'.concat(
                    encodeURIComponent(t),
                    '?when=2024-06-03T05:47:08.760Z&encrypted=8cfdb18ee722959bea9207bfea58babeaeb0250937f997b8'
                  ),
                  { data: r } = await iu.get(e),
                  { results: n } = r;
                return { word: t, results: n };
              } catch (e) {
                return { word: t, results: [] };
              }
            }),
        });
      var aw = r(2836);
      aw.env.VERCEL_URL, aw.env.RENDER_INTERNAL_HOSTNAME, aw.env.PORT;
      let a_ = () => '',
        aE = (function (e) {
          let t = tW(e),
            r = (function (e) {
              let { config: t } = e,
                r = eg(e.transformer);
              return (n) => {
                let i = tW(e),
                  s = (s) => {
                    let [a] = (0, ex.useState)(() => {
                        if (s.trpc) return s.trpc;
                        let r = t({}),
                          n = tY(r),
                          a = i.createClient(r);
                        return {
                          abortOnUnmount: r.abortOnUnmount,
                          queryClient: n,
                          trpcClient: a,
                          ssrState: !!e.ssr && 'mounting',
                          ssrContext: null,
                        };
                      }),
                      {
                        queryClient: o,
                        trpcClient: u,
                        ssrState: l,
                        ssrContext: c,
                      } = a,
                      h = s.pageProps?.trpcState,
                      d = ex.useMemo(
                        () => (h ? r.input.deserialize(h) : h),
                        [h, u]
                      );
                    return ex.createElement(
                      i.Provider,
                      {
                        abortOnUnmount: a.abortOnUnmount ?? !1,
                        client: u,
                        queryClient: o,
                        ssrState: l,
                        ssrContext: c,
                      },
                      ex.createElement(
                        eA,
                        { client: o },
                        ex.createElement(
                          eM,
                          { state: d },
                          ex.createElement(n, s)
                        )
                      )
                    );
                  };
                e.ssr
                  ? e.ssrPrepass({ parent: e, AppOrPage: n, WithTRPC: s })
                  : n.getInitialProps &&
                    (s.getInitialProps = async (e) => {
                      let t;
                      let r = !!e.Component,
                        i = {},
                        s = await n.getInitialProps(e);
                      return (
                        (t = i = { ...(r ? (s.pageProps ?? {}) : s), ...i }),
                        r ? { pageProps: t } : t
                      );
                    });
                let a = n.displayName ?? n.name ?? 'Component';
                return (s.displayName = `withTRPC(${a})`), s;
              };
            })(e),
            n = R(({ path: e, args: r }) => {
              let n = [...e],
                i = n.pop();
              if ('useMutation' === i) return t[i](n, ...r);
              if ('_def' === i) return { path: n };
              let [s, ...a] = r,
                o = a[0] || {};
              return t[i](n, s, o);
            });
          return C((e) =>
            'useContext' === e || 'useUtils' === e
              ? () => {
                  let e = t.useUtils();
                  return (0, ex.useMemo)(
                    () =>
                      (function (e) {
                        let t = ec(e.client),
                          r = R((t) => {
                            let r = [...t.path],
                              n = r.pop(),
                              i = [...t.args],
                              s = i.shift(),
                              a = e6(r, s, e8(n));
                            return {
                              infiniteQueryOptions: () =>
                                e.infiniteQueryOptions(r, a, i[0]),
                              queryOptions: () => e.queryOptions(r, a, ...i),
                              fetch: () => e.fetchQuery(a, ...i),
                              fetchInfinite: () =>
                                e.fetchInfiniteQuery(a, i[0]),
                              prefetch: () => e.prefetchQuery(a, ...i),
                              prefetchInfinite: () =>
                                e.prefetchInfiniteQuery(a, i[0]),
                              ensureData: () => e.ensureQueryData(a, ...i),
                              invalidate: () => e.invalidateQueries(a, ...i),
                              reset: () => e.resetQueries(a, ...i),
                              refetch: () => e.refetchQueries(a, ...i),
                              cancel: () => e.cancelQuery(a, ...i),
                              setData: () => {
                                e.setQueryData(a, i[0], i[1]);
                              },
                              setQueriesData: () =>
                                e.setQueriesData(a, i[0], i[1], i[2]),
                              setInfiniteData: () => {
                                e.setInfiniteQueryData(a, i[0], i[1]);
                              },
                              getData: () => e.getQueryData(a),
                              getInfiniteData: () => e.getInfiniteQueryData(a),
                              setMutationDefaults: () =>
                                e.setMutationDefaults(e3(r), s),
                              getMutationDefaults: () =>
                                e.getMutationDefaults(e3(r)),
                              isMutating: () =>
                                e.isMutating({ mutationKey: e3(r) }),
                            }[n]();
                          });
                        return C((n) =>
                          'client' === n ? t : ej.includes(n) ? e[n] : r[n]
                        );
                      })(e),
                    [e]
                  );
                }
              : 'useQueries' === e
                ? t.useQueries
                : 'useSuspenseQueries' === e
                  ? t.useSuspenseQueries
                  : 'withTRPC' === e
                    ? r
                    : n[e]
          );
        })({
          config: () => ({
            links: [
              (function (e) {
                let t = {
                    url: e.url.toString(),
                    fetch: e.fetch,
                    transformer: eg(e.transformer),
                    methodOverride: e.methodOverride,
                  },
                  r = e.maxURLLength ?? 1 / 0;
                return () => {
                  let n = (n) => ({
                      validate(e) {
                        if (r === 1 / 0) return !0;
                        let i = e.map((e) => e.path).join(','),
                          s = e.map((e) => e.input);
                        return (
                          eb({
                            ...t,
                            type: n,
                            path: i,
                            inputs: s,
                            signal: null,
                          }).length <= r
                        );
                      },
                      async fetch(r) {
                        let i = r.map((e) => e.path).join(','),
                          s = r.map((e) => e.input),
                          a = (function (...e) {
                            let t = new AbortController(),
                              r = e.length,
                              n = 0,
                              i = () => {
                                ++n === r && t.abort();
                              };
                            for (let t of e)
                              t?.aborted
                                ? i()
                                : t?.addEventListener('abort', i, { once: !0 });
                            return t.signal;
                          })(...r.map((e) => e.signal)),
                          o = await e_({
                            ...t,
                            path: i,
                            inputs: s,
                            type: n,
                            headers: () =>
                              e.headers
                                ? 'function' == typeof e.headers
                                  ? e.headers({ opList: r })
                                  : e.headers
                                : {},
                            signal: a,
                          });
                        return (
                          Array.isArray(o.json) ? o.json : r.map(() => o.json)
                        ).map((e) => ({ meta: o.meta, json: e }));
                      },
                    }),
                    i = { query: ep(n('query')), mutation: ep(n('mutation')) };
                  return ({ op: e }) =>
                    _((r) => {
                      let n;
                      if ('subscription' === e.type)
                        throw Error(
                          'Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`'
                        );
                      return (
                        i[e.type]
                          .load(e)
                          .then((e) => {
                            n = e;
                            let i = (function (e, t) {
                              let r;
                              try {
                                r = (function (e, t) {
                                  if ('error' in e) {
                                    let r = t.deserialize(e.error);
                                    return {
                                      ok: !1,
                                      error: { ...e, error: r },
                                    };
                                  }
                                  return {
                                    ok: !0,
                                    result: {
                                      ...e.result,
                                      ...((!e.result.type ||
                                        'data' === e.result.type) && {
                                        type: 'data',
                                        data: t.deserialize(e.result.data),
                                      }),
                                    },
                                  };
                                })(e, t);
                              } catch {
                                throw new F();
                              }
                              if (
                                (!r.ok &&
                                  (!A(r.error.error) ||
                                    'number' != typeof r.error.error.code)) ||
                                (r.ok && !A(r.result))
                              )
                                throw new F();
                              return r;
                            })(e.json, t.transformer.output);
                            if (!i.ok) {
                              r.error(es.from(i.error, { meta: e.meta }));
                              return;
                            }
                            r.next({ context: e.meta, result: i.result }),
                              r.complete();
                          })
                          .catch((e) => {
                            r.error(es.from(e, { meta: n?.meta }));
                          }),
                        () => {}
                      );
                    });
                };
              })({
                url: ''.concat(a_(), '/api/trpc'),
                headers: async () => ({}),
              }),
            ],
          }),
          ssr: !1,
        });
      !(function (e) {
        let t = tY(e),
          r = eg(e.transformer),
          n = (() => {
            if ('router' in e) {
              let { ctx: t, router: n } = e;
              return {
                serialize: r.output.serialize,
                query: (e) =>
                  (function (e) {
                    let { type: t, path: r } = e,
                      n = e.procedures[r];
                    if (
                      !n ||
                      !X(n) ||
                      (n._def.type !== t && !e.allowMethodOverride)
                    )
                      throw new q({
                        code: 'NOT_FOUND',
                        message: `No "${t}"-procedure on path "${r}"`,
                      });
                    if (
                      n._def.type !== t &&
                      e.allowMethodOverride &&
                      'subscription' === n._def.type
                    )
                      throw new q({
                        code: 'METHOD_NOT_SUPPORTED',
                        message:
                          'Method override is not supported for subscriptions',
                      });
                    return n(e);
                  })({
                    procedures: n._def.procedures,
                    path: e.path,
                    getRawInput: async () => e.input,
                    ctx: t,
                    type: 'query',
                    signal: void 0,
                  }),
              };
            }
            let { client: t } = e,
              n = t instanceof eo ? t : ed(t);
            return {
              query: (e) => n.query(e.path, e.input),
              serialize: (e) => r.output.serialize(e),
            };
          })();
        function i(e = { shouldDehydrateQuery: () => !0 }) {
          let r = (function (e, t = {}) {
            let r =
                t.shouldDehydrateMutation ??
                e.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
                eP,
              n = e
                .getMutationCache()
                .getAll()
                .flatMap((e) =>
                  r(e)
                    ? [
                        {
                          mutationKey: e.options.mutationKey,
                          state: e.state,
                          ...(e.options.scope && { scope: e.options.scope }),
                          ...(e.meta && { meta: e.meta }),
                        },
                      ]
                    : []
                ),
              i =
                t.shouldDehydrateQuery ??
                e.getDefaultOptions().dehydrate?.shouldDehydrateQuery ??
                eI,
              s =
                t.serializeData ??
                e.getDefaultOptions().dehydrate?.serializeData ??
                eT;
            return {
              mutations: n,
              queries: e
                .getQueryCache()
                .getAll()
                .flatMap((e) =>
                  i(e)
                    ? [
                        {
                          state: {
                            ...e.state,
                            ...(void 0 !== e.state.data && {
                              data: s(e.state.data),
                            }),
                          },
                          queryKey: e.queryKey,
                          queryHash: e.queryHash,
                          ...('pending' === e.state.status && {
                            promise: e.promise
                              ?.then(s)
                              .catch((e) => Promise.reject(Error('redacted'))),
                          }),
                          ...(e.meta && { meta: e.meta }),
                        },
                      ]
                    : []
                ),
            };
          })(t, e);
          return n.serialize(r);
        }
        let s = R((e) => {
          let r = e.args,
            i = r[0],
            s = [...e.path],
            a = s.pop(),
            o = () => n.query({ path: s.join('.'), input: i }),
            u = e6(s, i, e8(a));
          return {
            queryOptions: () => ({ ...r[1], queryKey: u, queryFn: o }),
            infiniteQueryOptions: () => ({ ...r[1], queryKey: u, queryFn: o }),
            fetch: () => {
              let e = r[1];
              return t.fetchQuery({ ...e, queryKey: u, queryFn: o });
            },
            fetchInfinite: () => {
              let e = r[1];
              return t.fetchInfiniteQuery({
                ...e,
                queryKey: u,
                queryFn: o,
                initialPageParam: e?.initialCursor ?? null,
              });
            },
            prefetch: () => {
              let e = r[1];
              return t.prefetchQuery({ ...e, queryKey: u, queryFn: o });
            },
            prefetchInfinite: () => {
              let e = r[1];
              return t.prefetchInfiniteQuery({
                ...e,
                queryKey: u,
                queryFn: o,
                initialPageParam: e?.initialCursor ?? null,
              });
            },
          }[a]();
        });
        C((e) => ('queryClient' === e ? t : 'dehydrate' === e ? i : s[e]));
      })({ router: ab, ctx: {} });
      var aS = r(832),
        aO = r.n(aS);
      let aR = aE.withTRPC((e) => {
        let { Component: t, pageProps: r } = e;
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsxs)(aO(), {
              children: [
                (0, v.jsx)('title', { children: 'HIEU DOAN: hieudoanm' }),
                (0, v.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, v.jsx)('link', {
                  rel: 'icon',
                  href: '/favicon.ico',
                  sizes: 'any',
                }),
                (0, v.jsx)('link', {
                  href: '/icons/png/512x512.png',
                  rel: 'apple-touch-icon',
                  type: 'image/png',
                }),
                (0, v.jsx)('meta', { charSet: 'UTF-8' }),
                (0, v.jsx)('meta', { name: 'keywords', content: 'hieudoanm' }),
                (0, v.jsx)('meta', {
                  name: 'url',
                  content: 'https://hieudoanm.github.io',
                }),
                (0, v.jsx)('meta', {
                  name: 'viewport',
                  content:
                    'width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
                }),
              ],
            }),
            (0, v.jsx)('div', {
              className: w().className,
              children: (0, v.jsx)(t, { ...r }),
            }),
          ],
        });
      });
    },
    1657: () => {},
    1757: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Roboto Mono', 'Roboto Mono Fallback'",
          fontWeight: 400,
          fontStyle: 'normal',
        },
        className: '__className_d96792',
      };
    },
    832: (e, t, r) => {
      e.exports = r(3320);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [593, 792], () => (t(8080), t(7617))), (_N_E = e.O());
  },
]);
