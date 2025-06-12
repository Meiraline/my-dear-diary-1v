import React, { useState, useContext } from 'react';

import classes from './Menu.module.css';



// Импорты элементов


import ButtonSquareIcon from "../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon"




function Menu (props)  {

  const [leftPanel, setLeftPanel] = useState(null);
  const [rightPanel, setRightPanel] = useState(null);

    return (
   
      <div className={classes.menu}>

        <header className={classes.hederPanel}> 
            <div className={classes.square}></div>
            <div className={classes.routeButton}>
                <ButtonSquareIcon>1</ButtonSquareIcon>
                <ButtonSquareIcon>2</ButtonSquareIcon>
                <ButtonSquareIcon>3</ButtonSquareIcon>
                <ButtonSquareIcon>4</ButtonSquareIcon>
            </div>
            <div className={classes.meniButton}>
                <ButtonSquareIcon>1</ButtonSquareIcon>
                <ButtonSquareIcon>2</ButtonSquareIcon>
                <ButtonSquareIcon>3</ButtonSquareIcon>
                <ButtonSquareIcon>4</ButtonSquareIcon>
            </div>
            <div className={classes.chengRegim}>
                <input type="checkbox" />
            </div>
        </header>

       
        <div className={classes.conteiner}>

            <div className={classes.leftPanel}>
                <div className={ classes.leftConteiner}></div>
                <button className={classes.leftButton}>+</button>
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