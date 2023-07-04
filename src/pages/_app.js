import '@/styles/global.css';
import Head from 'next/head';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <title>React Shop</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
