import React, { useState } from "react";
const RadioButton = ({
  name,
  value,
  register,
  required,
  defaultValue,
  label,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (event) => setSelectedOption(event.target.value);
  return (
    <>
      <input
        name={name}
        ref={register({ required })}
        value={value}
        type="radio"
        checked={selectedOption === value || defaultValue === value}
        onChange={handleOptionChange}
      />
      <label htmlFor={value}>{label}</label>
    </>
  );
};

export default RadioButton;
