import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import styles from './styles.module.scss';

type IconProps = {
  url: string;
};

export type Category = {
  id: number;
  type: string;
  icon: IconProps;
};

type CategoryListProps = {
  categories: Category[];
};

const CategoryList = ({ categories }: CategoryListProps) => {
  const productsUrl = '/produtos?tipo=';

  const productTypesASC = categories.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.categoriesContainer}>
      {productTypesASC.map((type) => (
        <Link key={type.type} href={`${productsUrl}${type.type}`}>
          <a className={styles.categoryBox}>
            <div className={styles.categoryImageContainer}>
              <Image
                src={type.icon[0].url}
                alt={type.type}
                width={1080}
                height={1080}
              />
            </div>
            <Button text={type.type} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
