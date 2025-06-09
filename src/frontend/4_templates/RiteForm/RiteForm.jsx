import React from 'react';
import styles from './RiteForm.module.css';

const RiteForm = ({
  header,
  title,
  subtitle,
  children,
  rightContent,
  onSubmit
}) => (
  <div className={styles.riteFormWrapper}>
    <div className={styles.left}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.formContent}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        <div className={styles.form} >
          {children}
        </div>
      </div>
    </div>
    <div className={styles.right}>
      {rightContent}
    </div>
  </div>
);

export default RiteForm;