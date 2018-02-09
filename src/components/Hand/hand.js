import React from 'react';
import { Card } from './Card';
import './Card/styles/cards.css';

const Hand = ({ cards }) => (
  <div className="playingCards simpleCards">
    <ul className="table">
      {cards.map(([rank,suit]) => (
        <li key={rank+suit}>
          <Card rank={rank} suit={suit} />
        </li>
      ))}
    </ul>
  </div>
);

export { Hand };
