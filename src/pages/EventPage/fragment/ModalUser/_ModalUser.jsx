import React from "react"

import IconClose from "../../../../assets/images/icon-close.svg"
import "./_modal_user.css"

export const ModalUser = ({ isOpen, setIsOpenModalUsers, participants }) => {
  if (!isOpen) return null

  return (
    <div className="d_ep_overlay">
      <div className="d_ep_modal_user">
        <div className="stack" style={{ justifyContent: "center" }}>
          <div className="d_ep_modal_user_title">Участники</div>
          <button className="d_ep_modal_user_button_delete" onClick={setIsOpenModalUsers}>
            <img src={IconClose} alt="close" />
          </button>
        </div>
        <div className="d_ep_invite_user_lists">
          {participants.map(({ name }) => (
            <div className="d_ep_invite_user" key={name}>
              <div className="d_ep_invite_user_avatar" children={name[0]} />
              <div className="d_ep_invite_user_text" children={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
