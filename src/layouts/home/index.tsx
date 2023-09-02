import type {FC} from 'react';

import {usePathname} from 'next/navigation';

import {Flex} from '@components';

import {Nav} from './components/Nav';
import styles from './home.module.css';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({children}) => {
  const router = usePathname();

  return (
    <Flex
      key={router}
      className={styles.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.75}}
    >
      <Nav />
      {children}
    </Flex>
  );
};

export {HomeLayout};
