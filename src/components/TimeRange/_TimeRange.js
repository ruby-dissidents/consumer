import React, { useState } from "react"
import { Range, getTrackBackground } from "react-range"

import "./_time_range.styles.css"
import { timeArray, timeValues } from "./_constants"

export const TimeRange = () => {
  const STEP = 1
  const MIN = 1
  const MAX = 19
  const [values, setValues] = useState([1, 19])
  const [timeSlotsList, setTimeSlotsList] = useState([])

  function getTimeValues(props) {
    return timeValues[props - 1]
  }

  return (
    <div className="d_tr_container">
      <div className="range">
        <div className="d_tr_container_title">
          По времени могу: <span children={`${getTimeValues(values[0])} – ${getTimeValues(values[1])}`} />
        </div>
        <div className="d_tr_container_ruler">
          {timeArray.map((time, index) => (
            <div className="d_tr_container_ruler_item" key={index}>
              {time}
              <span />
            </div>
          ))}
        </div>
        <div onClick={(event) => event.stopPropagation()}>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => {
              setValues(values)
            }}
            renderTrack={({ props, children }) => (
              <div className="d_tr_container_ruler_line" style={{ ...props.style }}>
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    background: getTrackBackground({
                      values,
                      colors: ["#CDCDCD", "#CDCDCD", "#CDCDCD"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                    margin: "0 auto",
                  }}
                >
                  {children}
                </div>
                <div className="d_tr_container_ruler_line_content" />
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className="d_tr_container_ruler_line_dot"
                style={
                  {
                    // ...props.style
                  }
                }
              >
                <span className="d_tr_container_ruler_line_dot_span" />
                <div className="d_tr_container_ruler_line_dot_stripe" />
                <div className="d_tr_container_ruler_line_dot_stripe" />
              </div>
            )}
          />
        </div>
        <button
          className="d_ts_button"
          children={
            `${getTimeValues(values[0])} – ${getTimeValues(values[1])}` !== "06:00 – 00:00"
              ? "Добавить"
              : "Могу весь день"
          }
          onClick={(event) => {
            event.stopPropagation()
            setTimeSlotsList((prevState) => [...prevState, `${getTimeValues(values[0])} – ${getTimeValues(values[1])}`])
          }}
        />
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
