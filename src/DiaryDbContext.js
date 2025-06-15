import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserDiaryDb } from './data_base/userDiaryDb';
import UserContext from './UserContext';

const DiaryDbContext = createContext(null);

export const DiaryDbProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const [db, setDb] = useState(null);

// технические пременные

const [leftPanel, setLeftPanel] = useState('dask');
const [leftPanelOpen, setLeftPanelOpen] = useState(false)
const [redRegim, setRedRegim] = useState(false)

const [rightPanel,setRightPanel ] = useState(null)


// технические пременные

  useEffect(() => {
    if (currentUser) {
      const diaryDb = createUserDiaryDb(currentUser);
      setDb(diaryDb);
    }
  }, [currentUser]);

  return (
    <DiaryDbContext.Provider value={{db, leftPanel, setLeftPanel,leftPanelOpen, setLeftPanelOpen, redRegim ,setRedRegim, rightPanel, setRightPanel }}>
      {children}
    </DiaryDbContext.Provider>
  );
};

export const useDiaryDb = () => useContext(DiaryDbContext);

export default DiaryDbContext;
