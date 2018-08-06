import React from 'react';
import { Card, CardBack } from './Card';
import './Card/styles/cards.css';

const formatCards = (cards) => {
  return cards.map( ({rank, suit}) =>  [rank,suit] );
}

const Hand = ({ cards, selectedCards, onClick }) => {
  const formatedCards = formatCards(cards);
  return (
    <div className="playingCards simpleCards">
    <ul className="table">
      {formatedCards.map(([rank,suit],index) => (
        <li key={rank+suit}>
          <Card
            rank={rank}
            suit={suit}
            selected={selectedCards[index]}
            onClick={() => onClick(rank,suit)}
          />
        </li>
      ))}
    </ul>
  </div>
  );
};

const OpponentHand = () => (
  <div className="playingCards simpleCards">
  <ul className="table">
    {[1,2,3,4,5].map( (index) => (
      <li key={index}>
        <CardBack />
      </li>
    ))}
  </ul>
</div>
);

export { Hand, OpponentHand };
