import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import classes from './Menu.module.css';



// Импорты элементов


import ButtonSquareIcon from "../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon"


// Иморт частей меню

import OpenLeftMenu from './OpenLeftMenu';
import CloseLeftMenu from './CloseLeftMenu';


// Иморт иконок

import tabelIcon from '../../pictchers/icon/Хранилище.svg';
import dasklIcon from '../../pictchers/icon/Доска.svg';
import notelIcon from '../../pictchers/icon/Записи.svg';
import applIcon from '../../pictchers/icon/Приложения.svg';

import belllIcon from '../../pictchers/icon/Колокольчик.svg';
import settingsIcon from '../../pictchers/icon/Настройки.svg';
import chatlIcon from '../../pictchers/icon/Чат ии.svg';
import morelIcon from '../../pictchers/icon/Многоточие.svg';



function Menu (props)  {


    const [leftPanel, setLeftPanel] = useState(false);
    
    const ToggleLeftBar = () => {
        setLeftPanel(prev => !prev);
    }



    return (
   
      <div className={classes.menu}>

        <header className={classes.hederPanel}> 
            <div className={classes.square}></div>
            <div className={classes.routeButton}>
                <ButtonSquareIcon icon={tabelIcon}> <Link to ="/tabel">+</Link></ButtonSquareIcon>
                <ButtonSquareIcon icon={dasklIcon}> <Link to ="/dack">+</Link></ButtonSquareIcon>
                <ButtonSquareIcon icon={notelIcon}> <Link to ="/note">+</Link></ButtonSquareIcon>
                <ButtonSquareIcon icon={applIcon}> <Link to ="/app">+</Link></ButtonSquareIcon>
            </div>
            <div className={classes.meniButton}>
                <ButtonSquareIcon icon={belllIcon}></ButtonSquareIcon>
                <ButtonSquareIcon icon={settingsIcon}></ButtonSquareIcon>
                <ButtonSquareIcon icon={chatlIcon}></ButtonSquareIcon>
                <ButtonSquareIcon icon={morelIcon}></ButtonSquareIcon>
            </div>
            <div className={classes.chengRegim}>
                <input type="checkbox" />
            </div>
        </header>

       
        <div className={classes.conteiner}>

            <div className={classes.leftPanel}>

               

                {leftPanel ? <OpenLeftMenu></OpenLeftMenu> : <CloseLeftMenu></CloseLeftMenu> }
                <button className={classes.leftButton} onClick={ToggleLeftBar}> {leftPanel ? '←' : '→'} </button>

            </div>

            

            <div className={classes.workTabel}>
                тут будет рабочая таблица
            </div>

            <div className={classes.rightPanel}>
                <div className={ classes.rightConteiner}></div>
                <button className={classes.rightButton}>+</button>
            </div>

        </div>
      
      </div>
    
      );
};
 





export default Menu;