import {configureStore} from '@reduxjs/toolkit';

import selectedReducer from '../slices/selected';

const store = configureStore({
  reducer: {
    selected: selectedReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {RootState, AppDispatch};
export {store};
