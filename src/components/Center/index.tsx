import type {FC} from 'react';
import {cn} from '@lib';
import styles from './center.module.css';

interface CenterProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Center: FC<CenterProps> = ({children, className, onClick}) => (
  <div className={cn(styles.center, className)} onClick={onClick}>
    {children}
  </div>
);

export {Center};
