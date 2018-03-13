import { PlayingCards, PokerHandRate } from './Poker';

const Game = () => {
    const CardGame = new PlayingCards();
    const { cards: user1Cards, restCards } = CardGame.getNCardsAndRest(5);
    const { cards: user2Cards, restCards: remainingCards } = restCards.getNCardsAndRest(5);
    return Object.freeze({
      Cards: [user1Cards,user2Cards],
      restCards: remainingCards,
      winner: undefined,
      SelectedCards: [ user1Cards.cards.map(()=> false) , user2Cards.cards.map(()=> false) ],
    });
  }

  const calculateWinner = (game) => {

      const newGame = game;
      const Player1Rating = PokerHandRate(game.Cards[0]);
      const Player2Rating = PokerHandRate(game.Cards[1]);
      newGame.winner = (Player1Rating > Player2Rating) ? "Player 1" : "Player 2";
      return Object.freeze(newGame);

  }

  const selectCard = (game,index,player) => {
    const newGame = game;
    newGame.SelectedCards[player][index] = !newGame.SelectedCards[player][index] ;
    return Object.freeze(newGame);
  }

export { Game, calculateWinner, selectCard };
