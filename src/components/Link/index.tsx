import NextLink from 'next/link';
import type {FC} from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  shallow?: boolean;
}

const Link: FC<LinkProps> = ({children, href, shallow = false}) => (
  <NextLink shallow={shallow} href={href}>
    {children}
  </NextLink>
);

export {Link};
