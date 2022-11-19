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
          A CezarModz é a empresa pioneira no brasil no ramo de “modding”. Como
          a primeira empresa de modificação de contas de jogos on-line, a
          CezarModz dispõe de muita credibilidade, rapidez e eficiência em seus
          serviços. Dominando o mercado há 4 anos, vende as melhores contas e
          melhores serviços, com os melhores preços e segurança! Com mais de
          1000 contas vendidas e 3000 serviços, a cezar ainda almeja patamares
          ainda maiores. Faça parte da nossa equipe ou seja nosso cliente!
          Contatos abaixo
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
