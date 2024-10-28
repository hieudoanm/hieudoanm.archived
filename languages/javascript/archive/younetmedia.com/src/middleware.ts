import { logger } from '@younetmedia/libs/log';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export const middleware = (request: NextRequest) => {
  const { value: authorized } = request.cookies.get('authorized') ?? {
    value: '',
  };
  logger.info('authorized', authorized);
  if (authorized === 'true') {
    return;
  }
  return NextResponse.redirect(new URL('/auth', request.url));
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};
