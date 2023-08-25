import type {FC} from 'react';
import {cn} from '@lib';
import styles from './center.module.css';

interface CenterProps {
  children: React.ReactNode;
  className?: string;
}

const Center: FC<CenterProps> = ({children, className}) => (
  <div className={cn(styles.center, className)}>{children}</div>
);

export {Center};
