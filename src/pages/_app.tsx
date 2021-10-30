import { AppProps } from 'next/app';
import AOS from 'aos';

import { useEffect } from 'react';

import Header from '../components/Header';

import 'aos/dist/aos.css';

import '../styles/global.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
