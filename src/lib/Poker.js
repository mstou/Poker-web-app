import { deepFreeze, groupBy, sortBy, flatten, maxInARow } from '../commons';

//
// Playing Cards class definition and implementation
//

const Ranks = Object.freeze([ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ]);
const Suits = Object.freeze([ 'hearts', 'clubs', 'diams', 'spades' ]);

const Cards = Object.entries(Ranks).reduce(
  (cards, [ weight, rank ]) =>
    cards.concat(Suits.map(suit => ({ rank, suit, weight }))),
  []
);
deepFreeze(Cards);

class PlayingCards {

  constructor(cards = null, from = 0, to = 0) {
    const cardsSource = cards instanceof Array ? cards : Cards;
    const cardsRange = cardsSource.slice(from, to || cardsSource.length);

    this.cards = cardsRange.sort(() => Math.random() - 0.5);

    this.orderedCards = [...this.cards].sort((a, b) => a.weight - b.weight);
    this.ranks = this.orderedCards::groupBy('rank');
    this.suits = this.orderedCards::groupBy('suit');
    this.rankTimes = this.ranks::groupBy('length');
    this.suitTimes = this.suits::groupBy('length');
    this.maxInARow = this.orderedCards
      .map(({ weight }) => weight)
      ::maxInARow();

    deepFreeze(this);
  }

  getNCardsAndRest(n) {
    return {
      cards: new PlayingCards(this.cards, 0, n),
      restCards: new PlayingCards(this.cards, n, this.cards.length),
    };
  }

  getOfSameRank(n) { return this.rankTimes[n] || []; }

  getOfSameSuit(n) { return this.suitTimes[n] || []; }

  hasAce() { return !!this.ranks['A']; }

  hasOfSameRank(n) { return this.getOfSameRank(n).length; }

  hasOfSameSuit(n) { return this.getOfSameSuit(n).length; }

  hasInARow(n) { return this.maxInARow >= n; }

  getWorstSingles() { return this.getOfSameRank(1)::flatten()::sortBy('weight'); }
}

//
// Poker Ratings
//

const PokerRating = {
  RoyalFlush: (hand) => hand.hasInARow(5) && hand.hasOfSameSuit(5) && hand.hasAce(),
  StraightFlush: (hand) => hand.hasInARow(5) && hand.hasOfSameSuit(5),
  FourOfAKind: (hand) => hand.hasOfSameRank(4),
  FullHouse: (hand) => hand.hasOfSameRank(3) && hand.hasOfSameRank(2),
  Flush: (hand) => hand.hasOfSameSuit(5),
  Straight: (hand) => hand.hasInARow(5),
  ThreeOfAKind: (hand) => hand.hasOfSameRank(3),
  TwoPair: (hand) => hand.hasOfSameRank(2) >= 2,
  OnePair: (hand) => hand.hasOfSameRank(2),
  HighCard: (hand) => hand.hasOfSameRank(1) >= 5,
};

deepFreeze(PokerRating);

const PokerHandRate = (cards) => {
  const [rating] = Object.entries(PokerRating).find(([rate, is]) => is(cards));
  return rating;
};

//
// Tests
//

const [ H, C, D, S ] = Suits;
const c = (weight, suit) => ({ rank: Ranks[weight], suit, weight });

const hand = [
  [ c(12, H), c(8, H), c(12, C), c(8, C), c(7, S), c(12, D) ],
  [ c(12, H), c(12, D), c(12, C), c(8, C), c(12, S), c(6, D) ],
  [ c(12, H), c(8, H), c(11, H), c(10, H), c(9, H), c(9, C) ],
  [ c(12, H), c(8, H), c(12, C), c(6, C), c(7, S), c(7, D) ],
];

hand.forEach((cards) => console.log(PokerHandRate(new PlayingCards(cards))));
