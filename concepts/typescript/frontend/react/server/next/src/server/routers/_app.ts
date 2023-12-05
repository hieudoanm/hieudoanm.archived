import { procedure, router } from '../trpc';

export const appRouter = router({
  status: procedure.query((opts) => {
    return {
      status: 'OK'
    };
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
