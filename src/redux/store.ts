import { configureStore } from "@reduxjs/toolkit";
import randomWordsReducer from "../features/randomWordsSlice";
import timeCountReducer from "../features/timeCount";
import typingWordsSlice from "../features/typingWordsSlice";

export const store = configureStore({
  reducer: {
    randomWords: randomWordsReducer,
    timeCount: timeCountReducer,
    typingWords: typingWordsSlice,
  },
});

// ✅ Define RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
