import { PlayingCards, PokerHandRate } from './Poker';

const Game = () => {
    const CardGame = new PlayingCards();
    const { cards: user1Cards, restCards } = CardGame.getNCardsAndRest(5);
    const { cards: user2Cards, restCards: remainingCards } = restCards.getNCardsAndRest(5);
    return {
      Cards: [user1Cards,user2Cards],
      restCards: remainingCards,
      usedCards: undefined,
      winner: undefined,
      SelectedCards: [ user1Cards.cards.map(() => false) , user2Cards.cards.map(()=> false) ],
    };
  }

  const calculateWinner = (game) => {

      const newGame = game;
      const Player1Rating = PokerHandRate(game.Cards[0]);
      const Player2Rating = PokerHandRate(game.Cards[1]);
      newGame.winner = (Player1Rating > Player2Rating) ? "Player 1" : "Player 2";
      return newGame;

  }

  const changeSelectedCards = (game,player) => {
    const newGame = game;
    const newCards = game.Cards[player].cards.filter((card,index) => !game.SelectedCards[player][index]);
    if(newCards.length===5) {
      return game;
    }

    const {cards: cardsToAdd , restCards } = game.restCards.getNCardsAndRest(5 - newCards.length);

    newGame.Cards[player] = new PlayingCards(newCards.concat(cardsToAdd.cards));
    newGame.restCards = restCards;
    newGame.SelectedCards[player] = game.SelectedCards[player].map(()=>false);
    return newGame;
  }


  const selectCard = (game,index,player) => {
    const newGame = game;
    newGame.SelectedCards[player][index] = !newGame.SelectedCards[player][index] ;
    return newGame;
  }

  const automatedPlayer = (gameState) => {
    const playerHand = gameState.Cards[0];
    const rating = PokerHandRate(playerHand);
    let cardsToSelect = [];

    if(rating[0] >= 'E') return gameState;

    else{
        cardsToSelect = playerHand.rankTimes["1"].map(([card]) => card).filter(
          (card) => !(card.weight.charCodeAt(0)-65 >= 7));
    }

    const indexesOfCardsToSelect = cardsToSelect.map(({ rank, suit }) =>
    playerHand.cards.findIndex( ({rank: CardRank, suit: CardSuit}) =>
    (CardRank===rank && CardSuit===suit)));

    indexesOfCardsToSelect.forEach((index) => gameState = selectCard(gameState,index,0));
    const newState = gameState;
    return newState;
  }

export { Game, calculateWinner, selectCard, changeSelectedCards, automatedPlayer };
