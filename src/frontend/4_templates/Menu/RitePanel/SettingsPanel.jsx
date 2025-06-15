import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from '../../../../DiaryDbContext';
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';


function SettingsPanel() {


const { rightPanel, setRightPanel } = useContext(UserContext);
    
const RitepanelCheng = (panelName) => {
        setRightPanel(prev => (prev === panelName ? null : panelName));
    }

  return (
  <div className={ classes.rightPanel}>
    
  <div className={ classes.rightPanelContent}>
      <p>  тут будут настройки </p>
  </div>

   <ButtonSquareIcon  onClick={() => RitepanelCheng('settings')}>  →  </ButtonSquareIcon>
    
   
 </div>
 )}

 export default SettingsPanel;