

import classes from './ButtonСircleIcon.module.css';

const ButtonСircleIcon = ({ icon, children, ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {icon && (
        <img src={icon} alt="" className={classes.icon} />
      )}
      {children}
    </button>
  );
};

export default ButtonСircleIcon;