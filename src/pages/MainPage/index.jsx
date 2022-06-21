import { EventCard } from "./fragments/indext"
import { eventCardsOld } from "./_constants"
import { eventsMd } from "../../constants"
import "./_main_page.styles.css"
import { Fragment } from "react"
import { Preloader } from "../../components"

const MainPage = () => (
  <div className="d_container">
    <Preloader>
      <Fragment>
        <div className="d_mp_tile">Грядущие</div>
        <div className="d_mp_upcoming">
          {eventsMd.map(({ color, title, data, link }) => (
            <EventCard title={title} data={data} color={color} key={title} link={link} />
          ))}
        </div>
        <br />
        <div className="d_mp_tile">Прошедшие</div>
        <div className="d_mp_upcoming">
          {eventCardsOld.map(({ color, title, data }) => (
            <EventCard title={title} data={data} color={color} key={title} />
          ))}
        </div>
      </Fragment>
    </Preloader>
  </div>
)

export default MainPage
