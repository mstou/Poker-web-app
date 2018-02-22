import { Ranks, Suits, Cards, PlayingCards, PokerRating, PokerHandRate } from './Poker';

const ratings = {
  RoyalFlush: 10,
  StraightFlush: 9,
  FourOfAKind: 8,
  FullHouse: 7,
  Flush: 6,
  Straight: 5,
  ThreeOfAKind: 4,
  TwoPair: 3,
  OnePair: 2,
  HighCard: 1,
};

class Poker {
  constructor(){
    this.CardGame = new PlayingCards();
    this.myCards = this.CardGame.getNCardsAndRest(5);
    this.handOfUser1 = this.myCards.cards;
    this.handOfUser2 = this.myCards.restCards.getNCardsAndRest(5).cards;
  }
  /*calculateWinner(){
      this.Player1Rating = PokerHandRate(this.handOfUser1);
      this.Player2Rating = PokerHandRate(this.handOfUser2);

      this.winner = (ratings[Player1Rating]>ratings[Player2Rating]) ? Player1 : Player2;

  } */  
}

export default Poker;
