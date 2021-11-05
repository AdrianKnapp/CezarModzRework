import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Accordion from '../../components/Accordion';
import Button from '../../components/Button';

import styles from './product.module.scss';

type ImageLoaderProps = {
  src: string;
};

export default function Product() {
  const ImageLoader = ({ src }: ImageLoaderProps) => src;

  return (
    <>
      <Head>
        <title>Produto | CezarModz</title>
      </Head>
      <section className="container">
        <main className={styles.productContainer}>
          <div className={styles.productImagesContainer}>
            <div className={styles.secondaryImages}>
              <div className={styles.miniature}>
                <Image
                  loader={ImageLoader}
                  src="/images/product-image.jpeg"
                  alt="Imagem do produto"
                  layout="responsive"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              <div className={styles.miniature}>
                <Image
                  loader={ImageLoader}
                  src="/images/product-image.jpeg"
                  alt="Imagem do produto"
                  layout="responsive"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              <div className={styles.miniature}>
                <Image
                  loader={ImageLoader}
                  src="/images/product-image.jpeg"
                  alt="Imagem do produto"
                  layout="responsive"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              <div className={styles.miniature}>
                <Image
                  loader={ImageLoader}
                  src="/images/product-image.jpeg"
                  alt="Imagem do produto"
                  layout="responsive"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              <div className={styles.miniature}>
                <Image
                  loader={ImageLoader}
                  src="/images/product-image.jpeg"
                  alt="Imagem do produto"
                  layout="responsive"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
            </div>
            <div className={styles.primaryImage}>
              <Image
                loader={ImageLoader}
                src="/images/product-image.jpeg"
                alt="Imagem do produto"
                layout="responsive"
                width={100}
                height={100}
                unoptimized
              />
            </div>
          </div>
          <div className={styles.productDetailsContainer}>
            <div className={styles.productDetailsContent}>
              <header>
                <div className={styles.plataformImage}>
                  <Image
                    loader={ImageLoader}
                    src="/images/xbox.svg"
                    alt="Imagem do produto"
                    layout="fill"
                    unoptimized
                  />
                </div>
                <h3>conta</h3>
              </header>
              <h1>PREMIUM</h1>
              <h3>
                Plataforma:
                <span>XBOX</span>
              </h3>
              <h2>R$ 120</h2>
              <div className={styles.buttonContainer}>
                <Button text="Comprar agora" />
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className={`container ${styles.productDescription}`}>
        <Accordion />
        <Accordion />
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    {
      params: {
        slug: '',
      },
    },
  ],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: {
      slug,
    },
    redirect: 60 * 30, // 30 minutes
  };
};
