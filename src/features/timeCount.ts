import { createSlice } from "@reduxjs/toolkit";

export const timeCountSlice = createSlice({
  name: "timeCount",
  initialState: {
    value: 10,
  },
  reducers: {
    UPDATE_TIME: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { UPDATE_TIME } = timeCountSlice.actions;

export default timeCountSlice.reducer;
