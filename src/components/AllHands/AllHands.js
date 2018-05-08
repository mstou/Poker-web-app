import React from 'react';
import { Hand } from './Hand';

const AllHands = ({Cards,SelectedCards,onCardClick}) => (
  <div>
    <div>
        <p> Player 1: </p>
        <Hand cards={Cards[0].orderedCards} selectedCards={SelectedCards[0]} onClick={ (rank,suit) => onCardClick(rank,suit,0)}/>
    </div>
    <div>
        <p> Player 2: </p>
        <Hand cards={Cards[1].orderedCards} selectedCards={SelectedCards[1]} onClick={(rank,suit) => onCardClick(rank,suit,1)}/>
   </div>
  </div>
);

export default AllHands;
