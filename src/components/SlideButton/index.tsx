import { CustomArrowProps } from 'react-slick';

import { AiOutlineRight } from 'react-icons/ai';
import styles from './styles.module.scss';

interface SlideButtonProps extends CustomArrowProps {
  side: 'left' | 'right';
}

export default function SlideButton({
  style,
  onClick,
  side,
}: SlideButtonProps) {
  const rotate = side === 'left' ? 'rotate(180deg)' : '0';

  return (
    <button
      className={styles.SlideButton}
      style={{
        ...style,
        transform: rotate,
        left: side === 'left' ? '-40px' : '',
        right: side === 'right' ? '-40px' : '',
      }}
      onClick={onClick}
      type="button"
    >
      <AiOutlineRight className={styles.arrowIcon} />
    </button>
  );
}
