import type {FC} from 'react';
import {useState} from 'react';

import {useSelector} from 'react-redux';

import {Center, Flex, Modal, Text} from '@components';
import type {RootState} from '@state/store';
import type {SavedItem} from '@types';
import {formatPrice} from '@utils/strings';

import styles from './saved.module.css';

const SavedScreen = () => {
  const savedArray = useSelector((state: RootState) => state.saved.value);

  if (savedArray?.length === 0) {
    return <Center className={styles.not_found}>No Items Found :)</Center>;
  }

  return (
    <>
      {savedArray.map((savedItem) => (
        <SavedItemModal key={`category-${savedItem.total}-${savedItem.id}`} savedItem={savedItem} />
      ))}
    </>
  );
};

const SavedItemModal: FC<{savedItem: SavedItem}> = ({savedItem}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Flex className={styles.container} onClick={() => setShowModal(true)}>
        <Text className={styles.title}>${formatPrice(savedItem.total)}</Text>
      </Flex>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Flex className={styles.price_item}>
          <Text className={styles.price_item_total}>${formatPrice(savedItem.total)}</Text>

          <Flex className={styles.categories_container}>
            {savedItem.state.map((category) => (
              <Flex key={`item-${category.title}-${category.id}`} className={styles.price_category}>
                <Text className={styles.category_title}>{category.title}</Text>

                {/* <Text className={styles.price_subitem_price}> */}
                {/* ${formatPrice(items.)} - {formatPrice(items.maxBudget)} */}
                {/* </Text> */}

                {category.items.map((feature) => (
                  <Flex key={`feature-${feature.title}-${feature.id}`} className={styles.feature}>
                    <Text>{feature.title}</Text>
                    <Text className={styles.feature_price}>
                      ${`${formatPrice(feature.minBudget)} - ${formatPrice(feature.maxBudget)}`}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export {SavedScreen};
