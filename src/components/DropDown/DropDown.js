import React, { useState, useEffect } from "react";

const DropDown = React.forwardRef(
  ({ label, name, options, register, defaultValue }, ref) => {
    const [defaultVal, setDefaultVal] = useState(false);
    useEffect(() => {
      setDefaultVal(defaultValue);
    }, [defaultValue]);
    const handleChange = (e) => setDefaultVal(e.target.value);
    return (
      <>
        <label>{label}</label>
        <select
          name={name}
          ref={ref}
          value={defaultVal}
          onChange={handleChange}
        >
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
    );
  }
);
export default DropDown;
