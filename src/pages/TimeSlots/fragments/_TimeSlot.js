import React, { useRef } from "react"

import { TimeRange } from "../../../components"
import "./_time_slot.styles.css"

const activeClass = "d_ts_time_slots_active"

export const TimeSlot = ({ title, date, timeSlotsList, id }) => {
  const timeSlotRef = useRef(null)

  function eventIsOpenSlot(event) {
    event.stopPropagation()
    const timeSlot = timeSlotRef.current

    if (timeSlot.classList.length === 1) {
      timeSlot.classList.add(activeClass)
    } else {
      timeSlot.classList.remove(activeClass)
    }
  }

  return (
    <div className="d_ts_time_slots" onClick={(event) => eventIsOpenSlot(event)} ref={timeSlotRef} id={id}>
      <div className="d_ts_time_slots_title">{title}</div>
      <div className="d_ts_time_slots_date">{date}</div>
      <div className="range">
        <TimeRange />
        <button className="d_ts_button" children="Могу весь день" />
      </div>
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
}
