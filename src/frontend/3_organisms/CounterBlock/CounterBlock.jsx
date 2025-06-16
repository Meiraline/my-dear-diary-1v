import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import styles from './CounterBlock.module.css';
import closeIcon from '../../pictchers/icon/Крестик в кружке.svg';

const CounterBlock = ({ id, x, y, width, height, data, onUpdatePosition, onDelete }) => {
  const [count, setCount] = useState(data?.count || 0);

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
        <h3>Счётчик</h3>
        <p>{count}</p>
        <button onClick={() => setCount(c => c + 1)}>+1</button>
        <button onClick={() => setCount(c => c - 1)}>-1</button>
      </div>
    </Rnd>
  );
};

export default CounterBlock;

