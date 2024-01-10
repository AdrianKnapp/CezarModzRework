import type { GetStaticProps } from 'next';
import Head from 'next/head';
import CategoryList, { Category } from '../components/CategoryList';
// import FeedbackSlide from '../components/FeedbackSlide';
// eslint-disable-next-line import/no-named-as-default
import PrimaryBannerSlide from '../components/PrimaryBannerSlide';

import api from '../services/api';

import styles from './home.module.scss';

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
    url: string;
  };
};

type HomeProps = {
  categories: Category[];
  feedback: Feedback[];
  banners: Banner[];
};

export default function Home({ categories, feedback, banners }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | CezarModz</title>
        <meta
          name="description"
          content="As melhores contas e serviços para GTA V você encontra aqui. Tá esperando o que? Vem conhecer! Contas, trajes, carros, upgrades..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`container ${styles.bannerContainer}`}
        data-aos="fade-right"
      >
        <PrimaryBannerSlide banners={banners} />
      </div>
      <section className="container" data-aos="fade-right">
        <main className={`${styles.choseProductBox}`}>
          <h1> Produtos </h1>
          <p className={styles.description}>
            Contas e serviços para PS4 e XBOX
          </p>
        </main>
      </section>
      <section className="container" data-aos="fade-right">
        <CategoryList categories={categories} />
      </section>
      {feedback.length > 0 && (
        <section className="container" data-aos="fade-right">
          {/* <FeedbackSlide feedback={feedback} /> */}
        </section>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await api.get('/tipos');
  const feedback = await api.get('/depoimentos');
  const banners = await api.get('/banners');

  return {
    props: {
      categories: categories.data,
      feedback: feedback.data,
      banners: banners.data,
    },
    revalidate: 60, // 60 seconds
  };
};
