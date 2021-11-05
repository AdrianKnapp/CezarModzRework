import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function Accordion() {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <div className={styles.accordionContainer}>
      <header
        className={accordionIsOpen ? styles.active : ''}
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
        onKeyPress={() => setAccordionIsOpen(!accordionIsOpen)}
        tabIndex={0}
        role="button"
      >
        <span>DROPDOWN</span>
        <FaAngleDown className={styles.dropdownIcon} />
      </header>
      <div className={styles.accordionContent}>
        <p>
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
      </div>
    </div>
  );
}
