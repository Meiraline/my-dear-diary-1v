import React, { useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import UserContext from '../../UserContext';
import { useDiaryDb } from '../../DiaryDbContext';
import { getAllTests, addTestEntry } from '../../data_base/userDiaryDb';


import Menu from '../4_templates/Menu/Menu';





function DaskPage() {
  
 




  return (
    <div>

        <Menu >
         

        </Menu>

    </div>
  );
}

export default DaskPage;