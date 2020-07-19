import React from "react";
const RadioButtons = ({ label, name, values, register, required }) => (
  <>
    <label>{label}</label>
    {values &&
      values.map((value) => (
        <input
          name={name}
          ref={register({ required })}
          value={value}
          type="radio"
        />
      ))}
  </>
);

export default RadioButtons;
