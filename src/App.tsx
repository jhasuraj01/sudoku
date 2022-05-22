import React from 'react';
import './App.scss';
import { Button } from './components/Button';
import { Board } from './features/board/Board';
import { KeyBoard } from './features/keyboard/KeyBoard';
import { ThemeSwitch } from './features/theme-switch/ThemeSwitch';
import { Time } from './features/time/Time';

const data = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

function App() {
  return (
    <>
      <div className='left'>
        <Time value={10000000} />
      </div>
      <div className='main'>
        <Board data={data} />
        <KeyBoard />
      </div>
      <div className="right">
        <Button text="New Game" />
        <Button text="Restart" />
        <Button text="Auto Mode" />
      </div>
      <ThemeSwitch />
    </>
  );
}

export default App;
