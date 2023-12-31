import Head from 'next/head';
import Header from '@components/Header';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <title>React Shop</title>
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1PY1FGVCFK" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1PY1FGVCFK');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
