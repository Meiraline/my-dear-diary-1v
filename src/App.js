import React, { useState } from 'react';
import AppRouter from './AppRouter';
import UserContext from './UserContext';
import { DiaryDbProvider } from './DiaryDbContext';
import { ThemeProvider, useTheme } from './ThemeContext';

import './App.css';

function AppContent() {
  const { theme } = useTheme(); 

  return (
    <div className={`App ${theme}`}> 
      <AppRouter />
    </div>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <DiaryDbProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </DiaryDbProvider>
    </UserContext.Provider>
  );
}

export default App;

