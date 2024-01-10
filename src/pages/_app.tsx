import { AppProps } from 'next/app';
import AOS from 'aos';

import { useEffect } from 'react';

import Head from 'next/head';
import Header from '../components/Header';

import 'aos/dist/aos.css';

import '../styles/global.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* <p
        style={{
          margin: '30px auto',
          textAlign: 'center',
        }}
      >
        Unable to access.
      </p> */}
    </>
  );
}

export default MyApp;
