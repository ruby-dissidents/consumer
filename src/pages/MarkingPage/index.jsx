import React from "react"
import { Link } from "react-router-dom"

import { MarkingCard, StatisticsCard } from "../../components"
import { statistics } from "./_constants"
import "./_marking_page.css"

const MarkingPage = () => (
  <div className="d_container d_mp_container">
    <MarkingCard
      author="Катя Зырянова"
      title="«Марафон Гарри Поттера»"
      description="Катя Зырянова приглашает тебя на встречу «Марафон Гарри Поттера»"
      color="#FF6F42"
    >
      <Link to="/time-slots" className="d_map_marking_card_link" children="Отметиться" />
    </MarkingCard>
    <StatisticsCard statistics={statistics} />
  </div>
)

export default MarkingPage
