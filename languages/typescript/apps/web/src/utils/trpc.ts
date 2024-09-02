import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter, type AppRouter } from '../server/routers/_app';

const VERCEL_URL: string = process.env.VERCEL_URL ?? '';
const RENDER_INTERNAL_HOSTNAME: string =
  process.env.RENDER_INTERNAL_HOSTNAME ?? '';
const PORT = process.env.PORT;

const getBaseUrl = (): string => {
  // browser should use relative path
  if (typeof window !== 'undefined') return '';
  // reference for vercel.com
  if (VERCEL_URL) return `https://${VERCEL_URL}`;
  // reference for render.com
  if (RENDER_INTERNAL_HOSTNAME)
    return `http://${RENDER_INTERNAL_HOSTNAME}:${PORT}`;
  // assume localhost
  return `http://localhost:${PORT ?? 3000}`;
};

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,

          async headers() {
            return {};
          },
        }),
      ],
    };
  },
  ssr: false,
});

export const trpcServerSideHelpers = createServerSideHelpers({
  router: appRouter,
  ctx: {},
});
