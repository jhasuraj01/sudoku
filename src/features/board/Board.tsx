import React from 'react';
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

  const { data, selected } = useAppSelector(selectBoard);
  const dispatch = useAppDispatch()

  return (
    <div className={styles.board}>
      {
        data.map((row, rid) => {
          return (
            <div key={`${rid}`} className={styles.row}>
              {row.map((value, cid) => {
                return (
                  <Grid
                    onClick={() => dispatch(select({ col: cid, row: rid }))}
                    key={`${cid}`}
                    selected={selected.row === rid && selected.col === cid}
                    highlighted={isHighlighted(selected, rid, cid)}
                    value={value}
                    error={false} />
                )
              })}
            </div>
          )
        })
      }
    </div>
  );
}
