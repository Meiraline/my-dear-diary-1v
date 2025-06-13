import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addUser, getUserByUsername } from '../../data_base/userDb';
import { createUserDiaryDb } from '../../data_base/userDiaryDb';
import { generateSalt, hashPassword } from '../../utils/hash';


// Импорты элементов

import Input from '../1_atoms/Inputs/Input/Input';
import ButtonText from '../1_atoms/Buttons/ButtonText/ButtonText';
import Error from '../2_molecules/Error/Error';
import MyLink from '../1_atoms/Buttons/Link/MyLink';
import RiteForm from '../4_templates/RiteForm/RiteForm';




function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [error, setError] = useState(null);
 
  const handleCloseError = () => {
    setError(null);
  };


  const handleRegister = async () => {
    const exists = await getUserByUsername(username);
    if (exists) return setError('Пользователь уже существует');

    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);

    await addUser({ username, passwordHash, salt });

    const diaryDb = createUserDiaryDb(username);
    

    navigate('/login');

    
  };

 return (
    <div>
     
        <RiteForm 
        header = <div> 
        <MyLink  to="/login">Вход</MyLink> 
        <MyLink active to="/register">Регистрация</MyLink> 
        </div>
        
        title="Давай знакомитья!"
        subtitle="зарегестрируйся чтобы продолжить"
       >

        <Input value={username} onChange={e => setUsername(e.target.value)} placeholder="Имя пользователя"></Input>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль"></Input>
        
        <ButtonText onClick={handleRegister} >Зарегистрироваться</ButtonText>
         

        {error && <Error
          title="Ошибка регистрации"
          message={error}
          onClose={handleCloseError}
        />}

         </RiteForm>

    </div>
  );
}

export default RegisterPage;



