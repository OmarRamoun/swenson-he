import type {FC, HTMLAttributes} from 'react';

import {cn} from '@lib';

import styles from './center.module.css';

export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Center: FC<CenterProps> = ({children, className, ...props}) => (
  <div className={cn(styles.center, className)} {...props}>
    {children}
  </div>
);

export {Center};
