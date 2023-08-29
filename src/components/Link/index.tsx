import type {FC} from 'react';

import type {LinkProps as NextLinkProps} from 'next/link';
import NextLink from 'next/link';

import {cn} from '@lib/utils';

import styles from './link.module.css';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className: string;
}

const Link: FC<LinkProps> = ({children, className, ...props}) => (
  <NextLink className={cn(styles.link, className)} {...props}>
    {children}
  </NextLink>
);

export {Link};
