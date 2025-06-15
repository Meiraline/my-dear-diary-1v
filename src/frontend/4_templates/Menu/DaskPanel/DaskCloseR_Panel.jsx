import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from '../../../../DiaryDbContext'
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';


function DaskCloseR_Panel() {


const { leftPanelOpen,  setLeftPanelOpen } = useContext(UserContext);

    
const ToggleLeftBar = () => {
    setLeftPanelOpen(prev => !prev);
  }

  return (
  <div className={ classes.leftPanelClose}>
    1111
    <ButtonSquareIcon className={classes.leftButton} onClick={ToggleLeftBar}> → </ButtonSquareIcon>
   
 </div>
 )}

 export default DaskCloseR_Panel;