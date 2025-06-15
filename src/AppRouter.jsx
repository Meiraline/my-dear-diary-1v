import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './frontend/5_page/LoginPage';
import RegisterPage from './frontend/5_page/RegisterPage';
import UserContext from './UserContext';
import DaskPage from './frontend/5_page/DaskPage';
import NotePage from './frontend/5_page/NotePage';
import TabelPage from './frontend/5_page/TabelPage';
import AppPage from './frontend/5_page/AppPage';

const AppRouter = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={currentUser ? "/main" : "/login"} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/tabel" element={<TabelPage />} />
      <Route path="/main" element={currentUser ? <DaskPage /> : <Navigate to="/login" />} />
      <Route path="/note" element={<NotePage />} />
      <Route path="/app" element={<AppPage />} />
    </Routes>
  );
};

export default AppRouter;

