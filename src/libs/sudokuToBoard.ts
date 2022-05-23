import { isInvalidInput } from './sudoku'
export interface BoardElement {
    value: number,
    error: boolean
}

const sudokuToBoards = (sudoku: number[][]): BoardElement[][] => {
    const board: BoardElement[][] = [];

    for(let row = 0; row < 9; ++row) {
        board.push([]);
        for(let col = 0; col < 9; ++col) {
            board[row].push({
                value: sudoku[row][col],
                error: isInvalidInput(sudoku, row, col, sudoku[row][col]),
            })
        }
    }

    return board;
}

export default sudokuToBoards;