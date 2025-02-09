import { createSlice } from "@reduxjs/toolkit";
import { generate } from "random-words";

const initialState = {
  value: generate({ exactly: 25, join: " " }),
};

export const randomWordsSlice = createSlice({
  name: "randomWords",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = randomWordsSlice.actions;

export default randomWordsSlice.reducer;
