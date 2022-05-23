import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Grid } from '../grid/Grid';
import styles from './Board.module.scss';
import { GridLocation, select, selectBoard } from './BoardSlice';

const isHighlighted = (selected: GridLocation, rid: number, cid: number): boolean => {
  if (selected.row === rid)
    return true;

  if (selected.col === cid)
    return true;

  if (Math.floor(selected.row / 3) === Math.floor(rid / 3) && Math.floor(selected.col / 3) === Math.floor(cid / 3))
    return true;

  return false;
}

export function Board() {

  const { board, selected } = useAppSelector(selectBoard);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleArrowKeys = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
          if(selected.row < 8) dispatch(select({row: selected.row + 1, col: selected.col}));
          break;
        case "ArrowRight":
          if(selected.col < 8) dispatch(select({...selected, col: selected.col + 1}));
          break;
        case "ArrowUp":
          if(selected.row > 0) dispatch(select({...selected, row: selected.row - 1}));
          break;
        case "ArrowLeft":
          if(selected.col > 0) dispatch(select({...selected, col: selected.col - 1}));
          break;
      }
    }
    window.addEventListener('keydown', handleArrowKeys)
    return () => window.removeEventListener('keydown', handleArrowKeys);
  }, [selected, dispatch])

  return (
    <div className={styles.board}>
      {
        board.map((row, rid) => {
          return (
            <div key={`${rid}`} className={styles.row}>
              {row.map((element, cid) => {
                return (
                  <Grid
                    onClick={() => dispatch(select({ col: cid, row: rid }))}
                    key={`${cid}`}
                    selected={selected.row === rid && selected.col === cid}
                    highlighted={isHighlighted(selected, rid, cid)}
                    value={element.value}
                    error={element.error} />
                )
              })}
            </div>
          )
        })
      }
    </div>
  );
}
