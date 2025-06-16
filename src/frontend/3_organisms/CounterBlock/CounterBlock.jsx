import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import styles from './CounterBlock.module.css';
import closeIcon from '../../pictchers/icon/Крестик в кружке.svg';
import { useTranslation } from 'react-i18next';

const CounterBlock = ({ id, x, y, width, height, data, onUpdatePosition, onDelete }) => {
  const { t } = useTranslation();
  const [count, setCount] = useState(data?.count || 0);

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
        <h3>{data?.title || t('counterBlock.titleDefault')}</h3>
        <p>{count}</p>
        <button onClick={() => setCount(c => c + 1)}>{t('counterBlock.increment')}</button>
        <button onClick={() => setCount(c => c - 1)}>{t('counterBlock.decrement')}</button>
      </div>
    </Rnd>
  );
};

export default CounterBlock;



