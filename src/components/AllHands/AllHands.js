import React from 'react';
import { Hand, OpponentHand } from './Hand';

const AllHands = ({Cards, SelectedCards, onCardClick, winner}) => (
  <div className="pokerTable">

   <div className="player2Cards">
     {(winner===undefined) ?
       <OpponentHand /> :
       (<div className="player2cards">
          <Hand
             className="player2Cards"
             cards={Cards[1].orderedCards}
             selectedCards={SelectedCards[1]}
          />
        </div>
      )}
   </div>

   <div className="player1Cards">
     <Hand
        className="player1Cards"
        cards={Cards[0].orderedCards}
        selectedCards={SelectedCards[0]}
        onClick={ (rank,suit) => onCardClick(rank,suit,0)}
     />
   </div>

  </div>
);

export default AllHands;
