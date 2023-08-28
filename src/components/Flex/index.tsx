import type {FC} from 'react';
import {cn} from '@lib';
import styles from './flex.module.css';

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Flex: FC<FlexProps> = ({children, className, onClick}) => (
  <div className={cn(styles.flex, className)} onClick={onClick}>
    {children}
  </div>
);

export {Flex};
