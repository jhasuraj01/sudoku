import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const url = new URL(window.location.href);

const theme = url.searchParams.get('theme')

export interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: theme === 'light' ? 'light' : 'dark',
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