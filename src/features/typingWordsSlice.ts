import { createSlice } from "@reduxjs/toolkit";

export const typingWordsSlice = createSlice({
  name: "typingWords",
  initialState: {
    value: "",
  },
  reducers: {
    HANDLE_CHANGE: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {} = typingWordsSlice.actions;

export default typingWordsSlice.reducer;
