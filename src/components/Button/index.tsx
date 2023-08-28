import {cn} from '@lib';
import type {FC} from 'react';
import styles from './button.module.css';
import {Text} from '../Text';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'reset' | 'submit';
}

const Button: FC<ButtonProps> = ({children, className, onClick, type = 'button'}) => {
  if (typeof children === 'string') {
    return (
      <button className={cn(styles.button, className)} type={type} onClick={onClick}>
        <Text className={styles.text}>{children}</Text>
      </button>
    );
  }

  return (
    <button className={cn(styles.button, className)} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export {Button};
