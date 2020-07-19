import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = React.forwardRef(
  ({ label, name, options, register }, ref) => {
    const [date, setDate] = useState(new Date());
    return (
      <>
        <label>{label}</label>
        <DatePicker selected={date} onChange={setDate} name={name} ref={ref} />
      </>
    );
  }
);

export default CustomDatePicker;
