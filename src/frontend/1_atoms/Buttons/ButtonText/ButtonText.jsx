

import classes from './ButtonText.module.css';

const ButtonText = ({children, ...props}) => {

  
  
   
    return (
     
        <button {...props} className={classes.button}> 
            {children} 
        </button>
    
      );
};
 

export default ButtonText;