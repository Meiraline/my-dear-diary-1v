import React from 'react';
import classes from './NavLinkButton.module.css';

const NavLinkButton = ({ active, children, ...props }) => (
  <button
    className={`${classes.link} ${active ? classes.active : ''}`}
    {...props}
  >
    {children}
  </button>
);

export default NavLinkButton;