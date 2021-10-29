import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

export default function Product() {
  return (
    <>
      <Head>
        <title>Conta | Ignews</title>
      </Head>
      <h1>Produto</h1>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    {
      params: {
        slug: 'next.js---novidades-na-versao-10-e-atualizacao-do-blog',
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
