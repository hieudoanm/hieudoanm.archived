import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

export type ErrorRouteProps = { code?: number; title?: string };

export const ErrorTemplate: FC<ErrorRouteProps> = ({
  code = 500,
  title = 'Error',
}) => {
  return (
    <>
      <Head>
        <title>HIEU DOAN: {title}</title>
      </Head>
      <div className='flex h-screen w-screen items-center justify-center'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-9xl'>{code}</h2>
          <Link href='/'>
            <button
              className='w-full rounded-full bg-black py-2 text-white'
              type='button'>
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
