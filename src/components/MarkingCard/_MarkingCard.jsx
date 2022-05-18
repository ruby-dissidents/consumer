import React from "react";

import "./_marking_card.styles.css"

export const MarkingCard = ({author, title, description, color, children}) => (
  <div className="d_map_marking_card" style={{backgroundColor: color}}>
    <div className="d_map_marking_card_author">{author}</div>
    <div className="d_map_marking_card_title">{title}</div>
    <div className="d_map_marking_card_description">{description}</div>
    {children}
  </div>
)
