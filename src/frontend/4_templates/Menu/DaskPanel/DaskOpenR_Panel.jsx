import classes from '../Menu.module.css';
import React, { useContext } from 'react';
import UserContext from '../../../../DiaryDbContext';
import ButtonLongIcon from '../../../1_atoms/Buttons/ButtonLongIcon/ButtonLongIcon';
import AddBlockForm from '../../BlocksContainer/AddBlockForm';

function DaskOpenR_Panel({ refreshBlocks }) {
  const { leftPanelOpen, setLeftPanelOpen } = useContext(UserContext);

  const ToggleLeftBar = () => {
    setLeftPanelOpen(prev => !prev);
  };

  return (
    <div className={classes.leftPanelOpen}>
      <div>
        <AddBlockForm onAdd={refreshBlocks} />
      </div>
      <ButtonLongIcon className={classes.leftButton} onClick={ToggleLeftBar}>←</ButtonLongIcon>
    </div>
  );
}

export default DaskOpenR_Panel;

