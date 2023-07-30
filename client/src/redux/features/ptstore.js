import { createSlice } from "@reduxjs/toolkit";

export const ptStoreSlice = createSlice({
  name: 'ptStore',
  initialState: {
    selectedWorkoutForm: {},
  },
  reducers: {
    setSelectedWorkoutForm: (state, action) => {
      state.ptStore = action.payload;
    }
  },
});

export const { setSelectedWorkoutForm } = ptStoreSlice.reducer;
