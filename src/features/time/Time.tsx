import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import styles from './Time.module.scss';
import { selectTime } from './TimeSlice';

const numToString = (num: number, size: number = 2): string => {
  const result = "00" + String(num);
  return result.substring(result.length - size);
}

export function Time() {

  const { start, end } = useAppSelector(selectTime);

  let [value, setValue] = useState((end || Date.now()) - start);

  useEffect(() => {
    setValue((end || Date.now()) - start);
    const updateTimeValue = () => {
      setValue((end || Date.now()) - start);
    }
    const interval = setInterval(updateTimeValue, 1000);
    return () => clearInterval(interval);
  }, [start, end])

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
