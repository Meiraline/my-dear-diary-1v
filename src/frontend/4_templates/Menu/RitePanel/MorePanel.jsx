import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from '../../../../DiaryDbContext';
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';


function MorePanel() {


const { rightPanel, setRightPanel } = useContext(UserContext);
    
const RitepanelCheng = (panelName) => {
        setRightPanel(prev => (prev === panelName ? null : panelName));
    }

  return (
  <div className={ classes.rightPanel}>

    <div className={ classes.rightPanelContent}>
      тут будут другие функции.
    </div>

     <ButtonSquareIcon  onClick={() => RitepanelCheng('more')}>  →  </ButtonSquareIcon>
      
   
 </div>
 )}

 export default MorePanel;