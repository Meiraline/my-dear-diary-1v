import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from '../../../../DiaryDbContext';
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';
import Cat from '../../../pictchers/cat_chernyshka/Вопрошающий_котк.png'

function ChatPanel() {


const { rightPanel, setRightPanel } = useContext(UserContext);
    
const RitepanelCheng = (panelName) => {
        setRightPanel(prev => (prev === panelName ? null : panelName));
    }

  return (
  <div className={ classes.rightPanel}>
    
      <div className={classes.center}>
      <h4>Эта функция  в разработке</h4>
      <img src={Cat} alt="" />
    </div>

    

    <ButtonSquareIcon  onClick={() => RitepanelCheng('chat')}>  →  </ButtonSquareIcon>
   
 </div>
 )}

 export default ChatPanel;