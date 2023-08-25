import type {FC} from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({children}) => <button type="button">{children}</button>;

export {Button};
