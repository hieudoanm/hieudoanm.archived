import "@calendar/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import Head from "next/head";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <div className={robotoMono.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
