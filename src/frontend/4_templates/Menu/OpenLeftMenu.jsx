import classes from './Menu.module.css';

import React, { useState, useContext } from 'react';
import UserContext from '../../../DiaryDbContext';
import ButtonLongIcon from '../../1_atoms/Buttons/ButtonLongIcon/ButtonLongIcon'

function OpenLeftMenu() {

const { leftPanel, setLeftPanel } = useContext(UserContext);

const ToggleLeftBar = () => {
    setLeftPanel(prev => !prev);
  }

  return (
  <div className={ classes.leftPanelOpen}>
    <div>
      Открыто
    </div>
    <ButtonLongIcon className={classes.leftButton} onClick={ToggleLeftBar}>{leftPanel ? '←' : '→'}</ButtonLongIcon>
    
 </div>

)}

export default OpenLeftMenu;