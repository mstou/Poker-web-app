import React from 'react';
import ReactDOM  from 'react-dom';
import Poker from './components';
import WithGame from './withGame';

ReactDOM.render(
  <WithGame />,
  document.getElementById('root')
);
