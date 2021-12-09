import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import FsLightbox from 'fslightbox-react';
import ReactMarkdown from 'react-markdown';

import { useState } from 'react';

import { useRouter } from 'next/router';
import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import styles from './product.module.scss';
import api from '../../services/api';

type ImageLoaderProps = {
  src: string;
};

type ImageProps = {
  url: string;
  id: number;
};

type ProductProps = {
  id: number;
  title: string;
  description: string;
  images: ImageProps[];
  logoPlataform: string;
  plataform: string;
  type: string;
  price: string;
  error: boolean;
};

type ProductComponentProps = {
  product: ProductProps;
};

export default function Product({ product }: ProductComponentProps) {
  const router = useRouter();

  const [activeImage, setActiveImage] = useState(0);
  const [activeMiniature, setActiveMiniature] = useState(0);

  const [fsLightboxIsOpen, setFsLightboxIsOpen] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  function changeFocusImage(imageId) {
    const imageIndex = product.images.findIndex((img) => img.id === imageId);
    setActiveImage(imageIndex);
    setActiveMiniature(imageId);

    return imageId;
  }

  const ImageLoader = ({ src }: ImageLoaderProps) => src;

  return !router.isFallback ? (
    <>
      <Head>
        <title>{`${product.title} | CezarModz`}</title>
      </Head>
      <section className="container">
        <main className={styles.productContainer}>
          <div className={styles.productImagesContainer}>
            <div className={styles.secondaryImages}>
              {product.images.map((image) => (
                <div
                  key={image.id}
                  className={`${styles.miniature} ${
                    activeMiniature === image.id ? styles.active : ''
                  }`}
                  onClick={() => changeFocusImage(image.id)}
                  onMouseEnter={() => changeFocusImage(image.id)}
                  onKeyPress={() => changeFocusImage(image.id)}
                  tabIndex={0}
                  role="button"
                >
                  <Image
                    loader={ImageLoader}
                    src={apiUrl + image.url}
                    alt="Imagem do produto"
                    layout="responsive"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <div
              className={styles.primaryImage}
              onClick={() => setFsLightboxIsOpen(!fsLightboxIsOpen)}
              onKeyPress={() => setFsLightboxIsOpen(!fsLightboxIsOpen)}
              tabIndex={0}
              role="button"
            >
              <Image
                loader={ImageLoader}
                src={apiUrl + product.images[activeImage].url}
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
                    src={apiUrl + product.logoPlataform}
                    alt="Imagem do produto"
                    layout="fill"
                    unoptimized
                  />
                </div>
                <h3>{product.type}</h3>
              </header>
              <h1>{product.title}</h1>
              <h3>
                Plataforma:
                <span>{product.plataform}</span>
              </h3>
              <h2>{product.price}</h2>
              <div className={styles.buttonContainer}>
                <a
                  href={`https://api.whatsapp.com/send?phone=551e+21&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20produto%20${product.title}`}
                  target="blank_"
                >
                  <Button text="Comprar agora" />
                </a>
              </div>
            </div>
          </div>
          <FsLightbox
            toggler={fsLightboxIsOpen}
            sources={[...product.images.map((image) => apiUrl + image.url)]}
            slide={activeImage + 1}
          />
        </main>
      </section>
      <section className={`container ${styles.productDescription}`}>
        <Accordion title="Benefícios">
          <ReactMarkdown>{product.description}</ReactMarkdown>
        </Accordion>
        <Accordion title="Detalhes">Teste</Accordion>
      </section>
    </>
  ) : (
    <section className="container">
      <h3
        style={{
          margin: '0 auto',
          width: 'min-content',
        }}
      >
        Carregando...
      </h3>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getProductsSlug = await api.get('/produtos');

  const productsIds = getProductsSlug.data.map((product) => ({
    params: {
      slug: String(product.id),
    },
  }));

  return {
    paths: productsIds,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  let product: ProductProps = {
    id: 0,
    title: '',
    description: '',
    images: [],
    logoPlataform: '',
    plataform: '',
    type: '',
    price: '',
    error: true,
  };

  try {
    const getProduct = await api.get(`/produtos?id=${slug}`);
    const getProductData = getProduct.data[0];

    product = {
      id: getProductData.id,
      title: getProductData.title,
      description: getProductData.description,
      plataform: getProductData.plataforma.plataform,
      type: getProductData.tipo.type,
      logoPlataform: getProductData.plataforma.logo.url,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(+getProductData.price),
      images: getProductData.images,
      error: false,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  return {
    props: {
      product,
    },
    redirect: 60 * 30, // 30 minutes
  };
};
