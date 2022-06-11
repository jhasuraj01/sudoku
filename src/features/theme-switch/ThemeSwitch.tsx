import React from 'react';
import styles from './ThemeSwitch.module.scss';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { toggle, selectTheme } from './ThemeSwitchSlice';
import { ReactComponent as Sun } from '../../assets/Sun.svg'
import { ReactComponent as Moon } from '../../assets/Moon.svg'

export function ThemeSwitch() {

  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch()

  const url = new URL(window.location.href);

  if(theme === 'dark') {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    url.searchParams.set('theme', 'dark')
  }
  else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
    url.searchParams.set('theme', 'light')
  }

  window.history.replaceState(null, document.title, url.href);

  return (
    <button className={styles.button} onClick={() => dispatch(toggle())}>
      {theme === 'dark' ? <Sun /> : <Moon /> }
    </button>
  );
}
