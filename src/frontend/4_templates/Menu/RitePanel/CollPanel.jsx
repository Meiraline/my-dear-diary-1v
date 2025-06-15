import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from '../../../../DiaryDbContext';
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';


function CollPanel() {


const { rightPanel, setRightPanel } = useContext(UserContext);
    
const RitepanelCheng = (panelName) => {
        setRightPanel(prev => (prev === panelName ? null : panelName));
    }

  return (
  <div className={ classes.rightPanel}>
    
    <div className={ classes.rightPanelContent}>
     тут будут оповещения 
    </div> 

    <ButtonSquareIcon  onClick={() => RitepanelCheng('coll')}>  →  </ButtonSquareIcon>
   
 </div>
 )}

 export default CollPanel;