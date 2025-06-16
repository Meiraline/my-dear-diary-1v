import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../../DiaryDbContext';

import classes from './Menu.module.css';



// Импорты элементов


import ButtonSquareIcon from "../../1_atoms/Buttons/ButtonSquareIcon/ButtonSquareIcon"
import Nav from '../../2_molecules/Novigate/Nav';   
import Toggle from '../../1_atoms/Buttons/Toggle/Toggle';




// Иморт иконок


import belllIcon from '../../pictchers/icon/Колокольчик.svg';
import settingsIcon from '../../pictchers/icon/Настройки.svg';
import chatlIcon from '../../pictchers/icon/Чат ии.svg';
import morelIcon from '../../pictchers/icon/Многоточие.svg';

import redIcon from '../../pictchers/icon/Редактировать.svg'
import seeIcon from '../../pictchers/icon/Открытый глаз.svg'


// Импорты правых панелей

import CollPanel from './RitePanel/CollPanel';
import MorePanel from './RitePanel/MorePanel';
import SettingsPanel from './RitePanel/SettingsPanel';
import ChatPanel from './RitePanel/ChatPanel';

// Иморт левых панелей

import TableCloseR_Panel from './TabelePanel/TableCloseR_Panel'
import TableOpenR_Panel from './TabelePanel/TableOpenR_Panel'
import TableCloseW_Panel from './TabelePanel/TableCloseW_Panel'
import TableOpenW_Panel from './TabelePanel/TableOpenW_Panel'

import DaskCloseR_Panel from './DaskPanel/DaskCloseR_Panel'
import DaskOpenR_Panel from './DaskPanel/DaskOpenR_Panel'
import DaskCloseW_Panel  from './DaskPanel/DaskCloseW_Panel'
import DaskOpenW_Panel from './DaskPanel/DaskOpenW_Panel'

import NoteCloseR_Panel from './NotePanel/NoteCloseR_Panel'
import NoteOpenR_Panel from './NotePanel/NoteOpenR_Panel'
import NoteCloseW_Panel from './NotePanel/NoteCloseW_Panel'
import NoteOpenW_Panel from './NotePanel/NoteOpenW_Panel'

import AppCloseR_Panel from './AppPanel/AppCloseR_Panel'
import AppOpenR_Panel  from './AppPanel/AppOpenR_Panel'
import AppCloseW_Panel  from './AppPanel/AppCloseW_Panel'
import AppOpenW_Panel from './AppPanel/AppOpenW_Panel'


function Menu ({children})  {

    const { leftPanel, setLeftPanel } = useContext(UserContext);
    const { leftPanelOpen,  setLeftPanelOpen } = useContext(UserContext);
    const {redRegim, setRedRegim } = useContext(UserContext);


    const { rightPanel, setRightPanel } = useContext(UserContext);


    const [reloadTrigger, setReloadTrigger] = useState(0);
    
      const refreshBlocks = () => {
        setReloadTrigger(prev => prev + 1);
      };
    
 
    const RitepanelCheng = (panelName) => {
        setRightPanel(prev => (prev === panelName ? null : panelName));
    }

    const ChengRegim = () => {
         setRedRegim(prev => !prev);
    }



    return (
   
      <div className={classes.menu}>

        <header className={classes.hederPanel}> 
            <div className={classes.square}></div>
            <div className={classes.routeButton}>
                <Nav></Nav>
            </div>
            <div className={classes.meniButton}>
                <ButtonSquareIcon icon={belllIcon} onClick={() => RitepanelCheng('coll')} />
                <ButtonSquareIcon icon={settingsIcon} onClick={() => RitepanelCheng('settings')} />
                <ButtonSquareIcon icon={chatlIcon} onClick={() => RitepanelCheng('chat')} />
                <ButtonSquareIcon icon={morelIcon} onClick={() => RitepanelCheng('more')} />
            </div>
            <div className={classes.chengRegim} onClick={() => ChengRegim()}>
                <Toggle firstIcon = {redIcon}  secondIcon = {seeIcon}   > </Toggle>
            </div>
        </header>

       
        <div className={classes.conteiner}>

            <div className={classes.leftPanel}>

               
                

                {leftPanel === 'tabl' && leftPanelOpen === false && redRegim === true && <TableCloseR_Panel />}
                {leftPanel === 'tabl' && leftPanelOpen === true && redRegim === true && <TableOpenR_Panel />}
                {leftPanel === 'tabl' && leftPanelOpen === false && redRegim === false && <TableCloseW_Panel />}
                {leftPanel === 'tabl' && leftPanelOpen === true && redRegim === false && <TableOpenW_Panel />}

                {leftPanel === 'dask' && leftPanelOpen === false && redRegim === true && <DaskCloseR_Panel />}
                {leftPanel === 'dask' && leftPanelOpen === true && redRegim === true && <DaskOpenR_Panel refreshBlocks={refreshBlocks}/>}
                {leftPanel === 'dask' && leftPanelOpen === false && redRegim === false && <DaskCloseW_Panel />}
                {leftPanel === 'dask' && leftPanelOpen === true && redRegim === false && <DaskOpenW_Panel />}

                {leftPanel === 'note' && leftPanelOpen === false && redRegim === true && <NoteCloseR_Panel />}
                {leftPanel === 'note' && leftPanelOpen === true && redRegim === true && <NoteOpenR_Panel />}
                {leftPanel === 'note' && leftPanelOpen === false && redRegim === false && <NoteCloseW_Panel />}
                {leftPanel === 'note' && leftPanelOpen === true && redRegim === false && <NoteOpenW_Panel />}

                {leftPanel === 'app' && leftPanelOpen === false && redRegim === true && <AppCloseR_Panel />}
                {leftPanel === 'app' && leftPanelOpen === true && redRegim === true && <AppOpenR_Panel />}
                {leftPanel === 'app' && leftPanelOpen === false && redRegim === false && <AppCloseW_Panel />}
                {leftPanel === 'app' && leftPanelOpen === true && redRegim === false && <AppOpenW_Panel />}




            </div>

            
            <div className={classes.workTabel}>
                {React.cloneElement(children, { reloadTrigger })}
            </div>

            <div >

                {rightPanel === 'coll' && <CollPanel />}
                {rightPanel === 'settings' && <SettingsPanel />}
                {rightPanel === 'chat' && <ChatPanel />}
                {rightPanel === 'more' && <MorePanel />}
               

            </div>

        </div>
      
      </div>
    
      );
};
 





export default Menu;