import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import styles from './NoteBlock.module.css';
import closeIcon from '../../pictchers/icon/Крестик в кружке.svg';

const NoteBlock = ({ id, x, y, width, height, data, onUpdatePosition, onDelete }) => {
  const [text, setText] = useState(data?.text || '');

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
        <h3>Заметка</h3>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите текст заметки"
        />
      </div>
    </Rnd>
  );
};

export default NoteBlock;

