import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>{ text }</button>
  );
}
