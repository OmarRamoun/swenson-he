import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {SavedItem} from '@types';
import {getItem, setItem} from '@utils/storage';

const initialValue: SavedItem[] = [];

const savedData = getItem('saved');
const storage: SavedItem[] = savedData ? JSON.parse(savedData) : null;
const setStorage = (value: SavedItem[]) => setItem('saved', JSON.stringify(value));

const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    value: storage || initialValue,
  },
  reducers: {
    addToSaved: (state, action: PayloadAction<SavedItem>) => {
      // eslint-disable-next-line
      state.value = [...state.value, action.payload];
      setStorage(state.value);
    },
    clearSaved: (state) => {
      // eslint-disable-next-line
      state.value = [];
      setStorage(state.value);
    },
  },
});

const {addToSaved, clearSaved} = savedSlice.actions;
export {savedSlice, addToSaved, clearSaved};

export default savedSlice.reducer;
