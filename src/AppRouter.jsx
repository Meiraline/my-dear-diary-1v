import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './frontend/6_proces/Authentication';
import Main from './frontend/6_proces/Main';

const AppRouter = () => {
  // Здесь можно хранить состояние авторизации, если нужно
  // const [user, setUser] = React.useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/main" element={<Main />} />
        {/* Если пользователь не найден, можно сделать редирект */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;