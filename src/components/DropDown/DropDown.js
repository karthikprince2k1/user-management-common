import React from "react";

const DropDown = React.forwardRef(
  ({ label, name, options, register, defaultValue }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} value={defaultValue}>
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
  )
);
export default DropDown;
