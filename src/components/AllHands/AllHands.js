import React from 'react';
import { Hand } from './Hand';

const AllHands = ({Cards,SelectedCards,onCardClick}) => (
  <div className="pokerTable">

  <div className="player2cards">
     <Hand
        className="player2Cards"
        cards={Cards[1].orderedCards}
        selectedCards={SelectedCards[1]}
        onClick={(rank,suit) => onCardClick(rank,suit,1)}
     />
   </div>

   <div className="player1Cards">
     <Hand
        className="player1Cards"
        cards={Cards[0].orderedCards}
        selectedCards={SelectedCards[0]}
        onClick={ (rank,suit) => onCardClick(rank,suit,0)}
     />
   </div>

   {/*<img alt="" className="pokerTableImg" src="/styles/pokerTable.jpg" />*/}

  </div>
);

export default AllHands;
