import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@younetmedia/server/routers/_app';

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
