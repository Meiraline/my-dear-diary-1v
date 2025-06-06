
import classes from './Select.module.css';

const Select = ({options = [], defaultValue, value, onChange}) => {
    return (
       <div>
        <select 
        value={value}
        onChange={event => onChange(event.target.value)}>
            <option disabled={true} value="">{defaultValue}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
      </div>  
    );
};

export default Select;