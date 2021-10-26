import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div>
        <Image
          src="images/logo.png"
          alt="CezarModz logo"
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <a href="/">Início</a>
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
