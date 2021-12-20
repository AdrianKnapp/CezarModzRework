import styles from './404.module.scss';

export default function NotFound() {
  return (
    <section className={`container ${styles.errorContainer}`}>
      <h1>Oooops...</h1>
      <h2>Página não encontrada</h2>
    </section>
  );
}
