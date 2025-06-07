
import React, { useState } from 'react';
import { createUserDb } from './data_base/userDb';


import './App.css';

import AuthForm from './frontend/5_page/AuthForm';
import NotesBoard from './frontend/4_templates/NotesBoard';


import ButtonLongIcon from './frontend/1_atoms/Buttons/ButtonLongIcon/ButtonLongIcon';

import ButtonSquareIcon from './frontend/1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';
import ButtonText from './frontend/1_atoms/Buttons/ButtonText/ButtonText';
import ButtonCqerIcon from './frontend/1_atoms/Buttons/ButtonСircleIcon/ButtonСircleIcon';
import ButtonСircleIcon from './frontend/1_atoms/Buttons/ButtonСircleIcon/ButtonСircleIcon';
import Icon from './frontend/1_atoms/Buttons/Icon/Icon';
import Input from './frontend/1_atoms/Inputs/Input/Input';
import Checkbox from './frontend/1_atoms/Inputs/Checkbox/Checkbox';
import Select from './frontend/1_atoms/Inputs/Select/Select';


function App() {
  const [user, setUser] = useState(null);
  const [db, setDb] = useState(null);

  // const handleAuth = (username) => {
  //   setUser(username);
  //   setDb(createUserDb(username));
  // };






  // if (!user) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <AuthForm onAuth={handleAuth} />
  //     </div>
  //   );
  // }


const [fontSize, setFontSize] = useState('13');

  const fontSizeOptions = [
    { value: '11', name: '11 pt' },
    { value: '13', name: '13 pt' },
    { value: '15', name: '15 pt' },
    { value: '17', name: '17 pt' },
  ];


  return (

    <div className='App'>

   <Select
  label="Размер шрифта"
  options={[
    { value: '11', name: '11 pt' },
    { value: '13', name: '13 pt' },
    { value: '15', name: '15 pt' },
    { value: '17', name: '17 pt' },
  ]}
  value={fontSize}
  onChange={setFontSize}
  defaultValue="Размер шрифта"
/>
    </div>

    // <NotesBoard db={db} />
  );
}

export default App;