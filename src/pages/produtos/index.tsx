import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './styles.module.scss';
import api from '../../services/api';
import Button from '../../components/Button';

type Image = {
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
  images: Image[];
};

type Plataform = {
  id: number;
  plataform: string;
  UID: string;
  produtos: Produto[];
  logo: {
    url: string;
  };
  color: string;
};

type ProductsProps = {
  plataforms: Plataform[];
};

export default function Products({ plataforms }: ProductsProps) {
  const router = useRouter();

  const urlGetLetter = router.query.tipo ? '&' : '?';

  console.log(plataforms);

  function selectPlataform() {
    if (router.query.plataforma) {
      console.log('existe plataforma');
    } else {
      router.push(`${router.asPath}${urlGetLetter}plataforma=XBOX`);
    }
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
      <Head>
        <title>Produtos | CezarModz</title>
      </Head>

      <section className={`container ${styles.plataformsContainer}`}>
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
                  onClick={selectPlataform}
                  bgcolor={plataform.color}
                  image={PlataformImage}
                  border="2px solid var(--white-900)"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let plataforms;

  try {
    plataforms = await api.get('/plataformas');
  } catch (err) {
    plataforms = {
      status: 'error',
    };
  }

  return {
    props: {
      plataforms: plataforms?.data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
