import React from 'react';
import styles from './Grid.module.scss';

interface GridProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  value: number;
  error: boolean;
  selected: boolean;
  highlighted: boolean;
  prefilled: boolean;
  solved: boolean;
}

export function Grid({ onClick, value, error, selected, highlighted, prefilled, solved }: GridProps) {

  const classNames = [styles.grid];
  if (error) classNames.push(styles.error);
  if (selected) classNames.push(styles.selected);
  if (highlighted) classNames.push(styles.highlighted);
  if (prefilled) classNames.push(styles.prefilled);
  if (solved) classNames.push(styles.solved);

  return (
    <div onClick={onClick} className={classNames.join(" ")}>{value ? value : ""}</div>
  );
}
