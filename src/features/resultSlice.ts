import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultState {
  wpm: number;
  errors: number;
  correctChars: number;
  totalTime: number;
}

const initialState: ResultState = {
  wpm: 0,
  errors: 0,
  correctChars: 0,
  totalTime: 10,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    SET_CORRECT_CHARS: (state, action: PayloadAction<number>) => {
      state.correctChars = action.payload;
    },
    SET_WPM: (state, action) => {
      state.totalTime = action.payload;
      console.log(state.correctChars, state.totalTime);
      const wpm = Math.round((state.correctChars / 5 / state.totalTime) * 60);
      state.wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    },
    SET_ERRORS: (state, action: PayloadAction<number>) => {
      state.errors = action.payload;
    },
  },
});

export const { SET_WPM, SET_ERRORS, SET_CORRECT_CHARS } = resultSlice.actions;

export default resultSlice.reducer;
