import type {FC, HTMLAttributes} from 'react';

import {cn} from '@lib';

import {Text} from '../Text';

import styles from './button.module.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
}) => {
  if (typeof children === 'string') {
    return (
      <button
        className={cn(styles.button, className, styles[variant], styles[size], destroy && styles.destroy)}
        type={type}
        {...props}
      >
        <Text className={styles.text}>{children}</Text>
      </button>
    );
  }

  return (
    <button
      className={cn(styles.button, className, styles[variant], styles[size], destroy && styles.destroy)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export {Button};
