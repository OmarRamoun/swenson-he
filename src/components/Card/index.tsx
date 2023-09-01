import type {FC} from 'react';

import {cn} from '@lib';

import {Center} from '../Center';
import type {FlexProps} from '../Flex';
import {Flex} from '../Flex';
import {Image} from '../Image';

import styles from './card.module.css';

export interface CardProps extends FlexProps {
  children: React.ReactNode;
  className?: string;
  src: string;
  icon?: React.ReactNode;
}

const Card: FC<CardProps> = ({children, className, src, icon, ...props}) => (
  <Flex className={cn(styles.card, className)} {...props}>
    <Center className={styles.icon_wrapper}>{icon ?? null}</Center>

    <Image className={styles.image} src={src} alt="card thumbnail" width="162" height="104" sizes="16rem" priority />

    {children}
  </Flex>
);

export {Card};
