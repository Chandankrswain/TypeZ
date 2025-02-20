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
  totalTime: 10, // Default total time
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setWPM: (state) => {
      const wpm = Math.round((state.correctChars / 5 / state.totalTime) * 60);
      state.wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    },
    setErrors: (state, action: PayloadAction<number>) => {
      state.errors = action.payload;
    },
    setTotalTime: (state, action: PayloadAction<number>) => {
      state.totalTime = action.payload;
    },
  },
});

export const { setWPM, setErrors, setTotalTime } = resultSlice.actions;

export default resultSlice.reducer;
