import { GetStaticProps } from 'next';

export default function Products() {
  return <h1>Escolha a plataforma</h1>;
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 60 * 60 * 24, // 24 hours
});
