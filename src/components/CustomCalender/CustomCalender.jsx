import React, { useState } from "react";
import DatePicker from "react-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import './CustomCalender.css';

export default function App() {
  const [dateValue, setDateValue] = useState(new Date());
  const [timeValue, setTimeValue] = useState(["10:00", "11:00"]);

 const dateOnChange = stat => {
    setDateValue(stat);
    console.log("date select value" + stat);
  };

  const timeOnChange = stat => {
    setTimeValue(stat);
    console.log("date time select value" + stat);
  };

  return (
    <div>
      <div className="customCalendar">
        <DatePicker onChange={dateOnChange} value={dateValue} /> 
        <TimeRangePicker className='timeRangePicker'
          style={{
            margin: 40,
          }}
          onChange={timeOnChange}
          value={timeValue}
          format={"hh:mm a"}
        />
      </div>
    </div>
  );
}
