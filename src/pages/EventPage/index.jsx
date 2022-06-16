import React from "react"

import { events } from "./_constants"
import { CardEvent, Statistics } from "./fragment"
import "./_event_page.styles.css"

const EventPage = () => (
  <div className="d_ev_container">
    <div className="d_ev_title">Марафон Гарри Поттера</div>
    <div className="stack">
      {events.map(({ title, active }) => {
        return <CardEvent title={title} active={active} key={title} />
      })}
    </div>
    <Statistics />
  </div>
)

export default EventPage
