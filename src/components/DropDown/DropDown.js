import React from "react";

const DropDown = React.forwardRef(({ label, name, options, register }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref}>
      {options &&
        options.map((opt, i) => {
          return (
            <option value={opt} key={i}>
              {opt}
            </option>
          );
        })}
    </select>
  </>
));
export default DropDown;
