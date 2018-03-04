import React, { Component } from 'react';
import { Hand } from './components';
import PokerGame from './lib';


class Game extends Component {
  constructor(props){
    super(props);
    this.game = new PokerGame();
  }

  formatCards(cards){
    return cards.map( ({rank, suit}) =>  [rank,suit] );
  }

  render(){

    const cardsOfPlayer1 = this.formatCards(this.game.handOfUser1.cards);
    const cardsOfPlayer2 = this.formatCards(this.game.handOfUser2.cards);

    this.game.calculateWinner();

    //console.log(this.game.Player1Rating);
    //console.log(this.game.Player2Rating);

   return (
     <div>
       <div>
        <div>
            <p> Player 1: </p>
            <Hand cards={cardsOfPlayer1} />
        </div>
        <div>
            <p> Player 2: </p>
            <Hand cards={cardsOfPlayer2} />
       </div>
       <p>{this.game.winner} is the Winner</p>
      </div>
    </div>
    );
  }
}

export default Game;
