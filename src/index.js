import React from 'react';
import ReactDOM  from 'react-dom';
import Poker from './components';
import WithHand from './withHand';

ReactDOM.render(
  <WithHand />,
  document.getElementById('root')
);
