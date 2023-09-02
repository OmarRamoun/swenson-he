import type {FC} from 'react';

import type {LinkProps as NextLinkProps} from 'next/link';
import NextLink from 'next/link';
import {usePathname} from 'next/navigation';

import {cn} from '@lib';

import {Flex} from '../Flex';
import {Text} from '../Text';

import styles from './link.module.css';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  textStyle?: string;
  activeTextStyle?: string;
}

const Link: FC<LinkProps> = ({href, children, className, activeClassName, textStyle, activeTextStyle, ...props}) => {
  const pathname = usePathname();

  if (typeof children === 'string') {
    return (
      <NextLink className={cn(styles.link, className, pathname === href && activeClassName)} href={href} {...props}>
        <Flex
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          transition={{type: 'spring', stiffness: 400, damping: 10}}
        >
          <Text as="h2" className={cn(styles.text, textStyle, pathname === href && activeTextStyle)}>
            {children}
          </Text>
        </Flex>
      </NextLink>
    );
  }

  return (
    <NextLink className={cn(styles.link, className, pathname === href && activeClassName)} href={href} {...props}>
      {children}
    </NextLink>
  );
};

export {Link};
