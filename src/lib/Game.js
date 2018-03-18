import { PlayingCards, PokerHandRate } from './Poker';

const Game = () => {
    const CardGame = new PlayingCards();
    const { cards: user1Cards, restCards } = CardGame.getNCardsAndRest(5);
    const { cards: user2Cards, restCards: remainingCards } = restCards.getNCardsAndRest(5);
    return Object.freeze({
      Cards: [user1Cards,user2Cards],
      restCards: remainingCards,
      winner: undefined,
      SelectedCards: [ user1Cards.cards.map(() => false) , user2Cards.cards.map(()=> false) ],
    });
  }

  const calculateWinner = (game) => {

      const Player1Rating = PokerHandRate(game.Cards[0]);
      const Player2Rating = PokerHandRate(game.Cards[1]);
      return Object.freeze({
        ...game,
        winner : (Player1Rating > Player2Rating) ? "Player 1" : "Player 2",
      });

  }

  const changeSelectedCards = (game) => {
    const newCards = [
      game.Cards[0].cards.filter((card,index) => !game.SelectedCards[0][index]),
      game.Cards[1].cards.filter((card,index) => !game.SelectedCards[1][index])
    ];

    // if(newCards.length===5) {
    //   console.log("gotcha");
    //   return game;
    // }

    const {
      cards : cardsPlayer1,
      restCards : rest,
    } = game.restCards.getNCardsAndRest(5 - newCards[0].length);

    const {
      cards : cardsPlayer2,
      restCards,
    } = rest.getNCardsAndRest(5 - newCards[1].length);

    const Cards = [
      new PlayingCards([...newCards[0], ...cardsPlayer1.cards]),
      new PlayingCards([...newCards[1], ...cardsPlayer2.cards])
    ];

    return  Object.freeze({
      ...game,
      Cards,
      restCards,
      SelectedCards: [[...game.SelectedCards[0].fill(false)],[...game.SelectedCards[1].fill(false)]],
    });
  }


  const selectCard = (game,index,player) => {
    const newGame = {...game};
    newGame.SelectedCards[player][index] = !newGame.SelectedCards[player][index];
    return Object.freeze(newGame);
  }

  const automatedPlayer = (gameState) => {
    const playerHand = gameState.Cards[0];
    const rating = PokerHandRate(playerHand);
    let cardsToSelect = [];

    if(rating[0] >= 'E') return gameState;

    cardsToSelect = playerHand.rankTimes["1"]
      .map(([card]) => card)
      .filter((card) => !(card.weight.charCodeAt(0)-65 >= 7));


    const indexesOfCardsToSelect = cardsToSelect.map(({ rank, suit }) =>
    playerHand.cards.findIndex( ({rank: CardRank, suit: CardSuit}) =>
    (CardRank===rank && CardSuit===suit)));

    indexesOfCardsToSelect.forEach((index) => gameState = selectCard(gameState,index,0));
    const newState = {...gameState};
    return Object.freeze(newState);
  }

export { Game, calculateWinner, selectCard, changeSelectedCards, automatedPlayer };
