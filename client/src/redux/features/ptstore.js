import { createSlice } from "@reduxjs/toolkit";

export const ptStoreSlice = createSlice({
  name: 'ptStore',
  initialState: {
    selectedWorkoutForm: {},
  },
  reducers: {
    setSelectedWorkoutForm: (state, action) => {
      state.selectedWorkoutForm = action.payload;
    }
  },
});

export const { setSelectedWorkoutForm } = ptStoreSlice.actions;
export default ptStoreSlice.reducer;
