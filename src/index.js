import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AllHands, Buttons } from './containers';

const PokerApp = () => (
  <div>
    <AllHands />
    <Buttons />
  </div>
);

render(
  <Provider store={store}>
    <PokerApp />
  </Provider>,
  document.getElementById('root')
);
