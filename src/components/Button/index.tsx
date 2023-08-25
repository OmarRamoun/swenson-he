import type {FC} from 'react';
import {cn} from '@lib';
import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({children, className}) => (
  <button className={cn(styles.button, className)} type="button">
    {children}
  </button>
);

export {Button};
