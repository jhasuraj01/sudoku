import React from 'react';
import styles from './Grid.module.scss';

interface GridProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  value: number;
  error: boolean;
  selected: boolean;
  highlighted: boolean;
}

export function Grid({ onClick, value, error, selected, highlighted }: GridProps) {

  const classNames = [styles.grid];
  if(error) classNames.push(styles.error);
  if(selected) classNames.push(styles.selected);
  if(highlighted) classNames.push(styles.highlighted);

  return (
      <div onClick={onClick} className={classNames.join(" ")}>{ value ? value : "" }</div>
  );
}
