import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from '../../../../DiaryDbContext';
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';
import Cat from '../../../pictchers/cat_chernyshka/Спящий_котик.png'

function CollPanel() {


const { rightPanel, setRightPanel } = useContext(UserContext);
    
const RitepanelCheng = (panelName) => {
        setRightPanel(prev => (prev === panelName ? null : panelName));
    }

  return (
  <div className={ classes.rightPanel}>
    
    <div className={ classes.rightPanelContent}>

    <div className={classes.center}>
      <h4>У вас пока нет оповещений</h4>
      <img src={Cat} alt="" />
    </div>

     
    </div> 

    <ButtonSquareIcon  onClick={() => RitepanelCheng('coll')}>  →  </ButtonSquareIcon>
   
 </div>
 )}

 export default CollPanel;