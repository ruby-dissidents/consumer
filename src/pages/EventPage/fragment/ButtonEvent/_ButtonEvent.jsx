import React from "react"

import "./_button_event.styles.css"

export const ButtonEvent = ({ setIsOpenModalUsers }) => (
  <div className="d_ep_button_event">
    <button className="d_ep_invite_participants">Пригласить участников</button>
    <button className="d_ep_button_participants" onClick={setIsOpenModalUsers}>
      14
    </button>
  </div>
)
