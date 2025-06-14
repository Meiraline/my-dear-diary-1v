import React, { useState } from 'react';
import classes from'./Toggle.module.css';

const Toggle = ({ firstIcon, secondIcon }) => {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => setEnabled(prev => !prev);

  return (
    <div className={classes["toggle-switch"]} onClick={toggle}>
        <div className={`${classes.track} ${enabled ? classes.enabled : ''}`}>
            <div className={classes.thumb}>
                <img src={enabled ? firstIcon : secondIcon} alt="icon" className={classes.icon} />
            </div>
        </div>
    </div>
  );
};

export default Toggle;



