import { connect } from 'react-redux';
import { AllHands } from '../components';

const mapStateToProps = state => ({
  Cards: state.Cards,
  SelectedCards: state.SelectedCards,
  winner: state.winner
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
