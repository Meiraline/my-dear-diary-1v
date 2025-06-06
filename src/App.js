
import React, { useState } from 'react';
import AuthForm from './frontend/5_page/AuthForm';
import NotesBoard from './frontend/4_templates/NotesBoard';
import { createUserDb } from './data_base/userDb';

function App() {
  const [user, setUser] = useState(null);
  const [db, setDb] = useState(null);

  const handleAuth = (username) => {
    setUser(username);
    setDb(createUserDb(username));
  };

  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <AuthForm onAuth={handleAuth} />
      </div>
    );
  }

  return (
    <NotesBoard db={db} />
  );
}

export default App;