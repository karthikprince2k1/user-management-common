import React, { useState, useEffect, useRef } from "react";
import "./MultiSelectDropDown.css";

function MultiSelectDropDown(props) {
  const [clicked, setClicked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const wrapperRef = useRef(null);
  const handleClick = function (e) {
    setClicked(!clicked);
  };
  const handleOutsideClick = function (event) {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  const handleListItemClick = function (option) {
    if (!selectedItems.includes(option))
      setSelectedItems([...selectedItems, option]);
  };

  const handleRemoveItem = function (option) {
    setSelectedItems(selectedItems.filter((item) => item !== option));
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown" ref={wrapperRef}>
      <div className="dropdown-menu" onClick={handleClick}>
        {selectedItems.map((item) => {
          return (
            <span className="dropdown-seleced-items">
              {item}{" "}
              <span
                className="close"
                onClick={() => handleRemoveItem(item)}
              ></span>
            </span>
          );
        })}
        <svg
          viewBox="0 0 140 140"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className={clicked ? "rotate" : ""}
        >
          <g>
            <path
              d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
              fill="black"
            />
          </g>
        </svg>
      </div>

      <ul
        className={clicked ? "dropdown-list-visible" : "dropdown-list-hidden"}
      >
        {props.options.map((option) => {
          return (
            <li value={option} onClick={() => handleListItemClick(option)}>
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MultiSelectDropDown;
