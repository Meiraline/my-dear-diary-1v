import classes from './Menu.module.css';

import React, { useState, useContext } from 'react';
import UserContext from '../../../DiaryDbContext';
import ButtonLongIcon from '../../1_atoms/Buttons/ButtonLongIcon/ButtonLongIcon'
import ButtonSquareIcon from '../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';


function CloseLeftMenu() {

const { leftPanel, setLeftPanel } = useContext(UserContext);
    
const ToggleLeftBar = () => {
    setLeftPanel(prev => !prev);
  }


  return (
  <div className={ classes.leftPanelClose}>
    
    <ButtonSquareIcon className={classes.leftButton} onClick={ToggleLeftBar}> {leftPanel ? '←' : '→'} </ButtonSquareIcon>
   
 </div>
 )}

 export default CloseLeftMenu;