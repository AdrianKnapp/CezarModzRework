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
};

const Button = ({ text, bgcolor, image }: ButtonProps) => (
  <button
    type="button"
    style={{
      backgroundColor: bgcolor,
    }}
    className={styles.button}
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
};

export default Button;
