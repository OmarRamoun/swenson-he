import type {FC} from 'react';
import {cn} from '@lib';
import styles from './box.module.css';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Box: FC<BoxProps> = ({children, className, onClick}) => (
  <div className={cn(styles.box, className)} onClick={onClick}>
    {children}
  </div>
);

export {Box};
