'use client';

import {Center, Flex, Link, Text} from '@components';

import styles from './contact.module.css';

const ContactPage = () => (
  <Center className={styles.container}>
    <Flex>
      <Text className={styles.title}>Contact Info:</Text>
    </Flex>

    <Link href="https://omarramoun.com/" passHref={true}>
      <Flex whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <Text className={styles.description}>omarramoun.com</Text>
      </Flex>
    </Link>

    <Link href="mailto:contact@omarramoun.com" passHref={true}>
      <Flex whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <Text className={styles.description}>contact@omarramoun.com</Text>
      </Flex>
    </Link>
  </Center>
);

export default ContactPage;
