import React from "react";
const RadioButton = ({ name, value, register, required }) => (
  <>
    <input
      name={name}
      ref={register({ required })}
      value={value}
      type="radio"
    />
    <label htmlFor={value}>{value}</label>
  </>
);

export default RadioButton;
