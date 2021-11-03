import { AppProps } from 'next/app';
import AOS from 'aos';

import { useEffect } from 'react';

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
