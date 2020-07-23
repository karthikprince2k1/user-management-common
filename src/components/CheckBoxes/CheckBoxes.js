import React, { useState } from "react";

export const Checkbox = ({
  type = "checkbox",
  name,
  checked = false,
  onChange,
  defaultChecked,
}) => {
  console.log("Checkbox: ", name, checked);

  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export const CheckBoxes = (props) => {
  const initialState = {};
  if (props.defaultChecked) {
    props.checkboxes.map((item) => (initialState[item.name] = true));
  }

  const [checkedItems, setCheckedItems] = useState(initialState);

  const handleChange = (event) => {
    const newState = {
      ...checkedItems,
      [event.target.name]: event.target.checked,
    };
    setCheckedItems(newState);
    props.handleCheckBoxes && props.handleCheckBoxes(newState);
    console.log("checkedItems: ", newState);
  };
  return (
    <div>
      {props.checkboxes &&
        props.checkboxes.map((item) => (
          <label key={item.key}>
            <Checkbox
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleChange}
            />
            {item.label}
          </label>
        ))}
    </div>
  );
};
