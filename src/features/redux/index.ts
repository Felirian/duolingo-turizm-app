import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slice';

const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;