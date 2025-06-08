
import ButtonСircleIcon from '../../1_atoms/Buttons/ButtonСircleIcon/ButtonСircleIcon';
import styles from './Error.module.css';
import closeIcon from './Крестик в кружке.svg';

const Error = ({ title, message, onClose }) => (
  
  <div className={styles.container}>
    <div className={styles.icon}>!</div>
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.message}>{message}</div>
    </div>
     <ButtonСircleIcon
      className={styles.closeCircle}
      aria-label="Закрыть"
      onClick={onClose}
      icon={closeIcon}/>
  </div>
 
   
);

export default Error;