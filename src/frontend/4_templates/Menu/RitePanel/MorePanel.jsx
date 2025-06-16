import classes from '../Menu.module.css';

import React, {useContext, useState, } from 'react';

import UserContext from '../../../../DiaryDbContext';
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';


import { useNavigate } from 'react-router-dom';

import UserContextM from '../../../../UserContext';
import { useDiaryDb } from '../../../../DiaryDbContext';


function MorePanel() {


const { rightPanel, setRightPanel } = useContext(UserContext);
    
const RitepanelCheng = (panelName) => {
        setRightPanel(prev => (prev === panelName ? null : panelName));
    }

const { currentUser, setCurrentUser } = useContext(UserContextM);
const navigate = useNavigate();
const db = useDiaryDb();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login');
  };



  return (
  <div className={ classes.rightPanel}>

    <div className={ classes.rightPanelContent}>
          <h1>Управление акаунтом , {currentUser}!</h1>
          <div>
          <ButtonSquareIcon  onClick={handleLogout}>Выйти</ButtonSquareIcon>
          <ButtonSquareIcon  >Сменить пароль</ButtonSquareIcon>
          </div>
          
    </div>

     <ButtonSquareIcon  onClick={() => RitepanelCheng('more')}>  →  </ButtonSquareIcon>
      
   
 </div>
 )}

 export default MorePanel;