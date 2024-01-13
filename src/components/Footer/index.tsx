import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footerContainer}`}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <h2>Contato via E-Mail</h2>
          <a
            href="mailto:viniciuslyra98@gmail.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Contato comercial
          </a>
          <a
            href="mailto:devcezarmodz@gmail.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Suporte ao cliente
          </a>
        </div>
        <div className={styles.right}>
          <h2>Redes Sociais</h2>
          <a
            href="https://www.instagram.com/cezarmodz/?hl=pt-br"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/CezarMods"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5522998586044&text=Ol%C3%A1,%20estou%20interessado%20em%20um%20produto%20da%20CezarModz."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className={`container ${styles.footerPolicity}`}>
        <p>Todos os direitos reservados</p>
        <a
          href="https://linktr.ee/adrianknapp"
          target="_blank"
          rel="noreferrer"
        >
          Desenvolvedor
        </a>
      </div>
    </footer>
  );
}
