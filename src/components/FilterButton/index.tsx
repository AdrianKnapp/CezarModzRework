import Image, { ImageLoaderProps } from 'next/image';

import styles from './styles.module.scss';

const ImageLoader = ({ src }: ImageLoaderProps) => src;
export default function FilterButton() {
  return (
    <>
      <div className={styles.filterButton}>
        <Image
          src="/images/filter.svg"
          alt="feedback-1"
          layout="fill"
          loader={ImageLoader}
          className={styles.filterIcon}
          unoptimized
        />
      </div>
    </>
  );
}
