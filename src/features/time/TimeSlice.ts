import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TimeState {
  start: number;
  end: number | null;
}

const initialState: TimeState = {
  start: Date.now(),
  end: null
}

export const timeSlice = createSlice({
  name: 'Time',
  initialState,
  reducers: {
    restartTime(state) {
      state.start = Date.now();
      state.end = null
    },
    stopTime(state) {
        state.end = Date.now();
    },
  },
});

export const { restartTime, stopTime } = timeSlice.actions;

export const selectTime = (state: RootState) => state.time;

export default timeSlice.reducer;