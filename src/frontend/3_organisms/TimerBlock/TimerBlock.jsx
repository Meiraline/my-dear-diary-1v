import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import styles from './TimerBlock.module.css';
import closeIcon from '../../pictchers/icon/Крестик в кружке.svg';

const TimerBlock = ({ id, x, y, width, height, data, onUpdatePosition, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState(data?.duration || 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft <= 0) {
      setIsRunning(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(data?.duration || 60);
  };

  return (
    <Rnd
      default={{ x, y, width, height }}
      onDragStop={(e, d) => onUpdatePosition(id, d.x, d.y, width, height)}
      onResizeStop={(e, direction, ref, delta, position) =>
        onUpdatePosition(id, position.x, position.y, ref.offsetWidth, ref.offsetHeight)
      }
    >
      <div className={styles.block}>
        <img src={closeIcon} className={styles.close} alt="Удалить" onClick={() => onDelete(id)} />
        <h3>Таймер</h3>
        <p>⏱ {timeLeft} сек</p>
        <div>
          <button onClick={startTimer}>Старт</button>
          <button onClick={stopTimer}>Стоп</button>
          <button onClick={resetTimer}>Сброс</button>
        </div>
      </div>
    </Rnd>
  );
};

export default TimerBlock;

