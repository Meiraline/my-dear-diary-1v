import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';

import Menu from '../4_templates/Menu/Menu';

function AppPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login');
  };

  return (
   <div>
     
      <Menu> тут будут приложения</Menu>  
        
    </div>
  );
}

export default AppPage;