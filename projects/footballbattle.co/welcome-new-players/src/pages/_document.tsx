import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Football Battle - Welcome New Players"
        />
        {/* <link rel="icon" type="image/x-icon" href={`/favicon.ico`} /> */}
        <link
          rel="shortcut icon"
          href={`/welcome-new-players/en/favicon.svg`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
