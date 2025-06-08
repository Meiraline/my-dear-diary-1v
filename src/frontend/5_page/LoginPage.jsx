import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { hashPassword } from '../../utils/hash';
import RiteForm from '../4_templates/RiteForm/RiteForm';
import NavLinkButton from '../1_atoms/Buttons/NavLinkButton/NavLinkButton';
import Input from '../1_atoms/Inputs/Input/Input';
import ButtonLongIcon from '../1_atoms/Buttons/ButtonLongIcon/ButtonLongIcon';
import Error from '../2_molecules/Error/Error';
import { getUserByUsername } from '../../data_base/userDb';

const LoginPage = ({ onAuth, NavLinkButtonProps }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setUsername('');
    setPassword('');
    setError('');
  }, [NavLinkButtonProps?.active]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }
    const user = await getUserByUsername(username);
    if (!user) {
      setError('Неверный логин или пароль');
      return;
    }
    const hash = await hashPassword(password, user.salt);
    if (hash !== user.passwordHash) {
      setError('Неверный логин или пароль');
      return;
    }
    onAuth(username);
    navigate('/main');
  };

  return (
    <RiteForm
      header={
        <>
          <NavLinkButton
            type="button"
            active={NavLinkButtonProps?.active === 'login'}
            onClick={NavLinkButtonProps?.onLoginClick}
          >
            Вход
          </NavLinkButton>
          <NavLinkButton
            type="button"
            active={NavLinkButtonProps?.active === 'register'}
            onClick={NavLinkButtonProps?.onRegisterClick}
          >
            Регистрация
          </NavLinkButton>
        </>
      }
      title="Давай знакомиться!"
      subtitle="зарегистрируйся чтобы продолжить"
      rightContent={<img src="/img/logo.png" alt="logo" style={{maxWidth: '60%', height: 'auto'}} />}
      onSubmit={handleLogin}
    >
      <Input
        name="username"
        placeholder="никнейм"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder="пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <ButtonLongIcon type="submit">ВОЙТИ</ButtonLongIcon>
      {error && (
        <Error
          title="Ошибка входа"
          message={error}
          onClose={() => setError('')}
        />
      )}
    </RiteForm>
  );
};

export default LoginPage;