import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUserByUsername } from '../../data_base/userDb';
import { hashPassword } from '../../utils/hash';
import UserContext from '../../UserContext';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    const user = await getUserByUsername(username);
    if (!user) return setError('Пользователь не найден');

    const passwordHash = await hashPassword(password, user.salt);
    if (passwordHash !== user.passwordHash) return setError('Неверный пароль');

    localStorage.setItem('currentUser', username);
    setCurrentUser(username);
    navigate('/main');
  };

  return (
    <div>
      <h2>Вход</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Имя пользователя" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" />
      <button onClick={handleLogin}>Войти</button>
      <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LoginPage;
