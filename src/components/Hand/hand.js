import React from 'react';
import { Card } from './Card';
import './Card/styles/cards.css';

const Hand = ({ cards, SelectedCards, onClick }) =>(
    <div className="playingCards simpleCards">
    <ul className="table">
      {cards.map(([rank,suit],index) => (
        <li key={rank+suit}>
          <Card rank={rank} suit={suit} selected={SelectedCards[index]}  onClick={() => onClick(rank,suit)}/>
        </li>
      ))}
    </ul>
  </div>
);

export { Hand };
