import React from 'react';
import { Card } from './Card';
import './Card/styles/cards.css';

const formatCards = (cards) => {
  return cards.map( ({rank, suit}) =>  [rank,suit] );
}

const Hand = ({ cards, SelectedCards, onClick }) =>{
  const formatedCards = formatCards(cards);
  return (
    <div className="playingCards simpleCards">
    <ul className="table">
      {formatedCards.map(([rank,suit],index) => (
        <li key={rank+suit}>
          <Card rank={rank} suit={suit} selected={SelectedCards[index]}  onClick={() => onClick(rank,suit)}/>
        </li>
      ))}
    </ul>
  </div>
  );
};

export { Hand };
