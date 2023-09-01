import type {FC, HTMLAttributes} from 'react';

import {cn} from '@lib';

import styles from './flex.module.css';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Flex: FC<FlexProps> = ({children, className, ...props}) => (
  <div className={cn(styles.flex, className)} {...props}>
    {children}
  </div>
);

export {Flex};
