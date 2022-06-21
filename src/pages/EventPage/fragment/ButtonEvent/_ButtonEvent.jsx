import React from "react"

import "./_button_event.styles.css"
import IconUser from "../../../../assets/images/icon-users.svg"

export const ButtonEvent = ({ setIsOpenModalUsers, numberUsers }) => (
  <div className="d_ep_button_event">
    <button className="d_ep_invite_participants">Пригласить участников</button>
    <button className="d_ep_button_participants" onClick={setIsOpenModalUsers}>
      <img src={IconUser} alt="icon user" width="20" height="20" />
      {numberUsers}
    </button>
  </div>
)
