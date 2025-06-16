import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByUsername } from '../../data_base/userDb';
import { hashPassword } from '../../utils/hash';
import UserContext from '../../UserContext';

import Input from '../1_atoms/Inputs/Input/Input';
import ButtonText from '../1_atoms/Buttons/ButtonText/ButtonText';
import Error from '../2_molecules/Error/Error';
import MyLink from '../1_atoms/Buttons/Link/MyLink';
import RiteForm from '../4_templates/RiteForm/RiteForm';

import { useTranslation } from 'react-i18next';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { t } = useTranslation();

  const handleCloseError = () => {
    setError(null);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      return setError(t('fillAllFields'));
    }

    const user = await getUserByUsername(username);
    if (!user) return setError(t('userNotFound'));

    const passwordHash = await hashPassword(password, user.salt);
    if (passwordHash !== user.passwordHash) return setError(t('wrongPassword'));

    localStorage.setItem('currentUser', username);
    setCurrentUser(username);
    navigate('/main');
  };

  return (
    <div>
      <RiteForm
        header={
          <div>
            <MyLink active to="/login">{t('login')}</MyLink>
            <MyLink to="/register">{t('register')}</MyLink>
          </div>
        }
        title={t('loginTitle')}
        subtitle={t('loginSubtitle')}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder={t('username')}
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder={t('password')}
        />
        <ButtonText onClick={handleLogin}>{t('loginButton')}</ButtonText>

        {error && (
          <Error
            title={t('loginErrorTitle')}
            message={error}
            onClose={handleCloseError}
          />
        )}
      </RiteForm>
    </div>
  );
}

export default LoginPage;
