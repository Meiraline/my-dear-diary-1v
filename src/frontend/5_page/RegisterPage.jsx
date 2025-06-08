import React, { useState, useEffect } from 'react';
import { hashPassword, generateSalt } from '../../utils/hash';
import RiteForm from '../4_templates/RiteForm/RiteForm';
import NavLinkButton from '../1_atoms/Buttons/NavLinkButton/NavLinkButton';
import Input from '../1_atoms/Inputs/Input/Input';
import ButtonLongIcon from '../1_atoms/Buttons/ButtonLongIcon/ButtonLongIcon';
import Error from '../2_molecules/Error/Error';
import { addUser, getUserByUsername } from '../../data_base/userDb';

const RegisterPage = ({ onAuth, NavLinkButtonProps, goToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setUsername('');
    setPassword('');
    setError(null);
  }, [NavLinkButtonProps?.active]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    if (!username.trim() || !password.trim()) {
      setError({
        title: 'Ошибка регистрации',
        message: 'Заполните все поля'
      });
      return;
    }
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      setError({
        title: 'Ошибка регистрации',
        message: 'Пользователь с таким никнеймом уже существует'
      });
      return;
    }
    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);
    await addUser({ username, passwordHash, salt });
    if (goToLogin) goToLogin();
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
      title="Регистрация"
      subtitle="создай новый аккаунт"
      rightContent={<img src="/img/logo.png" alt="logo" style={{maxWidth: '60%', height: 'auto'}} />}
      onSubmit={handleRegister}
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
      <ButtonLongIcon type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</ButtonLongIcon>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onClose={() => setError(null)}
        />
      )}
    </RiteForm>
  );
};

export default RegisterPage;