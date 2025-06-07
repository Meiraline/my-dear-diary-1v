
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


function App() {
  const [user, setUser] = useState(null);
  const [db, setDb] = useState(null);

  const handleAuth = (username) => {
    setUser(username);
    setDb(createUserDb(username));
  };

  // if (!user) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <AuthForm onAuth={handleAuth} />
  //     </div>
  //   );
  // }

  return (

    <div className='App'>

    <ButtonText>hhh</ButtonText>
    <p>    </p>
    <ButtonLongIcon icon={"/icon/Закладки.svg"} >  </ButtonLongIcon>
    <p>    </p>
    <ButtonSquareIcon icon={"/icon/Закладки.svg"} color={"n"}>  </ButtonSquareIcon>
    <p>    </p>
    <ButtonСircleIcon icon={"/icon/Закладки.svg"} color={"n"}>  </ButtonСircleIcon>

    </div>

    // <NotesBoard db={db} />
  );
}

export default App;