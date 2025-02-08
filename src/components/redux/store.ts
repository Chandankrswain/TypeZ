import { configureStore } from "@reduxjs/toolkit";
import randomWordsReducer from "../features/randomWordsSlice";

export const store = configureStore({
  reducer: {
    randomWords: randomWordsReducer,
  },
});

// ✅ Define RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
