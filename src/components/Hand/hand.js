import React from 'react';
import { Card } from './Card';
import './Card/styles/cards.css';

const Hand = ({ cards, player, onClick }) =>(
    <div className="playingCards simpleCards">
    <ul className="table">
      {cards.map(([rank,suit,selected]) => (
        <li key={rank+suit}>
          <Card rank={rank} suit={suit} selected={selected}  onClick={() => onClick(rank,suit)}/>
        </li>
      ))}
    </ul>
  </div>
);

export { Hand };
