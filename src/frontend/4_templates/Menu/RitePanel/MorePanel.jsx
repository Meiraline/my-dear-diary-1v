import classes from '../Menu.module.css';

import React, { useContext } from 'react';

import UserContext from '../../../../DiaryDbContext';
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';

import { useNavigate } from 'react-router-dom';

import UserContextM from '../../../../UserContext';
import { useDiaryDb } from '../../../../DiaryDbContext';

import { useTranslation } from 'react-i18next';

function MorePanel() {
  const { t } = useTranslation();
  const { rightPanel, setRightPanel } = useContext(UserContext);

  const RitepanelCheng = (panelName) => {
    setRightPanel((prev) => (prev === panelName ? null : panelName));
  };

  const { currentUser, setCurrentUser } = useContext(UserContextM);
  const navigate = useNavigate();
  const db = useDiaryDb();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <div className={classes.rightPanel}>
      <div className={classes.rightPanelContent}>
        <h1>{t('accountManagement')}, {currentUser}</h1>
        <div>
          <ButtonSquareIcon onClick={handleLogout}>
            {t('exit')}
          </ButtonSquareIcon>
          <ButtonSquareIcon>
            {t('changePassword')}
          </ButtonSquareIcon>
        </div>
      </div>
      <ButtonSquareIcon onClick={() => RitepanelCheng('more')}> → </ButtonSquareIcon>
    </div>
  );
}

export default MorePanel;
