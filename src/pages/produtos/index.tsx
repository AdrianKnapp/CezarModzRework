import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

import api from '../../services/api';

import Button from '../../components/Button';
import FilterButton from '../../components/FilterButton';

type ProductImage = {
  id: number;
  name: string;
  formats: {
    small: {
      url: string;
    };
    thumbnail: {
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
  price: string;
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
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const chosePlataform = router.query.plataforma;
  const choseType = router.query.tipo;
  let productsByPlataform = [];
  let plataformChoseData;

  if (chosePlataform) {
    productsByPlataform = products.filter(
      ({ plataforma, tipo }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        plataforma.plataform === chosePlataform && tipo.type === choseType,
    );

    if (!productsList.length) {
      if (productsByPlataform.length) setProductsList(productsByPlataform);
    }

    plataformChoseData = plataforms.filter(
      ({ plataform }) => plataform === chosePlataform,
    );
  }

  function applyFilter(filtersObject) {
    const { order } = filtersObject;
    const orderedProducts = [...productsByPlataform];
    switch (order) {
      case 'ASC':
        orderedProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price),
        );
        break;
      case 'DESC':
        orderedProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price),
        );
        break;
      default:
    }
    setProductsList(orderedProducts);
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
                src={apiUrl + plataformChoseData[0].logo.url}
                alt="Plataforma logo"
                layout="fill"
                loader={ImageLoader}
                className={styles.filterPlataformImage}
                unoptimized
              />
            </div>
            <div
              className={styles.filterButtonContainer}
              onClick={() => setFilterIsOpen(!filterIsOpen)}
              onKeyPress={() => setFilterIsOpen(!filterIsOpen)}
              tabIndex={0}
              role="button"
            >
              <FilterButton
                handleFilter={applyFilter}
                filterState={filterIsOpen}
                handleFilterState={setFilterIsOpen}
              />
            </div>
          </header>
          <section className={styles.productsContainer}>
            {productsList.length ? (
              productsList.map((product: Produto) => (
                <Link href={`/produtos/${product.id}`}>
                  <a>
                    <div key={product.id} className={styles.boxContainer}>
                      <header>
                        <h3>{product.tipo.type}</h3>
                      </header>
                      <div className={styles.productImage}>
                        <Image
                          loader={ImageLoader}
                          src={apiUrl + product.images[0].formats.thumbnail.url}
                          alt={product.images[0].name}
                          layout="responsive"
                          width={100}
                          height={100}
                          unoptimized
                        />
                      </div>
                      <h4>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(+product.price)}
                      </h4>
                      <h2>{product.title}</h2>
                    </div>
                  </a>
                </Link>
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
