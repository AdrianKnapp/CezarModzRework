import Image, { ImageLoaderProps } from 'next/image';
import { FormEvent } from 'react';
import Button from '../Button';

import styles from './styles.module.scss';

type filtersProps = {
  order: string;
};

type FilterButtonProps = {
  filterState: boolean;
  // eslint-disable-next-line no-unused-vars
  handleFilterState: (active: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  handleFilter: ({ order }: filtersProps) => void;
};

interface FormElements extends HTMLFormControlsCollection {
  filterprice: HTMLInputElement;
}
interface SubmitFiltersProps extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function FilterButton({
  filterState,
  handleFilterState,
  handleFilter,
}: FilterButtonProps) {
  const ImageLoader = ({ src, width }: ImageLoaderProps) => src + width;

  function submitFilters(event: FormEvent<SubmitFiltersProps>) {
    event.preventDefault();

    const order = event.currentTarget.filterprice.value;

    const filters = {
      order,
    };

    handleFilter(filters);
    handleFilterState(false);
  }

  return (
    <div className={styles.filterButtonContainer}>
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
      <div
        className={`${styles.filterContent} ${
          filterState ? styles.active : ''
        }`}
      >
        <span> Preço </span>
        <form onSubmit={submitFilters}>
          <div className={styles.filterLine}>
            <input
              type="radio"
              id="menor-maior"
              name="filterprice"
              value="ASC"
            />
            <label htmlFor="menor-maior"> menor - maior </label>
          </div>
          <div className={styles.filterLine}>
            <input
              type="radio"
              id="maior-menor"
              name="filterprice"
              value="DESC"
            />
            <label htmlFor="maior-menor"> maior - menor </label>
          </div>
          <div className={styles.buttonContainer}>
            <Button type="submit" text="Aplicar" />
          </div>
        </form>
      </div>
    </div>
  );
}
