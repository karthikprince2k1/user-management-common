import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiSelectDropDown from "./components/MultiSelectDropDown/MultiSelectDropDown";
import DropDownMenu from "./components/DropDown/DropDown";
import CustomDatePicker from "./components/CustomDatePicker/CustomDatePicker";

function App() {
  const options = ["Read", "Write", "Super", "Admin"];
  const handleDateChange = (e) => console.log(e);
  return (
    <div className="App">
      <MultiSelectDropDown options={options} />
      <DropDownMenu options={options} />
      <CustomDatePicker handleChange={handleDateChange} />
    </div>
  );
}

export default App;
