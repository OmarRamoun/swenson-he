import {cn} from '@lib';
import type {FC} from 'react';
import {Center} from '../Center';
import {Box} from '../Box';
import styles from './icon.module.css';

interface CardButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CardButton: FC<CardButtonProps> = ({children, className}) => (
  <Box className={cn(styles.card, className)}>
    <Center>{children}</Center>
  </Box>
);

export {CardButton};
