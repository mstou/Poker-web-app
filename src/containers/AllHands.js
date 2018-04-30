import React from 'react';
import { Hand } from '../components';
import { connect } from 'react-redux';

const AllHands = ({Cards,SelectedCards,onCardClick}) => (
  <div>
    <div>
        <p> Player 1: </p>
        <Hand cards={Cards[0].orderedCards} selectedCards={SelectedCards[0]} onClick={ (rank,suit) => onCardClick(rank,suit,0)}/>
    </div>
    <div>
        <p> Player 2: </p>
        <Hand cards={Cards[1].orderedCards} selectedCards={SelectedCards[1]} onClick={(rank,suit) => onCardClick(rank,suit,1)}/>
   </div>
  </div>
);

const mapStateToProps = state => ({
  Cards: state.Cards,
  SelectedCards: state.SelectedCards
});

const mapDispatchToProps = dispatch => {
  return {
    onCardClick: (rank,suit,player) => dispatch({
      type: 'SELECT_CARD',
      payload: {
        rank,
        suit,
        player
      }
    })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllHands);
