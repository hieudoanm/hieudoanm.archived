(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    22: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Roboto Mono', 'Roboto Mono Fallback'",
          fontWeight: 400,
          fontStyle: 'normal',
        },
        className: '__className_d96792',
      };
    },
    1422: (e, t, r) => {
      'use strict';
      let n, i;
      r.r(t), r.d(t, { default: () => aO });
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
        y,
        g,
        v = {};
      r.r(v),
        r.d(v, {
          hasBrowserEnv: () => nS,
          hasStandardBrowserEnv: () => nR,
          hasStandardBrowserWebWorkerEnv: () => nx,
          navigator: () => nO,
          origin: () => nC,
        });
      var b = r(8017);
      function w(e) {
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
                  !n && t.next?.(e);
                },
                error(e) {
                  !n && ((n = !0), t.error?.(e), a());
                },
                complete() {
                  !n && ((n = !0), t.complete?.(), a());
                },
              })),
              s && a(),
              { unsubscribe: a }
            );
          },
          pipe: (...e) => e.reduce(_, t),
        };
        return t;
      }
      function _(e, t) {
        return t(e);
      }
      r(6038), Symbol();
      let E = () => {},
        S = (e) => {
          Object.freeze && Object.freeze(e);
        },
        O = (e) =>
          (function e(t, r, n) {
            let i = r.join('.');
            return (
              n[i] ??
                (n[i] = new Proxy(E, {
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
                      S(a.args),
                      S(a.path),
                      t(a)
                    );
                  },
                })),
              n[i]
            );
          })(e, [], Object.create(null)),
        R = (e) =>
          new Proxy(E, {
            get(t, r) {
              if ('then' !== r) return e(r);
            },
          }),
        x = {
          INTERNAL_SERVER_ERROR: -32603,
          BAD_GATEWAY: -32603,
          SERVICE_UNAVAILABLE: -32603,
          GATEWAY_TIMEOUT: -32603,
        },
        C = Symbol();
      function N(e, ...t) {
        let r = Object.assign(Object.create(null), e);
        for (let e of t)
          for (let t in e) {
            if (t in r && r[t] !== e[t]) throw Error(`Duplicate key ${t}`);
            r[t] = e[t];
          }
        return r;
      }
      function k(e) {
        return !!e && !Array.isArray(e) && 'object' == typeof e;
      }
      function A(e) {
        return Object.assign(Object.create(null), e);
      }
      let T = 'function' == typeof Symbol && !!Symbol.asyncIterator;
      function P(e) {
        return T && k(e) && Symbol.asyncIterator in e;
      }
      let I = (e) => e(),
        D = {
          PARSE_ERROR: 400,
          BAD_REQUEST: 400,
          UNAUTHORIZED: 401,
          FORBIDDEN: 403,
          NOT_FOUND: 404,
          METHOD_NOT_SUPPORTED: 405,
          TIMEOUT: 408,
          CONFLICT: 409,
          PRECONDITION_FAILED: 412,
          PAYLOAD_TOO_LARGE: 413,
          UNSUPPORTED_MEDIA_TYPE: 415,
          UNPROCESSABLE_CONTENT: 422,
          TOO_MANY_REQUESTS: 429,
          CLIENT_CLOSED_REQUEST: 499,
          INTERNAL_SERVER_ERROR: 500,
          NOT_IMPLEMENTED: 501,
          BAD_GATEWAY: 502,
          SERVICE_UNAVAILABLE: 503,
          GATEWAY_TIMEOUT: 504,
        };
      function M(e, t, r) {
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
      class j extends Error {}
      function U(e) {
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
              if (k(e)) {
                let t = new j();
                for (let r in e) t[r] = e[r];
                return t;
              }
            }
          })(e.cause);
          super(e.message ?? t?.message ?? e.code, { cause: t }),
            M(this, 'cause', void 0),
            M(this, 'code', void 0),
            (this.code = e.code),
            (this.name = 'TRPCError'),
            this.cause || (this.cause = t);
        }
      }
      let F = ({ shape: e }) => e,
        L = {
          input: { serialize: (e) => e, deserialize: (e) => e },
          output: { serialize: (e) => e, deserialize: (e) => e },
        };
      class B extends Error {
        constructor() {
          super('Unable to transform response from server');
        }
      }
      let Q = Symbol('lazy'),
        Z = {
          _ctx: null,
          _errorShape: null,
          _meta: null,
          queries: {},
          mutations: {},
          subscriptions: {},
          errorFormatter: F,
          transformer: L,
        },
        z = ['then', 'call', 'apply'];
      function W(e) {
        return function (t) {
          let r = new Set(Object.keys(t).filter((e) => z.includes(e)));
          if (r.size > 0)
            throw Error(
              'Reserved words used in `router({})` call: ' +
                Array.from(r).join(', ')
            );
          let n = A({}),
            i = A({}),
            s = (function e(t, r = []) {
              let s = A({});
              for (let [o, u] of Object.entries(t ?? {})) {
                var a;
                if ('function' == typeof u && Q in u) {
                  i[[...r, o].join('.')] = (function t(r) {
                    return {
                      ref: r.ref,
                      load: (function (e) {
                        let t = Symbol(),
                          r = t;
                        return () => (r === t && (r = e()), r);
                      })(async () => {
                        let n = await r.ref(),
                          s = [...r.path, r.key],
                          a = s.join('.');
                        for (let [o, u] of ((r.aggregate[r.key] = e(
                          n._def.record,
                          s
                        )),
                        delete i[a],
                        Object.entries(n._def.lazy)))
                          i[[...s, o].join('.')] = t({
                            ref: u.ref,
                            path: s,
                            key: o,
                            aggregate: r.aggregate[r.key],
                          });
                      }),
                    };
                  })({ path: r, ref: u, key: o, aggregate: s });
                  continue;
                }
                if (k((a = u)) && k(a._def) && 'router' in a._def) {
                  s[o] = e(u._def.record, [...r, o]);
                  continue;
                }
                if (!$(u)) {
                  s[o] = e(u, [...r, o]);
                  continue;
                }
                let t = [...r, o].join('.');
                if (n[t]) throw Error(`Duplicate key: ${t}`);
                (n[t] = u), (s[o] = u);
              }
              return s;
            })(t),
            a = {
              _config: e,
              router: !0,
              procedures: n,
              lazy: i,
              ...Z,
              record: s,
            };
          return { ...s, _def: a, createCaller: V()({ _def: a }) };
        };
      }
      function $(e) {
        return 'function' == typeof e;
      }
      async function H(e, t) {
        let { _def: r } = e,
          n = r.procedures[t];
        for (; !n; ) {
          let e = Object.keys(r.lazy).find((e) => t.startsWith(e));
          if (!e) return null;
          let i = r.lazy[e];
          await i.load(), (n = r.procedures[t]);
        }
        return n;
      }
      async function K(e) {
        let { type: t, path: r } = e,
          n = await H(e.router, r);
        if (!n || !$(n) || (n._def.type !== t && !e.allowMethodOverride))
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
            message: 'Method override is not supported for subscriptions',
          });
        return n(e);
      }
      function V() {
        return function (e) {
          let { _def: t } = e;
          return function (r, n) {
            return O(async ({ path: i, args: s }) => {
              let a;
              let o = i.join('.');
              if (1 === i.length && '_def' === i[0]) return t;
              let u = await H(e, o);
              try {
                if (!u)
                  throw new q({
                    code: 'NOT_FOUND',
                    message: `No procedure found on path "${i}"`,
                  });
                return (
                  (a = 'function' == typeof r ? await Promise.resolve(r()) : r),
                  await u({
                    path: o,
                    getRawInput: async () => s[0],
                    ctx: a,
                    type: u._def.type,
                    signal: n?.signal,
                  })
                );
              } catch (e) {
                throw (
                  (n?.onError?.({
                    ctx: a,
                    error: U(e),
                    input: s[0],
                    path: o,
                    type: u?._def.type ?? 'unknown',
                  }),
                  e)
                );
              }
            });
          };
        };
      }
      function G(...e) {
        let t = N({}, ...e.map((e) => e._def.record));
        return W({
          errorFormatter: e.reduce((e, t) => {
            if (
              t._def._config.errorFormatter &&
              t._def._config.errorFormatter !== F
            ) {
              if (e !== F && e !== t._def._config.errorFormatter)
                throw Error('You seem to have several error formatters');
              return t._def._config.errorFormatter;
            }
            return e;
          }, F),
          transformer: e.reduce((e, t) => {
            if (
              t._def._config.transformer &&
              t._def._config.transformer !== L
            ) {
              if (e !== L && e !== t._def._config.transformer)
                throw Error('You seem to have several transformers');
              return t._def._config.transformer;
            }
            return e;
          }, L),
          isDev: e.every((e) => e._def._config.isDev),
          allowOutsideOfServer: e.every(
            (e) => e._def._config.allowOutsideOfServer
          ),
          isServer: e.every((e) => e._def._config.isServer),
          $types: e[0]?._def._config.$types,
        })(t);
      }
      function J(e) {
        let t = null,
          r = C;
        return {
          read: async () => (
            r !== C ||
              (null === t &&
                (t = e().catch((e) => {
                  if (e instanceof q) throw e;
                  throw new q({
                    code: 'BAD_REQUEST',
                    message: e instanceof Error ? e.message : 'Invalid input',
                    cause: e,
                  });
                })),
              (r = await t),
              (t = null)),
            r
          ),
          result: () => (r !== C ? r : void 0),
        };
      }
      new WeakMap(),
        Symbol.toStringTag,
        (u = Symbol).dispose ?? (u.dispose = Symbol()),
        (l = Symbol).asyncDispose ?? (l.asyncDispose = Symbol()),
        Symbol();
      function Y(e, t, r) {
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
      Symbol('ping');
      function X(e) {
        var t =
          'function' == typeof SuppressedError
            ? SuppressedError
            : function (e, t, r) {
                var n = Error(r);
                return (
                  (n.name = 'SuppressedError'),
                  (n.error = e),
                  (n.suppressed = t),
                  n
                );
              };
        return (X = function (e) {
          function r(r) {
            (e.error = e.hasError
              ? new t(r, e.error, 'An error was suppressed during disposal.')
              : r),
              (e.hasError = !0);
          }
          var n,
            i = 0;
          return (function t() {
            for (; (n = e.stack.pop()); )
              try {
                if (!n.async && 1 === i)
                  return (i = 0), e.stack.push(n), Promise.resolve().then(t);
                if (n.dispose) {
                  var s = n.dispose.call(n.value);
                  if (n.async)
                    return (
                      (i |= 2),
                      Promise.resolve(s).then(t, function (e) {
                        return r(e), t();
                      })
                    );
                } else i |= 1;
              } catch (e) {
                r(e);
              }
            if (1 === i)
              return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError) throw e.error;
          })();
        })(e);
      }
      class ee extends Error {
        constructor(e) {
          super('Max depth reached at path: ' + e.join('.')),
            Y(this, 'path', void 0),
            (this.path = e);
        }
      }
      Symbol();
      function et(e) {
        var t =
          'function' == typeof SuppressedError
            ? SuppressedError
            : function (e, t, r) {
                var n = Error(r);
                return (
                  (n.name = 'SuppressedError'),
                  (n.error = e),
                  (n.suppressed = t),
                  n
                );
              };
        return (et = function (e) {
          function r(r) {
            (e.error = e.hasError
              ? new t(r, e.error, 'An error was suppressed during disposal.')
              : r),
              (e.hasError = !0);
          }
          var n,
            i = 0;
          return (function t() {
            for (; (n = e.stack.pop()); )
              try {
                if (!n.async && 1 === i)
                  return (i = 0), e.stack.push(n), Promise.resolve().then(t);
                if (n.dispose) {
                  var s = n.dispose.call(n.value);
                  if (n.async)
                    return (
                      (i |= 2),
                      Promise.resolve(s).then(t, function (e) {
                        return r(e), t();
                      })
                    );
                } else i |= 1;
              } catch (e) {
                r(e);
              }
            if (1 === i)
              return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError) throw e.error;
          })();
        })(e);
      }
      let er = 'middlewareMarker';
      class en extends Error {
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
      function ei(e) {
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
            if (r.issues) throw new en(r.issues);
            return r.value;
          };
        throw Error('Could not find a validator fn');
      }
      function es(e, t) {
        let { middlewares: r = [], inputs: n, meta: i, ...s } = t;
        return ea({
          ...N(e, s),
          inputs: [...e.inputs, ...(n ?? [])],
          middlewares: [...e.middlewares, ...r],
          meta: e.meta && i ? { ...e.meta, ...i } : (i ?? e.meta),
        });
      }
      function ea(e = {}) {
        let t = { procedure: !0, inputs: [], middlewares: [], ...e };
        return {
          _def: t,
          input(e) {
            let r = ei(e);
            return es(t, {
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
                    let i = k(t.input) && k(r) ? { ...t.input, ...r } : r;
                    return t.next({ input: i });
                  };
                  return (t._type = 'input'), t;
                })(r),
              ],
            });
          },
          output(e) {
            let r = ei(e);
            return es(t, {
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
          meta: (e) => es(t, { meta: e }),
          use: (e) =>
            es(t, { middlewares: '_middlewares' in e ? e._middlewares : [e] }),
          unstable_concat: (e) => es(t, e._def),
          query: (e) => eo({ ...t, type: 'query' }, e),
          mutation: (e) => eo({ ...t, type: 'mutation' }, e),
          subscription: (e) => eo({ ...t, type: 'subscription' }, e),
          experimental_caller: (e) => es(t, { caller: e }),
        };
      }
      function eo(e, t) {
        let r = es(e, {
            resolver: t,
            middlewares: [
              async function (e) {
                return { marker: er, ok: !0, data: await t(e), ctx: e.ctx };
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
              if (!t || !('getRawInput' in t)) throw Error(eu);
              let r = await el(0, e, t);
              if (!r)
                throw new q({
                  code: 'INTERNAL_SERVER_ERROR',
                  message:
                    'No result from middlewares - did you forget to `return next()`?',
                });
              if (!r.ok) throw r.error;
              return r.data;
            }
            return (t._def = e), (t.procedure = !0), t;
          })(r._def),
          s = r._def.caller;
        if (!s) return i;
        let a = async (...e) => await s({ args: e, invoke: i, _def: n });
        return (a._def = n), a;
      }
      let eu = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
      async function el(e, t, r) {
        try {
          let n = t.middlewares[e];
          return await n({
            ...r,
            meta: t.meta,
            input: r.input,
            next: (n) =>
              el(e + 1, t, {
                ...r,
                ctx: n?.ctx ? { ...r.ctx, ...n.ctx } : r.ctx,
                input: n && 'input' in n ? n.input : r.input,
                getRawInput: n?.getRawInput ?? r.getRawInput,
              }),
          });
        } catch (e) {
          return { ok: !1, error: U(e), marker: er };
        }
      }
      let ec =
        'undefined' == typeof window ||
        'Deno' in window ||
        globalThis.process?.env?.NODE_ENV === 'test' ||
        !!globalThis.process?.env?.JEST_WORKER_ID ||
        !!globalThis.process?.env?.VITEST_WORKER_ID;
      class eh {
        context() {
          return new eh();
        }
        meta() {
          return new eh();
        }
        create(e) {
          var t;
          let r = {
            ...e,
            transformer:
              'input' in (t = e?.transformer ?? L)
                ? t
                : { input: t, output: t },
            isDev:
              e?.isDev ?? globalThis.process?.env.NODE_ENV !== 'production',
            allowOutsideOfServer: e?.allowOutsideOfServer ?? !1,
            errorFormatter: e?.errorFormatter ?? F,
            isServer: e?.isServer ?? ec,
            $types: null,
          };
          if (!(e?.isServer ?? ec) && e?.allowOutsideOfServer !== !0)
            throw Error(
              "You're trying to use @trpc/server in a non-server environment. This is not supported by default."
            );
          return {
            _config: r,
            procedure: ea({ meta: e?.defaultMeta }),
            middleware: function (e) {
              return (function e(t) {
                return {
                  _middlewares: t,
                  unstable_pipe: (r) =>
                    e([...t, ...('_middlewares' in r ? r._middlewares : [r])]),
                };
              })([e]);
            },
            router: W(r),
            mergeRouters: G,
            createCallerFactory: V(),
          };
        }
      }
      let ed = new eh();
      function ef(e, t, r) {
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
      class ep extends Error {
        static from(e, t = {}) {
          return e instanceof ep ||
            (e instanceof Error && 'TRPCClientError' === e.name)
            ? (t.meta && (e.meta = { ...e.meta, ...t.meta }), e)
            : k(e) &&
                k(e.error) &&
                'number' == typeof e.error.code &&
                'string' == typeof e.error.message
              ? new ep(e.error.message, { ...t, result: e })
              : new ep(
                  'string' == typeof e
                    ? e
                    : k(e) && 'string' == typeof e.message
                      ? e.message
                      : 'Unknown error',
                  { ...t, cause: e }
                );
        }
        constructor(e, t) {
          let r = t?.cause;
          super(e, { cause: r }),
            ef(this, 'cause', void 0),
            ef(this, 'shape', void 0),
            ef(this, 'data', void 0),
            ef(this, 'meta', void 0),
            (this.meta = t?.meta),
            (this.cause = r),
            (this.shape = t?.result?.error),
            (this.data = t?.result?.error.data),
            (this.name = 'TRPCClientError'),
            Object.setPrototypeOf(this, ep.prototype);
        }
      }
      function em(e, t, r) {
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
      class ey {
        $request(e) {
          var t;
          return ((t = {
            links: this.links,
            op: { ...e, context: e.context ?? {}, id: ++this.requestId },
          }),
          w((e) =>
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
            return w(
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
                    !i && ((i = !0), a.unsubscribe());
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
            throw ep.from(e);
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
          em(this, 'links', void 0),
            em(this, 'runtime', void 0),
            em(this, 'requestId', void 0),
            (this.requestId = 0),
            (this.runtime = {}),
            (this.links = e.links.map((e) => e(this.runtime)));
        }
      }
      let eg = Symbol.for('trpc_untypedClient'),
        ev = { query: 'query', mutate: 'mutation', subscribe: 'subscription' },
        eb = (e) => ev[e];
      function ew(e) {
        let t = O(({ path: t, args: r }) => {
          let n = [...t],
            i = eb(n.pop()),
            s = n.join('.');
          return e[i](s, ...r);
        });
        return R((r) => (r === eg ? e : t[r]));
      }
      function e_(e) {
        return ew(new ey(e));
      }
      let eE = () => {
        throw Error(
          'Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new'
        );
      };
      function eS(e) {
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
                resolve: eE,
                reject: eE,
              },
              s = new Promise((e, r) => {
                (n.reject = r), (n.resolve = e), t || (t = []), t.push(n);
              });
            return r || (r = setTimeout(i)), s;
          },
        };
      }
      let eO = (e) => 'function' == typeof e;
      function eR(e) {
        return e
          ? 'input' in e
            ? e
            : { input: e, output: e }
          : {
              input: { serialize: (e) => e, deserialize: (e) => e },
              output: { serialize: (e) => e, deserialize: (e) => e },
            };
      }
      let ex = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
      function eC(e) {
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
      let eN = (e) => {
          let t = e.url.split('?'),
            r = t[0].replace(/\/$/, '') + '/' + e.path,
            n = [];
          if (
            (t[1] && n.push(t[1]),
            'inputs' in e && n.push('batch=1'),
            'query' === e.type || 'subscription' === e.type)
          ) {
            let t = eC(e);
            void 0 !== t &&
              'POST' !== e.methodOverride &&
              n.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
          }
          return n.length && (r += '?' + n.join('&')), r;
        },
        ek = (e) => {
          if ('query' === e.type && 'POST' !== e.methodOverride) return;
          let t = eC(e);
          return void 0 !== t ? JSON.stringify(t) : void 0;
        },
        eA = (e) =>
          eD({
            ...e,
            contentTypeHeader: 'application/json',
            getUrl: eN,
            getBody: ek,
          });
      class eT extends Error {
        constructor() {
          let e = 'AbortError';
          super(e), (this.name = e), (this.message = e);
        }
      }
      let eP = (e) => {
        if (e?.aborted) {
          if ((e.throwIfAborted?.(), 'undefined' != typeof DOMException))
            throw new DOMException('AbortError', 'AbortError');
          throw new eT();
        }
      };
      async function eI(e) {
        eP(e.signal);
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
          if ('undefined' != typeof window && eO(window.fetch))
            return window.fetch;
          if ('undefined' != typeof globalThis && eO(globalThis.fetch))
            return globalThis.fetch;
          throw Error('No fetch implementation found');
        })(e.fetch)(t, {
          method: e.methodOverride ?? ex[n],
          signal: e.signal,
          body: r,
          headers: s,
        });
      }
      async function eD(e) {
        let t = {},
          r = await eI(e);
        t.response = r;
        let n = await r.json();
        return (t.responseJSON = n), { json: n, meta: t };
      }
      let eM = {
          css: {
            query: ['72e3ff', '3fb0d8'],
            mutation: ['c5a3fc', '904dfc'],
            subscription: ['ff49e1', 'd83fbe'],
          },
          ansi: {
            regular: {
              query: ['\x1b[30;46m', '\x1b[97;46m'],
              mutation: ['\x1b[30;45m', '\x1b[97;45m'],
              subscription: ['\x1b[30;42m', '\x1b[97;42m'],
            },
            bold: {
              query: ['\x1b[1;30;46m', '\x1b[1;97;46m'],
              mutation: ['\x1b[1;30;45m', '\x1b[1;97;45m'],
              subscription: ['\x1b[1;30;42m', '\x1b[1;97;42m'],
            },
          },
        },
        ej = (e, ...t) => ('function' == typeof e ? e(...t) : e);
      async function eU(e) {
        let t = await ej(e.url);
        if (!e.connectionParams) return t;
        let r = t.includes('?') ? '&' : '?';
        return t + `${r}connectionParams=1`;
      }
      async function eq(e) {
        return JSON.stringify({
          method: 'connectionParams',
          data: await ej(e),
        });
      }
      function eF(e, t, r) {
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
      class eL {
        get ws() {
          return this.wsObservable.get();
        }
        set ws(e) {
          this.wsObservable.next(e);
        }
        isOpen() {
          return (
            !!this.ws &&
            this.ws.readyState === this.WebSocketPonyfill.OPEN &&
            !this.openPromise
          );
        }
        isClosed() {
          return (
            !!this.ws &&
            (this.ws.readyState === this.WebSocketPonyfill.CLOSING ||
              this.ws.readyState === this.WebSocketPonyfill.CLOSED)
          );
        }
        async open() {
          if (this.openPromise) return this.openPromise;
          this.id = ++eL.connectCount;
          let e = eU(this.urlOptions).then(
            (e) => new this.WebSocketPonyfill(e)
          );
          this.openPromise = e.then(async (e) => {
            (this.ws = e),
              e.addEventListener('message', function ({ data: e }) {
                'PING' === e && this.send('PONG');
              }),
              this.keepAliveOpts.enabled &&
                (function (e, { intervalMs: t, pongTimeoutMs: r }) {
                  let n, i;
                  function s() {
                    n = setTimeout(() => {
                      e.send('PING'),
                        (i = setTimeout(() => {
                          e.close();
                        }, r));
                    }, t);
                  }
                  e.addEventListener('open', s),
                    e.addEventListener('message', ({ data: e }) => {
                      clearTimeout(n),
                        s(),
                        'PONG' === e && (clearTimeout(i), clearTimeout(n), s());
                    }),
                    e.addEventListener('close', () => {
                      clearTimeout(n), clearTimeout(i);
                    });
                })(e, this.keepAliveOpts),
              e.addEventListener('close', () => {
                this.ws === e && (this.ws = null);
              }),
              await (function (e) {
                let t, r;
                let {
                  promise: n,
                  resolve: i,
                  reject: s,
                } = {
                  promise: new Promise((e, n) => {
                    (t = e), (r = n);
                  }),
                  resolve: t,
                  reject: r,
                };
                return (
                  e.addEventListener('open', () => {
                    e.removeEventListener('error', s), i();
                  }),
                  e.addEventListener('error', s),
                  n
                );
              })(e),
              this.urlOptions.connectionParams &&
                e.send(await eq(this.urlOptions.connectionParams));
          });
          try {
            await this.openPromise;
          } finally {
            this.openPromise = null;
          }
        }
        async close() {
          try {
            await this.openPromise;
          } finally {
            this.ws?.close();
          }
        }
        constructor(e) {
          if (
            (eF(this, 'id', ++eL.connectCount),
            eF(this, 'WebSocketPonyfill', void 0),
            eF(this, 'urlOptions', void 0),
            eF(this, 'keepAliveOpts', void 0),
            eF(
              this,
              'wsObservable',
              (function (e) {
                let t = null,
                  r = [],
                  n = (e) => {
                    void 0 !== t && e.next(t), r.push(e);
                  },
                  i = (e) => {
                    r.splice(r.indexOf(e), 1);
                  },
                  s = w(
                    (e) => (
                      n(e),
                      () => {
                        i(e);
                      }
                    )
                  );
                return (
                  (s.next = (e) => {
                    if (t !== e) for (let n of ((t = e), r)) n.next(e);
                  }),
                  (s.get = () => t),
                  s
                );
              })(0)
            ),
            eF(this, 'openPromise', null),
            (this.WebSocketPonyfill = e.WebSocketPonyfill ?? WebSocket),
            !this.WebSocketPonyfill)
          )
            throw Error(
              "No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill"
            );
          (this.urlOptions = e.urlOptions), (this.keepAliveOpts = e.keepAlive);
        }
      }
      eF(eL, 'connectCount', 0);
      x.BAD_GATEWAY,
        x.SERVICE_UNAVAILABLE,
        x.GATEWAY_TIMEOUT,
        x.INTERNAL_SERVER_ERROR;
      var eB = r(4109),
        eQ = eB.createContext(void 0),
        eZ = (e) => {
          let t = eB.useContext(eQ);
          if (e) return e;
          if (!t)
            throw Error(
              'No QueryClient set, use QueryClientProvider to set one'
            );
          return t;
        },
        ez = ({ client: e, children: t }) => (
          eB.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          ),
          (0, b.jsx)(eQ.Provider, { value: e, children: t })
        );
      function eW(e) {
        return e;
      }
      function e$(e) {
        return e.state.isPaused;
      }
      function eH(e) {
        return 'success' === e.state.status;
      }
      function eK(e) {
        return !0;
      }
      function eV(e, t, r) {
        if ('object' != typeof t || null === t) return;
        let n = e.getMutationCache(),
          i = e.getQueryCache(),
          s =
            r?.defaultOptions?.deserializeData ??
            e.getDefaultOptions().hydrate?.deserializeData ??
            eW,
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
      var eG = (e, t) => 'object' == typeof e && null !== e && t in e,
        eJ = ({ children: e, options: t = {}, state: r, queryClient: n }) => {
          let i = eZ(n),
            [s, a] = eB.useState(),
            o = eB.useRef(t);
          return (
            (o.current = t),
            eB.useMemo(() => {
              if (r) {
                if ('object' != typeof r) return;
                let e = i.getQueryCache(),
                  t = r.queries || [],
                  n = [],
                  u = [];
                for (let r of t) {
                  let t = e.get(r.queryHash);
                  if (t) {
                    let e =
                        r.state.dataUpdatedAt > t.state.dataUpdatedAt ||
                        (eG(r.promise, 'status') &&
                          eG(t.promise, 'status') &&
                          r.promise.status !== t.promise.status),
                      n = s?.find((e) => e.queryHash === r.queryHash);
                    e &&
                      (!n || r.state.dataUpdatedAt > n.state.dataUpdatedAt) &&
                      u.push(r);
                  } else n.push(r);
                }
                n.length > 0 && eV(i, { queries: n }, o.current),
                  u.length > 0 && a((e) => (e ? [...e, ...u] : u));
              }
            }, [i, s, r]),
            eB.useEffect(() => {
              s && (eV(i, { queries: s }, o.current), a(void 0));
            }, [i, s]),
            e
          );
        };
      let eY = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
        eX = eB.createContext?.(null);
      var e0 = 'undefined' == typeof window || 'Deno' in globalThis;
      function e1() {}
      function e2(e) {
        return 'number' == typeof e && e >= 0 && e !== 1 / 0;
      }
      function e4(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function e5(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function e3(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function e6(e, t) {
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
            if (t.queryHash !== e8(a, t.options)) return !1;
          } else if (!te(t.queryKey, a)) return !1;
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
      function e9(e, t) {
        let { exact: r, status: n, predicate: i, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (e7(t.options.mutationKey) !== e7(s)) return !1;
          } else if (!te(t.options.mutationKey, s)) return !1;
        }
        return (!n || t.state.status === n) && (!i || !!i(t));
      }
      function e8(e, t) {
        return (t?.queryKeyHashFn || e7)(e);
      }
      function e7(e) {
        return JSON.stringify(e, (e, t) =>
          ti(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function te(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            'object' == typeof e &&
            'object' == typeof t &&
            !Object.keys(t).some((r) => !te(e[r], t[r])))
        );
      }
      function tt(e, t) {
        if (e === t) return e;
        let r = tn(e) && tn(t);
        if (r || (ti(e) && ti(t))) {
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
              : ((o[a] = tt(e[a], t[a])),
                o[a] === e[a] && void 0 !== e[a] && u++);
          }
          return i === a && u === i ? e : o;
        }
        return t;
      }
      function tr(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function tn(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function ti(e) {
        if (!ts(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return (
          !!(ts(r) && r.hasOwnProperty('isPrototypeOf')) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function ts(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      function ta(e, t, r) {
        return 'function' == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
            ? tt(e, t)
            : t;
      }
      function to(e, t, r = 0) {
        let n = [...e, t];
        return r && n.length > r ? n.slice(1) : n;
      }
      function tu(e, t, r = 0) {
        let n = [t, ...e];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var tl = Symbol();
      function tc(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== tl
            ? e.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function th(e, t, r) {
        let n = e.flatMap((e) => e.split('.'));
        if (!t && (!r || 'any' === r)) return n.length ? [n] : [];
        if ('infinite' === r && k(t) && ('direction' in t || 'cursor' in t)) {
          let { cursor: e, direction: r, ...i } = t;
          return [n, { input: i, type: 'infinite' }];
        }
        return [
          n,
          {
            ...(void 0 !== t && t !== tl && { input: t }),
            ...(r && 'any' !== r && { type: r }),
          },
        ];
      }
      function td(e) {
        return th(e, void 0, 'any');
      }
      let tf = (e) => {
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
      function tp(e) {
        let t = e instanceof ey ? e : e[eg];
        return O((e) => {
          let r = e.path,
            n = r.join('.'),
            [i, s] = e.args;
          return {
            queryKey: th(r, i, 'query'),
            queryFn: () => t.query(n, i, s?.trpc),
            ...s,
          };
        });
      }
      var tm = class {
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
        ty = new (class extends tm {
          #e;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!e0 && window.addEventListener) {
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
        tg = (function () {
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
        tv = new (class extends tm {
          #n = !0;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!e0 && window.addEventListener) {
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
      function tb() {
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
      function tw(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function t_(e) {
        return (e ?? 'online') !== 'online' || tv.isOnline();
      }
      var tE = class extends Error {
        constructor(e) {
          super('CancelledError'),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function tS(e) {
        return e instanceof tE;
      }
      function tO(e) {
        let t,
          r = !1,
          n = 0,
          i = !1,
          s = tb(),
          a = () =>
            ty.isFocused() &&
            ('always' === e.networkMode || tv.isOnline()) &&
            e.canRun(),
          o = () => t_(e.networkMode) && e.canRun(),
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
                let s = e.retry ?? 3 * !e0,
                  o = e.retryDelay ?? tw,
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
            i || (l(new tE(t)), e.abort?.());
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
      var tR = class {
          #i;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              e2(this.gcTime) &&
                (this.#i = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (e0 ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#i && (clearTimeout(this.#i), (this.#i = void 0));
          }
        },
        tx = class extends tR {
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
            let r = ta(this.state.data, e, this.options);
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
              this.#l?.cancel(e), t ? t.then(e1).catch(e1) : Promise.resolve()
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
              (e) => !1 !== e3(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === tl ||
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
              !e4(this.state.dataUpdatedAt, e)
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
                  let e = tc(this.options, t),
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
              (tS(e) && e.silent) || this.#d({ type: 'error', error: e }),
                tS(e) ||
                  (this.#o.config.onError?.(e, this),
                  this.#o.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#l = tO({
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
                    ...tC(t.data, this.options),
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
                  if (tS(r) && r.revert && this.#a)
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
              tg.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#o.notify({ query: this, type: 'updated', action: e });
              });
          }
        };
      function tC(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: t_(t.networkMode) ? 'fetching' : 'paused',
          ...(void 0 === e && { error: null, status: 'pending' }),
        };
      }
      var tN = class extends tm {
        constructor(e, t) {
          super(),
            (this.options = t),
            (this.#u = e),
            (this.#f = null),
            (this.#p = tb()),
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
        #y = void 0;
        #g = void 0;
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
        #x = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#m.addObserver(this),
            tk(this.#m, this.options) ? this.#C() : this.updateResult(),
            this.#N());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return tA(this.#m, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return tA(this.#m, this.options, this.options.refetchOnWindowFocus);
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
              'boolean' != typeof e3(this.options.enabled, this.#m))
          )
            throw Error(
              'Expected enabled to be a boolean or a callback that returns a boolean'
            );
          this.#T(),
            this.#m.setOptions(this.options),
            r._defaulted &&
              !tr(this.options, r) &&
              this.#u
                .getQueryCache()
                .notify({
                  type: 'observerOptionsUpdated',
                  query: this.#m,
                  observer: this,
                });
          let i = this.hasListeners();
          i && tT(this.#m, n, this.options, r) && this.#C(),
            this.updateResult(t),
            i &&
              (this.#m !== n ||
                e3(this.options.enabled, this.#m) !== e3(r.enabled, this.#m) ||
                e5(this.options.staleTime, this.#m) !==
                  e5(r.staleTime, this.#m)) &&
              this.#P();
          let s = this.#I();
          i &&
            (this.#m !== n ||
              e3(this.options.enabled, this.#m) !== e3(r.enabled, this.#m) ||
              s !== this.#R) &&
            this.#D(s);
        }
        getOptimisticResult(e) {
          var t, r;
          let n = this.#u.getQueryCache().build(this.#u, e),
            i = this.createResult(n, e);
          return (
            (t = this),
            (r = i),
            tr(t.getCurrentResult(), r) ||
              ((this.#g = i),
              (this.#b = this.options),
              (this.#v = this.#m.state)),
            i
          );
        }
        getCurrentResult() {
          return this.#g;
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
          this.#x.add(e);
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
          return this.#C({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#g)
          );
        }
        #C(e) {
          this.#T();
          let t = this.#m.fetch(this.options, e);
          return e?.throwOnError || (t = t.catch(e1)), t;
        }
        #P() {
          this.#k();
          let e = e5(this.options.staleTime, this.#m);
          if (e0 || this.#g.isStale || !e2(e)) return;
          let t = e4(this.#g.dataUpdatedAt, e);
          this.#S = setTimeout(() => {
            this.#g.isStale || this.updateResult();
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
            !e0 &&
              !1 !== e3(this.options.enabled, this.#m) &&
              e2(this.#R) &&
              0 !== this.#R &&
              (this.#O = setInterval(() => {
                (this.options.refetchIntervalInBackground || ty.isFocused()) &&
                  this.#C();
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
            s = this.#g,
            a = this.#v,
            o = this.#b,
            u = e !== n ? e.state : this.#y,
            { state: l } = e,
            c = { ...l },
            h = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              s = !r && tk(e, t),
              a = r && tT(e, n, t, i);
            (s || a) && (c = { ...c, ...tC(l.data, e.options) }),
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
                  (r = ta(s?.data, r, t)),
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
              ((p = 'success'), (r = ta(s?.data, e, t)), (h = !0));
          }
          this.#f &&
            ((d = this.#f), (r = this.#_), (f = Date.now()), (p = 'error'));
          let m = 'fetching' === c.fetchStatus,
            y = 'pending' === p,
            g = 'error' === p,
            v = y && m,
            b = void 0 !== r,
            w = {
              status: p,
              fetchStatus: c.fetchStatus,
              isPending: y,
              isSuccess: 'success' === p,
              isError: g,
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
              isRefetching: m && !y,
              isLoadingError: g && !b,
              isPaused: 'paused' === c.fetchStatus,
              isPlaceholderData: h,
              isRefetchError: g && b,
              isStale: tP(e, t),
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
                t((this.#p = w.promise = tb()));
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
          let t = this.#g,
            r = this.createResult(this.#m, this.options);
          if (
            ((this.#v = this.#m.state),
            (this.#b = this.options),
            void 0 !== this.#v.data && (this.#E = this.#m),
            tr(r, t))
          )
            return;
          this.#g = r;
          let n = {};
          e?.listeners !== !1 &&
            (() => {
              if (!t) return !0;
              let { notifyOnChangeProps: e } = this.options,
                r = 'function' == typeof e ? e() : e;
              if ('all' === r || (!r && !this.#x.size)) return !0;
              let n = new Set(r ?? this.#x);
              return (
                this.options.throwOnError && n.add('error'),
                Object.keys(this.#g).some(
                  (e) => this.#g[e] !== t[e] && n.has(e)
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
            (this.#y = e.state),
            this.hasListeners() &&
              (t?.removeObserver(this), e.addObserver(this));
        }
        onQueryUpdate() {
          this.updateResult(), this.hasListeners() && this.#N();
        }
        #M(e) {
          tg.batch(() => {
            e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#g);
              }),
              this.#u
                .getQueryCache()
                .notify({ query: this.#m, type: 'observerResultsUpdated' });
          });
        }
      };
      function tk(e, t) {
        return (
          (!1 !== e3(t.enabled, e) &&
            void 0 === e.state.data &&
            ('error' !== e.state.status || !1 !== t.retryOnMount)) ||
          (void 0 !== e.state.data && tA(e, t, t.refetchOnMount))
        );
      }
      function tA(e, t, r) {
        if (!1 !== e3(t.enabled, e)) {
          let n = 'function' == typeof r ? r(e) : r;
          return 'always' === n || (!1 !== n && tP(e, t));
        }
        return !1;
      }
      function tT(e, t, r, n) {
        return (
          (e !== t || !1 === e3(n.enabled, e)) &&
          (!r.suspense || 'error' !== e.state.status) &&
          tP(e, r)
        );
      }
      function tP(e, t) {
        return !1 !== e3(t.enabled, e) && e.isStaleByTime(e5(t.staleTime, e));
      }
      var tI = eB.createContext(
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
        tD = () => eB.useContext(tI);
      function tM(e, t) {
        return 'function' == typeof e ? e(...t) : !!e;
      }
      function tj() {}
      var tU = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        tq = (e) => {
          eB.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        tF = ({
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
          ((i && void 0 === e.data) || tM(r, [e.error, n])),
        tL = eB.createContext(!1),
        tB = () => eB.useContext(tL);
      tL.Provider;
      var tQ = (e, t) => void 0 === t.state.data,
        tZ = (e) => {
          let t = e.staleTime;
          e.suspense &&
            ((e.staleTime =
              'function' == typeof t
                ? (...e) => Math.max(t(...e), 1e3)
                : Math.max(t ?? 1e3, 1e3)),
            'number' == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        tz = (e, t) => e.isLoading && e.isFetching && !t,
        tW = (e, t) => e?.suspense && t.isPending,
        t$ = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          });
      function tH(e, t, r) {
        let n = eZ(r),
          i = tB(),
          s = tD(),
          a = n.defaultQueryOptions(e);
        n.getDefaultOptions().queries?._experimental_beforeQuery?.(a),
          (a._optimisticResults = i ? 'isRestoring' : 'optimistic'),
          tZ(a),
          tU(a, s),
          tq(s);
        let o = !n.getQueryCache().get(a.queryHash),
          [u] = eB.useState(() => new t(n, a)),
          l = u.getOptimisticResult(a),
          c = !i && !1 !== e.subscribed;
        if (
          (eB.useSyncExternalStore(
            eB.useCallback(
              (e) => {
                let t = c ? u.subscribe(tg.batchCalls(e)) : tj;
                return u.updateResult(), t;
              },
              [u, c]
            ),
            () => u.getCurrentResult(),
            () => u.getCurrentResult()
          ),
          eB.useEffect(() => {
            u.setOptions(a, { listeners: !1 });
          }, [a, u]),
          tW(a, l))
        )
          throw t$(a, u, s);
        if (
          tF({
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
          a.experimental_prefetchInRender && !e0 && tz(l, i))
        ) {
          let e = o ? t$(a, u, s) : n.getQueryCache().get(a.queryHash)?.promise;
          e?.catch(tj).finally(() => {
            u.updateResult();
          });
        }
        return a.notifyOnChangeProps ? l : u.trackResult(l);
      }
      var tK = class extends tR {
        #j;
        #U;
        #l;
        constructor(e) {
          super(),
            (this.mutationId = e.mutationId),
            (this.#U = e.mutationCache),
            (this.#j = []),
            (this.state = e.state || tV()),
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
            this.#U.notify({
              type: 'observerAdded',
              mutation: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          (this.#j = this.#j.filter((t) => t !== e)),
            this.scheduleGc(),
            this.#U.notify({
              type: 'observerRemoved',
              mutation: this,
              observer: e,
            });
        }
        optionalRemove() {
          this.#j.length ||
            ('pending' === this.state.status
              ? this.scheduleGc()
              : this.#U.remove(this));
        }
        continue() {
          return this.#l?.continue() ?? this.execute(this.state.variables);
        }
        async execute(e) {
          this.#l = tO({
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
            canRun: () => this.#U.canRun(this),
          });
          let t = 'pending' === this.state.status,
            r = !this.#l.canStart();
          try {
            if (!t) {
              this.#d({ type: 'pending', variables: e, isPaused: r }),
                await this.#U.config.onMutate?.(e, this);
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
              await this.#U.config.onSuccess?.(n, e, this.state.context, this),
              await this.options.onSuccess?.(n, e, this.state.context),
              await this.#U.config.onSettled?.(
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
                (await this.#U.config.onError?.(t, e, this.state.context, this),
                await this.options.onError?.(t, e, this.state.context),
                await this.#U.config.onSettled?.(
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
            this.#U.runNext(this);
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
            tg.batch(() => {
              this.#j.forEach((t) => {
                t.onMutationUpdate(e);
              }),
                this.#U.notify({ mutation: this, type: 'updated', action: e });
            });
        }
      };
      function tV() {
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
      var tG = class extends tm {
        #u;
        #g = void 0;
        #q;
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
            tr(this.options, t) ||
              this.#u
                .getMutationCache()
                .notify({
                  type: 'observerOptionsUpdated',
                  mutation: this.#q,
                  observer: this,
                }),
            t?.mutationKey &&
            this.options.mutationKey &&
            e7(t.mutationKey) !== e7(this.options.mutationKey)
              ? this.reset()
              : this.#q?.state.status === 'pending' &&
                this.#q.setOptions(this.options);
        }
        onUnsubscribe() {
          this.hasListeners() || this.#q?.removeObserver(this);
        }
        onMutationUpdate(e) {
          this.#L(), this.#M(e);
        }
        getCurrentResult() {
          return this.#g;
        }
        reset() {
          this.#q?.removeObserver(this),
            (this.#q = void 0),
            this.#L(),
            this.#M();
        }
        mutate(e, t) {
          return (
            (this.#F = t),
            this.#q?.removeObserver(this),
            (this.#q = this.#u.getMutationCache().build(this.#u, this.options)),
            this.#q.addObserver(this),
            this.#q.execute(e)
          );
        }
        #L() {
          let e = this.#q?.state ?? tV();
          this.#g = {
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
          tg.batch(() => {
            if (this.#F && this.hasListeners()) {
              let t = this.#g.variables,
                r = this.#g.context;
              e?.type === 'success'
                ? (this.#F.onSuccess?.(e.data, t, r),
                  this.#F.onSettled?.(e.data, null, t, r))
                : e?.type === 'error' &&
                  (this.#F.onError?.(e.error, t, r),
                  this.#F.onSettled?.(void 0, e.error, t, r));
            }
            this.listeners.forEach((e) => {
              e(this.#g);
            });
          });
        }
      };
      function tJ(e) {
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
                  c = tc(t.options, t.fetchOptions),
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
                      u = i ? tu : to;
                    return {
                      pages: u(e.pages, a, o),
                      pageParams: u(e.pageParams, n, o),
                    };
                  };
                if (i && s.length) {
                  let e = 'backward' === i,
                    t = { pages: s, pageParams: a },
                    r = (e ? tX : tY)(n, t);
                  o = await h(t, r, e);
                } else {
                  let t = e ?? s.length;
                  do {
                    let e = 0 === u ? (a[0] ?? n.initialPageParam) : tY(n, o);
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
      function tY(e, { pages: t, pageParams: r }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
      }
      function tX(e, { pages: t, pageParams: r }) {
        return t.length > 0
          ? e.getPreviousPageParam?.(t[0], t, r[0], r)
          : void 0;
      }
      var t0 = class extends tN {
        constructor(e, t) {
          super(e, t);
        }
        bindMethods() {
          super.bindMethods(),
            (this.fetchNextPage = this.fetchNextPage.bind(this)),
            (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
        }
        setOptions(e, t) {
          super.setOptions({ ...e, behavior: tJ() }, t);
        }
        getOptimisticResult(e) {
          return (e.behavior = tJ()), super.getOptimisticResult(e);
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
            hasNextPage: !!(r = i.data) && null != tY(t, r),
            hasPreviousPage:
              !!(n = i.data) && !!t.getPreviousPageParam && null != tX(t, n),
            isFetchNextPageError: h,
            isFetchingNextPage: d,
            isFetchPreviousPageError: f,
            isFetchingPreviousPage: p,
            isRefetchError: l && !h && !f,
            isRefetching: o && !d && !p,
          };
        }
      };
      function t1(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var t2 = class extends tm {
        #u;
        #B;
        #Q;
        #Z;
        #j;
        #z;
        #W;
        #$;
        #H = [];
        constructor(e, t, r) {
          super(),
            (this.#u = e),
            (this.#Z = r),
            (this.#Q = []),
            (this.#j = []),
            (this.#B = []),
            this.setQueries(t);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            this.#j.forEach((e) => {
              e.subscribe((t) => {
                this.#K(e, t);
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
          (this.#Q = e),
            (this.#Z = t),
            tg.batch(() => {
              let e = this.#j,
                t = this.#V(this.#Q);
              (this.#H = t),
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, r)
                );
              let n = t.map((e) => e.observer),
                i = n.map((e) => e.getCurrentResult()),
                s = n.some((t, r) => t !== e[r]);
              if (e.length !== n.length || s)
                (this.#j = n),
                  (this.#B = i),
                  this.hasListeners() &&
                    (t1(e, n).forEach((e) => {
                      e.destroy();
                    }),
                    t1(n, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#K(e, t);
                      });
                    }),
                    this.#M());
            });
        }
        getCurrentResult() {
          return this.#B;
        }
        getQueries() {
          return this.#j.map((e) => e.getCurrentQuery());
        }
        getObservers() {
          return this.#j;
        }
        getOptimisticResult(e, t) {
          let r = this.#V(e),
            n = r.map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions)
            );
          return [n, (e) => this.#G(e ?? n, t), () => this.#J(n, r)];
        }
        #J(e, t) {
          return t.map((r, n) => {
            let i = e[n];
            return r.defaultedQueryOptions.notifyOnChangeProps
              ? i
              : r.observer.trackResult(i, (e) => {
                  t.forEach((t) => {
                    t.observer.trackProp(e);
                  });
                });
          });
        }
        #G(e, t) {
          return t
            ? ((this.#z && this.#B === this.#$ && t === this.#W) ||
                ((this.#W = t),
                (this.#$ = this.#B),
                (this.#z = tt(this.#z, t(e)))),
              this.#z)
            : e;
        }
        #V(e) {
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
                    observer: new tN(this.#u, n),
                  });
            }),
            r
          );
        }
        #K(e, t) {
          let r = this.#j.indexOf(e);
          -1 !== r &&
            ((this.#B = (function (e, t, r) {
              let n = e.slice(0);
              return (n[t] = r), n;
            })(this.#B, r, t)),
            this.#M());
        }
        #M() {
          if (this.hasListeners()) {
            let e = this.#z,
              t = this.#J(this.#B, this.#H);
            e !== this.#G(t, this.#Z?.combine) &&
              tg.batch(() => {
                this.listeners.forEach((e) => {
                  e(this.#B);
                });
              });
          }
        }
      };
      function t4({ queries: e, ...t }, r) {
        let n = eZ(r),
          i = tB(),
          s = tD(),
          a = eB.useMemo(
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
          tZ(e), tU(e, s);
        }),
          tq(s);
        let [o] = eB.useState(() => new t2(n, a, t)),
          [u, l, c] = o.getOptimisticResult(a, t.combine),
          h = !i && !1 !== t.subscribed;
        eB.useSyncExternalStore(
          eB.useCallback(
            (e) => (h ? o.subscribe(tg.batchCalls(e)) : tj),
            [o, h]
          ),
          () => o.getCurrentResult(),
          () => o.getCurrentResult()
        ),
          eB.useEffect(() => {
            o.setQueries(a, t, { listeners: !1 });
          }, [a, t, o]);
        let d = u.some((e, t) => tW(a[t], e))
          ? u.flatMap((e, t) => {
              let r = a[t];
              if (r) {
                let t = new tN(n, r);
                if (tW(r, e)) return t$(r, t, s);
                tz(e, i) && t$(r, t, s);
              }
              return [];
            })
          : [];
        if (d.length > 0) throw Promise.all(d);
        let f = u.find((e, t) => {
          let r = a[t];
          return (
            r &&
            tF({
              result: e,
              errorResetBoundary: s,
              throwOnError: r.throwOnError,
              query: n.getQueryCache().get(r.queryHash),
              suspense: r.suspense,
            })
          );
        });
        if (f?.error) throw f.error;
        return l(c());
      }
      function t5(e, t, r) {
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
      function t3(e) {
        return { path: e.path.join('.') };
      }
      function t6(e) {
        let t = t3(e);
        return eB.useMemo(() => t, [t]);
      }
      async function t9(e, t, r) {
        let n = t.getQueryCache().build(t, { queryKey: r });
        n.setState({ data: [], status: 'success' });
        let i = [];
        for await (let t of e) i.push(t), n.setState({ data: [...i] });
        return i;
      }
      let t8 = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
      function t7(e) {
        let t = e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
          r = e?.context ?? eX;
        function n() {
          let e = eB.useContext(r);
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
        let s = { data: void 0, error: null, status: 'idle' },
          a = { data: void 0, error: null, status: 'connecting' };
        return {
          Provider: (e) => {
            let { abortOnUnmount: t = !1, queryClient: n, ssrContext: i } = e,
              [s, a] = eB.useState(e.ssrState ?? !1),
              o = e.client instanceof ey ? e.client : e.client[eg],
              u = eB.useMemo(
                () =>
                  (function (e) {
                    let { client: t, queryClient: r } = e,
                      n = t instanceof ey ? t : t[eg];
                    return {
                      infiniteQueryOptions: (e, t, r) => {
                        let i = t[1]?.input === tl,
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
                              ...t5(t, i, {
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
                            queryFn: i ? tl : s,
                            initialPageParam: r?.initialCursor ?? null,
                          },
                          { trpc: t3({ path: e }) }
                        );
                      },
                      queryOptions: (e, t, i) => {
                        let s = t[1]?.input === tl,
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
                              a = await n.query(...t5(t, s));
                            return P(a) ? t9(a, r, t) : a;
                          };
                        return Object.assign(
                          {
                            ...i,
                            initialData: i?.initialData,
                            queryKey: t,
                            queryFn: s ? tl : a,
                          },
                          { trpc: t3({ path: e }) }
                        );
                      },
                      fetchQuery: (e, t) =>
                        r.fetchQuery({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...t5(e, t)),
                        }),
                      fetchInfiniteQuery: (e, t) =>
                        r.fetchInfiniteQuery({
                          ...t,
                          queryKey: e,
                          queryFn: ({ pageParam: r, direction: i }) =>
                            n.query(
                              ...t5(e, t, { pageParam: r, direction: i })
                            ),
                          initialPageParam: t?.initialCursor ?? null,
                        }),
                      prefetchQuery: (e, t) =>
                        r.prefetchQuery({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...t5(e, t)),
                        }),
                      prefetchInfiniteQuery: (e, t) =>
                        r.prefetchInfiniteQuery({
                          ...t,
                          queryKey: e,
                          queryFn: ({ pageParam: r, direction: i }) =>
                            n.query(
                              ...t5(e, t, { pageParam: r, direction: i })
                            ),
                          initialPageParam: t?.initialCursor ?? null,
                        }),
                      ensureQueryData: (e, t) =>
                        r.ensureQueryData({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...t5(e, t)),
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
                                  n.mutation(...t5([s, { input: t }], e)),
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
              l = eB.useMemo(
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
              eB.useEffect(() => {
                a((e) => !!e && 'mounted');
              }, []),
              eB.createElement(r.Provider, { value: l }, e.children)
            );
          },
          createClient: e_,
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
              h = th(t, r, 'query'),
              d = l.getQueryDefaults(h),
              f = r === tl;
            'undefined' != typeof window ||
              'prepass' !== u ||
              s?.trpc?.ssr === !1 ||
              (s?.enabled ?? d?.enabled) === !1 ||
              f ||
              l.getQueryCache().find({ queryKey: h }) ||
              c(h, s);
            let p = i(h, { ...d, ...s }),
              m = s?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? a,
              y = tH(
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
                          r = await o.query(...t5(h, t));
                        return P(r) ? t9(r, l, h) : r;
                      },
                },
                tN,
                l
              );
            return (y.trpc = t6({ path: t })), y;
          },
          usePrefetchQuery: function (t, r, i) {
            let s = n(),
              a = th(t, r, 'query'),
              o = r === tl,
              u =
                i?.trpc?.abortOnUnmount ??
                e?.abortOnUnmount ??
                s.abortOnUnmount;
            !(function (e, t) {
              let r = eZ(void 0);
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
                    return s.client.query(...t5(a, t));
                  },
            });
          },
          useSuspenseQuery: function (t, r, i) {
            var s, a;
            let o = n(),
              u = th(t, r, 'query'),
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
                    return o.client.query(...t5(u, t));
                  },
                }),
                (a = o.queryClient),
                tH(
                  {
                    ...s,
                    enabled: !0,
                    suspense: !0,
                    throwOnError: tQ,
                    placeholderData: void 0,
                  },
                  tN,
                  a
                ));
            return (c.trpc = t6({ path: t })), [c.data, c];
          },
          useQueries: (e, t) => {
            let {
                ssrState: r,
                queryClient: i,
                prefetchQuery: s,
                client: a,
              } = n(),
              o = e(tp(a));
            if ('undefined' == typeof window && 'prepass' === r)
              for (let e of o)
                e.trpc?.ssr === !1 ||
                  i.getQueryCache().find({ queryKey: e.queryKey }) ||
                  s(e.queryKey, e);
            return t4(
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
              s = t4(
                {
                  ...(t = {
                    queries: e(tp(i)).map((e) => ({
                      ...e,
                      queryFn: e.queryFn,
                      queryKey: e.queryKey,
                    })),
                  }),
                  queries: t.queries.map((e) => ({
                    ...e,
                    suspense: !0,
                    throwOnError: tQ,
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
              a = td(e),
              o = s.defaultMutationOptions(s.getMutationDefaults(a)),
              u = (function (e, t) {
                let r = eZ(t),
                  [n] = eB.useState(() => new tG(r, e));
                eB.useEffect(() => {
                  n.setOptions(e);
                }, [n, e]);
                let i = eB.useSyncExternalStore(
                    eB.useCallback((e) => n.subscribe(tg.batchCalls(e)), [n]),
                    () => n.getCurrentResult(),
                    () => n.getCurrentResult()
                  ),
                  s = eB.useCallback(
                    (e, t) => {
                      n.mutate(e, t).catch(tj);
                    },
                    [n]
                  );
                if (i.error && tM(n.options.throwOnError, [i.error]))
                  throw i.error;
                return { ...i, mutate: s, mutateAsync: i.mutate };
              })(
                {
                  ...r,
                  mutationKey: a,
                  mutationFn: (t) => i.mutation(...t5([e, { input: t }], r)),
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
            return (u.trpc = t6({ path: e })), u;
          },
          useSubscription: function (e, t, r) {
            let i = r?.enabled ?? t !== tl,
              o = e7(th(e, t, 'any')),
              { client: u } = n(),
              l = eB.useRef(r);
            eB.useEffect(() => {
              l.current = r;
            });
            let [c] = eB.useState(new Set([])),
              h = eB.useCallback(
                (e) => {
                  c.add(e);
                },
                [c]
              ),
              d = eB.useRef(null),
              f = eB.useCallback(
                (e) => {
                  let t = m.current,
                    r = (m.current = e(t)),
                    n = !1;
                  for (let e of c)
                    if (t[e] !== r[e]) {
                      n = !0;
                      break;
                    }
                  n && g(t8(r, h));
                },
                [h, c]
              ),
              p = eB.useCallback(() => {
                if ((d.current?.unsubscribe(), !i)) {
                  f(() => ({ ...s, reset: p }));
                  return;
                }
                f(() => ({ ...a, reset: p })),
                  (d.current = u.subscription(e.join('.'), t ?? void 0, {
                    onStarted: () => {
                      l.current.onStarted?.(),
                        f((e) => ({ ...e, status: 'pending', error: null }));
                    },
                    onData: (e) => {
                      l.current.onData?.(e),
                        f((t) => ({
                          ...t,
                          status: 'pending',
                          data: e,
                          error: null,
                        }));
                    },
                    onError: (e) => {
                      l.current.onError?.(e),
                        f((t) => ({ ...t, status: 'error', error: e }));
                    },
                    onConnectionStateChange: (e) => {
                      f((t) => {
                        switch (e.state) {
                          case 'idle':
                            return {
                              ...t,
                              status: e.state,
                              error: null,
                              data: void 0,
                            };
                          case 'connecting':
                            return { ...t, error: e.error, status: e.state };
                          case 'pending':
                            return t;
                        }
                      });
                    },
                    onComplete: () => {
                      l.current.onComplete?.(),
                        f((e) => ({
                          ...e,
                          status: 'idle',
                          error: null,
                          data: void 0,
                        }));
                    },
                  }));
              }, [u, o, i, f]);
            eB.useEffect(
              () => (
                p(),
                () => {
                  d.current?.unsubscribe();
                }
              ),
              [p]
            );
            let m = eB.useRef(i ? { ...a, reset: p } : { ...s, reset: p }),
              [y, g] = eB.useState(t8(m.current, h));
            return y;
          },
          useInfiniteQuery: function (e, t, r) {
            let {
                client: s,
                ssrState: a,
                prefetchInfiniteQuery: o,
                queryClient: u,
                abortOnUnmount: l,
              } = n(),
              c = th(e, t, 'infinite'),
              h = u.getQueryDefaults(c),
              d = t === tl;
            'undefined' != typeof window ||
              'prepass' !== a ||
              r?.trpc?.ssr === !1 ||
              (r?.enabled ?? h?.enabled) === !1 ||
              d ||
              u.getQueryCache().find({ queryKey: c }) ||
              o(c, { ...h, ...r });
            let f = i(c, { ...h, ...r }),
              p = r?.trpc?.abortOnUnmount ?? l,
              m = tH(
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
                          ...t5(c, t, {
                            pageParam: e.pageParam ?? r.initialCursor,
                            direction: e.direction,
                          })
                        );
                      },
                },
                t0,
                u
              );
            return (m.trpc = t6({ path: e })), m;
          },
          usePrefetchInfiniteQuery: function (e, t, r) {
            let s = n(),
              a = th(e, t, 'infinite'),
              o = s.queryClient.getQueryDefaults(a),
              u = t === tl,
              l = i(a, { ...o, ...r }),
              c = r?.trpc?.abortOnUnmount ?? s.abortOnUnmount;
            !(function (e, t) {
              let r = eZ(void 0);
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
                      ...t5(a, t, {
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
              u = th(e, t, 'infinite'),
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
                      ...t5(u, t, {
                        pageParam: e.pageParam ?? r.initialCursor,
                        direction: e.direction,
                      })
                    );
                  },
                }),
                (a = o.queryClient),
                tH(
                  { ...s, enabled: !0, suspense: !0, throwOnError: tQ },
                  t0,
                  a
                ));
            return (d.trpc = t6({ path: e })), [d.data, d];
          },
        };
      }
      var re = class extends tm {
          constructor(e = {}) {
            super(), (this.config = e), (this.#Q = new Map());
          }
          #Q;
          build(e, t, r) {
            let n = t.queryKey,
              i = t.queryHash ?? e8(n, t),
              s = this.get(i);
            return (
              s ||
                ((s = new tx({
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
            this.#Q.has(e.queryHash) ||
              (this.#Q.set(e.queryHash, e),
              this.notify({ type: 'added', query: e }));
          }
          remove(e) {
            let t = this.#Q.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#Q.delete(e.queryHash),
              this.notify({ type: 'removed', query: e }));
          }
          clear() {
            tg.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#Q.get(e);
          }
          getAll() {
            return [...this.#Q.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => e6(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter((t) => e6(e, t)) : t;
          }
          notify(e) {
            tg.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            tg.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            tg.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        rt = class extends tm {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#Y = new Set()),
              (this.#X = new Map()),
              (this.#ee = 0);
          }
          #Y;
          #X;
          #ee;
          build(e, t, r) {
            let n = new tK({
              mutationCache: this,
              mutationId: ++this.#ee,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(n), n;
          }
          add(e) {
            this.#Y.add(e);
            let t = rr(e);
            if ('string' == typeof t) {
              let r = this.#X.get(t);
              r ? r.push(e) : this.#X.set(t, [e]);
            }
            this.notify({ type: 'added', mutation: e });
          }
          remove(e) {
            if (this.#Y.delete(e)) {
              let t = rr(e);
              if ('string' == typeof t) {
                let r = this.#X.get(t);
                if (r) {
                  if (r.length > 1) {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1);
                  } else r[0] === e && this.#X.delete(t);
                }
              }
            }
            this.notify({ type: 'removed', mutation: e });
          }
          canRun(e) {
            let t = rr(e);
            if ('string' != typeof t) return !0;
            {
              let r = this.#X.get(t),
                n = r?.find((e) => 'pending' === e.state.status);
              return !n || n === e;
            }
          }
          runNext(e) {
            let t = rr(e);
            if ('string' != typeof t) return Promise.resolve();
            {
              let r = this.#X.get(t)?.find((t) => t !== e && t.state.isPaused);
              return r?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            tg.batch(() => {
              this.#Y.forEach((e) => {
                this.notify({ type: 'removed', mutation: e });
              }),
                this.#Y.clear(),
                this.#X.clear();
            });
          }
          getAll() {
            return Array.from(this.#Y);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => e9(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => e9(e, t));
          }
          notify(e) {
            tg.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return tg.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(e1)))
            );
          }
        };
      function rr(e) {
        return e.options.scope?.id;
      }
      var rn = class {
        #et;
        #U;
        #c;
        #er;
        #en;
        #ei;
        #es;
        #ea;
        constructor(e = {}) {
          (this.#et = e.queryCache || new re()),
            (this.#U = e.mutationCache || new rt()),
            (this.#c = e.defaultOptions || {}),
            (this.#er = new Map()),
            (this.#en = new Map()),
            (this.#ei = 0);
        }
        mount() {
          this.#ei++,
            1 === this.#ei &&
              ((this.#es = ty.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#et.onFocus());
              })),
              (this.#ea = tv.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#et.onOnline());
              })));
        }
        unmount() {
          this.#ei--,
            0 === this.#ei &&
              (this.#es?.(),
              (this.#es = void 0),
              this.#ea?.(),
              (this.#ea = void 0));
        }
        isFetching(e) {
          return this.#et.findAll({ ...e, fetchStatus: 'fetching' }).length;
        }
        isMutating(e) {
          return this.#U.findAll({ ...e, status: 'pending' }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#et.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            r = this.#et.build(this, t),
            n = r.state.data;
          return void 0 === n
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                r.isStaleByTime(e5(t.staleTime, r)) &&
                this.prefetchQuery(t),
              Promise.resolve(n));
        }
        getQueriesData(e) {
          return this.#et
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, r) {
          let n = this.defaultQueryOptions({ queryKey: e }),
            i = this.#et.get(n.queryHash),
            s = i?.state.data,
            a = 'function' == typeof t ? t(s) : t;
          if (void 0 !== a)
            return this.#et.build(this, n).setData(a, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return tg.batch(() =>
            this.#et
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#et.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#et;
          tg.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let r = this.#et;
          return tg.batch(
            () => (
              r.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: 'active', ...e }, t)
            )
          );
        }
        cancelQueries(e, t = {}) {
          let r = { revert: !0, ...t };
          return Promise.all(
            tg.batch(() => this.#et.findAll(e).map((e) => e.cancel(r)))
          )
            .then(e1)
            .catch(e1);
        }
        invalidateQueries(e, t = {}) {
          return tg.batch(() =>
            (this.#et.findAll(e).forEach((e) => {
              e.invalidate();
            }),
            e?.refetchType === 'none')
              ? Promise.resolve()
              : this.refetchQueries(
                  { ...e, type: e?.refetchType ?? e?.type ?? 'active' },
                  t
                )
          );
        }
        refetchQueries(e, t = {}) {
          let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            tg.batch(() =>
              this.#et
                .findAll(e)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  let t = e.fetch(void 0, r);
                  return (
                    r.throwOnError || (t = t.catch(e1)),
                    'paused' === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(e1);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let r = this.#et.build(this, t);
          return r.isStaleByTime(e5(t.staleTime, r))
            ? r.fetch(t)
            : Promise.resolve(r.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(e1).catch(e1);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = tJ(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(e1).catch(e1);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = tJ(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return tv.isOnline()
            ? this.#U.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#et;
        }
        getMutationCache() {
          return this.#U;
        }
        getDefaultOptions() {
          return this.#c;
        }
        setDefaultOptions(e) {
          this.#c = e;
        }
        setQueryDefaults(e, t) {
          this.#er.set(e7(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#er.values()],
            r = {};
          return (
            t.forEach((t) => {
              te(e, t.queryKey) && Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        setMutationDefaults(e, t) {
          this.#en.set(e7(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#en.values()],
            r = {};
          return (
            t.forEach((t) => {
              te(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
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
            t.queryHash || (t.queryHash = e8(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = 'always' !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
            t.queryFn === tl && (t.enabled = !1),
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
          this.#et.clear(), this.#U.clear();
        }
      };
      let ri = (e) => e.queryClient ?? new rn(e.queryClientConfig);
      var rs = r(6952);
      let ra = [rs.Result.win],
        ro = [
          rs.Result.fiftymove,
          rs.Result.agreed,
          rs.Result.insufficient,
          rs.Result.repetition,
          rs.Result.stalemate,
          rs.Result.timevsinsufficient,
        ],
        ru = [
          rs.Result.checkmated,
          rs.Result.resigned,
          rs.Result.timeout,
          rs.Result.abandoned,
        ],
        rl = new Set();
      rl.add('sunday'),
        rl.add('monday'),
        rl.add('tuesday'),
        rl.add('wednesday'),
        rl.add('thursday'),
        rl.add('friday'),
        rl.add('saturday');
      let rc = new Set();
      rc.add('night'),
        rc.add('morning'),
        rc.add('afternoon'),
        rc.add('evening');
      let rh = new rs.PrismaClient(),
        rd = () => (void 0 !== rh ? rh : (rh = new rs.PrismaClient()));
      BigInt.prototype.toJSON = function () {
        let e = Number.parseInt(this.toString());
        return null != e ? e : this.toString();
      };
      let rf = (e) => {
          let {
              username: t = '',
              results: r = [],
              accuracy: n = !1,
              variant: i = rs.Variant.chess,
              timeClass: s = rs.TimeClass.blitz,
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
        rp = function () {
          let {
            username: e = '',
            results: t = [],
            timeClass: r = rs.TimeClass.blitz,
            variant: n = rs.Variant.chess,
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
        rm = (e) =>
          'AVG(CASE WHEN g."white_username" = \''.concat(
            e,
            '\' THEN g."white_accuracy" ELSE g."black_accuracy" END) as "average"'
          ),
        ry = (e) => {
          let {
              name: t = 'query',
              sqlFunction: r = 'count',
              column: n = '',
              accuracy: i = !1,
              username: s = '',
              variant: a = rs.Variant.chess,
              timeClass: o = rs.TimeClass.blitz,
              results: u = [],
              rated: l = !0,
              endPhrase: c = !1,
            } = e,
            h = rm(s),
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
            f = rf({
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
            y = ''
              .concat('SELECT '.concat(d), ' ')
              .concat('FROM chess."game" as g', ' ')
              .concat(f, ' ')
              .concat(p, ' ')
              .concat(m)
              .trim();
          return rs.Prisma.raw(y);
        },
        rg = (e) => {
          let {
              username: t,
              side: r,
              limit: n = 10,
              variant: i = 'chess',
              timeClass: s = 'blitz',
            } = e,
            a = ra.map((e) => "'".concat(e, "'")).join(','),
            o = ro.map((e) => "'".concat(e, "'")).join(','),
            u = ru.map((e) => "'".concat(e, "'")).join(','),
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
          return rs.Prisma.raw(l);
        },
        rv = (e) => {
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
          return rs.Prisma.raw(i);
        },
        rb = (e, t, r) => (n, i) => {
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
        rw = (e) => {
          let { username: t, variant: r = 'chess', timeClass: n = 'blitz' } = e,
            i = rb(t, 'short', 'short'),
            s = i(ra, 'short_short_win'),
            a = i(ro, 'short_short_draw'),
            o = i(ru, 'short_short_loss'),
            u = rb(t, 'short', 'long'),
            l = u(ra, 'short_long_win'),
            c = u(ro, 'short_long_draw'),
            h = u(ru, 'short_long_loss'),
            d = rb(t, 'short', ''),
            f = d(ra, 'short_none_win'),
            p = d(ro, 'short_none_draw'),
            m = d(ru, 'short_none_loss'),
            y = rb(t, 'long', 'short'),
            g = y(ra, 'long_short_win'),
            v = y(ro, 'long_short_draw'),
            b = y(ru, 'long_short_loss'),
            w = rb(t, 'long', 'long'),
            _ = w(ra, 'long_long_win'),
            E = w(ro, 'long_long_draw'),
            S = w(ru, 'long_long_loss'),
            O = rb(t, 'long', ''),
            R = O(ra, 'long_none_win'),
            x = O(ro, 'long_none_draw'),
            C = O(ru, 'long_none_loss'),
            N = rb(t, '', 'short'),
            k = N(ra, 'none_short_win'),
            A = N(ro, 'none_short_draw'),
            T = N(ru, 'none_short_loss'),
            P = rb(t, '', 'long'),
            I = P(ra, 'none_long_win'),
            D = P(ro, 'none_long_draw'),
            M = P(ru, 'none_long_loss'),
            j = rb(t, '', ''),
            U = j(ra, 'none_none_win'),
            q = j(ro, 'none_none_draw'),
            F = j(ru, 'none_none_loss'),
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
              .concat(g, ', ')
              .concat(v, ', ')
              .concat(b, ', ')
              .concat(_, ', ')
              .concat(E, ', ')
              .concat(S, ', ')
              .concat(R, ', ')
              .concat(x, ', ')
              .concat(C, ',\n')
              .concat(k, ', ')
              .concat(A, ', ')
              .concat(T, ', ')
              .concat(I, ', ')
              .concat(D, ', ')
              .concat(M, ', ')
              .concat(U, ', ')
              .concat(q, ', ')
              .concat(
                F,
                '\nFROM chess."game" as c\nWHERE (c."white_username" = \''
              )
              .concat(t, '\' OR c."black_username" = \'')
              .concat(t, '\')\nAND c."rated" = true\nAND c."rules" = \'')
              .concat(r, '\'\nAND c."time_class" = \'')
              .concat(n, "';");
          return rs.Prisma.raw(L);
        },
        r_ = (e) => {
          let { username: t, variant: r = 'chess', timeClass: n = 'blitz' } = e,
            i = ra.map((e) => "'".concat(e, "'")).join(','),
            s = ro.map((e) => "'".concat(e, "'")).join(','),
            a = ru.map((e) => "'".concat(e, "'")).join(','),
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
          return rs.Prisma.raw(o);
        },
        rE = (e) => {
          let {
              username: t = '',
              limit: r = 100,
              variant: n = rs.Variant.chess,
              timeClass: i = rs.TimeClass.blitz,
              rated: s = !0,
            } = e,
            a = ra.map((e) => "'".concat(e, "'")).join(','),
            o = ro.map((e) => "'".concat(e, "'")).join(','),
            u = ru.map((e) => "'".concat(e, "'")).join(','),
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
            p = rf({ username: t, variant: n, timeClass: i, rated: s }),
            m = ''
              .concat(f, ' ')
              .concat('FROM chess."game" as g', ' ')
              .concat(p, ' ')
              .concat('GROUP BY "opponent"', ' ')
              .concat('ORDER BY "games" DESC', ' ')
              .concat('LIMIT '.concat(r), ';');
          return rs.Prisma.raw(m);
        },
        rS = async (e) => {
          let {
            username: t,
            variant: r = rs.Variant.chess,
            timeClass: n = rs.TimeClass.blitz,
            rated: i = !0,
          } = e;
          try {
            let e = rd(),
              {
                avatar: s,
                title: a,
                name: o,
              } = await e.player.findFirstOrThrow({ where: { username: t } }),
              u = { username: t, timeClass: n, variant: r, rated: i },
              l = ry({
                ...u,
                name: 'averageAccuracyQuery',
                sqlFunction: 'avg',
                accuracy: !0,
              }),
              c = ry({
                ...u,
                name: 'averageAccuracyQueryByWinResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: ra,
              }),
              h = ry({
                ...u,
                name: 'averageAccuracyQueryByDrawResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: ro,
              }),
              d = ry({
                ...u,
                name: 'averageAccuracyQueryByLossResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: ru,
              }),
              f = ry({
                ...u,
                name: 'averageAccuracyQueryByYears',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'year',
              }),
              p = ry({
                ...u,
                name: 'averageAccuracyQueryByTimeOfDay',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'timeOfDay',
              }),
              m = ry({
                ...u,
                name: 'averageAccuracyQueryByDayOfWeek',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'dayOfWeek',
              }),
              y = rp(u),
              g = rp({ ...u, results: ra }),
              v = rp({ ...u, results: ro }),
              b = rp({ ...u, results: ru }),
              w = ry({ ...u, name: 'gamesQueryByYear', column: 'year' }),
              _ = ry({
                ...u,
                name: 'gamesQueryByTimeOfDay',
                column: 'timeOfDay',
              }),
              E = ry({
                ...u,
                name: 'gamesQueryByDayOfWeek',
                column: 'dayOfWeek',
              }),
              S = rg({
                variant: r,
                username: t,
                timeClass: n,
                limit: 10,
                side: 'white',
              }),
              O = rg({
                variant: r,
                username: t,
                timeClass: n,
                limit: 10,
                side: 'black',
              }),
              R = rv({ variant: r, username: t, timeClass: n }),
              x = rw({ variant: r, username: t, timeClass: n }),
              C = r_({ variant: r, username: t, timeClass: n }),
              N = rE({ ...u, limit: 100 }),
              k = ry({
                ...u,
                name: 'winResultsQuery',
                column: 'result',
                results: ra,
              }),
              A = ry({
                ...u,
                name: 'drawResultsQuery',
                column: 'result',
                results: ro,
              }),
              T = ry({
                ...u,
                name: 'lossResultsQuery',
                column: 'result',
                results: ru,
              }),
              P = ry({
                ...u,
                name: 'winResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: ra,
              }),
              I = ry({
                ...u,
                name: 'drawResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: ro,
              }),
              D = ry({
                ...u,
                name: 'lossResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: ru,
              }),
              M = ry({
                ...u,
                name: 'winResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: ra,
              }),
              j = ry({
                ...u,
                name: 'drawResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: ro,
              }),
              U = ry({
                ...u,
                name: 'lossResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: ru,
              }),
              q = ry({
                ...u,
                name: 'winResultsQueryByOpponentRating',
                column: 'opponent',
                results: ra,
              }),
              F = ry({
                ...u,
                name: 'drawResultsQueryByOpponentRating',
                column: 'opponent',
                results: ro,
              }),
              L = ry({
                ...u,
                name: 'lossResultsQueryByOpponentRating',
                column: 'opponent',
                results: ru,
              }),
              B = ry({
                ...u,
                endPhrase: !0,
                name: 'winResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: ra,
              }),
              Q = ry({
                ...u,
                endPhrase: !0,
                name: 'drawResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: ro,
              }),
              Z = ry({
                ...u,
                endPhrase: !0,
                name: 'lossResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: ru,
              }),
              [
                [{ average: z = 0 }] = [{ average: 0 }],
                [{ average: W = 0 }] = [{ average: 0 }],
                [{ average: $ = 0 }] = [{ average: 0 }],
                [{ average: H = 0 }] = [{ average: 0 }],
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
                    long_short_loss: ey = 0,
                    long_long_win: eg = 0,
                    long_long_draw: ev = 0,
                    long_long_loss: eb = 0,
                    long_none_win: ew = 0,
                    long_none_draw: e_ = 0,
                    long_none_loss: eE = 0,
                    none_short_win: eS = 0,
                    none_short_draw: eO = 0,
                    none_short_loss: eR = 0,
                    none_long_win: ex = 0,
                    none_long_draw: eC = 0,
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
                eU = 0,
                eq = [],
                eF = [],
                eL = [],
                eB = [],
                eQ = [],
                eZ = [],
                ez = [],
                eW = [],
                e$ = [],
                eH = [],
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
                e.$queryRaw(x),
                e.$queryRaw(C),
                e.$queryRaw(N),
                e.game.count({ where: y }),
                e.game.count({ where: g }),
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
                e.$queryRaw(U),
                e.$queryRaw(q),
                e.$queryRaw(F),
                e.$queryRaw(L),
                e.$queryRaw(B),
                e.$queryRaw(Q),
                e.$queryRaw(Z),
              ]),
              e2 = {
                average: z,
                win: W,
                draw: $,
                loss: H,
                periods: K.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, period: r };
                }),
                timeOfDays: V.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, timeOfDay: [...rc][''.concat(r)] };
                }),
                daysOfWeek: G.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, dayOfWeek: [...rl][''.concat(r)] };
                }),
              },
              e4 = eq.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return { games: parseInt(t.toString(), 10), period: r };
              }),
              e5 = eF.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return {
                  games: parseInt(t.toString(), 10),
                  timeOfDay: [...rc][''.concat(r)],
                };
              }),
              e3 = eL.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return {
                  games: parseInt(t.toString(), 10),
                  dayOfWeek: [...rl][''.concat(r)],
                };
              }),
              e6 = ez.map((e) => {
                var t, r;
                let { count: n, column: i } = e,
                  s = [...rc][''.concat(Number.parseInt(i.toString()))],
                  { count: a = 0 } =
                    null !==
                      (t = eW.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== t
                      ? t
                      : { draw: 0 },
                  { count: o = 0 } =
                    null !==
                      (r = e$.find((e) => {
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
              e9 = eH.map((e) => {
                var t, r;
                let { count: n, column: i } = e,
                  s = [...rl][''.concat(Number.parseInt(i.toString()))],
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
              e8 = [
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
                win: eB.map((e) => {
                  let { column: t, count: r } = e;
                  return {
                    result: t.toString(),
                    count: parseInt(r.toString(), 10),
                  };
                }),
                draw: eQ.map((e) => {
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
                timeOfDays: e6,
                daysOfWeek: e9,
                opponents: e8,
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
                  loss: eU,
                  periods: e4,
                  timeOfDays: e5,
                  daysOfWeek: e3,
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
                        loss: parseInt(ey.toString(), 10),
                      },
                      long: {
                        win: parseInt(eg.toString(), 10),
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
                        win: parseInt(ex.toString(), 10),
                        draw: parseInt(eC.toString(), 10),
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
        rO = async (e) => {
          let { days: t, title: r, countryCode: n } = e,
            { count: i, overall: s } = await rx({
              days: t,
              title: r,
              countryCode: n,
            }),
            a = await rk({ days: t, title: r, countryCode: n }),
            o = await rN({ days: t, title: r, countryCode: n }),
            u = await rA({ days: t, title: r, countryCode: n });
          return (
            await rh.$disconnect(),
            {
              count: i,
              overall: s,
              distribution: o,
              countries: a,
              leaderboard: u,
            }
          );
        },
        rR = function (e) {
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
        rx = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                '-- Descriptive (Count - Average - Max) --\nSELECT COUNT(p."username") AS "count_total", -- Count - Total\nSUM(CASE WHEN p."title" = \'GM\' then 1 else 0 end) AS "count_gm", -- Count - GM\nSUM(CASE WHEN p."title" = \'IM\' then 1 else 0 end) AS "count_im", -- Count - IM\nSUM(CASE WHEN p."title" = \'FM\' then 1 else 0 end) AS "count_fm", -- Count - FM\nSUM(CASE WHEN p."title" = \'CM\' then 1 else 0 end) AS "count_cm", -- Count - CM\nSUM(CASE WHEN p."title" = \'NM\' then 1 else 0 end) AS "count_nm", -- Count - NM\nSUM(CASE WHEN p."title" = \'WGM\' then 1 else 0 end) AS "count_wgm", -- Count - WGM\nSUM(CASE WHEN p."title" = \'WIM\' then 1 else 0 end) AS "count_wim", -- Count - WIM\nSUM(CASE WHEN p."title" = \'WFM\' then 1 else 0 end) AS "count_wfm", -- Count - WFM\nSUM(CASE WHEN p."title" = \'WCM\' then 1 else 0 end) AS "count_wcm", -- Count - WCM\nSUM(CASE WHEN p."title" = \'WNM\' then 1 else 0 end) AS "count_wnm", -- Count - WNM\nCAST(ROUND(AVG(CASE WHEN p."rapid_rating_best" <> 0 THEN p."rapid_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_rapid_rating_best", -- Average\nCAST(ROUND(AVG(CASE WHEN p."blitz_rating_best" <> 0 THEN p."blitz_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_blitz_rating_best", -- Average\nCAST(ROUND(AVG(CASE WHEN p."bullet_rating_best" <> 0 THEN p."bullet_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_bullet_rating_best", -- Average\nMAX(p."rapid_rating_best") AS "max_rapid_rating_best", -- Max\nMAX(p."blitz_rating_best") AS "max_blitz_rating_best", -- Max\nMAX(p."bullet_rating_best") AS "max_bullet_rating_best" -- Max\nFROM chess."player" AS p\n'.concat(
                  rR({ days: t, title: r, countryCode: n }),
                  ';'
                ),
              i = rs.Prisma.raw(e),
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
                average_rapid_rating_best: y = 0,
                average_blitz_rating_best: g = 0,
                average_bullet_rating_best: v = 0,
                max_rapid_rating_best: b = 0,
                max_blitz_rating_best: w = 0,
                max_bullet_rating_best: _ = 0,
              } = (await rh.$queryRaw(i))[0];
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
                rapid: { average: y, max: b },
                blitz: { average: g, max: w },
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
        rC = async (e) => {
          let { days: t, title: r, countryCode: n, timeClass: i } = e;
          try {
            let e = 'SELECT COUNT(p."username") AS "total", (FLOOR((p."'
                .concat(
                  i,
                  '_rating_last" / 100)) * 100) AS "group" FROM chess."player" AS p '
                )
                .concat(
                  rR({ days: t, title: r, countryCode: n }, [
                    '(FLOOR((p."'.concat(
                      i,
                      '_rating_last" / 100)) * 100) <> 0'
                    ),
                  ]),
                  ' GROUP BY "group" ORDER BY "group";'
                ),
              s = rs.Prisma.raw(e);
            return rh.$queryRaw(s);
          } catch (e) {
            return [];
          }
        },
        rN = async (e) => {
          let { days: t, title: r, countryCode: n } = e,
            i = await rC({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'rapid',
            });
          return {
            rapid: i,
            blitz: await rC({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'blitz',
            }),
            bullet: await rC({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'bullet',
            }),
          };
        },
        rk = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                'SELECT p."country_code", p."country", COUNT(p."username") AS "count" FROM chess."player" AS p '.concat(
                  rR({ days: t, title: r, countryCode: n }),
                  ' GROUP BY p."country_code", p."country"\nORDER BY p."count" DESC;'
                ),
              i = rs.Prisma.raw(e);
            return rh.$queryRaw(i);
          } catch (e) {
            return [];
          }
        },
        rA = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                'SELECT p."title", p."country_code", p."country", p."username", p."name", p."bullet_rating_best", p."blitz_rating_best", p."rapid_rating_best" FROM chess."player" AS p '.concat(
                  rR({ days: t, title: r, countryCode: n }),
                  ' ORDER BY p."blitz_rating_best" DESC, p."bullet_rating_best" DESC, p."rapid_rating_best" DESC LIMIT 100 OFFSET 0 ;'
                ),
              i = rs.Prisma.raw(e);
            return rh.$queryRaw(i);
          } catch (e) {
            return [];
          }
        };
      function rT(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var rP = r(4328);
      let { toString: rI } = Object.prototype,
        { getPrototypeOf: rD } = Object,
        rM = ((e) => (t) => {
          let r = rI.call(t);
          return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        rj = (e) => ((e = e.toLowerCase()), (t) => rM(t) === e),
        rU = (e) => (t) => typeof t === e,
        { isArray: rq } = Array,
        rF = rU('undefined'),
        rL = rj('ArrayBuffer'),
        rB = rU('string'),
        rQ = rU('function'),
        rZ = rU('number'),
        rz = (e) => null !== e && 'object' == typeof e,
        rW = (e) => {
          if ('object' !== rM(e)) return !1;
          let t = rD(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        r$ = rj('Date'),
        rH = rj('File'),
        rK = rj('Blob'),
        rV = rj('FileList'),
        rG = rj('URLSearchParams'),
        [rJ, rY, rX, r0] = [
          'ReadableStream',
          'Request',
          'Response',
          'Headers',
        ].map(rj);
      function r1(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != e) {
          if (('object' != typeof e && (e = [e]), rq(e)))
            for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
          else {
            let i;
            let s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = s.length;
            for (n = 0; n < a; n++) (i = s[n]), t.call(null, e[i], i, e);
          }
        }
      }
      function r2(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e),
          i = n.length;
        for (; i-- > 0; ) if (t === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let r4 =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
                ? window
                : global,
        r5 = (e) => !rF(e) && e !== r4,
        r3 = (
          (e) => (t) =>
            e && t instanceof e
        )('undefined' != typeof Uint8Array && rD(Uint8Array)),
        r6 = rj('HTMLFormElement'),
        r9 = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        r8 = rj('RegExp'),
        r7 = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          r1(r, (r, i) => {
            let s;
            !1 !== (s = t(r, i, e)) && (n[i] = s || r);
          }),
            Object.defineProperties(e, n);
        },
        ne = rj('AsyncFunction'),
        nt =
          ((s = 'function' == typeof setImmediate),
          (a = rQ(r4.postMessage)),
          s
            ? setImmediate
            : a
              ? ((e, t) => (
                  r4.addEventListener(
                    'message',
                    ({ source: r, data: n }) => {
                      r === r4 && n === e && t.length && t.shift()();
                    },
                    !1
                  ),
                  (r) => {
                    t.push(r), r4.postMessage(e, '*');
                  }
                ))(`axios@${Math.random()}`, [])
              : (e) => setTimeout(e)),
        nr =
          'undefined' != typeof queueMicrotask
            ? queueMicrotask.bind(r4)
            : (void 0 !== rP && rP.nextTick) || nt,
        nn = {
          isArray: rq,
          isArrayBuffer: rL,
          isBuffer: function (e) {
            return (
              null !== e &&
              !rF(e) &&
              null !== e.constructor &&
              !rF(e.constructor) &&
              rQ(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (('function' == typeof FormData && e instanceof FormData) ||
                (rQ(e.append) &&
                  ('formdata' === (t = rM(e)) ||
                    ('object' === t &&
                      rQ(e.toString) &&
                      '[object FormData]' === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && rL(e.buffer);
          },
          isString: rB,
          isNumber: rZ,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: rz,
          isPlainObject: rW,
          isReadableStream: rJ,
          isRequest: rY,
          isResponse: rX,
          isHeaders: r0,
          isUndefined: rF,
          isDate: r$,
          isFile: rH,
          isBlob: rK,
          isRegExp: r8,
          isFunction: rQ,
          isStream: (e) => rz(e) && rQ(e.pipe),
          isURLSearchParams: rG,
          isTypedArray: r3,
          isFileList: rV,
          forEach: r1,
          merge: function e() {
            let { caseless: t } = (r5(this) && this) || {},
              r = {},
              n = (n, i) => {
                let s = (t && r2(r, i)) || i;
                rW(r[s]) && rW(n)
                  ? (r[s] = e(r[s], n))
                  : rW(n)
                    ? (r[s] = e({}, n))
                    : rq(n)
                      ? (r[s] = n.slice())
                      : (r[s] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && r1(arguments[e], n);
            return r;
          },
          extend: (e, t, r, { allOwnKeys: n } = {}) => (
            r1(
              t,
              (t, n) => {
                r && rQ(t) ? (e[n] = rT(t, r)) : (e[n] = t);
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
              e = !1 !== r && rD(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: rM,
          kindOfTest: rj,
          endsWith: (e, t, r) => {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: (e) => {
            if (!e) return null;
            if (rq(e)) return e;
            let t = e.length;
            if (!rZ(t)) return null;
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
          isHTMLForm: r6,
          hasOwnProperty: r9,
          hasOwnProp: r9,
          reduceDescriptors: r7,
          freezeMethods: (e) => {
            r7(e, (t, r) => {
              if (rQ(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(r))
                return !1;
              if (rQ(e[r])) {
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
              })(rq(e) ? e : String(e).split(t)),
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
            null != e && Number.isFinite((e *= 1)) ? e : t,
          findKey: r2,
          global: r4,
          isContextDefined: r5,
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              rQ(e.append) &&
              'FormData' === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            let t = Array(10),
              r = (e, n) => {
                if (rz(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!('toJSON' in e)) {
                    t[n] = e;
                    let i = rq(e) ? [] : {};
                    return (
                      r1(e, (e, t) => {
                        let s = r(e, n + 1);
                        rF(s) || (i[t] = s);
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
          isAsyncFn: ne,
          isThenable: (e) => e && (rz(e) || rQ(e)) && rQ(e.then) && rQ(e.catch),
          setImmediate: nt,
          asap: nr,
        };
      function ni(e, t, r, n, i) {
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
      nn.inherits(ni, Error, {
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
            config: nn.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let ns = ni.prototype,
        na = {};
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
        na[e] = { value: e };
      }),
        Object.defineProperties(ni, na),
        Object.defineProperty(ns, 'isAxiosError', { value: !0 }),
        (ni.from = (e, t, r, n, i, s) => {
          let a = Object.create(ns);
          return (
            nn.toFlatObject(
              e,
              a,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => 'isAxiosError' !== e
            ),
            ni.call(a, e.message, t, r, n, i),
            (a.cause = e),
            (a.name = e.name),
            s && Object.assign(a, s),
            a
          );
        });
      var no = r(4254).hp;
      function nu(e) {
        return nn.isPlainObject(e) || nn.isArray(e);
      }
      function nl(e) {
        return nn.endsWith(e, '[]') ? e.slice(0, -2) : e;
      }
      function nc(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = nl(e)), !r && t ? '[' + e + ']' : e;
              })
              .join(r ? '.' : '')
          : t;
      }
      let nh = nn.toFlatObject(nn, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        }),
        nd = function (e, t, r) {
          if (!nn.isObject(e)) throw TypeError('target must be an object');
          t = t || new FormData();
          let n = (r = nn.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !nn.isUndefined(t[e]);
              }
            )).metaTokens,
            i = r.visitor || l,
            s = r.dots,
            a = r.indexes,
            o =
              (r.Blob || ('undefined' != typeof Blob && Blob)) &&
              nn.isSpecCompliantForm(t);
          if (!nn.isFunction(i)) throw TypeError('visitor must be a function');
          function u(e) {
            if (null === e) return '';
            if (nn.isDate(e)) return e.toISOString();
            if (!o && nn.isBlob(e))
              throw new ni('Blob is not supported. Use a Buffer instead.');
            return nn.isArrayBuffer(e) || nn.isTypedArray(e)
              ? o && 'function' == typeof Blob
                ? new Blob([e])
                : no.from(e)
              : e;
          }
          function l(e, r, i) {
            let o = e;
            if (e && !i && 'object' == typeof e) {
              if (nn.endsWith(r, '{}'))
                (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
              else {
                var l;
                if (
                  (nn.isArray(e) && ((l = e), nn.isArray(l) && !l.some(nu))) ||
                  ((nn.isFileList(e) || nn.endsWith(r, '[]')) &&
                    (o = nn.toArray(e)))
                )
                  return (
                    (r = nl(r)),
                    o.forEach(function (e, n) {
                      nn.isUndefined(e) ||
                        null === e ||
                        t.append(
                          !0 === a ? nc([r], n, s) : null === a ? r : r + '[]',
                          u(e)
                        );
                    }),
                    !1
                  );
              }
            }
            return !!nu(e) || (t.append(nc(i, r, s), u(e)), !1);
          }
          let c = [],
            h = Object.assign(nh, {
              defaultVisitor: l,
              convertValue: u,
              isVisitable: nu,
            });
          if (!nn.isObject(e)) throw TypeError('data must be an object');
          return (
            !(function e(r, n) {
              if (!nn.isUndefined(r)) {
                if (-1 !== c.indexOf(r))
                  throw Error('Circular reference detected in ' + n.join('.'));
                c.push(r),
                  nn.forEach(r, function (r, s) {
                    !0 ===
                      (!(nn.isUndefined(r) || null === r) &&
                        i.call(t, r, nn.isString(s) ? s.trim() : s, n, h)) &&
                      e(r, n ? n.concat(s) : [s]);
                  }),
                  c.pop();
              }
            })(e),
            t
          );
        };
      function nf(e) {
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
      function np(e, t) {
        (this._pairs = []), e && nd(e, this, t);
      }
      let nm = np.prototype;
      function ny(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      function ng(e, t, r) {
        let n;
        if (!t) return e;
        let i = (r && r.encode) || ny;
        nn.isFunction(r) && (r = { serialize: r });
        let s = r && r.serialize;
        if (
          (n = s
            ? s(t, r)
            : nn.isURLSearchParams(t)
              ? t.toString()
              : new np(t, r).toString(i))
        ) {
          let t = e.indexOf('#');
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf('?') ? '?' : '&') + n);
        }
        return e;
      }
      (nm.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (nm.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, nf);
              }
            : nf;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + '=' + t(e[1]);
            }, '')
            .join('&');
        });
      class nv {
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
          nn.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      }
      let nb = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        nw = 'undefined' != typeof URLSearchParams ? URLSearchParams : np,
        n_ = 'undefined' != typeof FormData ? FormData : null,
        nE = 'undefined' != typeof Blob ? Blob : null,
        nS = 'undefined' != typeof window && 'undefined' != typeof document,
        nO = ('object' == typeof navigator && navigator) || void 0,
        nR =
          nS &&
          (!nO ||
            0 > ['ReactNative', 'NativeScript', 'NS'].indexOf(nO.product)),
        nx =
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          'function' == typeof self.importScripts,
        nC = (nS && window.location.href) || 'http://localhost',
        nN = {
          ...v,
          isBrowser: !0,
          classes: { URLSearchParams: nw, FormData: n_, Blob: nE },
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        },
        nk = function (e) {
          if (nn.isFormData(e) && nn.isFunction(e.entries)) {
            let t = {};
            return (
              nn.forEachEntry(e, (e, r) => {
                !(function e(t, r, n, i) {
                  let s = t[i++];
                  if ('__proto__' === s) return !0;
                  let a = Number.isFinite(+s),
                    o = i >= t.length;
                  return (
                    ((s = !s && nn.isArray(n) ? n.length : s), o)
                      ? nn.hasOwnProp(n, s)
                        ? (n[s] = [n[s], r])
                        : (n[s] = r)
                      : ((n[s] && nn.isObject(n[s])) || (n[s] = []),
                        e(t, r, n[s], i) &&
                          nn.isArray(n[s]) &&
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
                  nn
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
        nA = {
          transitional: nb,
          adapter: ['xhr', 'http', 'fetch'],
          transformRequest: [
            function (e, t) {
              let r;
              let n = t.getContentType() || '',
                i = n.indexOf('application/json') > -1,
                s = nn.isObject(e);
              if (
                (s && nn.isHTMLForm(e) && (e = new FormData(e)),
                nn.isFormData(e))
              )
                return i ? JSON.stringify(nk(e)) : e;
              if (
                nn.isArrayBuffer(e) ||
                nn.isBuffer(e) ||
                nn.isStream(e) ||
                nn.isFile(e) ||
                nn.isBlob(e) ||
                nn.isReadableStream(e)
              )
                return e;
              if (nn.isArrayBufferView(e)) return e.buffer;
              if (nn.isURLSearchParams(e))
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
                  nd(
                    a,
                    new nN.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return nN.isNode && nn.isBuffer(e)
                            ? (this.append(t, e.toString('base64')), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      o
                    )
                  )).toString();
                }
                if (
                  (r = nn.isFileList(e)) ||
                  n.indexOf('multipart/form-data') > -1
                ) {
                  let t = this.env && this.env.FormData;
                  return nd(
                    r ? { 'files[]': e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              return s || i
                ? (t.setContentType('application/json', !1),
                  (function (e, t, r) {
                    if (nn.isString(e))
                      try {
                        return (0, JSON.parse)(e), nn.trim(e);
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
              let t = this.transitional || nA.transitional,
                r = t && t.forcedJSONParsing,
                n = 'json' === this.responseType;
              if (nn.isResponse(e) || nn.isReadableStream(e)) return e;
              if (e && nn.isString(e) && ((r && !this.responseType) || n)) {
                let r = t && t.silentJSONParsing;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (!r && n) {
                    if ('SyntaxError' === e.name)
                      throw ni.from(
                        e,
                        ni.ERR_BAD_RESPONSE,
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
          env: { FormData: nN.classes.FormData, Blob: nN.classes.Blob },
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
      nn.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
        nA.headers[e] = {};
      });
      let nT = nn.toObjectSet([
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
        nP = (e) => {
          let t, r, n;
          let i = {};
          return (
            e &&
              e.split('\n').forEach(function (e) {
                (n = e.indexOf(':')),
                  (t = e.substring(0, n).trim().toLowerCase()),
                  (r = e.substring(n + 1).trim()),
                  t &&
                    (!i[t] || !nT[t]) &&
                    ('set-cookie' === t
                      ? i[t]
                        ? i[t].push(r)
                        : (i[t] = [r])
                      : (i[t] = i[t] ? i[t] + ', ' + r : r));
              }),
            i
          );
        },
        nI = Symbol('internals');
      function nD(e) {
        return e && String(e).trim().toLowerCase();
      }
      function nM(e) {
        return !1 === e || null == e
          ? e
          : nn.isArray(e)
            ? e.map(nM)
            : String(e);
      }
      let nj = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function nU(e, t, r, n, i) {
        if (nn.isFunction(n)) return n.call(this, t, r);
        if ((i && (t = r), nn.isString(t))) {
          if (nn.isString(n)) return -1 !== t.indexOf(n);
          if (nn.isRegExp(n)) return n.test(t);
        }
      }
      class nq {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function i(e, t, r) {
            let i = nD(t);
            if (!i) throw Error('header name must be a non-empty string');
            let s = nn.findKey(n, i);
            (s &&
              void 0 !== n[s] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[s])) ||
              (n[s || t] = nM(e));
          }
          let s = (e, t) => nn.forEach(e, (e, r) => i(e, r, t));
          if (nn.isPlainObject(e) || e instanceof this.constructor) s(e, t);
          else if (nn.isString(e) && (e = e.trim()) && !nj(e)) s(nP(e), t);
          else if (nn.isHeaders(e)) for (let [t, n] of e.entries()) i(n, t, r);
          else null != e && i(t, e, r);
          return this;
        }
        get(e, t) {
          if ((e = nD(e))) {
            let r = nn.findKey(this, e);
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
              if (nn.isFunction(t)) return t.call(this, e, r);
              if (nn.isRegExp(t)) return t.exec(e);
              throw TypeError('parser must be boolean|regexp|function');
            }
          }
        }
        has(e, t) {
          if ((e = nD(e))) {
            let r = nn.findKey(this, e);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!t || nU(this, this[r], r, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function i(e) {
            if ((e = nD(e))) {
              let i = nn.findKey(r, e);
              i && (!t || nU(r, r[i], i, t)) && (delete r[i], (n = !0));
            }
          }
          return nn.isArray(e) ? e.forEach(i) : i(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let i = t[r];
            (!e || nU(this, this[i], i, e, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            nn.forEach(this, (n, i) => {
              let s = nn.findKey(r, i);
              if (s) {
                (t[s] = nM(n)), delete t[i];
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
              a !== i && delete t[i], (t[a] = nM(n)), (r[a] = !0);
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
            nn.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (t[n] = e && nn.isArray(r) ? r.join(', ') : r);
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
          let t = (this[nI] = this[nI] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(e) {
            let n = nD(e);
            t[n] ||
              (!(function (e, t) {
                let r = nn.toCamelCase(' ' + t);
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
          return nn.isArray(e) ? e.forEach(n) : n(e), this;
        }
      }
      function nF(e, t) {
        let r = this || nA,
          n = t || r,
          i = nq.from(n.headers),
          s = n.data;
        return (
          nn.forEach(e, function (e) {
            s = e.call(r, s, i.normalize(), t ? t.status : void 0);
          }),
          i.normalize(),
          s
        );
      }
      function nL(e) {
        return !!(e && e.__CANCEL__);
      }
      function nB(e, t, r) {
        ni.call(this, null == e ? 'canceled' : e, ni.ERR_CANCELED, t, r),
          (this.name = 'CanceledError');
      }
      function nQ(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? e(r)
          : t(
              new ni(
                'Request failed with status code ' + r.status,
                [ni.ERR_BAD_REQUEST, ni.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r
              )
            );
      }
      nq.accessor([
        'Content-Type',
        'Content-Length',
        'Accept',
        'Accept-Encoding',
        'User-Agent',
        'Authorization',
      ]),
        nn.reduceDescriptors(nq.prototype, ({ value: e }, t) => {
          let r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[r] = e;
            },
          };
        }),
        nn.freezeMethods(nq),
        nn.inherits(nB, ni, { __CANCEL__: !0 });
      let nZ = function (e, t) {
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
        nz = function (e, t) {
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
        nW = (e, t, r = 3) => {
          let n = 0,
            i = nZ(50, 250);
          return nz((r) => {
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
        n$ = (e, t) => {
          let r = null != e;
          return [
            (n) => t[0]({ lengthComputable: r, total: e, loaded: n }),
            t[1],
          ];
        },
        nH =
          (e) =>
          (...t) =>
            nn.asap(() => e(...t)),
        nK = nN.hasStandardBrowserEnv
          ? ((e, t) => (r) => (
              (r = new URL(r, nN.origin)),
              e.protocol === r.protocol &&
                e.host === r.host &&
                (t || e.port === r.port)
            ))(
              new URL(nN.origin),
              nN.navigator && /(msie|trident)/i.test(nN.navigator.userAgent)
            )
          : () => !0,
        nV = nN.hasStandardBrowserEnv
          ? {
              write(e, t, r, n, i, s) {
                let a = [e + '=' + encodeURIComponent(t)];
                nn.isNumber(r) &&
                  a.push('expires=' + new Date(r).toGMTString()),
                  nn.isString(n) && a.push('path=' + n),
                  nn.isString(i) && a.push('domain=' + i),
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
      function nG(e, t, r) {
        let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return (e && n) || !1 == r
          ? t
            ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '')
            : e
          : t;
      }
      let nJ = (e) => (e instanceof nq ? { ...e } : e);
      function nY(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r, n) {
          return nn.isPlainObject(e) && nn.isPlainObject(t)
            ? nn.merge.call({ caseless: n }, e, t)
            : nn.isPlainObject(t)
              ? nn.merge({}, t)
              : nn.isArray(t)
                ? t.slice()
                : t;
        }
        function i(e, t, r, i) {
          return nn.isUndefined(t)
            ? nn.isUndefined(e)
              ? void 0
              : n(void 0, e, r, i)
            : n(e, t, r, i);
        }
        function s(e, t) {
          if (!nn.isUndefined(t)) return n(void 0, t);
        }
        function a(e, t) {
          return nn.isUndefined(t)
            ? nn.isUndefined(e)
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
          headers: (e, t, r) => i(nJ(e), nJ(t), r, !0),
        };
        return (
          nn.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let s = u[n] || i,
              a = s(e[n], t[n], n);
            (nn.isUndefined(a) && s !== o) || (r[n] = a);
          }),
          r
        );
      }
      let nX = (e) => {
          let t;
          let r = nY({}, e),
            {
              data: n,
              withXSRFToken: i,
              xsrfHeaderName: s,
              xsrfCookieName: a,
              headers: o,
              auth: u,
            } = r;
          if (
            ((r.headers = o = nq.from(o)),
            (r.url = ng(nG(r.baseURL, r.url), e.params, e.paramsSerializer)),
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
            nn.isFormData(n))
          ) {
            if (nN.hasStandardBrowserEnv || nN.hasStandardBrowserWebWorkerEnv)
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
            nN.hasStandardBrowserEnv &&
            (i && nn.isFunction(i) && (i = i(r)), i || (!1 !== i && nK(r.url)))
          ) {
            let e = s && a && nV.read(a);
            e && o.set(s, e);
          }
          return r;
        },
        n0 =
          'undefined' != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              let n, i, s, a, o;
              let u = nX(e),
                l = u.data,
                c = nq.from(u.headers).normalize(),
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
              function y() {
                if (!m) return;
                let n = nq.from(
                  'getAllResponseHeaders' in m && m.getAllResponseHeaders()
                );
                nQ(
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
                  ? (m.onloadend = y)
                  : (m.onreadystatechange = function () {
                      m &&
                        4 === m.readyState &&
                        (0 !== m.status ||
                          (m.responseURL &&
                            0 === m.responseURL.indexOf('file:'))) &&
                        setTimeout(y);
                    }),
                (m.onabort = function () {
                  m &&
                    (r(new ni('Request aborted', ni.ECONNABORTED, e, m)),
                    (m = null));
                }),
                (m.onerror = function () {
                  r(new ni('Network Error', ni.ERR_NETWORK, e, m)), (m = null);
                }),
                (m.ontimeout = function () {
                  let t = u.timeout
                      ? 'timeout of ' + u.timeout + 'ms exceeded'
                      : 'timeout exceeded',
                    n = u.transitional || nb;
                  u.timeoutErrorMessage && (t = u.timeoutErrorMessage),
                    r(
                      new ni(
                        t,
                        n.clarifyTimeoutError ? ni.ETIMEDOUT : ni.ECONNABORTED,
                        e,
                        m
                      )
                    ),
                    (m = null);
                }),
                void 0 === l && c.setContentType(null),
                'setRequestHeader' in m &&
                  nn.forEach(c.toJSON(), function (e, t) {
                    m.setRequestHeader(t, e);
                  }),
                nn.isUndefined(u.withCredentials) ||
                  (m.withCredentials = !!u.withCredentials),
                h && 'json' !== h && (m.responseType = u.responseType),
                f && (([s, o] = nW(f, !0)), m.addEventListener('progress', s)),
                d &&
                  m.upload &&
                  (([i, a] = nW(d)),
                  m.upload.addEventListener('progress', i),
                  m.upload.addEventListener('loadend', a)),
                (u.cancelToken || u.signal) &&
                  ((n = (t) => {
                    m &&
                      (r(!t || t.type ? new nB(null, e, m) : t),
                      m.abort(),
                      (m = null));
                  }),
                  u.cancelToken && u.cancelToken.subscribe(n),
                  u.signal &&
                    (u.signal.aborted
                      ? n()
                      : u.signal.addEventListener('abort', n)));
              let g = (function (e) {
                let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || '';
              })(u.url);
              if (g && -1 === nN.protocols.indexOf(g)) {
                r(
                  new ni(
                    'Unsupported protocol ' + g + ':',
                    ni.ERR_BAD_REQUEST,
                    e
                  )
                );
                return;
              }
              m.send(l || null);
            });
          },
        n1 = (e, t) => {
          let { length: r } = (e = e ? e.filter(Boolean) : []);
          if (t || r) {
            let r,
              n = new AbortController(),
              i = function (e) {
                if (!r) {
                  (r = !0), a();
                  let t = e instanceof Error ? e : this.reason;
                  n.abort(
                    t instanceof ni
                      ? t
                      : new nB(t instanceof Error ? t.message : t)
                  );
                }
              },
              s =
                t &&
                setTimeout(() => {
                  (s = null),
                    i(new ni(`timeout ${t} of ms exceeded`, ni.ETIMEDOUT));
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
            return (o.unsubscribe = () => nn.asap(a)), o;
          }
        },
        n2 = function* (e, t) {
          let r,
            n = e.byteLength;
          if (!t || n < t) {
            yield e;
            return;
          }
          let i = 0;
          for (; i < n; ) (r = i + t), yield e.slice(i, r), (i = r);
        },
        n4 = async function* (e, t) {
          for await (let r of n5(e)) yield* n2(r, t);
        },
        n5 = async function* (e) {
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
        n3 = (e, t, r, n) => {
          let i;
          let s = n4(e, t),
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
        n6 =
          'function' == typeof fetch &&
          'function' == typeof Request &&
          'function' == typeof Response,
        n9 = n6 && 'function' == typeof ReadableStream,
        n8 =
          n6 &&
          ('function' == typeof TextEncoder
            ? ((i = new TextEncoder()), (e) => i.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        n7 = (e, ...t) => {
          try {
            return !!e(...t);
          } catch (e) {
            return !1;
          }
        },
        ie =
          n9 &&
          n7(() => {
            let e = !1,
              t = new Request(nN.origin, {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                  return (e = !0), 'half';
                },
              }).headers.has('Content-Type');
            return e && !t;
          }),
        it = n9 && n7(() => nn.isReadableStream(new Response('').body)),
        ir = { stream: it && ((e) => e.body) };
      n6 &&
        ((o = new Response()),
        ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((e) => {
          ir[e] ||
            (ir[e] = nn.isFunction(o[e])
              ? (t) => t[e]()
              : (t, r) => {
                  throw new ni(
                    `Response type '${e}' is not supported`,
                    ni.ERR_NOT_SUPPORT,
                    r
                  );
                });
        }));
      let ii = async (e) => {
          if (null == e) return 0;
          if (nn.isBlob(e)) return e.size;
          if (nn.isSpecCompliantForm(e)) {
            let t = new Request(nN.origin, { method: 'POST', body: e });
            return (await t.arrayBuffer()).byteLength;
          }
          return nn.isArrayBufferView(e) || nn.isArrayBuffer(e)
            ? e.byteLength
            : (nn.isURLSearchParams(e) && (e += ''), nn.isString(e))
              ? (await n8(e)).byteLength
              : void 0;
        },
        is = async (e, t) => {
          let r = nn.toFiniteNumber(e.getContentLength());
          return null == r ? ii(t) : r;
        },
        ia = {
          http: null,
          xhr: n0,
          fetch:
            n6 &&
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
                } = nX(e);
              h = h ? (h + '').toLowerCase() : 'text';
              let m = n1([a, o && o.toAbortSignal()], u),
                y =
                  m &&
                  m.unsubscribe &&
                  (() => {
                    m.unsubscribe();
                  });
              try {
                if (
                  c &&
                  ie &&
                  'get' !== i &&
                  'head' !== i &&
                  0 !== (r = await is(d, s))
                ) {
                  let e,
                    t = new Request(n, {
                      method: 'POST',
                      body: s,
                      duplex: 'half',
                    });
                  if (
                    (nn.isFormData(s) &&
                      (e = t.headers.get('content-type')) &&
                      d.setContentType(e),
                    t.body)
                  ) {
                    let [e, n] = n$(r, nW(nH(c)));
                    s = n3(t.body, 65536, e, n);
                  }
                }
                nn.isString(f) || (f = f ? 'include' : 'omit');
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
                  u = it && ('stream' === h || 'response' === h);
                if (it && (l || (u && y))) {
                  let e = {};
                  ['status', 'statusText', 'headers'].forEach((t) => {
                    e[t] = o[t];
                  });
                  let t = nn.toFiniteNumber(o.headers.get('content-length')),
                    [r, n] = (l && n$(t, nW(nH(l), !0))) || [];
                  o = new Response(
                    n3(o.body, 65536, r, () => {
                      n && n(), y && y();
                    }),
                    e
                  );
                }
                h = h || 'text';
                let g = await ir[nn.findKey(ir, h) || 'text'](o, e);
                return (
                  !u && y && y(),
                  await new Promise((r, n) => {
                    nQ(r, n, {
                      data: g,
                      headers: nq.from(o.headers),
                      status: o.status,
                      statusText: o.statusText,
                      config: e,
                      request: t,
                    });
                  })
                );
              } catch (r) {
                if (
                  (y && y(),
                  r && 'TypeError' === r.name && /fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new ni('Network Error', ni.ERR_NETWORK, e, t),
                    { cause: r.cause || r }
                  );
                throw ni.from(r, r && r.code, e, t);
              }
            }),
        };
      nn.forEach(ia, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, 'name', { value: t });
          } catch (e) {}
          Object.defineProperty(e, 'adapterName', { value: t });
        }
      });
      let io = (e) => `- ${e}`,
        iu = (e) => nn.isFunction(e) || null === e || !1 === e,
        il = {
          getAdapter: (e) => {
            let t, r;
            let { length: n } = (e = nn.isArray(e) ? e : [e]),
              i = {};
            for (let s = 0; s < n; s++) {
              let n;
              if (
                ((r = t = e[s]),
                !iu(t) && void 0 === (r = ia[(n = String(t)).toLowerCase()]))
              )
                throw new ni(`Unknown adapter '${n}'`);
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
              throw new ni(
                'There is no suitable adapter to dispatch the request ' +
                  (n
                    ? e.length > 1
                      ? 'since :\n' + e.map(io).join('\n')
                      : ' ' + io(e[0])
                    : 'as no adapter specified'),
                'ERR_NOT_SUPPORT'
              );
            }
            return r;
          },
        };
      function ic(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new nB(null, e);
      }
      function ih(e) {
        return (
          ic(e),
          (e.headers = nq.from(e.headers)),
          (e.data = nF.call(e, e.transformRequest)),
          -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
          il
            .getAdapter(e.adapter || nA.adapter)(e)
            .then(
              function (t) {
                return (
                  ic(e),
                  (t.data = nF.call(e, e.transformResponse, t)),
                  (t.headers = nq.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  !nL(t) &&
                    (ic(e),
                    t &&
                      t.response &&
                      ((t.response.data = nF.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = nq.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
        );
      }
      let id = '1.8.1',
        ip = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
        (e, t) => {
          ip[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
          };
        }
      );
      let im = {};
      (ip.transitional = function (e, t, r) {
        function n(e, t) {
          return (
            '[Axios v' +
            id +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? '. ' + r : '')
          );
        }
        return (r, i, s) => {
          if (!1 === e)
            throw new ni(
              n(i, ' has been removed' + (t ? ' in ' + t : '')),
              ni.ERR_DEPRECATED
            );
          return (
            t &&
              !im[i] &&
              ((im[i] = !0),
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
        (ip.spelling = function (e) {
          return (t, r) => (
            console.warn(`${r} is likely a misspelling of ${e}`), !0
          );
        });
      let iy = {
          assertOptions: function (e, t, r) {
            if ('object' != typeof e)
              throw new ni(
                'options must be an object',
                ni.ERR_BAD_OPTION_VALUE
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
                  throw new ni(
                    'option ' + s + ' must be ' + r,
                    ni.ERR_BAD_OPTION_VALUE
                  );
                continue;
              }
              if (!0 !== r)
                throw new ni('Unknown option ' + s, ni.ERR_BAD_OPTION);
            }
          },
          validators: ip,
        },
        ig = iy.validators;
      class iv {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new nv(), response: new nv() });
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
          } = (t = nY(this.defaults, t));
          void 0 !== i &&
            iy.assertOptions(
              i,
              {
                silentJSONParsing: ig.transitional(ig.boolean),
                forcedJSONParsing: ig.transitional(ig.boolean),
                clarifyTimeoutError: ig.transitional(ig.boolean),
              },
              !1
            ),
            null != s &&
              (nn.isFunction(s)
                ? (t.paramsSerializer = { serialize: s })
                : iy.assertOptions(
                    s,
                    { encode: ig.function, serialize: ig.function },
                    !0
                  )),
            void 0 !== t.allowAbsoluteUrls ||
              (void 0 !== this.defaults.allowAbsoluteUrls
                ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                : (t.allowAbsoluteUrls = !0)),
            iy.assertOptions(
              t,
              {
                baseUrl: ig.spelling('baseURL'),
                withXsrfToken: ig.spelling('withXSRFToken'),
              },
              !0
            ),
            (t.method = (
              t.method ||
              this.defaults.method ||
              'get'
            ).toLowerCase());
          let o = a && nn.merge(a.common, a[t.method]);
          a &&
            nn.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = nq.concat(o, a));
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
            let e = [ih.bind(this), void 0];
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
            r = ih.call(this, d);
          } catch (e) {
            return Promise.reject(e);
          }
          for (h = 0, n = c.length; h < n; ) r = r.then(c[h++], c[h++]);
          return r;
        }
        getUri(e) {
          return ng(
            nG((e = nY(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
            e.params,
            e.paramsSerializer
          );
        }
      }
      nn.forEach(['delete', 'get', 'head', 'options'], function (e) {
        iv.prototype[e] = function (t, r) {
          return this.request(
            nY(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
        nn.forEach(['post', 'put', 'patch'], function (e) {
          function t(t) {
            return function (r, n, i) {
              return this.request(
                nY(i || {}, {
                  method: e,
                  headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (iv.prototype[e] = t()), (iv.prototype[e + 'Form'] = t(!0));
        });
      class ib {
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
              !r.reason && ((r.reason = new nB(e, n, i)), t(r.reason));
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
            token: new ib(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      let iw = {
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
      Object.entries(iw).forEach(([e, t]) => {
        iw[t] = e;
      });
      let i_ = (function e(t) {
        let r = new iv(t),
          n = rT(iv.prototype.request, r);
        return (
          nn.extend(n, iv.prototype, r, { allOwnKeys: !0 }),
          nn.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(nY(t, r));
          }),
          n
        );
      })(nA);
      (i_.Axios = iv),
        (i_.CanceledError = nB),
        (i_.CancelToken = ib),
        (i_.isCancel = nL),
        (i_.VERSION = id),
        (i_.toFormData = nd),
        (i_.AxiosError = ni),
        (i_.Cancel = i_.CanceledError),
        (i_.all = function (e) {
          return Promise.all(e);
        }),
        (i_.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (i_.isAxiosError = function (e) {
          return nn.isObject(e) && !0 === e.isAxiosError;
        }),
        (i_.mergeConfig = nY),
        (i_.AxiosHeaders = nq),
        (i_.formToJSON = (e) => nk(nn.isHTMLForm(e) ? new FormData(e) : e)),
        (i_.getAdapter = il.getAdapter),
        (i_.HttpStatusCode = iw),
        (i_.default = i_),
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
              return e
                .map((e) => ('string' == typeof e ? `'${e}'` : e))
                .join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) =>
              'bigint' == typeof t ? t.toString() : t);
        })(c || (c = {})),
        ((h || (h = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let iE = c.arrayToEnum([
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
        iS = (e) => {
          switch (typeof e) {
            case 'undefined':
              return iE.undefined;
            case 'string':
              return iE.string;
            case 'number':
              return isNaN(e) ? iE.nan : iE.number;
            case 'boolean':
              return iE.boolean;
            case 'function':
              return iE.function;
            case 'bigint':
              return iE.bigint;
            case 'symbol':
              return iE.symbol;
            case 'object':
              if (Array.isArray(e)) return iE.array;
              if (null === e) return iE.null;
              if (
                e.then &&
                'function' == typeof e.then &&
                e.catch &&
                'function' == typeof e.catch
              )
                return iE.promise;
              if ('undefined' != typeof Map && e instanceof Map) return iE.map;
              if ('undefined' != typeof Set && e instanceof Set) return iE.set;
              if ('undefined' != typeof Date && e instanceof Date)
                return iE.date;
              return iE.object;
            default:
              return iE.unknown;
          }
        },
        iO = c.arrayToEnum([
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
      class iR extends Error {
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
          if (!(e instanceof iR)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, c.jsonStringifyReplacer, 2);
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
      iR.create = (e) => new iR(e);
      let ix = (e, t) => {
          let r;
          switch (e.code) {
            case iO.invalid_type:
              r =
                e.received === iE.undefined
                  ? 'Required'
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case iO.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(e.expected, c.jsonStringifyReplacer)}`;
              break;
            case iO.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${c.joinValues(e.keys, ', ')}`;
              break;
            case iO.invalid_union:
              r = 'Invalid input';
              break;
            case iO.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${c.joinValues(e.options)}`;
              break;
            case iO.invalid_enum_value:
              r = `Invalid enum value. Expected ${c.joinValues(e.options)}, received '${e.received}'`;
              break;
            case iO.invalid_arguments:
              r = 'Invalid function arguments';
              break;
            case iO.invalid_return_type:
              r = 'Invalid function return type';
              break;
            case iO.invalid_date:
              r = 'Invalid date';
              break;
            case iO.invalid_string:
              'object' == typeof e.validation
                ? 'includes' in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    'number' == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : 'startsWith' in e.validation
                    ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                    : 'endsWith' in e.validation
                      ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                      : c.assertNever(e.validation)
                : (r =
                    'regex' !== e.validation
                      ? `Invalid ${e.validation}`
                      : 'Invalid');
              break;
            case iO.too_small:
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
            case iO.too_big:
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
            case iO.custom:
              r = 'Invalid input';
              break;
            case iO.invalid_intersection_types:
              r = 'Intersection results could not be merged';
              break;
            case iO.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case iO.not_finite:
              r = 'Number must be finite';
              break;
            default:
              (r = t.defaultError), c.assertNever(e);
          }
          return { message: r };
        },
        iC = ix;
      function iN() {
        return iC;
      }
      let ik = (e) => {
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
      function iA(e, t) {
        let r = iN(),
          n = ik({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              r,
              r === ix ? void 0 : ix,
            ].filter((e) => !!e),
          });
        e.common.issues.push(n);
      }
      class iT {
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
            if ('aborted' === n.status) return iP;
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
          return iT.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          let r = {};
          for (let n of t) {
            let { key: t, value: i } = n;
            if ('aborted' === t.status || 'aborted' === i.status) return iP;
            'dirty' === t.status && e.dirty(),
              'dirty' === i.status && e.dirty(),
              '__proto__' !== t.value &&
                (void 0 !== i.value || n.alwaysSet) &&
                (r[t.value] = i.value);
          }
          return { status: e.value, value: r };
        }
      }
      let iP = Object.freeze({ status: 'aborted' }),
        iI = (e) => ({ status: 'dirty', value: e }),
        iD = (e) => ({ status: 'valid', value: e }),
        iM = (e) => 'aborted' === e.status,
        ij = (e) => 'dirty' === e.status,
        iU = (e) => 'valid' === e.status,
        iq = (e) => 'undefined' != typeof Promise && e instanceof Promise;
      function iF(e, t, r, n) {
        if ('a' === r && !n)
          throw TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            'Cannot read private member from an object whose class did not declare it'
          );
        return 'm' === r ? n : 'a' === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function iL(e, t, r, n, i) {
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
        })(d || (d = {}));
      class iB {
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
      let iQ = (e, t) => {
        if (iU(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new iR(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function iZ(e) {
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
      class iz {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return iS(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: iS(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new iT(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: iS(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (iq(t)) throw Error('Synchronous parse encountered promise.');
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
              parsedType: iS(e),
            },
            i = this._parseSync({ data: e, path: n.path, parent: n });
          return iQ(n, i);
        }
        '~validate'(e) {
          var t, r;
          let n = {
            common: { issues: [], async: !!this['~standard'].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: iS(e),
          };
          if (!this['~standard'].async)
            try {
              let t = this._parseSync({ data: e, path: [], parent: n });
              return iU(t) ? { value: t.value } : { issues: n.common.issues };
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
            iU(e) ? { value: e.value } : { issues: n.common.issues }
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
              parsedType: iS(e),
            },
            n = this._parse({ data: e, path: r.path, parent: r });
          return iQ(r, await (iq(n) ? n : Promise.resolve(n)));
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
              s = () => n.addIssue({ code: iO.custom, ...r(t) });
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
          return new sN({
            schema: this,
            typeName: m.ZodEffects,
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
          return sk.create(this, this._def);
        }
        nullable() {
          return sA.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return sh.create(this);
        }
        promise() {
          return sC.create(this, this._def);
        }
        or(e) {
          return sf.create([this, e], this._def);
        }
        and(e) {
          return sy.create(this, e, this._def);
        }
        transform(e) {
          return new sN({
            ...iZ(this._def),
            schema: this,
            typeName: m.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          return new sT({
            ...iZ(this._def),
            innerType: this,
            defaultValue: 'function' == typeof e ? e : () => e,
            typeName: m.ZodDefault,
          });
        }
        brand() {
          return new sM({
            typeName: m.ZodBranded,
            type: this,
            ...iZ(this._def),
          });
        }
        catch(e) {
          return new sP({
            ...iZ(this._def),
            innerType: this,
            catchValue: 'function' == typeof e ? e : () => e,
            typeName: m.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return sj.create(this, e);
        }
        readonly() {
          return sU.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let iW = /^c[^\s-]{8,}$/i,
        i$ = /^[0-9a-z]+$/,
        iH = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        iK =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        iV = /^[a-z0-9_-]{21}$/i,
        iG = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        iJ =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        iY =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        iX =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        i0 =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        i1 =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        i2 =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        i4 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        i5 =
          /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        i3 =
          '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
        i6 = RegExp(`^${i3}$`);
      function i9(e) {
        let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
        return (
          e.precision
            ? (t = `${t}\\.\\d{${e.precision}}`)
            : null == e.precision && (t = `${t}(\\.\\d+)?`),
          t
        );
      }
      function i8(e) {
        let t = `${i3}T${i9(e)}`,
          r = [];
        return (
          r.push(e.local ? 'Z?' : 'Z'),
          e.offset && r.push('([+-]\\d{2}:?\\d{2})'),
          (t = `${t}(${r.join('|')})`),
          RegExp(`^${t}$`)
        );
      }
      class i7 extends iz {
        _parse(e) {
          var t, r, i, s;
          let a;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== iE.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.string,
                received: t.parsedType,
              }),
              iP
            );
          }
          let o = new iT();
          for (let u of this._def.checks)
            if ('min' === u.kind)
              e.data.length < u.value &&
                (iA((a = this._getOrReturnCtx(e, a)), {
                  code: iO.too_small,
                  minimum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ('max' === u.kind)
              e.data.length > u.value &&
                (iA((a = this._getOrReturnCtx(e, a)), {
                  code: iO.too_big,
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
                  ? iA(a, {
                      code: iO.too_big,
                      maximum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    })
                  : r &&
                    iA(a, {
                      code: iO.too_small,
                      minimum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    }),
                o.dirty());
            } else if ('email' === u.kind)
              iY.test(e.data) ||
                (iA((a = this._getOrReturnCtx(e, a)), {
                  validation: 'email',
                  code: iO.invalid_string,
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
                  (iA((a = this._getOrReturnCtx(e, a)), {
                    validation: 'emoji',
                    code: iO.invalid_string,
                    message: u.message,
                  }),
                  o.dirty());
            else if ('uuid' === u.kind)
              iK.test(e.data) ||
                (iA((a = this._getOrReturnCtx(e, a)), {
                  validation: 'uuid',
                  code: iO.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('nanoid' === u.kind)
              iV.test(e.data) ||
                (iA((a = this._getOrReturnCtx(e, a)), {
                  validation: 'nanoid',
                  code: iO.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('cuid' === u.kind)
              iW.test(e.data) ||
                (iA((a = this._getOrReturnCtx(e, a)), {
                  validation: 'cuid',
                  code: iO.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('cuid2' === u.kind)
              i$.test(e.data) ||
                (iA((a = this._getOrReturnCtx(e, a)), {
                  validation: 'cuid2',
                  code: iO.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('ulid' === u.kind)
              iH.test(e.data) ||
                (iA((a = this._getOrReturnCtx(e, a)), {
                  validation: 'ulid',
                  code: iO.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('url' === u.kind)
              try {
                new URL(e.data);
              } catch (t) {
                iA((a = this._getOrReturnCtx(e, a)), {
                  validation: 'url',
                  code: iO.invalid_string,
                  message: u.message,
                }),
                  o.dirty();
              }
            else
              'regex' === u.kind
                ? ((u.regex.lastIndex = 0),
                  u.regex.test(e.data) ||
                    (iA((a = this._getOrReturnCtx(e, a)), {
                      validation: 'regex',
                      code: iO.invalid_string,
                      message: u.message,
                    }),
                    o.dirty()))
                : 'trim' === u.kind
                  ? (e.data = e.data.trim())
                  : 'includes' === u.kind
                    ? e.data.includes(u.value, u.position) ||
                      (iA((a = this._getOrReturnCtx(e, a)), {
                        code: iO.invalid_string,
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
                            (iA((a = this._getOrReturnCtx(e, a)), {
                              code: iO.invalid_string,
                              validation: { startsWith: u.value },
                              message: u.message,
                            }),
                            o.dirty())
                          : 'endsWith' === u.kind
                            ? e.data.endsWith(u.value) ||
                              (iA((a = this._getOrReturnCtx(e, a)), {
                                code: iO.invalid_string,
                                validation: { endsWith: u.value },
                                message: u.message,
                              }),
                              o.dirty())
                            : 'datetime' === u.kind
                              ? i8(u).test(e.data) ||
                                (iA((a = this._getOrReturnCtx(e, a)), {
                                  code: iO.invalid_string,
                                  validation: 'datetime',
                                  message: u.message,
                                }),
                                o.dirty())
                              : 'date' === u.kind
                                ? i6.test(e.data) ||
                                  (iA((a = this._getOrReturnCtx(e, a)), {
                                    code: iO.invalid_string,
                                    validation: 'date',
                                    message: u.message,
                                  }),
                                  o.dirty())
                                : 'time' === u.kind
                                  ? RegExp(`^${i9(u)}$`).test(e.data) ||
                                    (iA((a = this._getOrReturnCtx(e, a)), {
                                      code: iO.invalid_string,
                                      validation: 'time',
                                      message: u.message,
                                    }),
                                    o.dirty())
                                  : 'duration' === u.kind
                                    ? iJ.test(e.data) ||
                                      (iA((a = this._getOrReturnCtx(e, a)), {
                                        validation: 'duration',
                                        code: iO.invalid_string,
                                        message: u.message,
                                      }),
                                      o.dirty())
                                    : 'ip' === u.kind
                                      ? ((t = e.data),
                                        !(
                                          (('v4' === (r = u.version) || !r) &&
                                            iX.test(t)) ||
                                          (('v6' === r || !r) && i1.test(t))
                                        ) &&
                                          (iA(
                                            (a = this._getOrReturnCtx(e, a)),
                                            {
                                              validation: 'ip',
                                              code: iO.invalid_string,
                                              message: u.message,
                                            }
                                          ),
                                          o.dirty()))
                                      : 'jwt' === u.kind
                                        ? !(function (e, t) {
                                            if (!iG.test(e)) return !1;
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
                                          (iA(
                                            (a = this._getOrReturnCtx(e, a)),
                                            {
                                              validation: 'jwt',
                                              code: iO.invalid_string,
                                              message: u.message,
                                            }
                                          ),
                                          o.dirty())
                                        : 'cidr' === u.kind
                                          ? ((i = e.data),
                                            !(
                                              (('v4' === (s = u.version) ||
                                                !s) &&
                                                i0.test(i)) ||
                                              (('v6' === s || !s) && i2.test(i))
                                            ) &&
                                              (iA(
                                                (a = this._getOrReturnCtx(
                                                  e,
                                                  a
                                                )),
                                                {
                                                  validation: 'cidr',
                                                  code: iO.invalid_string,
                                                  message: u.message,
                                                }
                                              ),
                                              o.dirty()))
                                          : 'base64' === u.kind
                                            ? i4.test(e.data) ||
                                              (iA(
                                                (a = this._getOrReturnCtx(
                                                  e,
                                                  a
                                                )),
                                                {
                                                  validation: 'base64',
                                                  code: iO.invalid_string,
                                                  message: u.message,
                                                }
                                              ),
                                              o.dirty())
                                            : 'base64url' === u.kind
                                              ? i5.test(e.data) ||
                                                (iA(
                                                  (a = this._getOrReturnCtx(
                                                    e,
                                                    a
                                                  )),
                                                  {
                                                    validation: 'base64url',
                                                    code: iO.invalid_string,
                                                    message: u.message,
                                                  }
                                                ),
                                                o.dirty())
                                              : c.assertNever(u);
          return { status: o.value, value: e.data };
        }
        _regex(e, t, r) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: iO.invalid_string,
            ...d.errToObj(r),
          });
        }
        _addCheck(e) {
          return new i7({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...d.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...d.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...d.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...d.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: 'nanoid', ...d.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...d.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...d.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...d.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: 'base64', ...d.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: 'base64url', ...d.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: 'jwt', ...d.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...d.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: 'cidr', ...d.errToObj(e) });
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
                ...d.errToObj(null == e ? void 0 : e.message),
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
                ...d.errToObj(null == e ? void 0 : e.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: 'duration', ...d.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...d.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: null == t ? void 0 : t.position,
            ...d.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: 'startsWith',
            value: e,
            ...d.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: 'endsWith',
            value: e,
            ...d.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...d.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...d.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: 'length', value: e, ...d.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, d.errToObj(e));
        }
        trim() {
          return new i7({
            ...this._def,
            checks: [...this._def.checks, { kind: 'trim' }],
          });
        }
        toLowerCase() {
          return new i7({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toLowerCase' }],
          });
        }
        toUpperCase() {
          return new i7({
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
      i7.create = (e) => {
        var t;
        return new i7({
          checks: [],
          typeName: m.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...iZ(e),
        });
      };
      class se extends iz {
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
            this._getType(e) !== iE.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.number,
                received: t.parsedType,
              }),
              iP
            );
          }
          let r = new iT();
          for (let n of this._def.checks)
            'int' === n.kind
              ? c.isInteger(e.data) ||
                (iA((t = this._getOrReturnCtx(e, t)), {
                  code: iO.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: n.message,
                }),
                r.dirty())
              : 'min' === n.kind
                ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                  (iA((t = this._getOrReturnCtx(e, t)), {
                    code: iO.too_small,
                    minimum: n.value,
                    type: 'number',
                    inclusive: n.inclusive,
                    exact: !1,
                    message: n.message,
                  }),
                  r.dirty())
                : 'max' === n.kind
                  ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                    (iA((t = this._getOrReturnCtx(e, t)), {
                      code: iO.too_big,
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
                      (iA((t = this._getOrReturnCtx(e, t)), {
                        code: iO.not_multiple_of,
                        multipleOf: n.value,
                        message: n.message,
                      }),
                      r.dirty())
                    : 'finite' === n.kind
                      ? Number.isFinite(e.data) ||
                        (iA((t = this._getOrReturnCtx(e, t)), {
                          code: iO.not_finite,
                          message: n.message,
                        }),
                        r.dirty())
                      : c.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, d.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, d.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, d.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, d.toString(t));
        }
        setLimit(e, t, r, n) {
          return new se({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: d.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new se({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: d.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !1,
            message: d.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !1,
            message: d.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !0,
            message: d.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !0,
            message: d.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: d.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: d.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: d.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: d.toString(e),
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
              ('multipleOf' === e.kind && c.isInteger(e.value))
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
      se.create = (e) =>
        new se({
          checks: [],
          typeName: m.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...iZ(e),
        });
      class st extends iz {
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
          if (this._getType(e) !== iE.bigint) return this._getInvalidInput(e);
          let r = new iT();
          for (let n of this._def.checks)
            'min' === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (iA((t = this._getOrReturnCtx(e, t)), {
                  code: iO.too_small,
                  type: 'bigint',
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : 'max' === n.kind
                ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                  (iA((t = this._getOrReturnCtx(e, t)), {
                    code: iO.too_big,
                    type: 'bigint',
                    maximum: n.value,
                    inclusive: n.inclusive,
                    message: n.message,
                  }),
                  r.dirty())
                : 'multipleOf' === n.kind
                  ? e.data % n.value !== BigInt(0) &&
                    (iA((t = this._getOrReturnCtx(e, t)), {
                      code: iO.not_multiple_of,
                      multipleOf: n.value,
                      message: n.message,
                    }),
                    r.dirty())
                  : c.assertNever(n);
          return { status: r.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            iA(t, {
              code: iO.invalid_type,
              expected: iE.bigint,
              received: t.parsedType,
            }),
            iP
          );
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, d.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, d.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, d.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, d.toString(t));
        }
        setLimit(e, t, r, n) {
          return new st({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: d.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new st({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: d.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: d.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: d.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: d.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: d.toString(t),
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
      st.create = (e) => {
        var t;
        return new st({
          checks: [],
          typeName: m.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...iZ(e),
        });
      };
      class sr extends iz {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== iE.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.boolean,
                received: t.parsedType,
              }),
              iP
            );
          }
          return iD(e.data);
        }
      }
      sr.create = (e) =>
        new sr({
          typeName: m.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...iZ(e),
        });
      class sn extends iz {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== iE.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.date,
                received: t.parsedType,
              }),
              iP
            );
          }
          if (isNaN(e.data.getTime()))
            return iA(this._getOrReturnCtx(e), { code: iO.invalid_date }), iP;
          let r = new iT();
          for (let n of this._def.checks)
            'min' === n.kind
              ? e.data.getTime() < n.value &&
                (iA((t = this._getOrReturnCtx(e, t)), {
                  code: iO.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: 'date',
                }),
                r.dirty())
              : 'max' === n.kind
                ? e.data.getTime() > n.value &&
                  (iA((t = this._getOrReturnCtx(e, t)), {
                    code: iO.too_big,
                    message: n.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: n.value,
                    type: 'date',
                  }),
                  r.dirty())
                : c.assertNever(n);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new sn({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: 'min',
            value: e.getTime(),
            message: d.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: 'max',
            value: e.getTime(),
            message: d.toString(t),
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
      sn.create = (e) =>
        new sn({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: m.ZodDate,
          ...iZ(e),
        });
      class si extends iz {
        _parse(e) {
          if (this._getType(e) !== iE.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.symbol,
                received: t.parsedType,
              }),
              iP
            );
          }
          return iD(e.data);
        }
      }
      si.create = (e) => new si({ typeName: m.ZodSymbol, ...iZ(e) });
      class ss extends iz {
        _parse(e) {
          if (this._getType(e) !== iE.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.undefined,
                received: t.parsedType,
              }),
              iP
            );
          }
          return iD(e.data);
        }
      }
      ss.create = (e) => new ss({ typeName: m.ZodUndefined, ...iZ(e) });
      class sa extends iz {
        _parse(e) {
          if (this._getType(e) !== iE.null) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.null,
                received: t.parsedType,
              }),
              iP
            );
          }
          return iD(e.data);
        }
      }
      sa.create = (e) => new sa({ typeName: m.ZodNull, ...iZ(e) });
      class so extends iz {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return iD(e.data);
        }
      }
      so.create = (e) => new so({ typeName: m.ZodAny, ...iZ(e) });
      class su extends iz {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return iD(e.data);
        }
      }
      su.create = (e) => new su({ typeName: m.ZodUnknown, ...iZ(e) });
      class sl extends iz {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            iA(t, {
              code: iO.invalid_type,
              expected: iE.never,
              received: t.parsedType,
            }),
            iP
          );
        }
      }
      sl.create = (e) => new sl({ typeName: m.ZodNever, ...iZ(e) });
      class sc extends iz {
        _parse(e) {
          if (this._getType(e) !== iE.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.void,
                received: t.parsedType,
              }),
              iP
            );
          }
          return iD(e.data);
        }
      }
      sc.create = (e) => new sc({ typeName: m.ZodVoid, ...iZ(e) });
      class sh extends iz {
        _parse(e) {
          let { ctx: t, status: r } = this._processInputParams(e),
            n = this._def;
          if (t.parsedType !== iE.array)
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.array,
                received: t.parsedType,
              }),
              iP
            );
          if (null !== n.exactLength) {
            let e = t.data.length > n.exactLength.value,
              i = t.data.length < n.exactLength.value;
            (e || i) &&
              (iA(t, {
                code: e ? iO.too_big : iO.too_small,
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
              (iA(t, {
                code: iO.too_small,
                minimum: n.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.minLength.message,
              }),
              r.dirty()),
            null !== n.maxLength &&
              t.data.length > n.maxLength.value &&
              (iA(t, {
                code: iO.too_big,
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
                n.type._parseAsync(new iB(t, e, t.path, r))
              )
            ).then((e) => iT.mergeArray(r, e));
          let i = [...t.data].map((e, r) =>
            n.type._parseSync(new iB(t, e, t.path, r))
          );
          return iT.mergeArray(r, i);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new sh({
            ...this._def,
            minLength: { value: e, message: d.toString(t) },
          });
        }
        max(e, t) {
          return new sh({
            ...this._def,
            maxLength: { value: e, message: d.toString(t) },
          });
        }
        length(e, t) {
          return new sh({
            ...this._def,
            exactLength: { value: e, message: d.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      sh.create = (e, t) =>
        new sh({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: m.ZodArray,
          ...iZ(t),
        });
      class sd extends iz {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = c.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== iE.object) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.object,
                received: t.parsedType,
              }),
              iP
            );
          }
          let { status: t, ctx: r } = this._processInputParams(e),
            { shape: n, keys: i } = this._getCached(),
            s = [];
          if (
            !(
              this._def.catchall instanceof sl &&
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
              value: t._parse(new iB(r, i, r.path, e)),
              alwaysSet: e in r.data,
            });
          }
          if (this._def.catchall instanceof sl) {
            let e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (let e of s)
                a.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: r.data[e] },
                });
            else if ('strict' === e)
              s.length > 0 &&
                (iA(r, { code: iO.unrecognized_keys, keys: s }), t.dirty());
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
                value: e._parse(new iB(r, n, r.path, t)),
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
                .then((e) => iT.mergeObjectSync(t, e))
            : iT.mergeObjectSync(t, a);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            d.errToObj,
            new sd({
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
                              null !== (a = d.errToObj(e).message) &&
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
          return new sd({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new sd({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new sd({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new sd({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: m.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new sd({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            c.objectKeys(e).forEach((r) => {
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            }),
            new sd({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            c.objectKeys(this.shape).forEach((r) => {
              e[r] || (t[r] = this.shape[r]);
            }),
            new sd({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof sd) {
              let r = {};
              for (let n in t.shape) {
                let i = t.shape[n];
                r[n] = sk.create(e(i));
              }
              return new sd({ ...t._def, shape: () => r });
            }
            if (t instanceof sh)
              return new sh({ ...t._def, type: e(t.element) });
            if (t instanceof sk) return sk.create(e(t.unwrap()));
            if (t instanceof sA) return sA.create(e(t.unwrap()));
            if (t instanceof sg) return sg.create(t.items.map((t) => e(t)));
            else return t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            c.objectKeys(this.shape).forEach((r) => {
              let n = this.shape[r];
              e && !e[r] ? (t[r] = n) : (t[r] = n.optional());
            }),
            new sd({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            c.objectKeys(this.shape).forEach((r) => {
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof sk; ) e = e._def.innerType;
                t[r] = e;
              }
            }),
            new sd({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return sO(c.objectKeys(this.shape));
        }
      }
      (sd.create = (e, t) =>
        new sd({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: sl.create(),
          typeName: m.ZodObject,
          ...iZ(t),
        })),
        (sd.strictCreate = (e, t) =>
          new sd({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: sl.create(),
            typeName: m.ZodObject,
            ...iZ(t),
          })),
        (sd.lazycreate = (e, t) =>
          new sd({
            shape: e,
            unknownKeys: 'strip',
            catchall: sl.create(),
            typeName: m.ZodObject,
            ...iZ(t),
          }));
      class sf extends iz {
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
              let r = e.map((e) => new iR(e.ctx.common.issues));
              return iA(t, { code: iO.invalid_union, unionErrors: r }), iP;
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
            let i = n.map((e) => new iR(e));
            return iA(t, { code: iO.invalid_union, unionErrors: i }), iP;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      sf.create = (e, t) =>
        new sf({ options: e, typeName: m.ZodUnion, ...iZ(t) });
      let sp = (e) => {
        if (e instanceof sE) return sp(e.schema);
        if (e instanceof sN) return sp(e.innerType());
        if (e instanceof sS) return [e.value];
        if (e instanceof sR) return e.options;
        if (e instanceof sx) return c.objectValues(e.enum);
        else if (e instanceof sT) return sp(e._def.innerType);
        else if (e instanceof ss) return [void 0];
        else if (e instanceof sa) return [null];
        else if (e instanceof sk) return [void 0, ...sp(e.unwrap())];
        else if (e instanceof sA) return [null, ...sp(e.unwrap())];
        else if (e instanceof sM) return sp(e.unwrap());
        else if (e instanceof sU) return sp(e.unwrap());
        else if (e instanceof sP) return sp(e._def.innerType);
        else return [];
      };
      class sm extends iz {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== iE.object)
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.object,
                received: t.parsedType,
              }),
              iP
            );
          let r = this.discriminator,
            n = t.data[r],
            i = this.optionsMap.get(n);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (iA(t, {
                code: iO.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              iP);
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
            let t = sp(r.shape[e]);
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
          return new sm({
            typeName: m.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ...iZ(r),
          });
        }
      }
      class sy extends iz {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = (e, n) => {
              if (iM(e) || iM(n)) return iP;
              let i = (function e(t, r) {
                let n = iS(t),
                  i = iS(r);
                if (t === r) return { valid: !0, data: t };
                if (n === iE.object && i === iE.object) {
                  let n = c.objectKeys(r),
                    i = c.objectKeys(t).filter((e) => -1 !== n.indexOf(e)),
                    s = { ...t, ...r };
                  for (let n of i) {
                    let i = e(t[n], r[n]);
                    if (!i.valid) return { valid: !1 };
                    s[n] = i.data;
                  }
                  return { valid: !0, data: s };
                }
                if (n === iE.array && i === iE.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let n = [];
                  for (let i = 0; i < t.length; i++) {
                    let s = e(t[i], r[i]);
                    if (!s.valid) return { valid: !1 };
                    n.push(s.data);
                  }
                  return { valid: !0, data: n };
                }
                if (n === iE.date && i === iE.date && +t == +r)
                  return { valid: !0, data: t };
                return { valid: !1 };
              })(e.value, n.value);
              return i.valid
                ? ((ij(e) || ij(n)) && t.dirty(),
                  { status: t.value, value: i.data })
                : (iA(r, { code: iO.invalid_intersection_types }), iP);
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
      sy.create = (e, t, r) =>
        new sy({ left: e, right: t, typeName: m.ZodIntersection, ...iZ(r) });
      class sg extends iz {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== iE.array)
            return (
              iA(r, {
                code: iO.invalid_type,
                expected: iE.array,
                received: r.parsedType,
              }),
              iP
            );
          if (r.data.length < this._def.items.length)
            return (
              iA(r, {
                code: iO.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              iP
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (iA(r, {
              code: iO.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            t.dirty());
          let n = [...r.data]
            .map((e, t) => {
              let n = this._def.items[t] || this._def.rest;
              return n ? n._parse(new iB(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(n).then((e) => iT.mergeArray(t, e))
            : iT.mergeArray(t, n);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new sg({ ...this._def, rest: e });
        }
      }
      sg.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new sg({ items: e, typeName: m.ZodTuple, rest: null, ...iZ(t) });
      };
      class sv extends iz {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== iE.object)
            return (
              iA(r, {
                code: iO.invalid_type,
                expected: iE.object,
                received: r.parsedType,
              }),
              iP
            );
          let n = [],
            i = this._def.keyType,
            s = this._def.valueType;
          for (let e in r.data)
            n.push({
              key: i._parse(new iB(r, e, r.path, e)),
              value: s._parse(new iB(r, r.data[e], r.path, e)),
              alwaysSet: e in r.data,
            });
          return r.common.async
            ? iT.mergeObjectAsync(t, n)
            : iT.mergeObjectSync(t, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new sv(
            t instanceof iz
              ? { keyType: e, valueType: t, typeName: m.ZodRecord, ...iZ(r) }
              : {
                  keyType: i7.create(),
                  valueType: e,
                  typeName: m.ZodRecord,
                  ...iZ(t),
                }
          );
        }
      }
      class sb extends iz {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== iE.map)
            return (
              iA(r, {
                code: iO.invalid_type,
                expected: iE.map,
                received: r.parsedType,
              }),
              iP
            );
          let n = this._def.keyType,
            i = this._def.valueType,
            s = [...r.data.entries()].map(([e, t], s) => ({
              key: n._parse(new iB(r, e, r.path, [s, 'key'])),
              value: i._parse(new iB(r, t, r.path, [s, 'value'])),
            }));
          if (r.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let r of s) {
                let n = await r.key,
                  i = await r.value;
                if ('aborted' === n.status || 'aborted' === i.status) return iP;
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
              if ('aborted' === n.status || 'aborted' === i.status) return iP;
              ('dirty' === n.status || 'dirty' === i.status) && t.dirty(),
                e.set(n.value, i.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      sb.create = (e, t, r) =>
        new sb({ valueType: t, keyType: e, typeName: m.ZodMap, ...iZ(r) });
      class sw extends iz {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== iE.set)
            return (
              iA(r, {
                code: iO.invalid_type,
                expected: iE.set,
                received: r.parsedType,
              }),
              iP
            );
          let n = this._def;
          null !== n.minSize &&
            r.data.size < n.minSize.value &&
            (iA(r, {
              code: iO.too_small,
              minimum: n.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
            t.dirty()),
            null !== n.maxSize &&
              r.data.size > n.maxSize.value &&
              (iA(r, {
                code: iO.too_big,
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
              if ('aborted' === n.status) return iP;
              'dirty' === n.status && t.dirty(), r.add(n.value);
            }
            return { status: t.value, value: r };
          }
          let a = [...r.data.values()].map((e, t) =>
            i._parse(new iB(r, e, r.path, t))
          );
          return r.common.async ? Promise.all(a).then((e) => s(e)) : s(a);
        }
        min(e, t) {
          return new sw({
            ...this._def,
            minSize: { value: e, message: d.toString(t) },
          });
        }
        max(e, t) {
          return new sw({
            ...this._def,
            maxSize: { value: e, message: d.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      sw.create = (e, t) =>
        new sw({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: m.ZodSet,
          ...iZ(t),
        });
      class s_ extends iz {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== iE.function)
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.function,
                received: t.parsedType,
              }),
              iP
            );
          function r(e, r) {
            return ik({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                iN(),
                ix,
              ].filter((e) => !!e),
              issueData: { code: iO.invalid_arguments, argumentsError: r },
            });
          }
          function n(e, r) {
            return ik({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                iN(),
                ix,
              ].filter((e) => !!e),
              issueData: { code: iO.invalid_return_type, returnTypeError: r },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            s = t.data;
          if (this._def.returns instanceof sC) {
            let e = this;
            return iD(async function (...t) {
              let a = new iR([]),
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
            return iD(function (...t) {
              let a = e._def.args.safeParse(t, i);
              if (!a.success) throw new iR([r(t, a.error)]);
              let o = Reflect.apply(s, this, a.data),
                u = e._def.returns.safeParse(o, i);
              if (!u.success) throw new iR([n(o, u.error)]);
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
          return new s_({ ...this._def, args: sg.create(e).rest(su.create()) });
        }
        returns(e) {
          return new s_({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new s_({
            args: e || sg.create([]).rest(su.create()),
            returns: t || su.create(),
            typeName: m.ZodFunction,
            ...iZ(r),
          });
        }
      }
      class sE extends iz {
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
      sE.create = (e, t) =>
        new sE({ getter: e, typeName: m.ZodLazy, ...iZ(t) });
      class sS extends iz {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                received: t.data,
                code: iO.invalid_literal,
                expected: this._def.value,
              }),
              iP
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function sO(e, t) {
        return new sR({ values: e, typeName: m.ZodEnum, ...iZ(t) });
      }
      sS.create = (e, t) =>
        new sS({ value: e, typeName: m.ZodLiteral, ...iZ(t) });
      class sR extends iz {
        constructor() {
          super(...arguments), f.set(this, void 0);
        }
        _parse(e) {
          if ('string' != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              iA(t, {
                expected: c.joinValues(r),
                received: t.parsedType,
                code: iO.invalid_type,
              }),
              iP
            );
          }
          if (
            (iF(this, f, 'f') || iL(this, f, new Set(this._def.values), 'f'),
            !iF(this, f, 'f').has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              iA(t, {
                received: t.data,
                code: iO.invalid_enum_value,
                options: r,
              }),
              iP
            );
          }
          return iD(e.data);
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
          return sR.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return sR.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t }
          );
        }
      }
      (f = new WeakMap()), (sR.create = sO);
      class sx extends iz {
        constructor() {
          super(...arguments), p.set(this, void 0);
        }
        _parse(e) {
          let t = c.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== iE.string && r.parsedType !== iE.number) {
            let e = c.objectValues(t);
            return (
              iA(r, {
                expected: c.joinValues(e),
                received: r.parsedType,
                code: iO.invalid_type,
              }),
              iP
            );
          }
          if (
            (iF(this, p, 'f') ||
              iL(this, p, new Set(c.getValidEnumValues(this._def.values)), 'f'),
            !iF(this, p, 'f').has(e.data))
          ) {
            let e = c.objectValues(t);
            return (
              iA(r, {
                received: r.data,
                code: iO.invalid_enum_value,
                options: e,
              }),
              iP
            );
          }
          return iD(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      (p = new WeakMap()),
        (sx.create = (e, t) =>
          new sx({ values: e, typeName: m.ZodNativeEnum, ...iZ(t) }));
      class sC extends iz {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== iE.promise && !1 === t.common.async
            ? (iA(t, {
                code: iO.invalid_type,
                expected: iE.promise,
                received: t.parsedType,
              }),
              iP)
            : iD(
                (t.parsedType === iE.promise
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
      sC.create = (e, t) =>
        new sC({ type: e, typeName: m.ZodPromise, ...iZ(t) });
      class sN extends iz {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === m.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = this._def.effect || null,
            i = {
              addIssue: (e) => {
                iA(r, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((i.addIssue = i.addIssue.bind(i)), 'preprocess' === n.type)) {
            let e = n.transform(r.data, i);
            if (r.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ('aborted' === t.value) return iP;
                let n = await this._def.schema._parseAsync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
                return 'aborted' === n.status
                  ? iP
                  : 'dirty' === n.status || 'dirty' === t.value
                    ? iI(n.value)
                    : n;
              });
            {
              if ('aborted' === t.value) return iP;
              let n = this._def.schema._parseSync({
                data: e,
                path: r.path,
                parent: r,
              });
              return 'aborted' === n.status
                ? iP
                : 'dirty' === n.status || 'dirty' === t.value
                  ? iI(n.value)
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
                    ? iP
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
                ? iP
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
                  iU(e)
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
              if (!iU(e)) return e;
              let s = n.transform(e.value, i);
              if (s instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
                );
              return { status: t.value, value: s };
            }
          }
          c.assertNever(n);
        }
      }
      (sN.create = (e, t, r) =>
        new sN({ schema: e, typeName: m.ZodEffects, effect: t, ...iZ(r) })),
        (sN.createWithPreprocess = (e, t, r) =>
          new sN({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: m.ZodEffects,
            ...iZ(r),
          }));
      class sk extends iz {
        _parse(e) {
          return this._getType(e) === iE.undefined
            ? iD(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      sk.create = (e, t) =>
        new sk({ innerType: e, typeName: m.ZodOptional, ...iZ(t) });
      class sA extends iz {
        _parse(e) {
          return this._getType(e) === iE.null
            ? iD(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      sA.create = (e, t) =>
        new sA({ innerType: e, typeName: m.ZodNullable, ...iZ(t) });
      class sT extends iz {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return (
            t.parsedType === iE.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      sT.create = (e, t) =>
        new sT({
          innerType: e,
          typeName: m.ZodDefault,
          defaultValue:
            'function' == typeof t.default ? t.default : () => t.default,
          ...iZ(t),
        });
      class sP extends iz {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            n = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return iq(n)
            ? n.then((e) => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new iR(r.common.issues);
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
                          return new iR(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      sP.create = (e, t) =>
        new sP({
          innerType: e,
          typeName: m.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...iZ(t),
        });
      class sI extends iz {
        _parse(e) {
          if (this._getType(e) !== iE.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              iA(t, {
                code: iO.invalid_type,
                expected: iE.nan,
                received: t.parsedType,
              }),
              iP
            );
          }
          return { status: 'valid', value: e.data };
        }
      }
      sI.create = (e) => new sI({ typeName: m.ZodNaN, ...iZ(e) });
      let sD = Symbol('zod_brand');
      class sM extends iz {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class sj extends iz {
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
                ? iP
                : 'dirty' === e.status
                  ? (t.dirty(), iI(e.value))
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
              ? iP
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
          return new sj({ in: e, out: t, typeName: m.ZodPipeline });
        }
      }
      class sU extends iz {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            r = (e) => (iU(e) && (e.value = Object.freeze(e.value)), e);
          return iq(t) ? t.then((e) => r(e)) : r(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function sq(e, t) {
        let r =
          'function' == typeof e
            ? e(t)
            : 'string' == typeof e
              ? { message: e }
              : e;
        return 'string' == typeof r ? { message: r } : r;
      }
      function sF(e, t = {}, r) {
        return e
          ? so.create().superRefine((n, i) => {
              var s, a;
              let o = e(n);
              if (o instanceof Promise)
                return o.then((e) => {
                  var s, a;
                  if (!e) {
                    let e = sq(t, n),
                      o =
                        null ===
                          (a =
                            null !== (s = e.fatal) && void 0 !== s ? s : r) ||
                        void 0 === a ||
                        a;
                    i.addIssue({ code: 'custom', ...e, fatal: o });
                  }
                });
              if (!o) {
                let e = sq(t, n),
                  o =
                    null ===
                      (a = null !== (s = e.fatal) && void 0 !== s ? s : r) ||
                    void 0 === a ||
                    a;
                i.addIssue({ code: 'custom', ...e, fatal: o });
              }
            })
          : so.create();
      }
      sU.create = (e, t) =>
        new sU({ innerType: e, typeName: m.ZodReadonly, ...iZ(t) });
      let sL = { object: sd.lazycreate };
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
      })(m || (m = {}));
      let sB = i7.create,
        sQ = se.create,
        sZ = sI.create,
        sz = st.create,
        sW = sr.create,
        s$ = sn.create,
        sH = si.create,
        sK = ss.create,
        sV = sa.create,
        sG = so.create,
        sJ = su.create,
        sY = sl.create,
        sX = sc.create,
        s0 = sh.create,
        s1 = sd.create,
        s2 = sd.strictCreate,
        s4 = sf.create,
        s5 = sm.create,
        s3 = sy.create,
        s6 = sg.create,
        s9 = sv.create,
        s8 = sb.create,
        s7 = sw.create,
        ae = s_.create,
        at = sE.create,
        ar = sS.create,
        an = sR.create,
        ai = sx.create,
        as = sC.create,
        aa = sN.create,
        ao = sk.create,
        au = sA.create,
        al = sN.createWithPreprocess,
        ac = sj.create;
      var ah = Object.freeze({
        __proto__: null,
        defaultErrorMap: ix,
        setErrorMap: function (e) {
          iC = e;
        },
        getErrorMap: iN,
        makeIssue: ik,
        EMPTY_PATH: [],
        addIssueToContext: iA,
        ParseStatus: iT,
        INVALID: iP,
        DIRTY: iI,
        OK: iD,
        isAborted: iM,
        isDirty: ij,
        isValid: iU,
        isAsync: iq,
        get util() {
          return c;
        },
        get objectUtil() {
          return h;
        },
        ZodParsedType: iE,
        getParsedType: iS,
        ZodType: iz,
        datetimeRegex: i8,
        ZodString: i7,
        ZodNumber: se,
        ZodBigInt: st,
        ZodBoolean: sr,
        ZodDate: sn,
        ZodSymbol: si,
        ZodUndefined: ss,
        ZodNull: sa,
        ZodAny: so,
        ZodUnknown: su,
        ZodNever: sl,
        ZodVoid: sc,
        ZodArray: sh,
        ZodObject: sd,
        ZodUnion: sf,
        ZodDiscriminatedUnion: sm,
        ZodIntersection: sy,
        ZodTuple: sg,
        ZodRecord: sv,
        ZodMap: sb,
        ZodSet: sw,
        ZodFunction: s_,
        ZodLazy: sE,
        ZodLiteral: sS,
        ZodEnum: sR,
        ZodNativeEnum: sx,
        ZodPromise: sC,
        ZodEffects: sN,
        ZodTransformer: sN,
        ZodOptional: sk,
        ZodNullable: sA,
        ZodDefault: sT,
        ZodCatch: sP,
        ZodNaN: sI,
        BRAND: sD,
        ZodBranded: sM,
        ZodPipeline: sj,
        ZodReadonly: sU,
        custom: sF,
        Schema: iz,
        ZodSchema: iz,
        late: sL,
        get ZodFirstPartyTypeKind() {
          return m;
        },
        coerce: {
          string: (e) => i7.create({ ...e, coerce: !0 }),
          number: (e) => se.create({ ...e, coerce: !0 }),
          boolean: (e) => sr.create({ ...e, coerce: !0 }),
          bigint: (e) => st.create({ ...e, coerce: !0 }),
          date: (e) => sn.create({ ...e, coerce: !0 }),
        },
        any: sG,
        array: s0,
        bigint: sz,
        boolean: sW,
        date: s$,
        discriminatedUnion: s5,
        effect: aa,
        enum: an,
        function: ae,
        instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
          sF((t) => t instanceof e, t),
        intersection: s3,
        lazy: at,
        literal: ar,
        map: s8,
        nan: sZ,
        nativeEnum: ai,
        never: sY,
        null: sV,
        nullable: au,
        number: sQ,
        object: s1,
        oboolean: () => sW().optional(),
        onumber: () => sQ().optional(),
        optional: ao,
        ostring: () => sB().optional(),
        pipeline: ac,
        preprocess: al,
        promise: as,
        record: s9,
        set: s7,
        strictObject: s2,
        string: sB,
        symbol: sH,
        transformer: aa,
        tuple: s6,
        undefined: sK,
        union: s4,
        unknown: sJ,
        void: sX,
        NEVER: iP,
        ZodIssueCode: iO,
        quotelessJson: (e) =>
          JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
        ZodError: iR,
      });
      let ad = ed.create({ allowOutsideOfServer: !0 }),
        af = ad.router,
        ap = ad.procedure,
        am = {
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
        ay = af({
          chess: {
            titled: ap
              .input(
                ah.object({
                  days: ah.number().int().optional(),
                  title: ah.nativeEnum(rs.Title).optional(),
                  countryCode: ah.string().optional(),
                })
              )
              .query(async (e) => {
                let t = e.input.days,
                  r = e.input.title,
                  n = e.input.countryCode;
                return await rO({ days: t, title: r, countryCode: n });
              }),
            insights: ap
              .input(
                ah.object({
                  username: ah.string(),
                  variant: ah.nativeEnum(rs.Variant),
                  timeClass: ah.nativeEnum(rs.TimeClass),
                })
              )
              .query(async (e) => {
                let t = e.input.timeClass,
                  r = e.input.username,
                  n = e.input.variant;
                return await rS({
                  username: r,
                  variant: n,
                  timeClass: t,
                  rated: !0,
                });
              }),
          },
          countries: ap.query(async () => {
            let { data: e } = await i_.get(
              'https://restcountries.com/v3.1/all'
            );
            return e;
          }),
          weather: ap
            .input(
              ah.object({
                latitude: ah.number().default(0),
                longitude: ah.number().default(0),
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
                  { data: s } = await i_.get(i),
                  { current: a } = s,
                  { weather_code: o = 0, temperature_2m: u = 0 } = a;
                return {
                  main: null !== (n = am[o]) && void 0 !== n ? n : 'N/A',
                  temperature: u,
                };
              } catch (e) {
                return { main: '', temperature: 0 };
              }
            }),
          word: ap
            .input(ah.object({ word: ah.string().default('') }))
            .query(async (e) => {
              let { word: t } = e.input;
              try {
                let e = 'https://www.wordsapi.com/mashape/words/'.concat(
                    encodeURIComponent(t),
                    '?when=2024-06-03T05:47:08.760Z&encrypted=8cfdb18ee722959bea9207bfea58babeaeb0250937f997b8'
                  ),
                  { data: r } = await i_.get(e),
                  { results: n } = r;
                return { word: t, results: n };
              } catch (e) {
                return { word: t, results: [] };
              }
            }),
        });
      var ag = r(4328);
      ag.env.VERCEL_URL, ag.env.RENDER_INTERNAL_HOSTNAME, ag.env.PORT;
      let av = () => '',
        ab = (function (e) {
          let t = t7(e),
            r = (function (e) {
              let { config: t } = e,
                r = eR(e.transformer);
              return (n) => {
                let i = t7(e),
                  s = (s) => {
                    let [a] = (0, eB.useState)(() => {
                        if (s.trpc) return s.trpc;
                        let r = t({}),
                          n = ri(r),
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
                      d = eB.useMemo(
                        () => (h ? r.input.deserialize(h) : h),
                        [h, u]
                      );
                    return eB.createElement(
                      i.Provider,
                      {
                        abortOnUnmount: a.abortOnUnmount ?? !1,
                        client: u,
                        queryClient: o,
                        ssrState: l,
                        ssrContext: c,
                      },
                      eB.createElement(
                        ez,
                        { client: o },
                        eB.createElement(
                          eJ,
                          { state: d },
                          eB.createElement(n, s)
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
            n = O(({ path: e, args: r }) => {
              let n = [...e],
                i = n.pop();
              if ('useMutation' === i) return t[i](n, ...r);
              if ('_def' === i) return { path: n };
              let [s, ...a] = r,
                o = a[0] || {};
              return t[i](n, s, o);
            });
          return R((e) =>
            'useContext' === e || 'useUtils' === e
              ? () => {
                  let e = t.useUtils();
                  return (0, eB.useMemo)(
                    () =>
                      (function (e) {
                        var t;
                        let r = ew(e.client),
                          n =
                            ((t = e),
                            O((e) => {
                              let r = [...e.path],
                                n = r.pop(),
                                i = [...e.args],
                                s = i.shift(),
                                a = th(r, s, tf(n));
                              return {
                                infiniteQueryOptions: () =>
                                  t.infiniteQueryOptions(r, a, i[0]),
                                queryOptions: () => t.queryOptions(r, a, ...i),
                                fetch: () => t.fetchQuery(a, ...i),
                                fetchInfinite: () =>
                                  t.fetchInfiniteQuery(a, i[0]),
                                prefetch: () => t.prefetchQuery(a, ...i),
                                prefetchInfinite: () =>
                                  t.prefetchInfiniteQuery(a, i[0]),
                                ensureData: () => t.ensureQueryData(a, ...i),
                                invalidate: () => t.invalidateQueries(a, ...i),
                                reset: () => t.resetQueries(a, ...i),
                                refetch: () => t.refetchQueries(a, ...i),
                                cancel: () => t.cancelQuery(a, ...i),
                                setData: () => {
                                  t.setQueryData(a, i[0], i[1]);
                                },
                                setQueriesData: () =>
                                  t.setQueriesData(a, i[0], i[1], i[2]),
                                setInfiniteData: () => {
                                  t.setInfiniteQueryData(a, i[0], i[1]);
                                },
                                getData: () => t.getQueryData(a),
                                getInfiniteData: () =>
                                  t.getInfiniteQueryData(a),
                                setMutationDefaults: () =>
                                  t.setMutationDefaults(td(r), s),
                                getMutationDefaults: () =>
                                  t.getMutationDefaults(td(r)),
                                isMutating: () =>
                                  t.isMutating({ mutationKey: td(r) }),
                              }[n]();
                            }));
                        return R((t) =>
                          'client' === t ? r : eY.includes(t) ? e[t] : n[t]
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
                    transformer: eR(e.transformer),
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
                          eN({
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
                          o = await eA({
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
                    i = { query: eS(n('query')), mutation: eS(n('mutation')) };
                  return ({ op: e }) =>
                    w((r) => {
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
                                throw new B();
                              }
                              if (
                                (!r.ok &&
                                  (!k(r.error.error) ||
                                    'number' != typeof r.error.error.code)) ||
                                (r.ok && !k(r.result))
                              )
                                throw new B();
                              return r;
                            })(e.json, t.transformer.output);
                            if (!i.ok) {
                              r.error(ep.from(i.error, { meta: e.meta }));
                              return;
                            }
                            r.next({ context: e.meta, result: i.result }),
                              r.complete();
                          })
                          .catch((e) => {
                            r.error(ep.from(e, { meta: n?.meta }));
                          }),
                        () => {}
                      );
                    });
                };
              })({
                url: ''.concat(av(), '/api/trpc'),
                headers: async () => ({}),
              }),
            ],
          }),
          ssr: !1,
        });
      !(function (e) {
        let t = ri(e),
          r = eR(e.transformer),
          n = (() => {
            if ('router' in e) {
              let { ctx: t, router: n } = e;
              return {
                serialize: r.output.serialize,
                query: (e) =>
                  K({
                    router: n,
                    path: e.path,
                    getRawInput: async () => e.input,
                    ctx: t,
                    type: 'query',
                    signal: void 0,
                  }),
              };
            }
            let { client: t } = e,
              n = t instanceof ey ? t : t[eg];
            return {
              query: (e) => n.query(e.path, e.input),
              serialize: (e) => r.output.serialize(e),
            };
          })();
        function i(
          e = { shouldDehydrateQuery: (e) => 'pending' !== e.state.status }
        ) {
          let r = I(() => {
            let r = (function (e, t = {}) {
              let r =
                  t.shouldDehydrateMutation ??
                  e.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
                  e$,
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
                  eH,
                s =
                  t.shouldRedactErrors ??
                  e.getDefaultOptions().dehydrate?.shouldRedactErrors ??
                  eK,
                a =
                  t.serializeData ??
                  e.getDefaultOptions().dehydrate?.serializeData ??
                  eW;
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
                                data: a(e.state.data),
                              }),
                            },
                            queryKey: e.queryKey,
                            queryHash: e.queryHash,
                            ...('pending' === e.state.status && {
                              promise: e.promise
                                ?.then(a)
                                .catch((e) =>
                                  s(e)
                                    ? Promise.reject(Error('redacted'))
                                    : Promise.reject(e)
                                ),
                            }),
                            ...(e.meta && { meta: e.meta }),
                          },
                        ]
                      : []
                  ),
              };
            })(t, e);
            return {
              ...r,
              queries: r.queries.map((e) => {
                if (e.promise) {
                  let { promise: t, ...r } = e;
                  return r;
                }
                return e;
              }),
            };
          });
          return n.serialize(r);
        }
        let s = O((e) => {
          let r = e.args,
            i = r[0],
            s = [...e.path],
            a = s.pop(),
            o = () => n.query({ path: s.join('.'), input: i }),
            u = th(s, i, tf(a));
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
        R((e) => ('queryClient' === e ? t : 'dehydrate' === e ? i : s[e]));
      })({ router: ay, ctx: {} });
      var aw = r(22),
        a_ = r.n(aw),
        aE = r(2444),
        aS = r.n(aE);
      let aO = ab.withTRPC((e) => {
        let { Component: t, pageProps: r } = e;
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsxs)(aS(), {
              children: [
                (0, b.jsx)('title', { children: 'HIEU DOAN' }),
                (0, b.jsx)('link', { rel: 'manifest', href: '/manifest.json' }),
                (0, b.jsx)('link', {
                  rel: 'icon',
                  href: '/favicon.ico',
                  sizes: 'any',
                }),
                (0, b.jsx)('link', {
                  href: '/icons/png/512x512.png',
                  rel: 'apple-touch-icon',
                  type: 'image/png',
                }),
                (0, b.jsx)('meta', { charSet: 'UTF-8' }),
                (0, b.jsx)('meta', { name: 'keywords', content: 'hieudoanm' }),
                (0, b.jsx)('meta', {
                  name: 'url',
                  content: 'https://hieudoanm.github.io',
                }),
                (0, b.jsx)('meta', {
                  name: 'viewport',
                  content:
                    'width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
                }),
              ],
            }),
            (0, b.jsx)('div', {
              className: a_().className,
              children: (0, b.jsx)(t, { ...r }),
            }),
          ],
        });
      });
    },
    2444: (e, t, r) => {
      e.exports = r(7965);
    },
    3376: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(1422);
        },
      ]);
    },
    3685: (e, t) => {
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
            d = 5960464477539062e-23 * (23 === i),
            f = n ? 0 : s - 1,
            p = n ? 1 : -1,
            m = +(t < 0 || (0 === t && 1 / t < 0));
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((o = +!!isNaN(t)), (a = c))
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
    3742: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 });
      let {
          Decimal: n,
          objectEnumValues: i,
          makeStrictEnum: s,
          Public: a,
          getRuntime: o,
          skip: u,
        } = r(3831),
        l = {};
      (t.Prisma = l),
        (t.$Enums = {}),
        (l.prismaVersion = {
          client: '6.4.1',
          engine: 'a9055b89e58b4b5bfb59600785423b1db3d0e75d',
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
              let r;
              let n = o();
              throw Error(
                (n.isEdge
                  ? `PrismaClient is not configured to run in ${n.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`
                  : 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' +
                    n.prettyName +
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
    3831: (e) => {
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
        objectEnumValues: () => y,
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
      g(f, 'DbNull');
      var p = class extends d {};
      g(p, 'JsonNull');
      var m = class extends d {};
      g(m, 'AnyNull');
      var y = {
        classes: { DbNull: f, JsonNull: p, AnyNull: m },
        instances: { DbNull: new f(l), JsonNull: new p(l), AnyNull: new m(l) },
      };
      function g(e, t) {
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
        x =
          '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
        C = {
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
        U = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        q = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        F = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        L = R.length - 1,
        B = x.length - 1,
        Q = { toStringTag: I };
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
      function W(e, t, r, n) {
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
      function $(e, t, r) {
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
      (Q.absoluteValue = Q.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), K(e);
        }),
        (Q.ceil = function () {
          return K(new this.constructor(this), this.e + 1, 2);
        }),
        (Q.clampedTo = Q.clamp =
          function (e, t) {
            var r = this.constructor;
            if (((e = new r(e)), (t = new r(t)), !e.s || !t.s))
              return new r(NaN);
            if (e.gt(t)) throw Error(A + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new r(this);
          }),
        (Q.comparedTo = Q.cmp =
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
        (Q.cosine = Q.cos =
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
        (Q.cubeRoot = Q.cbrt =
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
                ((n = H(
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
        (Q.decimalPlaces = Q.dp =
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
        (Q.dividedBy = Q.div =
          function (e) {
            return H(this, new this.constructor(e));
          }),
        (Q.dividedToIntegerBy = Q.divToInt =
          function (e) {
            var t = this.constructor;
            return K(H(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (Q.equals = Q.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (Q.floor = function () {
          return K(new this.constructor(this), this.e + 1, 3);
        }),
        (Q.greaterThan = Q.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (Q.greaterThanOrEqualTo = Q.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (Q.hyperbolicCosine = Q.cosh =
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
        (Q.hyperbolicSine = Q.sinh =
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
        (Q.hyperbolicTangent = Q.tanh =
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
                  H(
                    this.sinh(),
                    this.cosh(),
                    (r.precision = e),
                    (r.rounding = t)
                  ))
              : new r(this.s);
          }),
        (Q.inverseCosine = Q.acos =
          function () {
            var e = this,
              t = e.constructor,
              r = e.abs().cmp(1),
              n = t.precision,
              i = t.rounding;
            return -1 !== r
              ? 0 === r
                ? e.isNeg()
                  ? Y(t, n, i)
                  : new t(0)
                : new t(NaN)
              : e.isZero()
                ? Y(t, n + 4, i).times(0.5)
                : ((t.precision = n + 6),
                  (t.rounding = 1),
                  (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                  (t.precision = n),
                  (t.rounding = i),
                  e.times(2));
          }),
        (Q.inverseHyperbolicCosine = Q.acosh =
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
        (Q.inverseHyperbolicSine = Q.asinh =
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
        (Q.inverseHyperbolicTangent = Q.atanh =
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
                      (i = H(i.plus(1), new s(1).minus(i), r + e, 1)),
                      (s.precision = e + 4),
                      (s.rounding = 1),
                      (i = i.ln()),
                      (s.precision = e),
                      (s.rounding = t),
                      i.times(0.5)))
              : new s(NaN);
          }),
        (Q.inverseSine = Q.asin =
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
        (Q.inverseTangent = Q.atan =
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
              if (l.abs().eq(1) && h + 4 <= B)
                return ((a = Y(c, h + 4, d).times(0.25)).s = l.s), a;
            } else {
              if (!l.s) return new c(NaN);
              if (h + 4 <= B)
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
        (Q.isFinite = function () {
          return !!this.d;
        }),
        (Q.isInteger = Q.isInt =
          function () {
            return !!this.d && D(this.e / 7) > this.d.length - 2;
          }),
        (Q.isNaN = function () {
          return !this.s;
        }),
        (Q.isNegative = Q.isNeg =
          function () {
            return this.s < 0;
          }),
        (Q.isPositive = Q.isPos =
          function () {
            return this.s > 0;
          }),
        (Q.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (Q.lessThan = Q.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (Q.lessThanOrEqualTo = Q.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (Q.logarithm = Q.log =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l = this.constructor,
              c = l.precision,
              h = l.rounding;
            if (null == e) (e = new l(10)), (t = !0);
            else {
              if (((r = (e = new l(e)).d), e.s < 0 || !r || !r[0] || e.eq(1)))
                return new l(NaN);
              t = e.eq(10);
            }
            if (((r = this.d), this.s < 0 || !r || !r[0] || this.eq(1)))
              return new l(
                r && !r[0] ? -1 / 0 : 1 != this.s ? NaN : r ? 0 : 1 / 0
              );
            if (t) {
              if (r.length > 1) s = !0;
              else {
                for (i = r[0]; i % 10 == 0; ) i /= 10;
                s = 1 !== i;
              }
            }
            if (
              ((N = !1),
              W(
                (u = H(
                  (a = es(this, (o = c + 5))),
                  t ? J(l, o + 10) : es(e, o),
                  o,
                  1
                )).d,
                (i = c),
                h
              ))
            )
              do
                if (
                  ((o += 10),
                  (u = H((a = es(this, o)), t ? J(l, o + 10) : es(e, o), o, 1)),
                  !s)
                ) {
                  +Z(u.d).slice(i + 1, i + 15) + 1 == 1e14 &&
                    (u = K(u, c + 1, 0));
                  break;
                }
              while (W(u.d, (i += 10), h));
            return (N = !0), K(u, c, h);
          }),
        (Q.minus = Q.sub =
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
        (Q.modulo = Q.mod =
          function (e) {
            var t,
              r = this.constructor;
            return (
              (e = new r(e)),
              this.d && e.s && (!e.d || e.d[0])
                ? e.d && (!this.d || this.d[0])
                  ? ((N = !1),
                    9 == r.modulo
                      ? ((t = H(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                      : (t = H(this, e, 0, r.modulo, 1)),
                    (t = t.times(e)),
                    (N = !0),
                    this.minus(t))
                  : K(new r(this), r.precision, r.rounding)
                : new r(NaN)
            );
          }),
        (Q.naturalExponential = Q.exp =
          function () {
            return ei(this);
          }),
        (Q.naturalLogarithm = Q.ln =
          function () {
            return es(this);
          }),
        (Q.negated = Q.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), K(e);
          }),
        (Q.plus = Q.add =
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
        (Q.precision = Q.sd =
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
        (Q.round = function () {
          var e = this.constructor;
          return K(new e(this), this.e + 1, e.rounding);
        }),
        (Q.sine = Q.sin =
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
        (Q.squareRoot = Q.sqrt =
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
                ((n = (s = n).plus(H(this, s, r + 2, 1)).times(0.5)),
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
        (Q.tangent = Q.tan =
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
                  (r = H(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
                  (n.precision = e),
                  (n.rounding = t),
                  K(2 == S || 4 == S ? r.neg() : r, e, t, !0))
              : new n(NaN);
          }),
        (Q.times = Q.mul =
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
        (Q.toBinary = function (e, t) {
          return eh(this, 2, e, t);
        }),
        (Q.toDecimalPlaces = Q.toDP =
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
        (Q.toExponential = function (e, t) {
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
        (Q.toFixed = function (e, t) {
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
        (Q.toFraction = function (e) {
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
            (h = H(o, t, 0, 1, 1)), 1 != (i = r.plus(h.times(n))).cmp(e);

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
            (i = H(e.minus(r), n, 0, 1, 1)),
            (u = u.plus(i.times(l))),
            (r = r.plus(i.times(n))),
            (u.s = l.s = this.s),
            (d =
              1 >
              H(l, n, s, 1)
                .minus(this)
                .abs()
                .cmp(H(u, r, s, 1).minus(this).abs())
                ? [l, n]
                : [u, r]),
            (p.precision = c),
            (N = !0),
            d
          );
        }),
        (Q.toHexadecimal = Q.toHex =
          function (e, t) {
            return eh(this, 16, e, t);
          }),
        (Q.toNearest = function (e, t) {
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
              ? ((N = !1), (r = H(r, e, 0, t, 1).times(e)), (N = !0), K(r))
              : ((e.s = r.s), (r = e)),
            r
          );
        }),
        (Q.toNumber = function () {
          return +this;
        }),
        (Q.toOctal = function (e, t) {
          return eh(this, 8, e, t);
        }),
        (Q.toPower = Q.pow =
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
                  W((i = K(i, n + 5, 1)).d, n, s) &&
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
        (Q.toPrecision = function (e, t) {
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
        (Q.toSignificantDigits = Q.toSD =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (z(e, 1, 1e9), void 0 === t ? (t = r.rounding) : z(t, 0, 8)),
              K(new r(this), e, t)
            );
          }),
        (Q.toString = function () {
          var e = this.constructor,
            t = V(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? '-' + t : t;
        }),
        (Q.truncated = Q.trunc =
          function () {
            return K(new this.constructor(this), this.e + 1, 1);
          }),
        (Q.valueOf = Q.toJSON =
          function () {
            var e = this.constructor,
              t = V(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? '-' + t : t;
          });
      var H = (function () {
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
            (e[r] -= i), (i = +(e[r] < t[r])), (e[r] = i * n + e[r] - t[r]);
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
            y,
            g,
            v,
            b,
            w,
            _,
            S,
            O,
            R,
            x,
            C,
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
              x = P.length,
              v = (g = new A(T)).d = [],
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
              for (d = 0, I = I[0], S++; (h < x || d) && S--; h++)
                (O = d * u + (P[h] || 0)),
                  (v[h] = (O / I) | 0),
                  (d = O % I | 0);
              p = d || h < x;
            } else {
              for (
                (d = (u / (I[0] + 1)) | 0) > 1 &&
                  ((I = e(I, d, u)),
                  (P = e(P, d, u)),
                  (N = I.length),
                  (x = P.length)),
                  R = N,
                  w = (b = P.slice(0, N)).length;
                w < N;

              )
                b[w++] = 0;
              (k = I.slice()).unshift(0), (C = I[0]), I[1] >= u / 2 && ++C;
              do
                (d = 0),
                  (l = t(I, b, N, w)) < 0
                    ? ((_ = b[0]),
                      N != w && (_ = _ * u + (b[1] || 0)),
                      (d = (_ / C) | 0) > 1
                        ? (d >= u && (d = u - 1),
                          (y = (m = e(I, d, u)).length),
                          (w = b.length),
                          1 == (l = t(m, b, y, w)) &&
                            (d--, r(m, N < y ? k : I, y, u)))
                        : (0 == d && (l = d = 1), (m = I.slice())),
                      (y = m.length) < w && m.unshift(0),
                      r(b, m, w, u),
                      -1 == l &&
                        ((w = b.length),
                        (l = t(I, b, N, w)) < 1 &&
                          (d++, r(b, N < w ? k : I, w, u))),
                      (w = b.length))
                    : 0 === l && (d++, (b = [0])),
                  (v[h++] = d),
                  l && b[0] ? (b[w++] = P[R] || 0) : ((b = [P[R]]), (w = 1));
              while ((R++ < x || void 0 !== b[0]) && S--);
              p = void 0 !== b[0];
            }
            v[0] || v.shift();
          }
          if (1 == f) (g.e = c), (E = p);
          else {
            for (h = 1, d = v[0]; d >= 10; d /= 10) h++;
            (g.e = h + c * f - 1), K(g, o ? s + g.e + 1 : s, a, p);
          }
          return g;
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
        if (t > B) throw Error(T);
        return K(new e(x), t, r, !0);
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
        for (var n, i, s = new e(t[0]), a = 0; ++a < t.length; ) {
          if (!(i = new e(t[a])).s) {
            s = i;
            break;
          }
          ((n = s.cmp(i)) === r || (0 === n && s.s === r)) && (s = i);
        }
        return s;
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
            Z((o = a.plus(H(s, r, u, 1))).d).slice(0, u) === Z(a.d).slice(0, u))
          ) {
            for (i = h; i--; ) a = K(a.times(a), u, 1);
            if (null != t) return (d.precision = p), a;
            if (!(l < 3 && W(a.d, u - n, f, l)))
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
          y = p.constructor,
          g = y.rounding,
          v = y.precision;
        if (p.s < 0 || !m || !m[0] || (!p.e && 1 == m[0] && 1 == m.length))
          return new y(m && !m[0] ? -1 / 0 : 1 != p.s ? NaN : m ? 0 : p);
        if (
          (null == t ? ((N = !1), (c = v)) : (c = t),
          (y.precision = c += 10),
          (n = (r = Z(m)).charAt(0)),
          !(15e14 > Math.abs((s = p.e))))
        )
          return (
            (l = J(y, c + 2, v).times(s + '')),
            (p = es(new y(n + '.' + r.slice(1)), c - 10).plus(l)),
            (y.precision = v),
            null == t ? K(p, v, g, (N = !0)) : p
          );
        for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
          (n = (r = Z((p = p.times(e)).d)).charAt(0)), f++;
        for (
          s = p.e,
            n > 1
              ? ((p = new y('0.' + r)), s++)
              : (p = new y(n + '.' + r.slice(1))),
            h = p,
            u = a = p = H(p.minus(1), p.plus(1), c, 1),
            d = K(p.times(p), c, 1),
            i = 3;
          ;

        ) {
          if (
            ((a = K(a.times(d), c, 1)),
            Z((l = u.plus(H(a, new y(i), c, 1))).d).slice(0, c) ===
              Z(u.d).slice(0, c))
          ) {
            if (
              ((u = u.times(2)),
              0 !== s && (u = u.plus(J(y, c + 2, v).times(s + ''))),
              (u = H(u, new y(f), c, 1)),
              null != t)
            )
              return (y.precision = v), u;
            if (!W(u.d, c - 10, g, o))
              return K(u, (y.precision = v), g, (N = !0));
            (y.precision = c += 10),
              (l = a = p = H(h.minus(1), h.plus(1), c, 1)),
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
            ((a = H(o.times(u), new e(t++ * t++), l, 1)),
            (o = i ? n.plus(a) : n.minus(a)),
            (n = H(a.times(u), new e(t++ * t++), l, 1)),
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
                (d.d = $(V(d), 10, i)),
                (d.e = d.d.length)),
              s = u = (h = $(c, 10, i)).length;
            0 == h[--u];

          )
            h.pop();
          if (h[0]) {
            if (
              (a < 0
                ? s--
                : (((e = new f(e)).d = h),
                  (e.e = s),
                  (h = (e = H(e, d, r, n, 0, i)).d),
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
                  for (u = (h = $(c, i, t)).length; !h[u - 1]; --u);
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
      function ey(e, t) {
        return new this(e).plus(t);
      }
      function eg(e) {
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
                      (r = this.atan(H(e, t, s, 1))),
                      (t = Y(this, s, 1)),
                      (this.precision = n),
                      (this.rounding = i),
                      (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                    : (r = this.atan(H(e, t, s, 1)))
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
          if (((r = s[t]), i && (this[r] = C[r]), void 0 !== (n = e[r]))) {
            if (D(n) === n && n >= s[t + 1] && n <= s[t + 2]) this[r] = n;
            else throw Error(A + r + ': ' + n);
          }
        if (((r = 'crypto'), i && (this[r] = C[r]), void 0 !== (n = e[r]))) {
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
      function ex(e) {
        return new this(e).cos();
      }
      function eC(e) {
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
      function eU() {
        return en(this, arguments, -1);
      }
      function eq() {
        return en(this, arguments, 1);
      }
      function eF(e, t) {
        return new this(e).mod(t);
      }
      function eL(e, t) {
        return new this(e).mul(t);
      }
      function eB(e, t) {
        return new this(e).pow(t);
      }
      function eQ(e) {
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
      function eW(e) {
        return new this(e).sin();
      }
      function e$(e) {
        return new this(e).sinh();
      }
      function eH(e) {
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
      (Q[Symbol.for('nodejs.util.inspect.custom')] = Q.toString),
        (Q[Symbol.toStringTag] = 'Decimal');
      var eX = (Q.constructor = (function e(t) {
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
          if ('string' === n)
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
                    if (U.test(t)) (r = 16), (t = t.toLowerCase());
                    else if (j.test(t)) r = 2;
                    else if (q.test(t)) r = 8;
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
                        s = c = (l = $(t, r, 1e7)).length - 1;
                      0 === l[s];
                      --s
                    )
                      l.pop();
                    return s < 0
                      ? new n(0 * e.s)
                      : ((e.e = G(l, c)),
                        (e.d = l),
                        (N = !1),
                        a && (e = H(e, i, 4 * o)),
                        u &&
                          (e = e.times(
                            54 > Math.abs(u) ? M(2, u) : eX.pow(2, u)
                          )),
                        (N = !0),
                        e);
                  })(this, e)
            );
          if ('bigint' === n)
            return (
              e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              eo(this, e.toString())
            );
          throw Error(A + e);
        }
        if (
          ((s.prototype = Q),
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
          (s.add = ey),
          (s.asin = eg),
          (s.asinh = ev),
          (s.atan = eb),
          (s.atanh = ew),
          (s.atan2 = e_),
          (s.cbrt = eE),
          (s.ceil = eS),
          (s.clamp = eO),
          (s.cos = ex),
          (s.cosh = eC),
          (s.div = eN),
          (s.exp = ek),
          (s.floor = eA),
          (s.hypot = eT),
          (s.ln = eI),
          (s.log = eD),
          (s.log10 = ej),
          (s.log2 = eM),
          (s.max = eU),
          (s.min = eq),
          (s.mod = eF),
          (s.mul = eL),
          (s.pow = eB),
          (s.random = eQ),
          (s.round = eZ),
          (s.sign = ez),
          (s.sin = eW),
          (s.sinh = e$),
          (s.sqrt = eH),
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
      })(C));
      (R = new eX(R)), (x = new eX(x));
      var e0 = eX;
    },
    4254: (e, t, r) => {
      'use strict';
      var n = r(5564),
        i = r(3685),
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
            var t = 0 | f(e.length),
              r = a(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          return void 0 !== e.length
            ? 'number' != typeof e.length ||
              (function (e) {
                return e != e;
              })(e.length)
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
              return x(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return C(e).length;
            default:
              if (i) return n ? -1 : x(e).length;
              (t = ('' + t).toLowerCase()), (i = !0);
          }
      }
      function m(e, t, r) {
        var i,
          s,
          a,
          o = !1;
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
                (i = this),
                (s = t),
                (a = r),
                0 === s && a === i.length
                  ? n.fromByteArray(i)
                  : n.fromByteArray(i.slice(s, a))
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
              if (o) throw TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (o = !0);
          }
      }
      function y(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function g(e, t, r, n, i) {
        var s;
        if (0 === e.length) return -1;
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 0x7fffffff
              ? (r = 0x7fffffff)
              : r < -0x80000000 && (r = -0x80000000),
          (s = r *= 1) != s && (r = i ? 0 : e.length - 1),
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
          (t *= 1),
          (r >>>= 0),
          s || E(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function O(e, t, r, n, s) {
        return (
          (t *= 1),
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
          return r < n ? -1 : +(n < r);
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
          for (var t = 0; t < e; t += 2) y(this, t, t + 1);
          return this;
        }),
        (o.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw RangeError('Buffer size must be a multiple of 32-bits');
          for (var t = 0; t < e; t += 4)
            y(this, t, t + 3), y(this, t + 1, t + 2);
          return this;
        }),
        (o.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw RangeError('Buffer size must be a multiple of 64-bits');
          for (var t = 0; t < e; t += 8)
            y(this, t, t + 7),
              y(this, t + 1, t + 6),
              y(this, t + 2, t + 5),
              y(this, t + 3, t + 4);
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
          return s < a ? -1 : +(a < s);
        }),
        (o.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (o.prototype.indexOf = function (e, t, r) {
          return g(this, e, t, r, !0);
        }),
        (o.prototype.lastIndexOf = function (e, t, r) {
          return g(this, e, t, r, !1);
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
                    var o,
                      u = parseInt(t.substr(2 * a, 2), 16);
                    if ((o = u) != o) break;
                    e[r + a] = u;
                  }
                  return a;
                })(this, e, t, r);
              case 'utf8':
              case 'utf-8':
                return (i = t), (s = r), N(x(e, this.length - i), this, i, s);
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
                return (u = t), (l = r), N(C(e), this, u, l);
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
            if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
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
            if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
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
              (e *= 1),
              (t >>>= 0),
              r || _(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e *= 1),
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
              (e *= 1),
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
              (e *= 1),
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
              (e *= 1),
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
          if (((e *= 1), (t >>>= 0), !n)) {
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
          if (((e *= 1), (t >>>= 0), !n)) {
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
            (e *= 1),
            (t >>>= 0),
            r || _(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (o.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || _(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (o.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || _(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (o.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e *= 1),
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
            (e *= 1),
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
      function x(e, t) {
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
      function C(e) {
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
    5564: (e, t) => {
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
                  (i =
                    ((e[a] << 16) & 0xff0000) +
                    ((e[a + 1] << 8) & 65280) +
                    (255 & e[a + 2])),
                    s.push(
                      r[(i >> 18) & 63] +
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
    6038: () => {},
    6952: (e, t, r) => {
      e.exports = r(3742);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [593, 792], () => (t(3376), t(4400))), (_N_E = e.O());
  },
]);
