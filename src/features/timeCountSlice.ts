import { createSlice } from "@reduxjs/toolkit";

export const timeCountSlice = createSlice({
  name: "timeCount",
  initialState: {
    value: 10,
    isTimerRunning: false, // 🔹 Added to track if the timer is running
  },
  reducers: {
    UPDATE_TIME: (state, action) => {
      state.value = action.payload;
      state.isTimerRunning = false; // Reset timer state when time is updated
    },
    TIME_COUNTDOWN: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    START_TIMER: (state) => {
      state.isTimerRunning = true;
    },
    RESET_TIMER: (state) => {
      state.isTimerRunning = false;
      state.value = 10; // Reset to default
    },
  },
});

export const { UPDATE_TIME, TIME_COUNTDOWN, START_TIMER, RESET_TIMER } =
  timeCountSlice.actions;

export default timeCountSlice.reducer;
