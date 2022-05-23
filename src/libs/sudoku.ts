import { compare, PriorityQueue } from "@anorcle/dsa";

export const isInvalidInput = (sudoku: number[][], row: number, col: number, target: number): boolean => {

  if (target === 0) return false;

  for (let j = 0; j < 9; ++j) {
    if (j !== col && sudoku[row][j] === target) {
      return true;
    }
  }

  // col wise unique
  for (let j = 0; j < 9; ++j) {
    if (j !== row && sudoku[j][col] === target) {
      return true;
    }
  }

  // block wise
  const r = Math.floor(row / 3) * 3;
  const c = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (!(r + i === row || c + j === col) && sudoku[r + i][c + j] === target) {
        return true;
      }
    }
  }

  return false;
}

export const isSolved = (sudoku: number[][]): boolean => {
  for(let row = 0; row < 9; ++row) {
    for(let col = 0; col < 9; ++col) {
      if(sudoku[row][col] === 0)
        return false;
      if(isInvalidInput(sudoku, row, col, sudoku[row][col]))
        return false;
    }
  }
  return true;
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

type SudokuGridEntry = {
  order: number;
  value: number;
}

const compareSudokuGridEntry: compare<SudokuGridEntry> = (a, b) => {
  if(a.order > b.order) return +1; 
  if(a.order < b.order) return -1;
  return 0;
}

export class Sudoku {
  public initial: number[][];
  public final: number[][];

  constructor() {
    this.initial = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    this.final = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    this.build(0, 0);
    this.init(40);
  }

  private build(row: number, col: number): boolean {
    const next = 9 * row + col + 1;

    if (next > 81) {
      return true;
    }

    if (this.final[row][col] > 0) {
      return this.build(Math.floor(next / 9), next % 9);
    }

    const pq = new PriorityQueue<SudokuGridEntry>(compareSudokuGridEntry)
    for(let i = 1; i <= 9; ++i) {
      pq.push({
        value: i,
        order: getRandomIntInclusive(0, 100000000)
      })
    }

    while (pq.size) {
      const num = pq.pop().value;
      if (isInvalidInput(this.final, row, col, num)) continue;
      this.final[row][col] = num;
      if (this.build(Math.floor(next / 9), next % 9)) {
        return true;
      }
    }

    this.final[row][col] = 0;
    return false;
  }

  private init(size: number) {
    const pq = new PriorityQueue<SudokuGridEntry>(compareSudokuGridEntry)

    for(let i = 0; i < 81; ++i) {
      pq.push({
        value: i,
        order: getRandomIntInclusive(0, 100000000)
      })
    }
  
    while (size--) {
      const position = pq.pop().value;
      const row = Math.floor(position / 9);
      const col = Math.floor(position % 9);
      this.initial[row][col] = this.final[row][col];
    }
  }
}