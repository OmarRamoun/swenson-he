import type {FC} from 'react';

import {cn} from '@lib';

import type {FlexProps} from '../Flex';
import {Flex} from '../Flex';

import styles from './center.module.css';

export interface CenterProps extends FlexProps {
  children: React.ReactNode;
  className?: string;
}

const Center: FC<CenterProps> = ({children, className, ...props}) => (
  <Flex className={cn(styles.center, className)} {...props}>
    {children}
  </Flex>
);

export {Center};
