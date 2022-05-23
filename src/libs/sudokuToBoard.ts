export interface BoardElement {
    value: number,
    error: boolean
}

const isInvalid = (sudoku: number[][], row: number, col: number, target: number): boolean => {

    if(target === 0) return false;

    for(let j = 0; j < 9; ++j) {
        if(j !== col && sudoku[row][j] === target) {
            return true;
        }
    }

    // col wise unique
    for(let j = 0; j < 9; ++j) {
        if(j !== row && sudoku[j][col] === target) {
            return true;
        }
    }

    // block wise
    const r = Math.floor(row / 3) * 3;
    const c = Math.floor(col / 3) * 3;

    for(let i = 0; i < 3; ++i) {
        for(let j = 0; j < 3; ++j) {
            if(!(r + i === row || c + j === col) && sudoku[r + i][c + j] === target) {
                return true;
            }
        }
    }

    return false;
}

export default (sudoku: number[][]): BoardElement[][] => {
    const board: BoardElement[][] = [];

    for(let row = 0; row < 9; ++row) {
        board.push([]);
        for(let col = 0; col < 9; ++col) {
            board[row].push({
                value: sudoku[row][col],
                error: isInvalid(sudoku, row, col, sudoku[row][col]),
            })
        }
    }

    return board;
}