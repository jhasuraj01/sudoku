import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Sudoku, isSolved } from '../../libs/sudoku';
import sudokuToBoard, { BoardElement } from '../../libs/sudokuToBoard';

export type GridLocation = {
  row: number;
  col: number;
}

export interface BoardState {
  data: number[][];
  board: BoardElement[][];
  initial: number[][];
  final: number[][];
  solved: boolean;
  selected: GridLocation;
}

const sudoku = new Sudoku();

const initialState: BoardState = {
  data: sudoku.initial,
  board: sudokuToBoard(sudoku.initial, sudoku.initial),
  initial: sudoku.initial,
  final: sudoku.final,
  solved: false,
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
    },
    update(state, action: PayloadAction<number>) {
      const target = state.selected;

      // don't update once solved
      if(state.solved) return;

      // don't update prefilled blocks
      if(state.board[target.row][target.col].prefilled) 
        return;

      state.data[target.row][target.col] = action.payload;
      state.board = sudokuToBoard(state.data, state.initial);
  
      if(isSolved(state.data)) {
        state.solved = true;
      }

    },
    restartGame (state) {
      state.data = state.initial;
      state.board = sudokuToBoard(state.data, state.initial);
      state.solved = false;
    },
    newGame(state) {
      const sudoku = new Sudoku();
      state.data = sudoku.initial;
      state.initial = sudoku.initial;
      state.final = sudoku.final;
      state.board = sudokuToBoard(state.data, state.initial);
      state.solved = false;
    }
  },
});

export const { select, update, restartGame, newGame } = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board;

export default boardSlice.reducer;