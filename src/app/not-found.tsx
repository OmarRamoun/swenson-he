'use client';

import {Center, Text} from '@components';

import styles from './app.module.css';

const NotFound = () => (
  <Center className={styles.container}>
    <Text className={styles.title}>404</Text>
    <Text className={styles.description}>This Page is Not Found :(</Text>
  </Center>
);

export default NotFound;
