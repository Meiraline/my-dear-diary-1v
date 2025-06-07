import React, { useState, useEffect } from 'react';
import styles from './Checkbox.module.css';
import { ReactComponent as CheckIcon } from './Галочка.svg';

const Checkbox = ({
  checked: checkedProp,
  onChange,
  disabled,
  accent = false,
  textType = 'ct',
  ...props
}) => {
  // Если checkedProp передан — работаем как контролируемый, иначе — как неконтролируемый
  const isControlled = checkedProp !== undefined;
  const [checked, setChecked] = useState(!!checkedProp);

  // Синхронизируем внутреннее состояние с пропсом, если компонент контролируемый
  useEffect(() => {
    if (isControlled) setChecked(!!checkedProp);
  }, [checkedProp, isControlled]);

  let colorClass = styles.ct;
  if (textType === 'tt') colorClass = styles.tt;
  if (accent) colorClass = styles.accent;

  const handleChange = (e) => {
    if (disabled) return;
    if (!isControlled) setChecked((prev) => !prev);
    if (onChange) onChange(e);
  };

  return (
    <label className={`${styles.checkboxLabel} ${colorClass} ${disabled ? styles.disabled : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.input}
        {...props}
      />
      <span className={styles.customCheckbox}>
        {checked && <CheckIcon className={styles.checkIcon} />}
      </span>
    </label>
  );
};

export default Checkbox;