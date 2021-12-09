import Image from 'next/image';
import styles from './styles.module.scss';

type ImageObjectProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

type ButtonProps = {
  text?: string;
  bgcolor?: string;
  image?: ImageObjectProps;
  border?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
};

const Button = ({
  text,
  bgcolor,
  image,
  onClick,
  border,
  type,
  icon,
}: ButtonProps) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    style={{
      backgroundColor: bgcolor,
      border,
      minWidth: icon ? '160px' : '100px',
    }}
    className={styles.button}
    onClick={onClick}
  >
    {image ? (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        unoptimized
      />
    ) : (
      <>
        {icon ? (
          <div className={styles.icon}>
            <Image src={icon} alt={icon} width={30} height={30} unoptimized />
          </div>
        ) : null}
        <p>{text}</p>
      </>
    )}
  </button>
);

Button.defaultProps = {
  text: 'Ver mais',
  bgcolor: '#FF8906',
  image: false,
  border: '0',
  onClick: () => null,
  type: 'button',
  icon: false,
};

export default Button;
