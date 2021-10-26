import Image from 'next/image';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={`container ${styles.headerContent}`}>
        <Image
          src="/images/logo.png"
          alt="CezarModz logo"
          width={80}
          height={50}
        />
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <a href="/" className={`${styles.active}`}>
                Início
              </a>
            </li>
            <li>
              <a href="/">Sorteios</a>
            </li>
            <li>
              <a href="/">Sobre nós</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
