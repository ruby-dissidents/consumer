import React from "react"

import { TimeSlot } from "./fragments"
import { marking } from "../../constants"
import "./_time_slots.css"

const TimeSlots = () => (
  <div className="d_ts_wrapper_time_slots">
    {marking.timeSlots.map(({ date, title, timeSlotsList }, index) => (
      <TimeSlot date={date} title={title} timeSlotsList={timeSlotsList} key={date} id={index} />
    ))}
  </div>
)

export default TimeSlots
