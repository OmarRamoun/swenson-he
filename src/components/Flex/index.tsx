import type {FC} from 'react';
import {cn} from '@lib';
import styles from './flex.module.css';

interface FlexProps {
  children: React.ReactNode;
  className?: string;
}

const Flex: FC<FlexProps> = ({children, className}) => (
  <div className={cn(styles.flex, className)}>{children}</div>
);

export {Flex};
