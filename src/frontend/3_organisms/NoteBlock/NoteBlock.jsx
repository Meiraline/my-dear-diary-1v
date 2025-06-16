import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import styles from './NoteBlock.module.css';
import closeIcon from '../../pictchers/icon/Крестик в кружке.svg';
import { useTranslation } from 'react-i18next';

const NoteBlock = ({ id, x, y, width, height, data, onUpdatePosition, onDelete }) => {
  const { t } = useTranslation();
  const [text, setText] = useState(data?.text || '');

  return (
    <Rnd
      default={{ x, y, width, height }}
      onDragStop={(e, d) => onUpdatePosition(id, d.x, d.y, width, height)}
      onResizeStop={(e, dir, ref, delta, pos) =>
        onUpdatePosition(id, pos.x, pos.y, ref.offsetWidth, ref.offsetHeight)
      }
    >
      <div className={styles.block}>
        <div className={styles.header}>
          <h3>{data?.title || t('noteBlock.titleDefault')}</h3>
          <img
            src={closeIcon}
            className={styles.close}
            alt={t('common.delete')}
            onClick={() => onDelete && onDelete(id)}
            title={t('common.delete')}
          />
        </div>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={t('noteBlock.placeholder')}
        />
      </div>
    </Rnd>
  );
};

export default NoteBlock;



