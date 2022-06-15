import React from "react"

import "./_time_slot.styles.css"

export const TimeSlot = ({ title, date, timeSlotsList }) => (
  <div className="d_ts_time_slots">
    <div className="d_ts_time_slots_title">{title}</div>
    <div className="d_ts_time_slots_date">{date}</div>
    {typeof timeSlotsList !== "undefined" && (
      <div className="d_ts_time_slots_list">
        {timeSlotsList.map((date) => (
          <div className="d_ts_time_slots_list_item" key={date}>
            {date}
          </div>
        ))}
      </div>
    )}
  </div>
)
