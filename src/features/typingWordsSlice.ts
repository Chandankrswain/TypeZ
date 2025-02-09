import { createSlice } from "@reduxjs/toolkit";

export const typingWordsSlice = createSlice({
  name: "typingWords",
  initialState: {
    value: "",
  },
  reducers: {},
});

export const {} = typingWordsSlice.actions;

export default typingWordsSlice.reducer;
