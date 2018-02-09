import React, { Component } from 'react';
import { Hand } from './components';

//testing Hand and Card components
class WithHand extends Component {
  render(){
    const cards = [ [3,"diams"],[7,"hearts"],[6,"clubs"],[10,"spades"] ]; // test
    return (
      <Hand cards={cards} />
    );
  }
}

export default WithHand;
