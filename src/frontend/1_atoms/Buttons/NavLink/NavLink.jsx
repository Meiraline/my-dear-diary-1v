import React from 'react';
import classes from './NavLink.module.css';

const NavLink = ({ active, children, ...props }) => (
  <a
    className={`${classes.link} ${active ? classes.active : ''}`}
    {...props}
  >
    {children}
  </a>
);

export default NavLink;