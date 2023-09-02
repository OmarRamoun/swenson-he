import type {FC} from 'react';

import type {HTMLMotionProps} from 'framer-motion';
import {motion} from 'framer-motion';

import {cn} from '@lib';

import styles from './center.module.css';

export interface CenterProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

const Center: FC<CenterProps> = ({children, className, ...props}) => (
  <motion.div className={cn(styles.center, className)} {...props}>
    {children}
  </motion.div>
);

export {Center};
