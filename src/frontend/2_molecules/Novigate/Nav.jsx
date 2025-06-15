import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../DiaryDbContext';

import styles from './Nav.module.css';

import tabelIcon from '../../pictchers/icon/Хранилище.svg';
import dasklIcon from '../../pictchers/icon/Доска.svg';
import notelIcon from '../../pictchers/icon/Записи.svg';
import applIcon from '../../pictchers/icon/Приложения.svg';

function Nav() {

  const { leftPanel, setLeftPanel } = useContext(UserContext);

 const PanelCheng = (panelName) => {
  setLeftPanel(prev => (prev === panelName ? panelName : panelName));
};


  return (
    <nav className={styles.container}>
      <Link to="/tabel" onClick={() => PanelCheng('tabl')}>
        <img className={`${styles.icon} ${styles.id1}`} src={tabelIcon} alt="Tabel" />
      </Link>
      <Link to="/main"  onClick={() => PanelCheng('dask')}>
        <img className={styles.icon} src={dasklIcon} alt="Dashboard" />
      </Link>
      <Link to="/note"  onClick={() => PanelCheng('note')}>
        <img className={styles.icon} src={notelIcon} alt="Notes" />
      </Link>
      <Link to="/app"  onClick={() => PanelCheng('app')}>
        <img className={`${styles.icon} ${styles.id2}`} src={applIcon} alt="Apps" />
      </Link>
    </nav>
  );
}

export default Nav;



