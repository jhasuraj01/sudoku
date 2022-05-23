import React from 'react';
import './App.scss';
import { Button } from './components/Button';
import { Board } from './features/board/Board';
import { KeyBoard } from './features/keyboard/KeyBoard';
import { ThemeSwitch } from './features/theme-switch/ThemeSwitch';
import { Time } from './features/time/Time';

function App() {
  return (
    <>
      <div className='left'>
        <Time />
      </div>
      <div className='main'>
        <Board />
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
