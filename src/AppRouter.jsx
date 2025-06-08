import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './frontend/5_page/LoginPage';
import RegisterPage from './frontend/5_page/RegisterPage';
import MainPage from './frontend/5_page/MainPage';
import UserContext from './UserContext';

const AppRouter = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={currentUser ? "/main" : "/login"} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/main" element={currentUser ? <MainPage /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;

