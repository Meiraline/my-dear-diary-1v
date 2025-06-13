import { createContext } from 'react';
import React, { useContext, useState, useEffect } from 'react';

const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},


 });

export default UserContext;
