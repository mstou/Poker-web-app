import React, { Component } from 'react';
import { Hand } from './components';
import PokerGame from './lib';


class Game extends Component {
  constructor(props){
    super(props);
    this.state = PokerGame.Game();
  }

  formatCards(cards){
    return cards.map( ({rank, suit}) =>  [rank,suit] );
  }

  selectCard(rank, suit, player){
    const selectedCardIndex = this.state.Cards[player].cards.findIndex( ({rank: CardRank, suit: CardSuit}) =>
    (CardRank===rank && CardSuit===suit));
    this.setState(PokerGame.selectCard(this.state,selectedCardIndex,player));
  }

  changeSelectedCards(){
    this.setState(PokerGame.changeSelectedCards(this.state,0));
    this.setState(PokerGame.changeSelectedCards(this.state,1));
  }
  calculateWinner(){
    this.setState(PokerGame.calculateWinner(this.state));
  }

  render(){

    const cardsOfPlayer1 = this.formatCards(this.state.Cards[0].cards);
    const cardsOfPlayer2 = this.formatCards(this.state.Cards[1].cards);


   return (
     <div>
       <div>
        <div>
            <p> Player 1: </p>
            <Hand cards={cardsOfPlayer1} SelectedCards={this.state.SelectedCards[0]} onClick={ (rank,suit) => this.selectCard(rank,suit,0)}/>
        </div>
        <div>
            <p> Player 2: </p>
            <Hand cards={cardsOfPlayer2} SelectedCards={this.state.SelectedCards[1]} onClick={(rank,suit) => this.selectCard(rank,suit,1)}/>
       </div>
       <button onClick={() => this.calculateWinner()}>Calculate Winner</button>
       <p>{(this.state.winner) ? this.state.winner+" is the Winner!" : undefined }</p>
       <button onClick={() => this.changeSelectedCards()}> Change Cards! </button>
      </div>
    </div>
    );
  }
}

export default Game;
