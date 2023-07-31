import { configureStore } from '@reduxjs/toolkit';
import { ptStoreSlice } from './features/ptstore';

export const store = configureStore({
  reducer: {
    ptStore: ptStoreSlice.reducer,
  },
});
