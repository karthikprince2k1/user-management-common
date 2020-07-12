import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiSelectDropDown from "./components/MultiSelectDropDown/MultiSelectDropDown";

function App() {
  const options = ["Read", "Write", "Super", "Admin"];

  return (
    <div className="App">
      <MultiSelectDropDown options={options} />
    </div>
  );
}

export default App;
