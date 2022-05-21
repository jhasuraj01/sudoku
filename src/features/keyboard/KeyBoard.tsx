import React from 'react';
import styles from './KeyBoard.module.scss';

export function KeyBoard() {

  const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className={styles.board}>
      {keys.map(value => <button key={value}>{value}</button>)}
    </div>
  );
}
