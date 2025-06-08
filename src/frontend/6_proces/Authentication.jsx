import React, { useState } from 'react';
import LoginPage from '../5_page/LoginPage';
import RegisterPage from '../5_page/RegisterPage';

const Authentication = ({ onAuth }) => {
  const [page, setPage] = useState('login');

  return (
    <>
      {page === 'login' && (
        <LoginPage
          onAuth={onAuth}
          goToRegister={() => setPage('register')}
          NavLinkButtonProps={{
            onLoginClick: () => setPage('login'),
            onRegisterClick: () => setPage('register'),
            active: 'login'
          }}
        />
      )}
      {page === 'register' && (
        <RegisterPage
          onAuth={onAuth}
          goToLogin={() => setPage('login')}
          NavLinkButtonProps={{
            onLoginClick: () => setPage('login'),
            onRegisterClick: () => setPage('register'),
            active: 'register'
          }}
        />
      )}
    </>
  );
};

export default Authentication;