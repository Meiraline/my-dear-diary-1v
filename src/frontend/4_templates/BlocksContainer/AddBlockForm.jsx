import React, { useState } from 'react';
import { saveBlockState } from '../../../data_base/userDiaryDb';
import { v4 as uuidv4 } from 'uuid';
import CustomSelect from '../../1_atoms/Inputs/Select/Select';
import Input from '../../1_atoms/Inputs/Input/Input';
import ButtonText from '../../1_atoms/Buttons/ButtonText/ButtonText';
import { useTranslation } from 'react-i18next';

const AddBlockForm = ({ onAdd }) => {
  const { t } = useTranslation();
  const [type, setType] = useState('note');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [timerTitle, setTimerTitle] = useState('');
  const [timerLength, setTimerLength] = useState(300);
  const [counterTitle, setCounterTitle] = useState('');
  const [counterStart, setCounterStart] = useState(0);

  async function handleAdd(e) {
    e.preventDefault();
    const id = uuidv4();
    const data = {
      ...(type === 'note' && { text: noteText, title: noteTitle }),
      ...(type === 'timer' && { time: timerLength, active: false, initialTime: timerLength, title: timerTitle }),
      ...(type === 'counter' && { count: counterStart, title: counterTitle })
    };
    const newBlock = {
      id,
      type,
      x: 10,
      y: 10,
      width: type === 'note' ? 300 : type === 'timer' ? 240 : 220,
      height: type === 'note' ? 200 : type === 'timer' ? 180 : 120,
      data
    };
    await saveBlockState(newBlock);
    if (onAdd) onAdd();
    setNoteTitle('');
    setNoteText('');
    setTimerTitle('');
    setTimerLength(300);
    setCounterTitle('');
    setCounterStart(0);
  }

  return (
    <form onSubmit={handleAdd} style={{ maxWidth: 400 }}>
      <label>{t('blockType')}:</label>
      <br /><br />
      <CustomSelect
        value={type}
        onChange={setType}
        options={[
          { value: 'note', name: t('note') },
          { value: 'timer', name: t('timer') },
          { value: 'counter', name: t('counter') }
        ]}
        style={{ width: '100%' }} // передаём стиль ширины
      />
      {type === 'note' && (
        <>
          <label>{t('noteTitleLabel')}</label>
          <br /><br />
          <Input
            value={noteTitle}
            onChange={e => setNoteTitle(e.target.value)}
            style={{ width: '100%' }}
          />
          <br /><br />
          <label>{t('noteTextLabel')}</label>
          <textarea
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            style={{ width: '100%', minHeight: 80, resize: 'vertical' }}
          />
        </>
      )}
      {type === 'timer' && (
        <>
          <label>{t('timerTitleLabel')}</label>
          <br /><br />
          <Input
            value={timerTitle}
            onChange={e => setTimerTitle(e.target.value)}
            style={{ width: '100%' }}
          />
          <br /><br />
          <label>{t('timerLengthLabel')}</label>
          <br /><br />
          <Input
            type="number"
            value={timerLength}
            onChange={e => setTimerLength(+e.target.value)}
            style={{ width: '100%' }}
          />
        </>
      )}
      {type === 'counter' && (
        <>
          <label>{t('counterTitleLabel')}</label>
          <br /><br />
          <Input
            value={counterTitle}
            onChange={e => setCounterTitle(e.target.value)}
            style={{ width: '100%' }}
          />
          <br /><br />
          <label>{t('counterStartLabel')}</label>
          <br /><br />
          <Input
            type="number"
            value={counterStart}
            onChange={e => setCounterStart(+e.target.value)}
            style={{ width: '100%' }}
          />
        </>
      )}
      <br /><br />
      <ButtonText>{t('addBlock')}</ButtonText>
    </form>
  );
};

export default AddBlockForm;


