import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import styles from './styles.module.scss';

import api from '../../services/api';

import Button from '../../components/Button';

type ProductImage = {
  id: number;
  formats: {
    small: {
      url: string;
    };
  };
};

type Produto = {
  id: number;
  title: string;
  images: ProductImage[];
  plataforma: {
    id: number;
    plataform;
  };
  tipo: {
    id: number;
    type: string;
  };
};

type Plataform = {
  id: number;
  plataform: string;
  UID: string;
  logo: {
    url: string;
  };
  color: string;
};

type ProductsProps = {
  plataforms: Plataform[];
  products: Produto[];
};

type ImageLoaderProps = {
  src: string;
};

export default function Products({ plataforms, products }: ProductsProps) {
  const router = useRouter();

  const chosePlataform = router.query.plataforma;
  const choseType = router.query.tipo;
  let productsByPlataform = [];

  if (chosePlataform) {
    productsByPlataform = products.filter(
      ({ plataforma, tipo }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        plataforma.plataform === chosePlataform && tipo.type === choseType,
    );
  }

  function selectPlataform(plataformId) {
    if (!chosePlataform) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, plataforma: plataformId },
      });
    }
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const ImageLoader = ({ src }: ImageLoaderProps) => src;

  return (
    <>
      <Head>
        <title>Produtos | CezarModz</title>
      </Head>

      {router.query.plataforma ? (
        <main className="container" data-aos="fade-right">
          <header className={styles.filterContainer}>
            <div className={styles.filterPlataformImageContainer}>
              <Image
                src={apiUrl + plataforms[0].logo.url}
                alt="feedback-1"
                layout="fill"
                loader={ImageLoader}
                className={styles.filterPlataformImage}
                unoptimized
              />
            </div>
            <div className={styles.filterButton}>
              <Image
                src="/images/filter.svg"
                alt="feedback-1"
                layout="fill"
                loader={ImageLoader}
                className={styles.filterIcon}
                unoptimized
              />
            </div>
          </header>
          <section className={styles.productsContainer}>
            {productsByPlataform.length ? (
              productsByPlataform.map((product) => (
                <div key={product.id} className={styles.boxContainer}>
                  <header>
                    <h3>conta</h3>
                  </header>
                  <div className={styles.productImage}>IMAGE</div>
                  <h4>
                    <span>R$</span>
                    100
                  </h4>
                  <h2>GOLD</h2>
                </div>
              ))
            ) : (
              <p> Não há produtos </p>
            )}
          </section>
        </main>
      ) : (
        <section
          className={`container ${styles.plataformsContainer}`}
          data-aos="fade-right"
        >
          <h1> Produtos </h1>
          <div className={styles.plataformsContent}>
            <h2>Plataformas</h2>
            <div className={styles.buttons}>
              {plataforms.map((plataform) => {
                const PlataformImage = {
                  src: apiUrl + plataform.logo.url,
                  alt: plataform.plataform,
                  width: '40px',
                  height: '30px',
                };
                return (
                  <Button
                    key={plataform.id}
                    onClick={() => selectPlataform(plataform.plataform)}
                    bgcolor={plataform.color}
                    image={PlataformImage}
                    border="2px solid var(--white-900)"
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let plataforms;
  let products;

  try {
    const getPlataforms = await api.get('/plataformas');
    const getProducts = await api.get('/produtos');
    plataforms = getPlataforms.data;
    products = getProducts.data;
  } catch (err) {
    plataforms = {
      status: 'error',
    };
  }

  return {
    props: {
      plataforms,
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
