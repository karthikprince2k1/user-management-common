import React, { useState } from "react";

function DropDownMenu(props) {
  const [selectedItem, setSelectedItem] = useState("");
  const handleChange = function (event) {
    console.log("selected", event.target.value);
    setSelectedItem(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {props.items.map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </select>
  );
}

export default DropDownMenu;
