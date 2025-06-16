import React, { useState } from 'react';
import { saveBlockState } from '../../../data_base/userDiaryDb';
import { v4 as uuidv4 } from 'uuid';

const AddBlockForm = ({ onAdd }) => {
  const [type, setType] = useState('note');
  const [noteText, setNoteText] = useState('');
  const [timerLength, setTimerLength] = useState(300);
  const [counterStart, setCounterStart] = useState(0);

  async function handleAddBlock(e) {
    e.preventDefault();

    const id = uuidv4(); // важно: корректный UUID

    let data = {};
    switch (type) {
      case 'note':
        data = { text: noteText };
        break;
      case 'timer':
        data = { time: timerLength, active: false, initialTime: timerLength };
        break;
      case 'counter':
        data = { count: counterStart };
        break;
    }

    const newBlock = {
      id,
      type,
      x: 10,
      y: 10,
      width: type === 'note' ? 300 : (type === 'timer' ? 240 : 220),
      height: type === 'note' ? 200 : (type === 'timer' ? 180 : 120),
      data
    };

    await saveBlockState(newBlock);

    setNoteText('');
    setTimerLength(300);
    setCounterStart(0);

    if (onAdd) onAdd(); // важно для обновления
  }

  return (
    <form onSubmit={handleAddBlock} style={{ marginBottom: '20px' }}>
      <label>
        Тип блока:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="note">Заметка</option>
          <option value="timer">Таймер</option>
          <option value="counter">Счётчик</option>
        </select>
      </label>

      {type === 'note' && (
        <div>
          <label>
            Текст заметки:
            <textarea value={noteText} onChange={e => setNoteText(e.target.value)} />
          </label>
        </div>
      )}

      {type === 'timer' && (
        <div>
          <label>
            Длина таймера (сек):
            <input
              type="number"
              min="1"
              value={timerLength}
              onChange={e => setTimerLength(Number(e.target.value))}
            />
          </label>
        </div>
      )}

      {type === 'counter' && (
        <div>
          <label>
            Начальное значение счётчика:
            <input
              type="number"
              value={counterStart}
              onChange={e => setCounterStart(Number(e.target.value))}
            />
          </label>
        </div>
      )}

      <button type="submit">Добавить блок</button>
    </form>
  );
};

export default AddBlockForm;
