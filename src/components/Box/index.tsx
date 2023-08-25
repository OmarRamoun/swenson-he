import type {FC} from 'react';
import {cn} from '@lib';
import styles from './box.module.css';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: FC<BoxProps> = ({children, className}) => (
  <div className={cn(styles.box, className)}>{children}</div>
);

export {Box};
