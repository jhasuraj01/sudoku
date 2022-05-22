import React from 'react';
import styles from './ThemeSwitch.module.scss';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { toggle, selectTheme } from './ThemeSwitchSlice';
import { ReactComponent as Sun } from '../../assets/Sun.svg'
import { ReactComponent as Moon } from '../../assets/Moon.svg'

export function ThemeSwitch() {

  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch()

  if(theme === 'dark') {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }

  return (
    <button className={styles.button} onClick={() => dispatch(toggle())}>
      {theme === 'dark' ? <Sun /> : <Moon /> }
    </button>
  );
}
