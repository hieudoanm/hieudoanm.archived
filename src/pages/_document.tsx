import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => {
  return (
    <Html lang='en'>
      <Head />
      <body data-theme='coffee'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
