import React, { useState } from "react";

export const Checkbox = ({
  type = "checkbox",
  name,
  checked = false,
  onChange,
}) => {
  console.log("Checkbox: ", name, checked);

  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export const CheckBoxes = (props) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    console.log("checkedItems: ", checkedItems);
  };
  return (
    <div>
      {props.checkboxes &&
        props.checkboxes.map((item) => (
          <label key={item.key}>
            {item.name}
            <Checkbox
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleChange}
            />
          </label>
        ))}
    </div>
  );
};
