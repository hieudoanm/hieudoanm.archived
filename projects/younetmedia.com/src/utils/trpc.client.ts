import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../server/routers/_app';
import {
  PORT,
  RENDER_INTERNAL_HOSTNAME,
  VERCEL_URL,
} from '@younetmedia/common/environments/environments';

const getBaseUrl = (): string => {
  if (typeof window !== 'undefined') return '';

  if (VERCEL_URL) return `https://${VERCEL_URL}`;

  if (RENDER_INTERNAL_HOSTNAME)
    return `http://${RENDER_INTERNAL_HOSTNAME}:${PORT}`;

  return `http://localhost:${PORT}`;
};

export const trpcClient = createTRPCNext<AppRouter>({
  config(options) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,

          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    };
  },
  /**
   * @link https://trpc.io/docs/v11/ssr
   **/
  ssr: false,
});
