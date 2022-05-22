import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeSwitchReducer from '../features/theme-switch/ThemeSwitchSlice';
import boardSliceReducer from '../features/board/BoardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeSwitch: themeSwitchReducer,
    board: boardSliceReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
