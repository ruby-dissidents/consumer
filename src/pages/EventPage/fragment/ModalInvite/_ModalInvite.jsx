import React from "react"

import IconClose from "../../../../assets/images/icon-close.svg"
import { statisticsTimes } from "./_constants"
import "./_modal_invite.css"
import { getRandomColor } from "../../../../constants"
import { Preloader } from "../../../../components"

export const ModalInvite = ({ isOpen, setIsOpenModalInvite, statistics }) => {
  function getStartLine({ timeLine }) {
    const startArray = []

    for (let i = 0; i <= timeLine.start; i++) {
      startArray.push(<span className="d_ep_statistic_item_white" key={`white-${i}`} />)
    }

    return startArray
  }

  function getEndLine({ timeLine }) {
    const endArray = []

    for (let i = 0; i <= timeLine.end - timeLine.start; i++) {
      endArray.push(<span className="d_ep_statistic_item_grey" key={`grey-${i}`} />)
    }

    return endArray
  }

  if (!isOpen) return null

  return (
    <div className="d_ep_overlay">
      <div className="d_ep_modal_invite">
        <div className="stack" style={{ justifyContent: "center" }}>
          <div className="d_ep_modal_invite_title">{statistics.fullDate}</div>
          <button className="d_ep_modal_invite_button_delete" onClick={setIsOpenModalInvite}>
            <img src={IconClose} alt="close" />
          </button>
        </div>
        <div className="d_ep_stack">
          <div className="d_ep_users">
            <div className="d_ep_users_title">Участники</div>
            {statistics.users.map(({ name }) => (
              <div className="d_ep_user" key={name}>
                <div className="d_ep_user_avatar" style={getRandomColor()} children={name[0]} />
                {name}
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
            <Preloader>
              {statistics.users.map((item) => (
                <div className="d_ep_statistic_item" key={item.name}>
                  {getStartLine(item).map((item) => item)}
                  {getEndLine(item).map((item) => item)}
                </div>
              ))}
            </Preloader>
          </div>
        </div>
      </div>
    </div>
  )
}
