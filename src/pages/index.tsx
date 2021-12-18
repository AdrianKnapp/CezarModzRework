import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Button from '../components/Button';
import FeedbackSlide from '../components/FeedbackSlide';
import PrimaryBannerSlide from '../components/PrimaryBannerSlide';

import api from '../services/api';

import styles from './home.module.scss';

type IconProps = {
  url: string;
};

type Type = {
  id: number;
  type: string;
  icon: IconProps;
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
    url: string;
  };
};

type HomeProps = {
  types: Type[];
  feedback: Feedback[];
  banners: Banner[];
};

export default function Home({ types, feedback, banners }: HomeProps) {
  const productsUrl = '/produtos?tipo=';

  const productTypesASC = types.sort((a, b) => a.id - b.id);

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
          <div className={styles.buttonsContainer}>
            {productTypesASC.map((type) => (
              <Link key={type.type} href={`${productsUrl}${type.type}`}>
                <a>
                  <Button icon={type.icon[0]?.url} text={type.type} />
                </a>
              </Link>
            ))}
          </div>
        </main>
      </section>
      <section className="container" data-aos="fade-right">
        <FeedbackSlide feedback={feedback} />
      </section>
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
    revalidate: 60, // 60 seconds
  };
};
