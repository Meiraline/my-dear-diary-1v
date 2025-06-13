import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUserByUsername } from '../../data_base/userDb';
import { hashPassword } from '../../utils/hash';
import UserContext from '../../UserContext';



// Импорты элементов

import Input from '../1_atoms/Inputs/Input/Input';
import ButtonText from '../1_atoms/Buttons/ButtonText/ButtonText';
import Error from '../2_molecules/Error/Error';
import MyLink from '../1_atoms/Buttons/Link/MyLink';
import RiteForm from '../4_templates/RiteForm/RiteForm';




function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();



  const [error, setError] = useState(null);
  
  const handleCloseError = () => {
    setError(null);
  };


  const handleLogin = async () => {
    const user = await getUserByUsername(username);
    if (!user) return setError('Пользователь не найден');

    const passwordHash = await hashPassword(password, user.salt);
    if (passwordHash !== user.passwordHash) return setError('Неверный пароль');

    localStorage.setItem('currentUser', username);
    setCurrentUser(username);
    navigate('/dack');
  };

  return (
    <div>
     

        <RiteForm 
        header = <div> 
        <MyLink active to="/login">Вход</MyLink> 
        <MyLink to="/register">Регистрация</MyLink> 
        </div>
        
        title="Мы скучали!"
        subtitle="войдите чтобы продолжить"
       >

        <Input value={username} onChange={e => setUsername(e.target.value)} placeholder="Имя пользователя"></Input>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль"></Input>
        
        <ButtonText onClick={handleLogin} >Войти</ButtonText>
         

        {error && <Error
          title="Ошибка авторизации"
          message={error}
          onClose={handleCloseError}
        />}

         </RiteForm>




    </div>
  );
}

export default LoginPage;


