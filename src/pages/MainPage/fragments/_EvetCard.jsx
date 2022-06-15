import React from "react"

import "./_event_card.styles.css"

export const EventCard = ({ title, data, color }) => (
  <div className="d_mp_event_card" style={{ backgroundColor: color }}>
    <div className="d_mp_event_card_title">{title}</div>
    <div className="d_mp_event_card_date">{data}</div>
  </div>
)
