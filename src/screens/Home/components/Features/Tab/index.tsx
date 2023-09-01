import type {FC} from 'react';

import type {CenterProps} from '@components';
import {Center, Text} from '@components';
import {cn} from '@lib/utils';

import styles from './tab.module.css';

interface TabProps extends CenterProps {
  children: React.ReactNode;
  isActive?: boolean;
  noSelected?: number;
}

const Tab: FC<TabProps> = ({children, isActive = false, noSelected, ...props}) => (
  <Center className={cn(styles.tab, isActive && styles.tab_active)} {...props}>
    <Text as="h3" className={cn(styles.tab_text, isActive && styles.text_active)}>
      {`${children}${noSelected ? `(${noSelected})` : ''}`}
    </Text>
  </Center>
);

export {Tab};
