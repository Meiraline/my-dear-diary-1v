

import React, { useState, useRef, useEffect } from 'react';
import classes from './Select.module.css';

import { ReactComponent as ArrowDown } from './Стрелка вниз.svg';
import { ReactComponent as ArrowUp } from './Стрелочка вверх.svg';


const CustomSelect = ({ label, options = [], value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find(opt => opt.value === value);

    return (
    <div className={classes.wrapper}>
      {label && <label className={classes.label}>{label}</label>}
      <div className={classes.selectContainer} ref={ref}>
        <div
          className={classes.customSelect}
          onClick={() => setOpen(o => !o)}
          tabIndex={0}
        >
          <span>{selected ? selected.name : ''}</span>
          {open ? <ArrowUp className={classes.arrow} /> : <ArrowDown className={classes.arrow} />}
        </div>
        {open && (
          <ul className={classes.optionsList}>
            {options.map(opt => (
              <li
                key={opt.value}
                className={`${classes.optionItem} ${opt.value === value ? classes.selected : ''}`}
                onClick={() => { onChange(opt.value); setOpen(false); }}
              >
                {opt.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;