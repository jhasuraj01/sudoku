import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: 'dark',
};

export const themeSwitchSlice = createSlice({
  name: 'ThemeSwitch',
  initialState,
  reducers: {
    lighten: (state) => {
      state.mode = 'light';
    },
    darken: (state) => {
      state.mode = 'dark';
    },
    toggle: (state) => {
        state.mode = state.mode === 'dark' ? 'light' : 'dark';
    }
  },
});

export const { lighten, darken, toggle } = themeSwitchSlice.actions;

export const selectTheme = (state: RootState) => state.themeSwitch.mode;

export default themeSwitchSlice.reducer;