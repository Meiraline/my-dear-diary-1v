import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import styles from './TimerBlock.module.css';
import closeIcon from '../../pictchers/icon/Крестик в кружке.svg';
import { useTranslation } from 'react-i18next';

const TimerBlock = ({ id, x, y, width, height, data, onUpdatePosition, onDelete }) => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(data?.time || 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft <= 0) {
      setIsRunning(false);
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => { if (timeLeft > 0) setIsRunning(true); };
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(data?.time || 60);
  };

  return (
    <Rnd
      default={{ x, y, width, height }}
      onDragStop={(e, d) => onUpdatePosition(id, d.x, d.y, width, height)}
      onResizeStop={(e, dir, ref, delta, pos) =>
        onUpdatePosition(id, pos.x, pos.y, ref.offsetWidth, ref.offsetHeight)
      }
    >
      <div className={styles.block}>
        <img
          src={closeIcon}
          className={styles.close}
          alt={t('common.delete')}
          onClick={() => onDelete && onDelete(id)}
          title={t('common.delete')}
        />
        <h3>{data?.title || t('timerBlock.titleDefault')}</h3>
        <p>⏱ {timeLeft} {t('timerBlock.seconds')}</p>
        <div>
          <button onClick={startTimer}>{t('timerBlock.start')}</button>
          <button onClick={stopTimer}>{t('timerBlock.stop')}</button>
          <button onClick={resetTimer}>{t('timerBlock.reset')}</button>
        </div>
      </div>
    </Rnd>
  );
};

export default TimerBlock;
