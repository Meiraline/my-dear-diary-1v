import classes from './Menu.module.css';

function CloseLeftMenu() {
  return (
  <div className={ classes.leftConteiner}>
    Открыто
    {/* <button className={classes.leftButton} onClick={ToggleLeftBar}> {leftPanel ? '←' : '→'} </button> */}
 </div>
 )}

 export default CloseLeftMenu;