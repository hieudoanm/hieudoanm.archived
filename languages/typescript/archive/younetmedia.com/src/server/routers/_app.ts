import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  health: procedure
    .input(z.object({ message: z.string() }))
    .query((options) => ({ status: 'ok', message: options.input.message })),
});

export type AppRouter = typeof appRouter;
