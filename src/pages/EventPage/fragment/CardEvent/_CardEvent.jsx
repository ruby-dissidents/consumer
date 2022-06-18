import React from "react"

import "./_card_event.styles.css"

export const CardEvent = ({ title, active = false, setIsOpenModalInvite }) => {
  const classNameParticipants = active ? "d_ce free" : "d_ce"
  const messageProposal = active
    ? "Этот слот свободен у всех 14 участников. Мы все проверили!"
    : "Напиши им: возможно, они смогут перенести дела и подстроиться"

  return (
    <div className={classNameParticipants} onClick={setIsOpenModalInvite}>
      <div className="d_ce_title">{title}</div>
      <div>
        {!active && (
          <div className="d_ce_participants">
            <div className="d_ce_participants_title">Но без 1 участника:</div>
            <div className="d_ce_scroll">
              <div className="d_ce_participant">
                <div className="d_ce_participant_avatar">Ф</div>
                <div className="d_ce_participant_title">
                  Федор <br /> Достоевский
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="d_ce_proposal">{messageProposal}</div>
      </div>
    </div>
  )
}
