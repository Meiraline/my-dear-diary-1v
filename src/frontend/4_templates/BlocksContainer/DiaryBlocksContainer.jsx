import React, { useEffect, useState } from 'react';
import CounterBlock from '../../3_organisms/CounterBlock/CounterBlock';
import NoteBlock from '../../3_organisms/NoteBlock/NoteBlock';
import TimerBlock from '../../3_organisms/TimerBlock/TimerBlock';
import { getAllBlocks, saveBlockState, deleteBlock } from '../../../data_base/userDiaryDb';
import { useTranslation } from 'react-i18next';

const DiaryBlocksContainer = ({ reloadTrigger }) => {
  const { t } = useTranslation();
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    getAllBlocks().then(setBlocks);
  }, [reloadTrigger]);

  const handleDelete = async id => {
    await deleteBlock(id);
    setBlocks(await getAllBlocks());
  };

  const handleUpdate = async (id, x, y, width, height) => {
    const block = blocks.find(b => b.id === id);
    if (!block) return;
    await saveBlockState({ ...block, x, y, width, height });
  };

  return (
    <div>
      {blocks.map(b => (
        <div key={b.id} style={{ position: 'absolute', zIndex: 1 }}>
          {{
            'note': <NoteBlock {...b} onUpdatePosition={handleUpdate} onDelete={handleDelete} />,
            'counter': <CounterBlock {...b} onUpdatePosition={handleUpdate} onDelete={handleDelete} />,
            'timer': <TimerBlock {...b} onUpdatePosition={handleUpdate} onDelete={handleDelete} />
          }[b.type]}
        </div>
      ))}
    </div>
  );
};

export default DiaryBlocksContainer;

