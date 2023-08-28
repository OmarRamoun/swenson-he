import {cn} from '@lib';
import type {FC} from 'react';
import {Box} from '../../Box';
import {Center} from '../../Center';
import styles from './cardButton.module.css';

interface CardButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CardButton: FC<CardButtonProps> = ({children, className}) => (
  <Box className={cn(styles.card, className)}>
    <Center>{children}</Center>
  </Box>
);

export {CardButton};
