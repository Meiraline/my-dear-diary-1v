import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../../DiaryDbContext';

import classes from './Menu.module.css';



// Импорты элементов


import ButtonSquareIcon from "../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon"
import Nav from '../../2_molecules/Novigate/Nav';   

// Иморт частей меню

import OpenLeftMenu from './OpenLeftMenu';
import CloseLeftMenu from './CloseLeftMenu';


// Иморт иконок



import belllIcon from '../../pictchers/icon/Колокольчик.svg';
import settingsIcon from '../../pictchers/icon/Настройки.svg';
import chatlIcon from '../../pictchers/icon/Чат ии.svg';
import morelIcon from '../../pictchers/icon/Многоточие.svg';






function Menu ({children})  {

    const { leftPanel, setLeftPanel } = useContext(UserContext);
    
    const ToggleLeftBar = () => {
        setLeftPanel(prev => !prev);
    }



    return (
   
      <div className={classes.menu}>

        <header className={classes.hederPanel}> 
            <div className={classes.square}></div>
            <div className={classes.routeButton}>
                <Nav></Nav>
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
                

            </div>

            

            <div className={classes.workTabel}>
                {children}
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