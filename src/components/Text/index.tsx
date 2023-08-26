import type {FC} from 'react';
import {cn} from '@lib';
import styles from './text.module.css';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Text: FC<TextProps> = ({children, className, as = 'p'}) => {
  const cln = cn(styles.text, className);

  switch (as) {
    case 'h1':
      return <h1 className={cln}>{children}</h1>;
    case 'h2':
      return <h2 className={cln}>{children}</h2>;
    case 'h3':
      return <h3 className={cln}>{children}</h3>;
    case 'h4':
      return <h4 className={cln}>{children}</h4>;
    case 'h5':
      return <h5 className={cln}>{children}</h5>;
    case 'h6':
      return <h6 className={cln}>{children}</h6>;
    default:
      return <p className={cln}>{children}</p>;
  }
};

export {Text};
