import React from "react"
import { Link } from "react-router-dom"

import "./_event_card.styles.css"

export const EventCard = ({ title, data, color, link = "/" }) => (
  <div className="d_mp_event_card" style={{ backgroundColor: color }}>
    <Link to={link}>
      <div className="d_mp_event_card_title">{title}</div>
      <div className="d_mp_event_card_date">{data}</div>
    </Link>
  </div>
)
