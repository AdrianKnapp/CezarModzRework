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
          height={60}
        />
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/" prefetch>
                <a>Início</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                activeClassName={styles.active}
                href="/sorteios"
                prefetch
              >
                <a>Sorteios</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                activeClassName={styles.active}
                href="/sobrenos"
                prefetch
              >
                <a>Sobre nós</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
