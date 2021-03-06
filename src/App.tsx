import React, { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Button } from './components/Button';
import { Board } from './features/board/Board';
import { KeyBoard } from './features/keyboard/KeyBoard';
import { ThemeSwitch } from './features/theme-switch/ThemeSwitch';
import { Time } from './features/time/Time';
import { restartTime, stopTime } from './features/time/TimeSlice';
import { restartGame, newGame, selectBoard } from './features/board/BoardSlice';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'

function App() {

  const dispatch = useAppDispatch();
  const { width, height } = useWindowSize();
  const { solved } = useAppSelector(selectBoard);

  const startNewGame = () => {
    dispatch(restartTime());
    dispatch(newGame());
  }

  const restartCurrentGame = () => {
    dispatch(restartTime());
    dispatch(restartGame());
  }

  useEffect(() => {
    if(solved) {
      dispatch(stopTime());
    }
  }, [dispatch, solved])

  return (
    <>
      <div className='time'>
        <Time />
      </div>
      <div className='main'>
        <Board />
        <KeyBoard />
      </div>
      <div className="action-buttons">
        <Button text="New Game" onClick={startNewGame} />
        <Button text="Restart" onClick={restartCurrentGame} />
        {/* <Button text="Auto Mode" /> */}
      </div>
      <ThemeSwitch />
      {solved ? <Confetti className='confetti' width={width} height={height} /> : <></>}
      
    </>
  );
}

export default App;
