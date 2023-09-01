import {Plus} from '@assets/svgs';
import {Flex, Text} from '@components';

import {Estimation} from './components/Estimation';
import {Features} from './components/Features';
import styles from './home.module.css';

const HomeScreen = () => (
  <>
    <Flex className={styles.page_wrapper}>
      <Flex className={styles.header}>
        <Text className={styles.header_title} as="h1">
          Event Builder
        </Text>

        <Text className={styles.header_description}>
          Add items to your event using the <Plus className={styles.plus} /> to view our cost estimate.
        </Text>
      </Flex>

      <Features />

      <Estimation />
    </Flex>
  </>
);

export {HomeScreen};
