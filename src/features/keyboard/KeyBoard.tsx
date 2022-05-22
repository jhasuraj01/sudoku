import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { update } from '../board/BoardSlice';
import styles from './KeyBoard.module.scss';

export function KeyBoard() {
  const dispatch = useAppDispatch()

  const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className={styles.board}>
      {keys.map(value => <button onClick={() => dispatch(update(Number(value)))} key={value}>{value}</button>)}
    </div>
  );
}
