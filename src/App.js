
import React, { useState } from 'react';
import { createUserDb } from './data_base/userDb';


import './App.css';
import Authentication from './frontend/6_proces/Authentication';


function App() {
  
const userDb = createUserDb();


  return (

    <div className='App'>
      <Authentication userDb={userDb} />
    </div>

   
  );
}

export default App;