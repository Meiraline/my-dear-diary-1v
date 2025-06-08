import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addUser, getUserByUsername } from '../../data_base/userDb';
import { generateSalt, hashPassword } from '../../utils/hash';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    const exists = await getUserByUsername(username);
    if (exists) return setError('Пользователь уже существует');

    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);

    await addUser({ username, passwordHash, salt });
    navigate('/login');
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Имя пользователя" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" />
      <button onClick={handleRegister}>Зарегистрироваться</button>
      <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default RegisterPage;
