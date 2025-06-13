import classes from './Menu.module.css';

import React, { useState, useContext } from 'react';
import UserContext from '../../../DiaryDbContext';


function OpenLeftMenu() {

const { leftPanel, setLeftPanel } = useContext(UserContext);

const ToggleLeftBar = () => {
    setLeftPanel(prev => !prev);
  }

  return (
  <div className={ classes.leftConteiner}>
    Закрыто
     <button className={classes.leftButton} onClick={ToggleLeftBar}> {leftPanel ? '←' : '→'} </button>
 </div>

)}

export default OpenLeftMenu;