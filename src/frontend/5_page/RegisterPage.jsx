import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser, getUserByUsername } from '../../data_base/userDb';
import { createUserDiaryDb } from '../../data_base/userDiaryDb';
import { generateSalt, hashPassword } from '../../utils/hash';

import Input from '../1_atoms/Inputs/Input/Input';
import ButtonText from '../1_atoms/Buttons/ButtonText/ButtonText';
import Error from '../2_molecules/Error/Error';
import MyLink from '../1_atoms/Buttons/Link/MyLink';
import RiteForm from '../4_templates/RiteForm/RiteForm';

import { useTranslation } from 'react-i18next';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCloseError = () => setError(null);

  const handleRegister = async () => {
    if (!username || !password) return setError(t('fillAllFields'));

    const exists = await getUserByUsername(username);
    if (exists) return setError(t('userExists'));

    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);

    await addUser({ username, passwordHash, salt });

    createUserDiaryDb(username);

    navigate('/login');
  };

  return (
    <div>
      <RiteForm
        header={
          <div>
            <MyLink to="/login">{t('login')}</MyLink>
            <MyLink active to="/register">{t('register')}</MyLink>
          </div>
        }
        title={t('registerTitle')}
        subtitle={t('registerSubtitle')}
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
        <ButtonText onClick={handleRegister}>{t('registerButton')}</ButtonText>

        {error && (
          <Error
            title={t('registerErrorTitle')}
            message={error}
            onClose={handleCloseError}
          />
        )}
      </RiteForm>
    </div>
  );
}

export default RegisterPage;
