import {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {Star} from '@assets/svgs';
import {Button, Center, Flex, Modal, Text} from '@components';
import {useMediaQuery} from '@hooks';
import {addToSaved, clearSelected} from '@state/slices';
import type {RootState} from '@state/store';
import {formatPrice} from '@utils/strings';

import styles from './estimation.module.css';

const Estimation = () => {
  const {isLargeScreen} = useMediaQuery();

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const selectedArray = useSelector((state: RootState) => state.selected.value);

  const total = selectedArray.reduce(
    (accum, category) => accum + category.items.reduce((prev, curr) => prev + curr.avgBudget, 0),
    0,
  );

  return (
    <>
      <Flex className={styles.estimation}>
        <Flex className={styles.estimation_header}>
          <Text className={styles.estimation_title}>Your Event Estimate</Text>

          <Flex className={styles.estimation_button}>
            <Button
              className={styles.btn_save}
              size={isLargeScreen ? 'lg' : 'sm'}
              variant={isLargeScreen ? 'primary' : 'secondary'}
              whileHover={{scale: [null, 1.04, 1.04]}}
              onClick={() => {
                setShowModal(true);
                dispatch(addToSaved({id: uuidv4(), total, state: selectedArray}));
              }}
            >
              Save
            </Button>

            <Button
              destroy
              className={styles.btn_clear}
              size={isLargeScreen ? 'lg' : 'sm'}
              variant={isLargeScreen ? 'primary' : 'secondary'}
              whileHover={{scale: [null, 1.04, 1.04]}}
              onClick={() => dispatch(clearSelected())}
            >
              clear
            </Button>
          </Flex>
        </Flex>

        <Flex className={styles.estimation_total_wrapper}>
          <Text className={styles.estimation_total}>${formatPrice(total) ?? '-'}</Text>
        </Flex>

        {isLargeScreen ? <Flex className={styles.line} /> : null}

        <Flex className={styles.price_container}>
          {isLargeScreen
            ? selectedArray.map((category) => (
                <Flex
                  key={`category-${category.title}-${category.id}`}
                  className={styles.price_item}
                  initial={{opacity: 0}}
                  animate={{
                    opacity: 1,
                    transition: {
                      delayChildren: 0.3,
                      staggerChildren: 0.2,
                    },
                  }}
                >
                  <Text className={styles.price_item_text}>{category.title}</Text>

                  {category.items.map((items) => (
                    <Flex
                      key={`item-${items.title}-${items.id}`}
                      className={styles.price_subitem}
                      initial={{y: 20, opacity: 0}}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                    >
                      <Text className={styles.price_subitem_text}>{items.title}</Text>

                      <Text className={styles.price_subitem_price}>
                        ${formatPrice(items.minBudget)} - {formatPrice(items.maxBudget)}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
                // eslint-disable-next-line
              ))
            : null}
        </Flex>
      </Flex>

      <Modal className={styles.modal} show={showModal} onClose={() => setShowModal(false)}>
        <Center className={styles.circle}>
          <Text as="h2" className={styles.circle_event}>
            Event Saved!
          </Text>

          <Text as="h3" className={styles.circle_total}>
            ${formatPrice(total)}
          </Text>

          <Star className={styles.star} />
        </Center>
      </Modal>
    </>
  );
};

export {Estimation};
