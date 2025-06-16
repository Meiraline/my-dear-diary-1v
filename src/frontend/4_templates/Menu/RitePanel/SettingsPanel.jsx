import classes from '../Menu.module.css';

import React, { useState, useContext } from 'react';

import UserContext from '../../../../DiaryDbContext';
import ButtonSquareIcon from '../../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../../../ThemeContext';

import Toggle from '../../../1_atoms/Buttons/Toggle/Toggle';

import liteTemeIcon from '../../../pictchers/icon/Девная тема.svg'
import darkTemeIcon from '../../../pictchers/icon/Ночная тема.svg'
import LanguageSwitcher from '../../../2_molecules/LanguageSwitcher';

function SettingsPanel() {


const { rightPanel, setRightPanel } = useContext(UserContext);
    
const RitepanelCheng = (panelName) => {
        setRightPanel(prev => (prev === panelName ? null : panelName));
    }

const { toggleTheme, theme } = useTheme();

const { t } = useTranslation();

  return (
  <div className={ classes.rightPanel}>
    
  <div className={ classes.rightPanelContent}>
     
  <div className={classes.line}></div>
  <div className={classes.row}>
  
  <h4>{t('temaSwitcher')}</h4>
  <div onClick={toggleTheme}>
    <Toggle firstIcon={darkTemeIcon} secondIcon={liteTemeIcon} />
  </div>
</div>
  <div className={classes.line}></div>

   <h4>{t('languageSwitcher')}</h4> 
   <LanguageSwitcher></LanguageSwitcher>

   <div className={classes.row}>

   </div>
   
 

  </div>

   <ButtonSquareIcon  onClick={() => RitepanelCheng('settings')}>  →  </ButtonSquareIcon>
  
    
   
 </div>
 )}

 export default SettingsPanel;