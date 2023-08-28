import type {FC} from 'react';

import {cn} from '@lib';

import {Flex} from '../Flex';
import {Image} from '../Image';
import styles from './card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  src: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card: FC<CardProps> = ({children, className, src, onClick}) => (
  <Flex className={cn(styles.card, className)} onClick={onClick}>
    <Image className={styles.image} src={src} alt="card thumbnail" w="162" h="104" sizes="16rem" />

    {children}
  </Flex>
);

export {Card};
