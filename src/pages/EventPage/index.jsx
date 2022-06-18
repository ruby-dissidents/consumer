import React, { Fragment, useState } from "react"

import { events } from "./_constants"
import { ButtonEvent, CardEvent, ModalInvite, ModalUser, Statistics } from "./fragment"
import "./_event_page.styles.css"

const EventPage = () => {
  const [isOpenModalInvite, setIsOpenModalInvite] = useState(false)
  const [isOpenModalUsers, setIsOpenModalUsers] = useState(false)

  return (
    <Fragment>
      <div className="d_ev_container">
        <div className="d_ev_title">Марафон Гарри Поттера</div>
        <div className="stack">
          {events.map(({ title, active }) => (
            <CardEvent
              title={title}
              setIsOpenModalInvite={() => setIsOpenModalInvite((prevState) => !prevState)}
              active={active}
              key={title}
            />
          ))}
        </div>
        <Statistics />
        <ButtonEvent setIsOpenModalUsers={() => setIsOpenModalUsers((prevState) => !prevState)} />
      </div>
      <ModalInvite
        isOpen={isOpenModalInvite}
        setIsOpenModalInvite={() => setIsOpenModalInvite((prevState) => !prevState)}
      />
      <ModalUser isOpen={isOpenModalUsers} setIsOpenModalUsers={() => setIsOpenModalUsers((prevState) => !prevState)} />
    </Fragment>
  )
}

export default EventPage
