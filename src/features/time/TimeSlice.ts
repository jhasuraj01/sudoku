import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TimeState {
  start: Date;
  end: Date | null;
}

const initialState: TimeState = {
  start: new Date(),
  end: null
}

export const timeSlice = createSlice({
  name: 'Time',
  initialState,
  reducers: {
    restart(state) {
      state.start = new Date();
      state.end = null
    },
    stop(state) {
        state.end = new Date();
    },
  },
});

export const { restart, stop } = timeSlice.actions;

export const selectTime = (state: RootState) => state.time;

export default timeSlice.reducer;