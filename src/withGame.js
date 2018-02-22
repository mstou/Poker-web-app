import React, { Component } from 'react';
import { Hand } from './components';
import Poker from './lib';


class WithGame extends Component {
  constructor(props){
    super(props);
    this.game = new Poker();
  }

  formatCards(cards){
    return cards.map( ({rank,suit,weight}) =>  [rank,suit] );
  }

  render(){
    const cards = [ [3,"diams"],["A","hearts"],[6,"clubs"],[3,"spades"] ]; // test

    const CardsOfPlayer1 = this.formatCards(this.game.handOfUser1.cards);
    const CardsOfPlayer2 = this.formatCards(this.game.handOfUser2.cards);

   return (
     <div>
       <div>
        <div>
            <p> Player 1: </p>
            <Hand cards={CardsOfPlayer1} />
        </div>
        <div>
            <p> Player 2: </p>
            <Hand cards={CardsOfPlayer2} />
       </div>
      </div>
    </div>
    );
  }
}

export default WithGame;
