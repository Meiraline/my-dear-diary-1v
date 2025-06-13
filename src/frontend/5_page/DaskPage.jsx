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



const [text, setText] = useState('');
const [tests, setTests] = useState([]);
const [error, setError] = useState(null);


useEffect(() => {
    async function fetchTests() {
      try {
        const result = await getAllTests();
        setTests(result);
      } catch (e) {
        setError('Ошибка загрузки данных: ' + e.message);
      }
    }

    fetchTests();
  }, []);

  const handleAdd = async () => {
    try {
      await addTestEntry(text);
      alert('Тест добавлен!');
      setText('');
      const updatedTests = await getAllTests(); // <-- Загрузить актуальные данные
    setTests(updatedTests); // <-- Обновить список
    } catch (e) {
      alert('Ошибка: ' + e.message);
    }
  };


  return (
    <div>
      {/* <h1>Добро пожаловать, {currentUser}!</h1>
      <button onClick={handleLogout}>Выйти</button> */}


        <Menu />

    </div>
  );
}

export default DaskPage;