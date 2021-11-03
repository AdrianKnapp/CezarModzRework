import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footerContainer}`}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <h2>Contato via E-Mail</h2>
          <a href="mailto:contato@cezarmodz.com.br">Contato comercial</a>
          <a href="mailto:suporte@cezarmodz.com.br">Suporte ao cliente</a>
        </div>
        <div className={styles.right}>
          <h2>Redes Sociais</h2>
          <a href="mailto:contato@cezarmodz.com.br">Instagram</a>
          <a href="mailto:suporte@cezarmodz.com.br">facebook</a>
        </div>
      </div>
      <div className={`container ${styles.footerPolicity}`}>
        <p>Todos os direitos reservados</p>
        <a href="">Desenvolvedor</a>
      </div>
    </footer>
  );
}
