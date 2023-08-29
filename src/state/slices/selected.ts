import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {getItem, setItem} from '@utils/storage';

interface SelectedItemProps {
  id: number;
  avgBudget: number;
}

const initialValue: SelectedItemProps[] = [];

const selectedData = getItem('selected');
const storage: SelectedItemProps[] = selectedData ? JSON.parse(selectedData) : null;
const setStorage = (value: SelectedItemProps[]) => setItem('selected', JSON.stringify(value));

const selectedSlice = createSlice({
  name: 'selected',
  initialState: {
    value: storage || initialValue,
  },
  reducers: {
    add: (state, action: PayloadAction<SelectedItemProps>) => {
      // eslint-disable-next-line
      state.value = [...state.value, action.payload];
      setStorage(state.value);
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemIdToRemove = action.payload;
      // eslint-disable-next-line
      state.value = state.value.filter((item) => item.id !== itemIdToRemove);
      setStorage(state.value);
    },
    clear: (state) => {
      // eslint-disable-next-line
      state.value = [];
      setStorage(state.value);
    },
  },
});

const {add, remove, clear} = selectedSlice.actions;
export {selectedSlice, add, remove, clear};

export default selectedSlice.reducer;
