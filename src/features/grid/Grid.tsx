import React from 'react';
import styles from './Grid.module.scss';

export function Grid({ value, error }: { value: number, error: boolean }) {

  const classNames = [styles.grid];
  if(error) classNames.push(styles.error);

  return (
      <div className={classNames.join(" ")}>{ value }</div>
  );
}
