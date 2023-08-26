import {cn} from '@lib';
import type {FC} from 'react';
import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
}

const Button: FC<ButtonProps> = ({children, className, onClick, type = 'button'}) => (
  <button className={cn(styles.button, className)} type={type} onClick={onClick}>
    {children}
  </button>
);

export {Button};
