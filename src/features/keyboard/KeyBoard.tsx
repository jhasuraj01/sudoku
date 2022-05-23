import React, { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { update } from '../board/BoardSlice';
import styles from './KeyBoard.module.scss';

export function KeyBoard() {
  const dispatch = useAppDispatch()

  const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  useEffect(() => {
    const handleNumKeyPress = (event: KeyboardEvent) => {

      if(event.key === 'Backspace' || event.key === 'Delete') {
        dispatch(update(0));
        return;
      }

      const key = Number(event.key);
      if (0 <= key && key <= 9) {
        dispatch(update(key));
      }
    }
    window.addEventListener('keydown', handleNumKeyPress);
    return () => window.removeEventListener('keydown', handleNumKeyPress);
  }, [dispatch])

  return (
    <div className={styles.board}>
      {keys.map(value => <button onClick={() => dispatch(update(Number(value)))} key={value}>{value}</button>)}
    </div>
  );
}
