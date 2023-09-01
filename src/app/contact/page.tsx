'use client';

import {Center, Link, Text} from '@components';

import styles from './contact.module.css';

const ContactPage = () => (
  <Center className={styles.container}>
    <Text className={styles.title}>Contact Info:</Text>

    <Link href="https://omarramoun.com/" passHref={true}>
      <Text className={styles.description}>omarramoun.com</Text>
    </Link>

    <Link href="mailto:contact@omarramoun.com" passHref={true}>
      <Text className={styles.description}>contact@omarramoun.com</Text>
    </Link>
  </Center>
);

export default ContactPage;
