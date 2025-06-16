import classes from './ButtonSquareIcon.module.css';

const ButtonSquareIcon = ({ icon, children, color, ...props }) => {
  const buttonClass =
    color === 'n'
      ? `${classes.button} ${classes.color}`
      : `${classes.button} ${classes.nColor}`;

  return (
    <button {...props} className={buttonClass}>
      {icon && (
        <img src={icon} alt="" className={`theme-icon`} />
      )}
      {children}
    </button>
  );
};

export default ButtonSquareIcon;
