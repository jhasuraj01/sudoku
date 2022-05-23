import { isInvalidInput } from './sudoku'
export interface BoardElement {
    value: number;
    error: boolean;
    prefilled: boolean;
}

const sudokuToBoards = (sudoku: number[][], initial: number[][]): BoardElement[][] => {
    const board: BoardElement[][] = [];

    for(let row = 0; row < 9; ++row) {
        board.push([]);
        for(let col = 0; col < 9; ++col) {
            board[row].push({
                value: sudoku[row][col],
                error: isInvalidInput(sudoku, row, col, sudoku[row][col]),
                prefilled: initial[row][col] > 0,
            })
        }
    }

    return board;
}

export default sudokuToBoards;