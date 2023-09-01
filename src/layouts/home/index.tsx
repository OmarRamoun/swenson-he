import type {FC} from 'react';

import {Flex} from '@components';

import {Nav} from './components/Nav';
import styles from './home.module.css';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({children}) => (
  <Flex className={styles.container}>
    <Nav />
    {children}
  </Flex>
);

export {HomeLayout};
