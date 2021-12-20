import PartnerBox from '../../components/PartnerBox';
import api from '../../services/api';
import styles from './styles.module.scss';

type PartnerProps = {
  Nome: string;
  Canal: string;
  Banner: {
    url: string;
  };
};

type SobrenosProps = {
  partners: PartnerProps[];
};

export default function Sobrenos({ partners }: SobrenosProps) {
  const partnersExist = partners.length > 0;

  return (
    <>
      <section id="about-us" className={`container ${styles.aboutUs}`}>
        <h1>Quem somos?</h1>
        <p>
          A CezarModz é uma empresa que atua no mercado gamer há mais de 1 ano,
          oferecendo contas e serviços à todo o mundo. Hoje contamos com nossa
          conta no Instagram com mais de 3 mil seguidores, um site de alto nível
          e dois canais no youtube que juntos ultrapassam 2 milhões de views.
          Além de tudo isso, temos em nosso histórico mais de 500 contas
          vendidas, 100% de aprovação e satisfação.
        </p>
      </section>
      {partnersExist && (
        <section id="partners" className={`container ${styles.partners}`}>
          <h2>Parceiros</h2>
          <div className={styles.partnersContainer}>
            {partners.map((partner: PartnerProps) => (
              <PartnerBox
                imageSrc={partner.Banner.url}
                partnerName={partner.Nome}
                channelUrl={partner.Canal}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export async function getStaticProps() {
  const partners = await api.get('/parceiros');

  return {
    props: {
      partners: partners.data,
    },
  };
}
