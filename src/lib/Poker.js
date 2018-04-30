import _ from 'lodash';
import {deepFreeze, maxInARow } from '../commons';


//
// Playing Cards class definition and implementation
//

const Ranks = Object.freeze([ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ]);
const Suits = Object.freeze([ 'hearts', 'clubs', 'diams', 'spades' ]);

const Cards = Object.entries(Ranks).reduce(
  (cards, [ weight, rank ]) =>
    cards.concat(Suits.map(suit => ({ rank, suit, weight }))),
    []).map(({rank,suit,weight}) => ({rank,suit,weight: String.fromCharCode(weight-'0'+65)}));
deepFreeze(Cards);

class PlayingCards {

  constructor(cards = null, from = 0, to = 0) {
    const cardsSource = cards instanceof Array ? cards : Cards;
    const cardsRange = cardsSource.slice(from, to || cardsSource.length);

    this.cards = cardsRange.sort(() => Math.random() - 0.5);

    this.orderedCards = [...this.cards].sort((a, b) => a.weight - b.weight);
    this.ranks = _.groupBy(this.orderedCards, 'rank');
    this.suits = _.groupBy(this.orderedCards, 'suit');
    this.rankTimes = _.groupBy(this.ranks, 'length');
    this.suitTimes = _.groupBy(this.suits, 'length');
    this.maxInARow = maxInARow(this.orderedCards
      .map(({ weight }) => weight));

    this.orderedWeights = _(this.ranks)
    .map((cardGroup) => ({ length: cardGroup.length, weight: cardGroup[0].weight }))
    .sortBy(({length, weight}) => `${length}${weight}`)
    .map('weight')
    .reverse()
    .value();

    deepFreeze(this);
  }

  getNCardsAndRest(n) {
    if(n===0){
      return {
        cards: { cards: [] },
        restCards: this
      }
    }

    return {
      cards: new PlayingCards(this.cards, 0, n),
      restCards: new PlayingCards(this.cards, n, this.cards.length),
    };
  }
  getOrderedWeights = () => this.orderedWeights;

  getOfSameRank(n) { return this.rankTimes[n] || []; }

  getOfSameSuit(n) { return this.suitTimes[n] || []; }

  hasAce() { return !!this.ranks['A']; }

  hasOfSameRank(n) { return this.getOfSameRank(n).length; }

  hasOfSameSuit(n) { return this.getOfSameSuit(n).length; }

  hasInARow(n) { return this.maxInARow >= n; }

  getWorstSingles() { return this.getOfSameRank(1).flatten().sortBy('weight'); }
}

//
// Poker Ratings
//

const PokerRating = {
  RoyalFlush: {
    is: (hand) => hand.hasInARow(5) && hand.hasOfSameSuit(5) && hand.hasAce(),
    prefix: 'J',
  },
  StraightFlush: {
    is: (hand) => hand.hasInARow(5) && hand.hasOfSameSuit(5),
    prefix: 'I',
  },
  FourOfAKind: {
    is: (hand) => hand.hasOfSameRank(4),
    prefix: 'H',
  },
  FullHouse: {
    is: (hand) => hand.hasOfSameRank(3) && hand.hasOfSameRank(2),
    prefix: 'G',
  },
  Flush: {
    is: (hand) => hand.hasOfSameSuit(5),
    prefix: 'F',
  },
  Straight: {
    is: (hand) => hand.hasInARow(5),
    prefix: 'E',
  },
  ThreeOfAKind: {
    is: (hand) => hand.hasOfSameRank(3),
    prefix: 'D',
  },
  TwoPair: {
    is: (hand) => hand.hasOfSameRank(2) === 2,
    prefix: 'C',
  },
  OnePair: {
    is: (hand) => hand.hasOfSameRank(2),
    prefix: 'B',
  },
  HighCard: {
    is: (hand) => hand.hasOfSameRank(1) === 5,
    prefix: 'A',
  },
};

deepFreeze(PokerRating);

const orderWeight = (weights, prefix) => weights.reduce(
  (prefix, weight) => `${prefix}${weight}`,
  prefix
);

const PokerHandRate = (cards) => {
  const [,{prefix}] = Object.entries(PokerRating).find(([rate,{is}]) => is(cards));
  const rating = orderWeight(cards.getOrderedWeights(), prefix);
  return rating;
};

export { Ranks, Suits, Cards, PlayingCards, PokerRating, PokerHandRate };
