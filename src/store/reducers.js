import PokerGame from '../lib';

const initialState = PokerGame.Game();

const PokerReducer = (state = initialState, action={} ) => {
  switch(action.type){
    case 'SELECT_CARD':
      const selectedCardIndex = state.Cards[action.payload.player].cards.findIndex( ({rank: CardRank, suit: CardSuit}) =>
      (CardRank===action.payload.rank && CardSuit===action.payload.suit));
      return PokerGame.selectCard(state,selectedCardIndex,action.payload.player);

    case 'CHANGE_CARDS':
      const game = PokerGame.changeSelectedCards(PokerGame.automatedPlayer(state));
      return Object.freeze({
        ...game,
        ...PokerGame.calculateWinner(game)
      });

    case 'CALCULATE_WINNER':
      const nextGame = PokerGame.changeSelectedCards(PokerGame.automatedPlayer(state));
      return Object.freeze({
        ...nextGame,
        ...PokerGame.calculateWinner(nextGame)
      });

    default:
      return state;
  }
}


export { PokerReducer };
