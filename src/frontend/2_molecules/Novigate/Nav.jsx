import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../../DiaryDbContext';


import styles from './Nav.module.css';


import tabelIcon from '../../pictchers/icon/Хранилище.svg';
import dasklIcon from '../../pictchers/icon/Доска.svg';
import notelIcon from '../../pictchers/icon/Записи.svg';
import applIcon from '../../pictchers/icon/Приложения.svg';


const Nav = ({ title, message, onClose }) => (
  
  <nav className={styles.container}>
    <Link to ="/tabel"> <img  className={`${styles.icon} ${styles.id1}`} src={tabelIcon} alt="" />   </Link>
    <Link to ="/dack">  <img  className={styles.icon} src={dasklIcon} alt="" />    </Link>
    <Link to ="/note">  <img  className={styles.icon} src={notelIcon} alt="" />    </Link>
   <Link to ="/app">    <img   className={`${styles.icon} ${styles.id2}`} src={applIcon} alt="" />     </Link>
  </nav>
 
   
);

export default Nav;


