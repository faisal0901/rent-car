import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
export default function InputDate() {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}
