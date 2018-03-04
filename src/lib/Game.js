import { PlayingCards, PokerHandRate } from './Poker';

class Game {
  constructor(){
    this.CardGame = new PlayingCards();
    const { cards: user1Cards, restCards } = this.CardGame.getNCardsAndRest(5);
    this.handOfUser1 = user1Cards;
    const { cards: user2Cards, restCards: remainingCards } = restCards.getNCardsAndRest(5);
    this.handOfUser2 = user2Cards;
    this.remainingCards = remainingCards;
  }
  calculateWinner(){
      this.Player1Rating = PokerHandRate(this.handOfUser1);
      this.Player2Rating = PokerHandRate(this.handOfUser2);
      this.winner = (this.Player1Rating > this.Player2Rating) ? "Player 1" : "Player 2";

  }
}

export default Game;
