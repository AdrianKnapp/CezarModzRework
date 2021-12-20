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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
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
