import { PlayingCards, PokerHandRate } from './Poker';

const Game = () => {
    const CardGame = new PlayingCards();
    const { cards: user1Cards, restCards } = CardGame.getNCardsAndRest(5);
    const { cards: user2Cards, restCards: remainingCards } = restCards.getNCardsAndRest(5);
    return /*Object.freeze(*/{
      Cards: [user1Cards,user2Cards],
      restCards: remainingCards,
      winner: undefined,
    }//)
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
    newGame.Cards[player].cards[index].selected= !newGame.Cards[player].cards[index].selected ;
    return Object.freeze(newGame);
  }

export { Game, calculateWinner, selectCard };
