import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {RemovedItem, SelectedItemsProps} from '@types';
import {getItem, setItem} from '@utils/storage';

import {removeItemFromArray, updateSelectedArray} from '../helpers';

const initialValue: SelectedItemsProps[] = [];

const selectedData = getItem('selected');
const storage: SelectedItemsProps[] = selectedData ? JSON.parse(selectedData) : null;
const setStorage = (value: SelectedItemsProps[]) => setItem('selected', JSON.stringify(value));

const selectedSlice = createSlice({
  name: 'selected',
  initialState: {
    value: storage || initialValue,
  },
  reducers: {
    addToSelected: (state, action: PayloadAction<SelectedItemsProps>) => {
      // eslint-disable-next-line
      state.value = updateSelectedArray(state.value, action.payload);
      setStorage(state.value);
    },
    removeFromSelected: (state, action: PayloadAction<RemovedItem>) => {
      const itemIdToRemove = action.payload;
      // eslint-disable-next-line
      state.value = removeItemFromArray(state.value, itemIdToRemove);
      setStorage(state.value);
    },
    clearSelected: (state) => {
      // eslint-disable-next-line
      state.value = [];
      setStorage(state.value);
    },
  },
});

const {addToSelected, removeFromSelected, clearSelected} = selectedSlice.actions;
export {selectedSlice, addToSelected, removeFromSelected, clearSelected};

export default selectedSlice.reducer;
