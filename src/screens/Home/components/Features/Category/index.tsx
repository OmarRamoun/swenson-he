import type {FC} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {blur} from '@assets/images';
import {Check, Plus} from '@assets/svgs';
import {Card, Flex, Spinner, Text} from '@components';
import {useGetData} from '@hooks';
import {addToSelected, removeFromSelected} from '@state/slices';
import type {RootState} from '@state/store';
import type {Category, Item} from '@types';
import {formatPrice} from '@utils/strings';

import styles from './category.module.css';

interface CategoryScreenProps {
  currentCategory: Category;
}

const CategorySection: FC<CategoryScreenProps> = ({currentCategory}) => {
  const {
    data: features,
    isLoading,
    isError,
  }: {
    data: Item[];
    isLoading: boolean;
    isError: boolean;
  } = useGetData(`categories/${currentCategory?.id}.json`);

  return (
    <Flex
      className={styles.card_container}
      animate={{
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {features?.map((feature, idx) => (
        <FeatureCard
          key={`feature-${feature?.id}-${feature?.title}`}
          currentCategory={currentCategory}
          featureItem={feature}
          idx={idx}
        />
      ))}

      {isLoading && <Spinner />}
      {isError && <Text>Error...</Text>}
    </Flex>
  );
};

const FeatureCard: FC<{featureItem: Item; currentCategory: Category; idx: number}> = ({
  featureItem,
  currentCategory,
  idx,
}) => {
  const {id, title, minBudget, maxBudget} = featureItem;
  const {image, ...featureItemClean} = featureItem;
  const {id: categoryId, title: categoryTitle} = currentCategory;

  const dispatch = useDispatch();
  const selectedArray = useSelector((state: RootState) => state.selected.value);

  const isSelected = selectedArray.some(
    (category) => category.id === categoryId && category.items.some((item) => item.id === id),
  );

  return (
    <Card
      className={styles.card}
      src={image || blur.src}
      icon={isSelected ? <Check className={styles.card_icon} /> : <Plus className={styles.card_icon} />}
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.1 * idx}}}
      transition={{duration: 0.008}}
      whileTap={{scale: 0.9}}
      onClick={() => {
        if (!isSelected) {
          dispatch(
            addToSelected({
              id: currentCategory.id,
              title: categoryTitle,
              items: [featureItemClean],
            }),
          );
        } else {
          dispatch(removeFromSelected({categoryId, itemId: id}));
        }
      }}
    >
      <Flex className={styles.card_content}>
        <Text className={styles.card_title} as="h2">
          {title}
        </Text>

        <Text className={styles.card_price} as="h3">
          {`$${formatPrice(minBudget)}-${formatPrice(maxBudget)}`}
        </Text>
      </Flex>
    </Card>
  );
};

export {CategorySection};
