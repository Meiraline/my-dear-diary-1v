import React, { useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import UserContext from '../../UserContext';
import { useDiaryDb } from '../../DiaryDbContext';
import { getAllTests, addTestEntry } from '../../data_base/userDiaryDb';


import Menu from '../4_templates/Menu/Menu';

function DaskPage() {
  
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const db = useDiaryDb();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login');
  };



  return (
    <div>

        <Menu >
          <h1>Добро пожаловать, {currentUser}!</h1>
          <button onClick={handleLogout}>Выйти</button>
        </Menu>

    </div>
  );
}

export default DaskPage;