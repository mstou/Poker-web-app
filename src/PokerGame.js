import React, { Component } from 'react';
import { Hand } from './components';
import PokerGame from './lib';


class Game extends Component {
  constructor(props){
    super(props);
    this.state = PokerGame.Game();
  }

  selectCard(rank, suit, player){
    const selectedCardIndex = this.state.Cards[player].cards.findIndex( ({rank: CardRank, suit: CardSuit}) =>
    (CardRank===rank && CardSuit===suit));
    this.setState(PokerGame.selectCard(this.state,selectedCardIndex,player));
  }

  changeSelectedCards(){
    const game = PokerGame.changeSelectedCards(PokerGame.automatedPlayer(this.state));
    this.setState({
      ...game,
      ...PokerGame.calculateWinner(game)
    });
  }

  render(){

   return (
     <div>
       <div>
        <div>
            <p> Player 1: </p>
            <Hand cards={this.state.Cards[0].orderedCards} SelectedCards={this.state.SelectedCards[0]} onClick={ (rank,suit) => this.selectCard(rank,suit,0)}/>
        </div>
        <div>
            <p> Player 2: </p>
            <Hand cards={this.state.Cards[1].orderedCards} SelectedCards={this.state.SelectedCards[1]} onClick={(rank,suit) => this.selectCard(rank,suit,1)}/>
       </div>
       {(!this.state.winner) ? <button onClick={() => this.changeSelectedCards()}>Ready!</button> : undefined }
       <p>{(this.state.winner) ? this.state.winner+" is the Winner!" : undefined }</p>
       {(!this.state.winner) ? <button onClick={() => this.changeSelectedCards()}> Change Cards!</button> : undefined }
      </div>
    </div>
    );
  }
}

export default Game;
