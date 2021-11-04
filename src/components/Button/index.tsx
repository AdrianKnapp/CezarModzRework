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
};

const Button = ({
  text,
  bgcolor,
  image,
  onClick,
  border,
  type,
}: ButtonProps) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    style={{
      backgroundColor: bgcolor,
      border,
    }}
    className={styles.button}
    onClick={onClick}
  >
    {image ? (
      <img
        src={image.src}
        alt={image.alt}
        style={{ width: image.width, height: image.height }}
      />
    ) : (
      text
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
};

export default Button;
