import React from 'react';
import styles from './ToggleBtn.module.css';
const ToggleBtn = ({ menuTitle, changeHandler, toggleValue }) => {
  return (
    <label htmlFor={menuTitle} className={styles.switchBtn}>
      {toggleValue === 'true' ? (
        <input
          id={menuTitle}
          type="checkbox"
          checked
          onChange={e => changeHandler(e.target.checked)}
        />
      ) : (
        <input id={menuTitle} type="checkbox" onChange={e => changeHandler(e.target.checked)} />
      )}
      <span className={styles.onOffSwitch}></span>
    </label>
  );
};
export default ToggleBtn;
