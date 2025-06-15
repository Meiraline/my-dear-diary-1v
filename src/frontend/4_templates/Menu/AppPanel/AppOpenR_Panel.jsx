import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from '../../../../DiaryDbContext'
import ButtonLongIcon from '../../../1_atoms/Buttons/ButtonLongIcon/ButtonLongIcon';

function AppOpenR_Panel() {

const { leftPanelOpen,  setLeftPanelOpen } = useContext(UserContext);

    
const ToggleLeftBar = () => {
    setLeftPanelOpen(prev => !prev);
  }

  return (
  <div className={ classes.leftPanelOpen}>
    <div>
      Открыто3333555
    </div>
    <ButtonLongIcon className={classes.leftButton} onClick={ToggleLeftBar}>←</ButtonLongIcon>
    
 </div>

)}

export default AppOpenR_Panel;