import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const getFormattedDate = (strDate) => {
  if (!strDate) return "";
  // converts date in YYYY-MM-DD format to Date
  const dateArr = strDate.split("-");
  return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
};
const CustomDatePicker = forwardRef((props, ref) => {
  const [startDate, setStartDate] = useState(null);
  const CustomDateInput = forwardRef((props, ref) => (
    <input
      onClick={props.onClick}
      value={props.value || getFormattedDate(props.defaultValue)}
      onChange={props.onClick}
      ref={props.register}
      name={props.internalName}
    />
  ));
  return (
    <>
      <label>{props.label}</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={
          <CustomDateInput
            internalName={props.name}
            register={props.register}
            defaultValue={props.defaultValue}
          />
        }
      />
    </>
  );
});

// function CustomDatePicker(props) {
//   const [startDate, setStartDate] = useState(new Date());
//   const CustomDateInput = (props) => {
//     const required = props.required;
//     console.log(props.internalName);
//     return (
//       <input
//         value={props.value}
//         name={props.internalName}
//         ref={props.register({ required })}
//       />
//     );
//   };
//   console.log(props);
//   return (
//     <>
//       <label>{props.label}</label>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         customInput={
//           <CustomDateInput
//             internalName={props.name}
//             register={props.register}
//             required={props.required}
//           />
//         }
//       />
//     </>
//   );
//}

export default CustomDatePicker;
