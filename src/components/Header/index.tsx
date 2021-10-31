import Image from 'next/image';

import ActiveLink from '../ActiveLink';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={`container ${styles.headerContent}`}>
        <Image
          src="/images/logo.png"
          alt="CezarModz logo"
          width={60}
          height={50}
        />
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <a>Início</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/sorteios">
                <a>Sorteios</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/sobrenos">
                <a>Sobre nós</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
