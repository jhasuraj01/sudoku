import React from 'react';
import styles from './Time.module.scss';

interface TimeProps {
  value: number;
}

const numToString = (num: number, size: number = 2): string => {
  const result = "00" + String(num);
  return result.substring(result.length - size);
}

export function Time({ value }: TimeProps) {

  const hour: number = Math.floor(value / 3600000);
  value -= hour * 3600000;
  const min: number  = Math.floor(value / 60000);
  value -= min * 60000;
  const sec: number = Math.floor(value / 1000);

  return (
    <div className={styles.clock}>
      <div>SUKODU</div>
      <div>{`${numToString(hour)}:${numToString(min)}:${numToString(sec)}`}</div>
    </div>
  );
}
