import Image from 'next/image';
import styles from './styles.module.scss';

type PartnerBoxProps = {
  imageSrc: string;
  partnerName: string;
  channelUrl: string;
};

export default function PartnerBox({
  imageSrc,
  partnerName,
  channelUrl,
}: PartnerBoxProps) {
  return (
    <a
      className={styles.partnerBox}
      href={channelUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.banner}>
        <Image
          src={imageSrc}
          alt="Banner"
          width={1060}
          height={335}
          layout="responsive"
          unoptimized
        />
      </div>
      <h3>{partnerName}</h3>
    </a>
  );
}
