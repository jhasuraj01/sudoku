import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Board.module.scss';

interface BoardProps {
  data: number[][];
}

export function Board({ data }: BoardProps) {

  return (
    <div className={styles.board}>
      {
        data.map((row, rid) => {
          return (
            <div key={`${rid}`} className={styles.row}>
              {row.map((value, cid) => <Grid key={`${cid}`} value={value} error={false} />)}
            </div>
          )
        })
      }
    </div>
  );
}
