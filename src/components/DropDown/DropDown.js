import React, { useState } from "react";

const DropDown = React.forwardRef(({ label, options, register }, ref) => (
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
      {options &&
        options.map((opt) => {
          return <option value={opt}>{opt}</option>;
        })}
    </select>
  </>
));
export default DropDownMenu;
