import React from "react"

import "./_card_event.styles.css"

export const CardEvent = ({ title, active = false, setIsOpenModalInvite, number, users }) => {
  const classNameParticipants = active ? "d_ce free" : "d_ce"
  const messageProposal = active
    ? `Этот слот свободен у всех ${number} участников. Мы все проверили!`
    : "Напиши им: возможно, они смогут перенести дела и подстроиться"

  return (
    <div className={classNameParticipants} onClick={setIsOpenModalInvite}>
      <div className="d_ce_title">{title}</div>
      <div>
        {!active && (
          <div className="d_ce_participants">
            <div className="d_ce_participants_title">Но без {number} участника:</div>
            <div className="d_ce_scroll">
              {users.map(({ name }) => (
                <div className="d_ce_participant" key={name}>
                  <div className="d_ce_participant_avatar">{name[0]}</div>
                  <div className="d_ce_participant_title">{name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="d_ce_proposal">{messageProposal}</div>
      </div>
    </div>
  )
}
