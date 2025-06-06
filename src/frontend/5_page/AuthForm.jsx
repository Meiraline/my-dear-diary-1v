import React, { useState } from 'react';
import { hashPassword, generateSalt } from '../../utils/hash';

function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}
function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}
function findUser(username) {
  return getUsers().find(u => u.username === username);
}

const AuthForm = ({ onAuth }) => {
  const [mode, setMode] = useState('login'); // 'login' или 'register'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }
    const user = findUser(username);
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
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }
    if (findUser(username)) {
      setError('Пользователь уже существует');
      return;
    }
    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);
    saveUser({ username, salt, passwordHash });
    onAuth(username);
  };

  return (
    <div style={{ background: '#b3e6f7', padding: 32, borderRadius: 8, width: 350 }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16, fontWeight: 700, fontSize: 22 }}>
        <span
          style={{
            cursor: 'pointer',
            borderBottom: mode === 'login' ? '2px solid #222' : 'none',
            color: mode === 'login' ? '#222' : '#444'
          }}
          onClick={() => { setMode('login'); setError(''); }}
        >Вход</span>
        <span
          style={{
            cursor: 'pointer',
            borderBottom: mode === 'register' ? '2px solid #222' : 'none',
            color: mode === 'register' ? '#222' : '#444'
          }}
          onClick={() => { setMode('register'); setError(''); }}
        >Регистрация</span>
      </div>
      <form onSubmit={mode === 'login' ? handleLogin : handleRegister}>
        <h2 style={{ margin: 0 }}>
          {mode === 'login' ? 'Давай знакомиться!' : 'Давай знакомиться!'}
        </h2>
        <div style={{ marginBottom: 8, color: '#333', fontWeight: 600 }}>
          {mode === 'login'
            ? 'зарегистрируйся чтобы продолжить'
            : 'зарегистрируйся чтобы продолжить'}
        </div>
        <input
          placeholder="никнейм"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <input
          type="password"
          placeholder="пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            marginBottom: 8,
            padding: 8,
            fontWeight: 700,
            fontSize: 20,
            background: '#fff',
            border: '2px solid #222',
            cursor: 'pointer'
          }}
        >
          {mode === 'login' ? 'ВОЙТИ' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}
        </button>
        {error && (
          <div style={{ color: 'red', marginBottom: 8, textAlign: 'center' }}>{error}</div>
        )}
        <button
          type="button"
          style={{
            width: '100%',
            background: '#fff',
            border: '1px solid #ccc',
            padding: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 18,
            cursor: 'pointer'
          }}
        >
          <img src="/icons/google.svg" alt="Google" style={{ width: 28, height: 28 }} />
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default AuthForm;