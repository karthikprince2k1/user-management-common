import React from "react";
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
);

export default Input;
