import type {PayloadAction} from '@reduxjs/toolkit';

import type {RemovedItem, SelectedItemsProps} from '@types';

const updateSelectedArray = (
  selectedArray: SelectedItemsProps[],
  newItem: PayloadAction<SelectedItemsProps>['payload'],
) => {
  const updatedSelected = [...selectedArray];
  const categoryIndex = updatedSelected.findIndex((category) => category.id === newItem.id);

  if (categoryIndex === -1) {
    updatedSelected.push(newItem);
  } else {
    const categoryToUpdate = updatedSelected[categoryIndex];
    categoryToUpdate.items.push(...newItem.items);
  }

  return updatedSelected;
};

const removeItemFromArray = (
  selectedArray: SelectedItemsProps[],
  itemToBeRemvoed: PayloadAction<RemovedItem>['payload'],
) => {
  const {categoryId, itemId} = itemToBeRemvoed;

  const updatedSelected = selectedArray
    .map((category) => {
      if (category.id === categoryId) {
        const updatedItems = category.items.filter((item) => item.id !== itemId);
        return {...category, items: updatedItems};
      }

      return category;
    })
    .filter((category) => category.items.length > 0); // remove a category if it is empty

  return updatedSelected;
};

export {updateSelectedArray, removeItemFromArray};
