import React from "react"

import IconClose from "../../../../assets/images/icon-close.svg"
import { statisticsItemTimes, statisticsTimes } from "./_constants"
import { userList } from "../../../../constants"
import "./_modal_invite.css"

export const ModalInvite = ({ isOpen, setIsOpenModalInvite }) => {
  if (!isOpen) return null

  return (
    <div className="d_ep_overlay">
      <div className="d_ep_modal_invite">
        <div className="stack" style={{ justifyContent: "center" }}>
          <div className="d_ep_modal_invite_title">7 июня, понедельник</div>
          <button className="d_ep_modal_invite_button_delete" onClick={setIsOpenModalInvite}>
            <img src={IconClose} alt="close" />
          </button>
        </div>
        <div className="d_ep_stack">
          <div className="d_ep_users">
            <div className="d_ep_users_title">Участники</div>
            {userList.map((user) => (
              <div className="d_ep_user">
                <div className="d_ep_user_avatar" key={user} />
                {user}
              </div>
            ))}
          </div>
          <div className="d_ep_statistics">
            <div className="d_ep_time_line">
              {statisticsTimes.map((time) => (
                <div className="d_ep_time_line_time" key={time}>
                  {time}
                  <span />
                </div>
              ))}
            </div>
            {statisticsItemTimes.map((time) => (
              <div className="d_ep_statistic_item" key={time}>
                <span />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
