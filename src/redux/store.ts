import { configureStore } from "@reduxjs/toolkit";
import randomWordsReducer from "../features/randomWordsSlice";
import timeCountReducer from "../features/timeCountSlice";
import typingWordsReducer from "../features/typingWordsSlice";
import resultReducer from "../features/resultSlice";

export const store = configureStore({
  reducer: {
    randomWords: randomWordsReducer,
    timeCount: timeCountReducer,
    typingWords: typingWordsReducer,
    result: resultReducer,
  },
});

// ✅ Define RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
