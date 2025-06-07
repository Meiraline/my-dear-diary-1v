

import classes from './ButtonSquareIcon.module.css';

const ButtonSquareIcon = ({ icon, children, ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {icon && (
        <img src={icon} alt="" className={classes.icon} />
      )}
      {children}
    </button>
  );
};

export default ButtonSquareIcon;