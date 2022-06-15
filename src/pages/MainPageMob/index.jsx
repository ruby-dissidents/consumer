import { Fragment } from "react"

import logo from "../../assets/images/logo.svg"
import { EventCardMob } from "../../components"
import "./_main_page_mob.styles.css"

const MainPageMob = () => {
  return (
    <Fragment>
      <img src={logo} alt="Logo" className="logo" />
      <EventCardMob />
    </Fragment>
  )
}

export default MainPageMob
