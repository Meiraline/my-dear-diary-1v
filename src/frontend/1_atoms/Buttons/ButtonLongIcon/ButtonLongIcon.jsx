

import classes from './ButtonLongIcon.module.css';

const ButtonLongIcon = ({ icon, children, ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {icon && (
        <img src={icon} alt="" className={classes.icon} />
      )}
      {children}
    </button>
  );
};

export default ButtonLongIcon;