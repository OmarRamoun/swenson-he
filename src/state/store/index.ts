import {configureStore} from '@reduxjs/toolkit';

import savedReducer from '../slices/saved';
import selectedReducer from '../slices/selected';

const store = configureStore({
  reducer: {
    selected: selectedReducer,
    saved: savedReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {RootState, AppDispatch};
export {store};
