import React from 'react';
import './styles/cards.css';

const Card = ({ rank, suit }) => (
  <div className={`card rank-${rank} ${suit}`}>
    <div className="rank">{rank}</div>
    <div className="suit" dangerouslySetInnerHTML={{__html:`&${suit};`}}/>
  </div>
);

export { Card };
