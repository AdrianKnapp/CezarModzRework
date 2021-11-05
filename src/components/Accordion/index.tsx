import { ReactChild, useState } from 'react';

import { FaAngleDown } from 'react-icons/fa';

import styles from './styles.module.scss';

type AccordionProps = {
  title: string;
  children: ReactChild;
};

export default function Accordion({ title, children }: AccordionProps) {
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
        <span>{title}</span>
        <FaAngleDown className={styles.dropdownIcon} />
      </header>
      <div className={styles.accordionContent}>{children}</div>
    </div>
  );
}
