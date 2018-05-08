import React from 'react';
import { connect } from 'react-redux';
import { Buttons } from '../components';

const mapStateToProps = state => {
  return {
    winner: state.winner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Ready: () => dispatch({ type: 'CALCULATE_WINNER' }),
    ChangeCards: () => dispatch({ type: 'CHANGE_CARDS' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
