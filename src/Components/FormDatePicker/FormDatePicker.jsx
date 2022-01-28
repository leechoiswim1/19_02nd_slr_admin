import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FormDatePicker.module.css";

const FormDatePicker = ({changeHandler, name, dateType}) => {
  const [isDate, setIsDate] = useState(null);
  
  return (
    <>
    <div className={styles.datePickerWrapper}>

      <label className={styles.label}>
      <DatePicker 
      className={styles.selectDate}
      selected={ isDate }
      dateFormat={dateType === "time" ? "yyyy.MM.dd HH:mm" : "yyyy.MM.dd"}
      placeholderText={dateType === "time" ? "YYYY.MM.DD YY:MM" : "YYYY.MM.DD"}
      showTimeInput
      name={`${name}-date`}
      onChange={(date) => {
        setIsDate(date)
        changeHandler(date)
      }} 
      />
      <span className={styles.i}>
        <i class="fas fa-chevron-down" />
      </span>
    </label>

    </div>

    
    </>
  );
};

export default FormDatePicker;