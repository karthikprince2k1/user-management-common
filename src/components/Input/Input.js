import React, { useState } from "react";

const Input = ({ label, name, register, required, defaultValue }) => {
  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        ref={register({ required })}
        type="text"
        defaultValue={defaultValue}
      />
    </>
  );
};

export default Input;
