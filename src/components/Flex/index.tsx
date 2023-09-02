import type {FC} from 'react';

import type {HTMLMotionProps} from 'framer-motion';
import {motion} from 'framer-motion';

import {cn} from '@lib';

import styles from './flex.module.css';

export interface FlexProps extends HTMLMotionProps<'div'> {
  children?: React.ReactNode;
  className?: string;
}

const Flex: FC<FlexProps> = ({children, className, ...props}) => (
  <motion.div className={cn(styles.flex, className)} {...props}>
    {children}
  </motion.div>
);

export {Flex};
