import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';

function MainPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <div>
      <h1>Добро пожаловать, {currentUser}!</h1>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}

export default MainPage;
