import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type GridLocation = {
  row: number;
  col: number;
}

export interface BoardState {
  data: number[][];
  selected: GridLocation;
}

const initialState: BoardState = {
  data: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  selected: {
    row: 0,
    col: 0,
  }
};

export const boardSlice = createSlice({
  name: 'Board',
  initialState,
  reducers: {
    select(state, action: PayloadAction<GridLocation>) {
      state.selected.col = action.payload.col;
      state.selected.row = action.payload.row;
    }
  },
});

export const { select } = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board;

export default boardSlice.reducer;