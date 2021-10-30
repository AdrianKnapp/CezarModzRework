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
};

const Button = ({ text, bgcolor, image, onClick, border }: ButtonProps) => (
  <button
    type="button"
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
};

export default Button;
