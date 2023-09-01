import type {FC} from 'react';

import type {HTMLMotionProps} from 'framer-motion';
import {motion} from 'framer-motion';

import {cn} from '@lib';

import {Text} from '../Text';

import styles from './button.module.css';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  destroy?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  size = 'md',
  destroy = false,
  ...props
}) => (
  <motion.button
    className={cn(styles.button, className, styles[variant], styles[size], destroy && styles.destroy)}
    type={type}
    whileHover={{scale: [null, 1.2, 1.2]}}
    transition={{duration: 0.2}}
    {...props}
  >
    {typeof children === 'string' ? <Text className={styles.text}>{children}</Text> : children}
  </motion.button>
);

export {Button};
