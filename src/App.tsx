import React from 'react';
import './App.scss';
import { useAppDispatch } from './app/hooks';
import { Button } from './components/Button';
import { Board } from './features/board/Board';
import { KeyBoard } from './features/keyboard/KeyBoard';
import { ThemeSwitch } from './features/theme-switch/ThemeSwitch';
import { Time } from './features/time/Time';
import { restartTime } from './features/time/TimeSlice';
import { restartGame, newGame } from './features/board/BoardSlice';

function App() {

  const dispatch = useAppDispatch();

  const startNewGame = () => {
    dispatch(restartTime());
    dispatch(newGame());
  }

  const restartCurrentGame = () => {
    dispatch(restartTime());
    dispatch(restartGame());
  }

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
        <Button text="New Game" onClick={startNewGame} />
        <Button text="Restart" onClick={restartCurrentGame} />
        <Button text="Auto Mode" />
      </div>
      <ThemeSwitch />
    </>
  );
}

export default App;
