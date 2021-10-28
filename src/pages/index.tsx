import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Button from '../components/Button';
import FeedbackSlide from '../components/FeedbackSlide';
import Footer from '../components/Footer';
import PrimaryBannerSlide from '../components/PrimaryBannerSlide';

import api from '../services/api';

import styles from './home.module.scss';

type Type = {
  type: string;
};

type ImageProps = {
  formats: {
    thumbnail: {
      url: string;
    };
  };
};

type Feedback = {
  id: number;
  name: string;
  feedback: string;
  image: ImageProps;
};

type Banner = {
  id: number;
  title: string;
  banners: {
    formats: {
      medium: {
        url: string;
      };
    };
  };
};

type HomeProps = {
  types: Type[];
  feedback: Feedback[];
  banners: Banner[];
};

export default function Home({ types, feedback, banners }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | CezarModz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`container ${styles.bannerContainer}`}>
        <PrimaryBannerSlide banners={banners} />
      </div>
      <section className="container">
        <main className={`${styles.choseProductBox}`}>
          <h1> Produtos </h1>
          <p> Contas e serviços para PS4 e XBOX </p>
          {types.map((type) => (
            <Link key={type.type} href="/">
              <a>
                <Button text={type.type} />
              </a>
            </Link>
          ))}
        </main>
      </section>
      <section className="container">
        <FeedbackSlide feedback={feedback} />
      </section>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const types = await api.get('/tipos');
  const feedback = await api.get('/depoimentos');
  const banners = await api.get('/banners');

  return {
    props: {
      types: types.data,
      feedback: feedback.data,
      banners: banners.data,
    },
    revalidate: 60 * 60 * 24,
  };
};
