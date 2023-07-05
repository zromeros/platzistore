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
        <title>React Shop</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1PY1FGVCFK" />
      <Script id="google-analytics" strategy="afterInteractive">
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
