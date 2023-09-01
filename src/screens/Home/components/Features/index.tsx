import {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {Center, Flex, Spinner} from '@components';
import {useGetData} from '@hooks';
import type {RootState} from '@state/store';
import type {Category} from '@types';

import {CategorySection} from './Category';
import styles from './features.module.css';
import {Tab} from './Tab';

const Features = () => {
  const {
    data: tabs,
    isLoading,
    isError,
  }: {
    data: Category[];
    isLoading: boolean;
    isError: boolean;
  } = useGetData('categories.json');

  const selectedArray = useSelector((state: RootState) => state.selected.value);

  const countsObject = selectedArray.reduce((accumulator: {[id: number]: number}, category) => {
    accumulator[category.id] = category.items.length;
    return accumulator;
  }, {});

  const [active, setActive] = useState<Category | null>(null);

  useEffect(() => {
    if (tabs) {
      setActive(tabs[0]);
    }
  }, [tabs]);

  if (isLoading) {
    return (
      <Center className={styles.wrapper}>
        <Spinner />
      </Center>
    );
  }

  if (isError) {
    return <Flex>Error...</Flex>;
  }

  return (
    <Flex className={styles.wrapper}>
      <Flex className={styles.tab_container}>
        {tabs?.map((tab) => (
          <Tab
            key={`tab-${tab?.id}-${tab?.title}`}
            noSelected={countsObject[tab?.id]}
            isActive={tab ? active?.id === tab?.id : false}
            onClick={() => {
              setActive(tab);
            }}
          >
            {tab?.title}
          </Tab>
        ))}
      </Flex>

      <Flex>{active ? <CategorySection currentCategory={active} /> : null}</Flex>
    </Flex>
  );
};

export {Features};
