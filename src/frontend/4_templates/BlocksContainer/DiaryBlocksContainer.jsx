import React, { useEffect, useState } from 'react';
import CounterBlock from '../../3_organisms/CounterBlock/CounterBlock';
import NoteBlock from '../../3_organisms/NoteBlock/NoteBlock';
import TimerBlock from '../../3_organisms/TimerBlock/TimerBlock';
import { getAllBlocks, saveBlockState, deleteBlock } from '../../../data_base/userDiaryDb';

const DiaryBlocksContainer = ({ reloadTrigger }) => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    loadBlocks();
  }, [reloadTrigger]);

  async function loadBlocks() {
    const allBlocks = await getAllBlocks();
    setBlocks(allBlocks);
  }

  async function handleDelete(id) {
    await deleteBlock(id);
    loadBlocks();
  }

  async function handleUpdatePosition(id, x, y, width, height) {
    const block = blocks.find(b => b.id === id);
    if (!block) return;
    await saveBlockState({
      ...block,
      x,
      y,
      width,
      height
    });
  }

  return (
    <div>
      {blocks.map(block => {
        const commonProps = {
          id: block.id,
          x: block.x,
          y: block.y,
          width: block.width,
          height: block.height,
          data: block.data,
          onUpdatePosition: handleUpdatePosition,
          onDelete: handleDelete
        };

        switch (block.type) {
          case 'counter':
            return <CounterBlock key={block.id} {...commonProps} />;
          case 'note':
            return <NoteBlock key={block.id} {...commonProps} />;
          case 'timer':
            return <TimerBlock key={block.id} {...commonProps} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default DiaryBlocksContainer;
