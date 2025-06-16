import React, { useState } from 'react';
import Menu from '../4_templates/Menu/Menu';
import DiaryBlocksContainer from '../4_templates/BlocksContainer/DiaryBlocksContainer';
import DaskOpenR_Panel from '../4_templates/Menu/DaskPanel/DaskOpenR_Panel';

function DaskPage() {
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const refreshBlocks = () => {
    setReloadTrigger(prev => prev + 1);
  };

  return (
    <div>
      <Menu>
        <DiaryBlocksContainer reloadTrigger={reloadTrigger} />
        {/* <DaskOpenR_Panel refreshBlocks={refreshBlocks} /> */}
      </Menu>
    </div>
  );
}

export default DaskPage;

