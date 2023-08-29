import type {FC} from 'react';

import {cn} from '@lib';

import type {BoxProps} from '../../Box';
import {Box} from '../../Box';
import {Center} from '../../Center';

import styles from './cardButton.module.css';

export type CardButtonProps = BoxProps;

const CardButton: FC<CardButtonProps> = ({children, className, ...props}) => (
  <Box className={cn(styles.card, className)} {...props}>
    <Center>{children}</Center>
  </Box>
);

export {CardButton};
