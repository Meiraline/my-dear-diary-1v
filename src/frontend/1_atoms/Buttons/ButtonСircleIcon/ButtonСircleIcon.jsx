

import classes from './ButtonСircleIcon.module.css';



const ButtonСircleIcon = ({ icon, children, color, ...props }) => {
 
 const buttonClass =
  color === 'n'
      ? `${classes.button} ${classes.color}`
      : `${classes.button} ${classes.nColor}`;

  return (
    <button {...props} className={buttonClass}>
      {icon && (
        <img src={icon} alt="" className={classes.icon} />
      )}
      {children}
    </button>
  );
};

export default ButtonСircleIcon;