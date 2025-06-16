import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSavedTheme, saveTheme } from './data_base/userDiaryDb';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    getSavedTheme().then(setTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme; // меняем тему у body
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    saveTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
