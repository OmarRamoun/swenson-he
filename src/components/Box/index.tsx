import type {FC, HTMLAttributes} from 'react';

import {cn} from '@lib';

import styles from './box.module.css';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Box: FC<BoxProps> = ({children, className, ...props}) => (
  <div className={cn(styles.box, className)} {...props}>
    {children}
  </div>
);

export {Box};
