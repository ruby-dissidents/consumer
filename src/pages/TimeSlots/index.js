import React from "react";

import {TimeSlot} from "./fragments"
import {timeSlots} from "./_constants"

const TimeSlots = () => (
  <div style={{height: "calc(100% - 30px)", display: "flex", overflow: "hidden"}}>
    {timeSlots.map(({date, title, timeSlotsList}) => (
      <TimeSlot date={date} title={title} timeSlotsList={timeSlotsList} key={date}/>
    ))}
  </div>
);

export default TimeSlots;
