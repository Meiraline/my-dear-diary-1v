import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from './../../../../DiaryDbContext'
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';


function TableCloseR_Panel() {


const { leftPanelOpen,  setLeftPanelOpen } = useContext(UserContext);

    
const ToggleLeftBar = () => {
    setLeftPanelOpen(prev => !prev);
  }

  return (
  <div className={ classes.leftPanelClose}>
    1111ddd
    <ButtonSquareIcon className={classes.leftButton} onClick={ToggleLeftBar}> → </ButtonSquareIcon>
   
 </div>
 )}

 export default TableCloseR_Panel;