import React, { useState } from 'react';
import AppRouter from './AppRouter';
import UserContext from './UserContext';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
