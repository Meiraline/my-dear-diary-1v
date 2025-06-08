
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


// вызов ошибки

// const [showError, setShowError] = useState(false);

//   const handleErrorClick = () => {
//     setShowError(true);
//   };

//   const handleCloseError = () => {
//     setShowError(false);
//   };

//   return (
//     <div className="App">
//  <button onClick={handleErrorClick}>Вызвать ошибку</button>

//       {showError && (
//         <Error
//           title="Ошибка авторизации"
//           message="Неверное имя пользователя или пароль."
//           onClose={handleCloseError}
//         />
//       )}
//     </div>
//   );
// }