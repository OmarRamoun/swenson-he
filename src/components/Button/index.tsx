import type {FC, HTMLAttributes} from 'react';

import {cn} from '@lib';

import {Text} from '../Text';

import styles from './button.module.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
}

const Button: FC<ButtonProps> = ({children, className, type = 'button', ...props}) => {
  if (typeof children === 'string') {
    return (
      <button className={cn(styles.button, className)} type={type} {...props}>
        <Text className={styles.text}>{children}</Text>
      </button>
    );
  }

  return (
    <button className={cn(styles.button, className)} type={type} {...props}>
      {children}
    </button>
  );
};

export {Button};
