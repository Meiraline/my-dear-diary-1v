import React from 'react';
import classes from './LinkButton.module.css';

const LinkButton = ({ active, children, ...props }) => (
  <button
    className={`${classes.link} ${active ? classes.active : ''}`}
    {...props}
  >
    {children}
  </button>
);

export default LinkButton;