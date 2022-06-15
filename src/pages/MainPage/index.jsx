import { Fragment } from "react"

import { EventCard } from "./fragments/indext"
import { eventCards, eventCardsOld } from "./_constants"
import "./_main_page.styles.css"

const MainPage = () => {
  return (
    <Fragment>
      <div className="d_mp_tile">Грядущие</div>
      <div className="d_mp_upcoming">
        {eventCards.map(({ color, title, data }) => (
          <EventCard title={title} data={data} color={color} />
        ))}
      </div>
      <br />
      <div className="d_mp_tile">Прошедшие</div>
      <div className="d_mp_upcoming">
        {eventCardsOld.map(({ color, title, data }) => (
          <EventCard title={title} data={data} color={color} />
        ))}
      </div>
    </Fragment>
  )
}

export default MainPage
