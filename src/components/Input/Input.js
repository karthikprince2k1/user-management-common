import React from "react";
const Input = ({ label, name, register, required }) => (
  <>
    <label>{label}</label>
    <input name={name} ref={register({ required })} type="text" />
  </>
);

export default Input;
