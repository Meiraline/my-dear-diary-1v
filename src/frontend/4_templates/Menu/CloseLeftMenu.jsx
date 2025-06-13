import classes from './Menu.module.css';

import React, { useState, useContext } from 'react';
import UserContext from '../../../DiaryDbContext';

function CloseLeftMenu() {

const { leftPanel, setLeftPanel } = useContext(UserContext);
    
const ToggleLeftBar = () => {
    setLeftPanel(prev => !prev);
  }


  return (
  <div className={ classes.leftConteiner}>
    Открыто
    <button className={classes.leftButton} onClick={ToggleLeftBar}> {leftPanel ? '←' : '→'} </button>
 </div>
 )}

 export default CloseLeftMenu;