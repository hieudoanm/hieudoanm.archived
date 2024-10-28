import { APP_NAME } from '@younetmedia/constants/app.constants';
import '@younetmedia/styles/globals.css';
import { trpcClient } from '@younetmedia/utils/trpc.client';
import type { AppProps } from 'next/app';
import { Roboto_Mono } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

const font = Roboto_Mono({ weight: '400', subsets: ['latin'] });

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default trpcClient.withTRPC(App);
