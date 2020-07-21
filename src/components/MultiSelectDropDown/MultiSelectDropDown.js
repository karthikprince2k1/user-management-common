import React, { useState, useEffect, useRef } from "react";
import "./MultiSelectDropDown.css";

function MultiSelectDropDown(props) {
  const [clicked, setClicked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const wrapperRef = useRef(null);
  const { register, setValue, name } = props;
  const handleClick = function (e) {
    setClicked(!clicked);
  };
  const handleOutsideClick = function (event) {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  const handleListItemClick = function (option) {
    if (!selectedItems.includes(option)) {
      const selItems = [...selectedItems, option];
      setSelectedItems(selItems);
      setValue && setValue(props.name, selItems.join(","));
    }
  };

  const handleRemoveItem = function (option) {
    const filterdItems = selectedItems.filter((item) => item !== option);
    setSelectedItems(filterdItems);
    setValue && setValue(props.name, filterdItems.join(","));
  };
  useEffect(() => {
    register && register({ name: name, type: "custom" }, { required: true });
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  useEffect(() => {
    if (props.defaultValue) {
      const arr = props.defaultValue.split(";").map((i) => {
        let item = i.trim();
        return item.charAt(0).toUpperCase() + item.slice(1);
      });
      const selItems = [...selectedItems, ...arr];
      setSelectedItems(selItems);
      setValue && setValue(props.name, selItems.join(","));
    }
  }, [props.defaultValue]);

  return (
    <div className="dropdown" ref={wrapperRef}>
      <div
        className="dropdown-menu"
        onClick={handleClick}
        data-testid="dropdown-menu"
      >
        {selectedItems.map((item, i) => {
          return (
            <span
              className="dropdown-selected-item"
              data-testid="dropdown-selected-item"
              key={item + i}
            >
              {item}{" "}
              <span
                className="close"
                onClick={() => handleRemoveItem(item)}
                data-testid="remove-item"
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
          data-testid="arrow-down"
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
        data-testid="dropdown-list"
      >
        {props.options &&
          props.options.map((option, i) => {
            return (
              <li
                value={option}
                onClick={() => handleListItemClick(option)}
                key={option + i}
                data-testid="dropdown-list-item"
              >
                {option}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MultiSelectDropDown;
