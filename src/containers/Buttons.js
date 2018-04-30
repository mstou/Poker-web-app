import React from 'react';
import { connect } from 'react-redux';

const Buttons = ({winner,Ready,ChangeCards}) => (
  <div>
    {(!winner) ? <button onClick={Ready}>Ready!</button> : undefined }
    <p>{(winner) ? winner + " is the Winner!" : undefined }</p>
    {(!winner) ? <button onClick={ChangeCards}> Change Cards!</button> : undefined }
  </div>
);

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
